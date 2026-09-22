# Штат 51

Next.js с `output: 'standalone'`. GitHub Actions собирает и проверяет образ,
публикует его в GitHub Container Registry (GHCR). Coolify скачивает готовый образ
и запускает контейнер.

## Локальная разработка

Нужен Node.js 24 LTS.

```bash
cp .env.example .env
npm ci --include=dev
npm run dev
```

Заполните `YC_*` в `.env` для работы YCLIENTS. Адрес: `http://localhost:3000`.

## Сборка в GitHub Actions

Workflow [container.yml](.github/workflows/container.yml) запускается при push
в `main`, для pull request в `main` и вручную через **Actions → Build and publish
container → Run workflow**.

Docker-сборка выполняет `npm ci`, ESLint и `next build` с проверкой TypeScript.
Затем CI запускает production-контейнер, проверяет встроенный healthcheck, главную
страницу и статический файл. После успешных проверок образ из `main` публикуется:

- `ghcr.io/nozloy/state51:main` — текущая сборка ветки;
- `ghcr.io/nozloy/state51:sha-<полный SHA коммита>` — сборка конкретного коммита.

Pull request и ручной запуск из другой ветки только проверяют сборку, без
публикации и вызова Coolify. Сборки `main` выполняются последовательно.
Архитектура образа — `linux/amd64` для серверов x86_64.

Публикация использует встроенный `GITHUB_TOKEN` с `packages: write`, отдельный
токен не нужен. Разрешите GitHub Actions в настройках репозитория. Если пакет
`state51` уже существует в GHCR, дайте репозиторию доступ к пакету через
**Manage Actions access**.

В **Settings → Secrets and variables → Actions → Variables** задайте repository
variable `NEXT_PUBLIC_YANDEX_METRICA_ID`, если нужен счётчик. Пустое значение
отключает Метрику. Next.js встраивает `NEXT_PUBLIC_*` при сборке: после изменения
ID нужна новая сборка, а изменение переменной только в Coolify не обновит образ.
Секреты `YC_*` для сборки в GitHub не нужны.

## Деплой в Coolify

После первой успешной публикации создайте ресурс **Docker Image**:

| Настройка | Значение |
| --- | --- |
| Image Name | `ghcr.io/nozloy/state51` |
| Tag | `main` |
| Ports Exposes | `3000` |
| Domain | Домен приложения с HTTPS |
| Start command | Пусто: в образе задан `node server.js` |
| Healthcheck | Встроен в образ: `GET /api/health`, проверяется через Node.js |

В **Environment Variables** задайте runtime-переменные из `.env.example`:
`YC_PARTNER_TOKEN`, `YC_USER_TOKEN`, `YC_COMPANY_ID`, `YC_GROUP_ID`,
`YC_ADMIN_LOGIN`, `YC_ADMIN_PASSWORD`.

В образе заданы `NODE_ENV=production`, `NEXT_TELEMETRY_DISABLED=1`,
`HOSTNAME=0.0.0.0`, `PORT=3000`. Локальный `.env` исключён из Docker build context.

Если приложение сейчас собирается из Git в Coolify, перенесите домен и
runtime-переменные в ресурс Docker Image, отключите старый Git auto-deploy.
Домен должен обслуживаться одним ресурсом. Нажмите **Deploy** после настройки.

### Доступ к GHCR

Видимость пакета GHCR настраивается отдельно от репозитория. Для публичного
пакета авторизация на сервере не нужна.

Для приватного пакета создайте GitHub PAT **classic** с `read:packages` у аккаунта
с доступом к пакету. На сервере деплоя войдите под пользователем, от которого
Coolify запускает Docker, и выполните:

```bash
docker login ghcr.io --username nozloy
```

Введите PAT в запросе пароля. Повторите вход на каждом сервере деплоя.
Проверьте доступ: `docker pull ghcr.io/nozloy/state51:main`.

### Автодеплой после публикации

Без дополнительных секретов workflow только публикует образ; деплой запускается
кнопкой **Deploy** в Coolify.

Для автодеплоя включите API Access в настройках self-hosted Coolify и создайте
API token с правом **Deploy**. В GitHub, **Settings → Secrets and variables →
Actions → Secrets**, добавьте:

| Secret | Значение |
| --- | --- |
| `COOLIFY_WEBHOOK` | **Deploy Webhook (auth required)** из Configuration → Webhooks ресурса Docker Image |
| `COOLIFY_TOKEN` | API token Coolify с правом Deploy |

Webhook вызывается только после успешной публикации проверенного образа из
`main`. Он должен быть доступен из GitHub Actions. Успех шага означает принятие
запроса; завершение деплоя проверяется в Coolify.

### Откат

В поле **Tag** укажите `sha-<полный SHA нужного коммита>` и нажмите **Deploy**.
Для фиксации точного содержимого можно вместо тега указать digest в поле
**SHA256 Digest**. Для новых сборок ветки верните тег `main`.

## Docker Compose

`docker-compose.yml` тоже использует готовый образ (`image:`, `pull_policy: always`).
Coolify может запускать его как Docker Compose без сборки на сервере. Настройте
домен для сервиса `app` и внутреннего порта `3000`. Healthcheck наследуется из образа.

Ручной запуск с заполненным `.env`:

```bash
docker compose up -d
```

`APP_IMAGE` задаёт полный адрес с тегом или digest для выбора версии/отката.
Порт `3000` доступен внутри Docker-сети; внешний доступ в Coolify обеспечивает proxy.

## Локальная Docker-сборка

```bash
docker build --target runner \
  --build-arg NEXT_PUBLIC_YANDEX_METRICA_ID= \
  --tag state51:local .
docker run --rm --env-file .env --publish 3000:3000 state51:local
```

Для всех стадий задан глобальный `ARG NODE_IMAGE` со значением
`mirror.gcr.io/library/node:24-bookworm-slim`. Заменить его можно через
`--build-arg NODE_IMAGE=<registry>/<image>:<version>`.

Документация: [GHCR](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry),
[Docker Image в Coolify](https://coolify.io/docs/applications/deployments/docker-image),
[GitHub Actions и Coolify](https://coolify.io/docs/applications/sources/github/actions),
[переменные Next.js](https://nextjs.org/docs/app/guides/environment-variables).
