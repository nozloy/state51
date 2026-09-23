# Баннер Telegram

Блок на главной обновлён по пользовательскому референсу. На десктопе
занимает половину секции рядом с «Пригласи друга». Обе карточки используют
общий `PaperPoster` с согласованной светлой бумажной фактурой.

Заголовок, описание, штамп «Новости / Акции / Контент» и красная кнопка
свёрстаны отдельными HTML-элементами. Кнопка открывает существующий канал
`https://t.me/barbershop_state51` в новой вкладке с `noopener noreferrer`.
На телефоне иллюстрация располагается под текстом, а кнопка занимает всю
ширину. В двухколоночной сетке при 768–1023 px кнопка вынесена в отдельную
строку, чтобы подпись читалась без обрезки.

Надписей «Штат 51 — больше, чем стрижки» и «Больше, чем стрижки» нет;
слоган также убран с газеты под рукой персонажа. На поднятой газете
сохранён заголовок «ШТАТ 51 НОВОСТИ».

Иллюстрация: `public/brand51/generated/telegram-illustration.webp`,
1254 × 1254 px, прозрачный фон, WebP quality 90 / alphaQuality 100 /
effort 6, 593 088 байт. Подготовлена встроенным ImageGen из референса;
CLI/API fallback не использовался.

## Проверка

Проверены ширины 360, 768, 1024 и 1280 px: иллюстрация загружается,
горизонтальной прокрутки и обрезки кнопки нет. На широком экране обе
карточки имеют ширину 540 px. Кнопка доступна с клавиатуры, фокус виден;
адрес, новая вкладка и `rel` проверены. В консоли браузера нет ошибок.
TypeScript, ESLint изменённых компонентов и production-сборка проходят.

## Промпт ImageGen

> Use case: background-extraction. Asset type: standalone transparent illustration for a compact website Telegram banner. Input image 1 is the edit target, an existing vintage barbershop Telegram poster. Extract ONLY the illustrated scene from its RIGHT half: the cheerful young newspaper seller in a flat cap, cream shirt and suspenders, holding a newspaper high in one hand and a stack under the other arm, with the vintage striped barber pole and blue/brown barbershop storefront behind him. Preserve the reference character's face, joyful pose, both hands, clothing, raised newspaper, storefront lettering, warm painterly mid-century advertising style, colors, worn printing and organic brush edges. Keep the raised newspaper headline exactly «ШТАТ 51 НОВОСТИ». IMPORTANT TEXT REMOVAL: remove every occurrence of «Больше, чем стрижки» / «Больше чем стрижки», including the slogan printed on the front newspaper in the stack under his arm; replace that slogan with unobtrusive ordinary newspaper column lines, no new legible headline. Completely remove the top masthead «ШТАТ 51 — БОЛЬШЕ, ЧЕМ СТРИЖКИ», the top rule and EST. 2022. Remove ALL left-side poster title, descriptive text, red stamp, floating crown, paper airplane, and the large bottom-right red Telegram button, including its lettering and outline. Reconstruct the small lower clothing/storefront portions revealed by removing the button. Keep the whole raised paper, boy's head and hands visible; preserve the original waist-up framing. Output a near-square illustration with real alpha transparency outside the illustrated storefront scene, irregular lightly worn painterly edges on all sides, especially left and bottom. No opaque rectangular paper background, no checkerboard, no shadow, no frame, no poster layout, no UI elements, no added slogans. One standalone illustration only.
