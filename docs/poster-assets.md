# Афиши и бумажная фактура

Афиши первоначально подготовлены в WebP с quality 90 / effort 6. После обработки
краёв 23 сентября пять изображений заменены версиями из imagegen. Затем с 12 афиш
точечно удалены адреса и телефоны; цены, условия и остальное изображение сохранены.
Обновлённые файлы записаны в WebP lossless, общий объём 13 афиш — 16,59 МиБ.
Исходники в Downloads не изменялись. [Проверка рамок](poster-framing.md),
[ретушь контактов, проверка неизменности и промпты](poster-contact-retouching.md).

Файлы находятся в `public/brand51/client/`. Ниже указаны исходные имена
без общего префикса `ChatGPT Image ` и расширения `.png`.

| WebP | Исходник |
| --- | --- |
| haircut-framed.webp | 10 сент. 2026 г., 20_38_58 |
| comfort-framed.webp | 11 сент. 2026 г., 00_14_17 |
| business-framed.webp | 11 сент. 2026 г., 00_13_27 |
| kids.webp | 11 сент. 2026 г., 00_08_37 |
| shave-framed.webp | 11 сент. 2026 г., 00_28_09 |
| wax-framed.webp | 10 сент. 2026 г., 20_37_47 |
| first-visit.webp | 11 сент. 2026 г., 00_39_20 |
| return-28-days.webp | 11 сент. 2026 г., 00_42_45 |
| sons.webp | 11 сент. 2026 г., 21_09_24 |
| friends.webp | 11 сент. 2026 г., 21_09_29 |
| father-son.webp | 11 сент. 2026 г., 21_09_34 |
| other-barbershop.webp | 11 сент. 2026 г., 21_09_39 |
| grandfather-grandson.webp | 11 сент. 2026 г., 21_36_32 |

Вариант «Сын + сын» с пальмами (19_54_43) исключён по выбору заказчика.
На исходной афише первого визита цена бизнес-стрижки — 2560 ₽.

## Фоновая текстура

`warm-paper-texture.webp` создана встроенным инструментом imagegen и конвертирована
в WebP с quality 85 / effort 6. Используется повторением с размером 768 × 768 CSS px.
Размер растра — 1254 × 1254 px, файл занимает 12 108 байт.
Тёплый бежевый тон и мягкие размытые потёртости подобраны по дополнительному
референсу заказчика `codex-clipboard-fba962f9-cfd7-480a-bccb-33d667d79eb0.jpg`.
Растр сгенерирован отдельно от афиш; он не содержит текст или элементы бренда.

Промпт генерации:

> Use case: style-transfer. Asset type: seamless repeating website background texture. Input image 1 is the user's exact color and texture reference. Create a square seamless tile of this same warm aged poster paper, closely matching its smooth softness and golden peach-beige color (average approximately #edcea7). Preserve the reference's soft, broad cloudy mottling, very faint diffuse rubbed areas and gently blurred crease-like shadows. The surface should feel like this softly photographed old poster paper: smooth and slightly out of focus, with extremely low contrast detail and almost no visible grain. Material only, filling the entire image. Make opposing edges match naturally for invisible seamless tiling. Remove the reference's dark bottom edge shading; keep illumination and color even at all edges. No border, vignette, dark corners, torn edges, text, lettering, logo, paint, objects, sharp fibers, pepper specks, pores, scratches, crackle pattern, or high-frequency grain. Do not turn it pale white or ivory. Match the supplied warm beige reference closely. Output a 1024 by 1024 square material scan.

## Содержание и компоненты

Цены хранятся в `modules/offers/services.ts`, акции — в `modules/offers/promotions.ts`.
`modules/offers/service.ts` форматирует суммы и рассчитывает прайс первого визита.
Кнопки записи используют общий адрес из `modules/booking/content.ts`.
Скидки показываются на сайте, автоматическое применение в YCLIENTS не добавлено.
Реферальная программа 600 ₽ и её API сохранены.

Dialog адаптирован из предпросмотра официального shadcn CLI под уже установленный
`@radix-ui/react-dialog` и локальный `cn`; новые зависимости не понадобились.

По уточнению от 23 сентября в карточках видны только афиша и кнопка записи.
Афиша открывает увеличение по нажатию; полоса «Рассмотреть» удалена.
Повторяющиеся названия, цены и описания в карточках и увеличении доступны только
скринридерам. Три дополнительные услуги, у которых нет отдельных афиш, остаются
в текстовом прайсе. Доступные заголовки Dialog и расчёт скидок сохранены.

## Проверка реализации

Проверено 22 сентября 2026 года на production standalone-сборке:

- ESLint, TypeScript (`--noEmit --incremental false`), `next build` — успешно.
- Главная: 360 / 390 / 768 / 1440 px, сетка 1 / 1 / 2 / 3 колонки,
  13 загруженных афиш с исходными пропорциями, без горизонтального скролла.
- Прайс первого визита: все 9 строк, включая 3200 → 2560 ₽; условия
  14 / 28 / 30 дней и ограничения совместных акций сверены.
- Диалог: Tab остаётся внутри, Escape закрывает окно, фокус возвращается
  на исходную афишу; длинная афиша прокручивается внутри окна.
- Все 14 основных ссылок записи ведут в существующий YCLIENTS.
- Регистрация, профиль и четыре информационные страницы:
  адаптация на 390 px и ширина 448 px на широком экране.
- Якоря, раскрытие информации с клавиатуры, контакты и кнопки cookies работают.
- `/api/health` возвращает 200; ошибок и предупреждений в консоли браузера нет.

Регистрация, отправка персональных данных и создание записей во внешнем
сервисе при проверке не выполнялись.

После уточнения фактуры по новому референсу повторно проверены production-сборка,
фон главной на 360 / 390 / 768 / 1440 px и регистрация с шириной 448 px.
Текстура загружается успешно, горизонтального скролла и ошибок JavaScript нет.
Предпросмотр во встроенном браузере обновлён.
