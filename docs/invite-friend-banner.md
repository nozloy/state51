# Баннер «Пригласи друга»

Баннер на главной странице свёрстан по предоставленному референсу.
Заголовок, описание, 600 ₽ и кнопка — отдельные HTML-элементы.
Кнопка ведёт на `/invite-friend-info`. На десктопе баннер занимает половину
ширины секции рядом с Telegram. От 768 px иллюстрация справа; на телефоне —
под текстом и суммой. Типографика масштабируется относительно ширины самой
карточки через единицы `cqw`. Фон блока — отдельная светлая текстура состаренной
бумаги по оригинальному референсу; иллюстрация имеет прозрачный фон.
Текстура повторяется плиткой 640 × 640 CSS px без растяжения и перекрывающего
градиента. Кнопка использует текстуру общего фона сайта.

Иллюстрация: `public/brand51/generated/invite-friend-illustration.webp`,
1254 × 1254 px, WebP quality 90 / alphaQuality 100, 582 334 байта.
Подготовлена встроенным ImageGen из пользовательского референса;
CLI/API fallback не использовался. Сгенерированная рисованная кнопка удалена
из иллюстрации: действие доступно через shadcn Button и Next Link.

## Текстура бумаги

Файл: `public/brand51/generated/invite-friend-paper.webp`, 1254 × 1254 px,
WebP quality 90 / effort 6, 224 850 байт. Подготовлен встроенным ImageGen
по повторно приложенному оригинальному референсу; CLI/API fallback не использовался.

### Промпт ImageGen: бумага

> Use case: precise-object-edit. Asset type: seamless opaque paper background texture for an existing website referral card. Input image 1 is the style and material reference: use ONLY the light aged cream paper INSIDE the printed vintage barbershop poster. Produce one square 1024x1024 tile of blank paper that closely matches that original inner paper surface: pale warm ivory and cream, delicate irregular tan fibers, fine print grain, very subtle worn speckles and faint little abrasion marks, soft low-contrast mottling. Keep the texture visible but calm enough behind small dark website text. Average color around warm light cream #f3e2be, with lighter ivory areas; avoid saturated orange, yellow, dark brown, gray or dirty high-contrast patches. Remove ALL people, barber scene, text, letters, numbers, price panel, button, symbols, crown, colored ink, rules, outlines and artwork. This is paper material only, covering the entire canvas to every straight edge. No frame, no rounded card shape, no cast shadow, no vignette, no lighting gradient, no white margins, no transparency. Even texture distribution across the whole tile and visually seamless opposite edges, so it can repeat both horizontally and vertically without visible seams. Preserve the reference's delicate antique printed-paper character rather than large cloudy color blobs. Output only the paper texture, not a mockup.

## Промпт ImageGen: иллюстрация

> Use case: background-extraction. Asset type: website referral banner illustration. Input image 1 is the edit target, a finished vintage Russian barbershop referral poster. Extract the illustrated scene on the RIGHT side as a standalone near-square transparent PNG: the smiling dark-haired bearded barber in a white shirt and navy apron, the seated curly-haired smiling young adult client with striped barber cape, their existing hands and comb, the faded blue/red barber-pole backdrop, and the small wall sign reading exactly «СТРИЖКИ СОБИРАЮТ ХОРОШИХ ЛЮДЕЙ». Preserve the source faces, pose, warm painterly 1950s advertising illustration style, colors, brushwork, and aged print texture. Remove the entire surrounding poster frame, outer shadows, all left-hand headline/copy/price badge/crown/English lettering, the top masthead, and especially the bottom-right «Узнать как» button with its outline and text. Reconstruct the small cape/apron area revealed by removing that button. Keep both heads, hands, and sign fully visible with no cropping. Natural irregular print/brush edges fading to REAL alpha transparency on all four sides, particularly left and bottom, so the illustration can sit on any cream paper background. No rectangular opaque paper backdrop, no checkerboard, no white canvas, no new labels, no CTA, no border. Output one standalone illustration, not a webpage or poster mockup.
