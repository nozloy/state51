# Обработка краёв афиш

23 сентября 2026 года проверены все 13 опубликованных афиш. У пяти исправлены
поля, углы или фрагменты соседних изображений встроенным инструментом imagegen
в режиме редактирования. Выбранные результаты сохранены в проект в WebP
с quality 90 / effort 6. Исходные клиентские PNG не изменялись.

Остальные восемь афиш и согласованная фоновая текстура сохранены побайтно;
это проверено сравнением SHA-256 до и после обработки.

| Афиша | Итоговый файл | Результат просмотра |
| --- | --- | --- |
| Мужская стрижка | [haircut-framed.webp](../public/brand51/client/haircut-framed.webp) | Дорисован белый верхний правый угол продолжением иллюстрации. |
| Комфорт | [comfort-framed.webp](../public/brand51/client/comfort-framed.webp) | Удалены разделители и соседние фрагменты по краям. |
| Бизнес | [business-framed.webp](../public/brand51/client/business-framed.webp) | Удалены лишние поля; заполнен верхний левый угол. |
| Детская стрижка | [kids.webp](../public/brand51/client/kids.webp) | Обработка не требуется; сохранена декоративная потёртая рамка. |
| Бритьё головы или лица | [shave-framed.webp](../public/brand51/client/shave-framed.webp) | Заполнены четыре чёрных наружных угла. |
| Воск | [wax-framed.webp](../public/brand51/client/wax-framed.webp) | Удалены поля и соседние фрагменты; заполнен нижний правый угол. |
| Первый визит | [first-visit.webp](../public/brand51/client/first-visit.webp) | Обработка не требуется; рамка и весь прайс помещаются в изображение. |
| Возвращение в течение 28 дней | [return-28-days.webp](../public/brand51/client/return-28-days.webp) | Обработка не требуется; все условия читаются целиком. |
| Сын + сын | [sons.webp](../public/brand51/client/sons.webp) | Обработка не требуется. |
| Друг + друг | [friends.webp](../public/brand51/client/friends.webp) | Обработка не требуется. |
| Отец + сын | [father-son.webp](../public/brand51/client/father-son.webp) | Обработка не требуется. |
| Дед + внук | [grandfather-grandson.webp](../public/brand51/client/grandfather-grandson.webp) | Обработка не требуется. |
| Из другого барбершопа | [other-barbershop.webp](../public/brand51/client/other-barbershop.webp) | Обработка не требуется; сохранён вертикальный формат. |

Файлы с суффиксом `-framed` подключены в `modules/offers/services.ts` с их
фактическими размерами. Новые URL исключают показ старой обрезки из кеша Next Image.
Изображения по-прежнему показываются целиком и в карточках, и в Dialog.

На обработанных афишах сверены цены 1800 / 2000 / 3200 / 1400 / 300 ₽,
названия услуг, адрес, английские слоганы, уход EGIA и условие корректировки
в течение 14 дней. Цены и условия в данных предложений не менялись.

## Проверка на сайте

- Все 13 афиш загружаются; размеры в данных совпадают с файлами WebP.
- На ширинах 360 / 390 / 768 / 1440 px сохраняются пропорции всех изображений,
  горизонтального скролла нет. Карточки осмотрены на телефоне и широком экране.
- Увеличенная исправленная афиша «Воска» загружается целиком; Escape закрывает
  Dialog и возвращает фокус на кнопку исходной карточки.
- ESLint, TypeScript и production-сборка с `NEXT_TELEMETRY_DISABLED=1` проходят.
  Режим standalone сохранён, ошибок в консоли браузера нет.

## Промпты встроенного imagegen

Каждый запрос использовал соответствующую исходную афишу как единственное
изображение для редактирования. Fallback CLI не использовался.

### wax-framed.webp

Итоговый размер: 1254 × 1254 px.

> Use case: precise-object-edit. Input image 1 is the edit target, an existing finished barbershop poster. Repair only its framing. Extract the main 'ВОСК 300₽' poster: remove the strip of another poster across the top, the narrow fragment on the far left, the white collage divider lines, and the large empty white padding under the main poster. The main poster is roughly bounded by x=40..1158 and y=52..1185 in the input image (1176 x 1338). Complete its rounded lower-right corner to a square corner with the same aged cream paper so the result is a clean full-bleed near-square rectangular poster. Preserve the exact existing central artwork, faces, hands, colors, worn paper, layout, typography and all wording. Do not redesign, relayout, restyle or add a frame. Text must stay exactly: 'Keep It Clean Fellow!', 'A CLEANER LOOK MAKES A BRIGHTER MAN!', 'ВОСК', '300₽', 'УДАЛЕНИЕ ВОЛОС ИЗ НОСА И МЕЖБРОВЬЯ', 'Царёво Village, Тукая 14', 'EST. 2022', 'Big Difference!'. No white outside margins, no rounded missing corners, no neighboring poster fragments. Only trim and complete the edges; keep every original text block entirely visible.

### business-framed.webp

Итоговый размер: 1254 × 1254 px.

> Use case: precise-object-edit. Input image 1 is the edit target: an existing finished 'МУЖСКАЯ СТРИЖКА БИЗНЕС' barbershop poster. Repair only its outer framing. Remove the white collage padding/divider at the left, right and bottom and the tiny fragments of neighboring posters on the right and below. Complete the missing rounded upper-left corner with matching aged cream paper, so the final poster is a clean full-bleed square rectangle with straight edges. Keep the existing composition, man, face, suit, barber interior, worn print texture, colors, and all typography unchanged. Do not redesign or rearrange it. Every original text block must remain fully visible and exactly worded: 'First Impressions Last!', 'A GREAT HAIRCUT OPENS DOORS!', 'МУЖСКАЯ СТРИЖКА БИЗНЕС', '3200₽', '+ АНТИВОЗРАСТНОЙ УХОД EGIA', 'EST. 2022', 'Look Sharp Feel Confident'. Preserve the price 3200 and the EGIA spelling. No new labels, no new border, no white outside margins, no rounded missing corner. Crop away only extraneous canvas and complete only the paper at the missing corner.

### comfort-framed.webp

Итоговый размер: 1224 × 1285 px.

> Use case: precise-object-edit. Input image 1 is the edit target, an existing finished barbershop poster for 'МУЖСКАЯ СТРИЖКА КОМФОРТ'. Make ONLY a framing repair: crop away the thin white top margin, the vertical white collage divider and the narrow fragment beyond it at the right edge, and the horizontal white collage divider plus the visible slice of another man's hair along the bottom. Keep the complete main poster above that bottom divider, with straight full-bleed rectangular edges and comfortable original paper margins around its text. Do not redesign, change the illustration, move any elements, add borders or alter the colors. Preserve every word exactly, particularly 'МУЖСКАЯ СТРИЖКА КОМФОРТ', '2000₽', 'УДАЛЕНИЕ ВОСКОМ (НОС, МЕЖБРОВЬ)', '+', 'БЕСПЛАТНАЯ КОРРЕКТИРОВКА СТРИЖКИ В ТЕЧЕНИЕ 14 ДНЕЙ', 'Царёво Village, Тукая 14', 'EST. 2022', 'Relax', "You're in Good Hands!", 'A GOOD HAIRCUT BETTER MOOD!', 'Take Time for Yourself.'. Preserve the exact price 2000 and the 14-day condition. All original text must remain fully visible. No white external padding, no collage separator lines, no neighboring poster fragments.

### haircut-framed.webp

Итоговый размер: 1233 × 1275 px.

> Use case: precise-object-edit. Input image 1 is the edit target: a complete vintage 'МУЖСКАЯ СТРИЖКА 1800₽' poster with a white missing rounded area at the TOP RIGHT corner. Inpaint ONLY that white upper-right corner by naturally extending the existing painted barbershop background and cream paper/blue wall textures up to a straight rectangular corner. Preserve the rest of this exact poster, every text block, the man's face and curly hair, hands, prices, layout, colors and worn paper texture. Do not crop, zoom, redesign, move or retype anything. Preserve exactly 'The Right Look Starts Here!', 'A SHARP HAIRCUT FOR A BRIGHTER DAY!', 'МУЖСКАЯ СТРИЖКА', '1800₽', 'Царёво Village, Тукая 14', 'EST. 2022', 'Same Man New Confidence!'. Keep the 1800 price unchanged. The result should have the same almost-square portrait proportions, be full bleed to all four rectangular corners, with no white external cutout, new borders, new objects, or additional words.

### shave-framed.webp

Итоговый размер: 1240 × 1269 px.

> Use case: precise-object-edit. Input image 1 is the edit target: the vintage 'БРИТЬЁ ГОЛОВЫ ИЛИ ЛИЦА 1400₽' poster. Repair ONLY the four outer rounded corners: replace the black external corner wedges with seamless continuations of the adjacent aged cream paper and the existing blue/ochre painted background. The result must be a complete full-bleed rectangular poster with four square corners, not a rounded card on a black canvas. Keep the entire central artwork, man's face, foam, razor, clothes, typography, positions, colors and distressed print exactly as they are. Do not crop, zoom, redesign, move or rewrite any existing content. Preserve the exact text 'A Clean Start!', 'SMOOTH SKIN CLEAR MIND!', 'БРИТЬЁ ГОЛОВЫ ИЛИ ЛИЦА', '1400₽', 'Царёво Village, Тукая 14', 'EST. 2022', 'Feel Better Every Day!'. Preserve price 1400. No black/white outside margins, no new border, no new objects or lettering. Same almost-square portrait proportions; only complete the missing paper corners.
