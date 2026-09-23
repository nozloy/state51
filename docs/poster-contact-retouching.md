# Удаление контактов с плакатов

23 сентября 2026 года адреса и телефоны удалены с 12 плакатов услуг и акций.
Использован встроенный инструмент imagegen, режим precise-object-edit.
Итоговые файлы заменены в `public/brand51/client/` с прежними именами и размерами.
На `business-framed.webp` контактов не было: файл оставлен побайтно неизменным.

## Сохранение исходных изображений

Из каждого результата imagegen перенесены только небольшие области с контактами.
Остальные пиксели взяты непосредственно из исходного WebP. У областей замены
использовано сглаживание границы внутрь на 5 px. Адрес на чеке ограничен наклонной
маской, не затрагивающей пунктир, край чека, дату, сумму и текст благодарности.

Финальные WebP сохранены в lossless-режиме, чтобы повторное сжатие не изменяло
пиксели остальной картинки. После кодирования выполнено сравнение RGB каждого
файла с исходником: вне областей контактов изменений нет. Размеры всех файлов
сохранены. Общий объём 13 плакатов теперь составляет 17 393 398 байт (16,59 МиБ).

| Файл | Удалённые элементы | Изменённых пикселей вне областей контактов |
| --- | --- | --- |
| [haircut-framed.webp](../public/brand51/client/haircut-framed.webp) | Контактные строки внизу плаката | 0 |
| [comfort-framed.webp](../public/brand51/client/comfort-framed.webp) | Контактные строки внизу плаката | 0 |
| [kids.webp](../public/brand51/client/kids.webp) | Контактные строки внизу плаката | 0 |
| [shave-framed.webp](../public/brand51/client/shave-framed.webp) | Контактные строки внизу плаката | 0 |
| [wax-framed.webp](../public/brand51/client/wax-framed.webp) | Контактные строки внизу плаката | 0 |
| [first-visit.webp](../public/brand51/client/first-visit.webp) | Контактные строки внизу плаката | 0 |
| [return-28-days.webp](../public/brand51/client/return-28-days.webp) | Контактные строки внизу плаката | 0 |
| [sons.webp](../public/brand51/client/sons.webp) | Контактные строки внизу плаката | 0 |
| [friends.webp](../public/brand51/client/friends.webp) | Контактные строки внизу плаката | 0 |
| [father-son.webp](../public/brand51/client/father-son.webp) | Контактные строки внизу плаката | 0 |
| [grandfather-grandson.webp](../public/brand51/client/grandfather-grandson.webp) | Контактные строки внизу плаката | 0 |
| [other-barbershop.webp](../public/brand51/client/other-barbershop.webp) | Подвал и адрес на нарисованном чеке | 0 |

В контактных строках также удалены относящиеся к ним значки телефона и адреса
и префикс «Запись:». Надписи «EST. 2022», кнопки «ЗАПИСАТЬСЯ», цены, скидки,
условия акций, иллюстрации и декоративные линии сохранены.

## Красные рамки

Доработки из [poster-framing.md](poster-framing.md) сохранены.
Верхняя красная линия на пяти рекламных плакатах по-прежнему добавляется компонентом
`TopFrame` из `modules/offers/ui/poster-image.tsx` по параметрам
`modules/offers/poster-frames.ts`. Эти файлы и параметры не менялись.
Поэтому отдельный исходный WebP и промежуточный результат imagegen не показывают
верхнюю линию, тогда как на странице видна полная замкнутая рамка.

После замены проверена локальная production-страница: все 13 изображений загрузились,
все пять верхних рамок присутствуют, горизонтального переполнения и ошибок JavaScript нет.
Плакаты «Друг + друг», «Отец + сын» и «Дед + внук» отдельно сверены с референсом заказчика.

## Промпты встроенного imagegen

Каждый перечисленный файл передавался отдельным вызовом как единственный edit target.
Ниже приведены точные промпты; совпадающие запросы сгруппированы по файлам.

### haircut-framed.webp, comfort-framed.webp, kids.webp

> Use case: precise-object-edit. Asset type: existing vintage barbershop service poster, precise contact-text removal. Input image 1 is the edit target. Remove ONLY the single black address line "Царёво Village, Тукая 14" near the bottom. Restore the warm aged paper texture underneath seamlessly, matching the immediately surrounding tone, stains and grain. Keep "EST. 2022" below it EXACTLY unchanged and in its original position. Preserve ALL other pixels as closely as possible: faces, body, hands, illustration, Russian and English text, price, red ribbons, yellow starburst, composition, framing, dimensions and original color balance. Do not crop, move, scale, restyle, relayout, reword or add anything. Do not remove EST. 2022. The only desired visible difference is the missing address line. Return the entire edited poster with the same aspect ratio.

### shave-framed.webp, wax-framed.webp

> Use case: precise-object-edit. Asset type: existing vintage barbershop poster, precise contact-text removal. Input image 1 is the edit target. Remove ONLY the single black address line "Царёво Village, Тукая 14" near the bottom. Keep "EST. 2022" below it EXACTLY unchanged and in its original position. Restore the aged beige paper underneath seamlessly, matching the immediately surrounding tone, texture, stains and grain. Preserve ALL other content exactly: faces, hands, illustrations, Russian and English text, every price and discount, promotional conditions, red ribbons, borders, composition, framing, aspect ratio and color balance. Do not crop, move, scale, restyle, relayout, reword or add anything. Only the specified contact text should disappear. Return the entire edited poster with the same aspect ratio.

### first-visit.webp

> Use case: precise-object-edit. Asset type: existing vintage barbershop poster, precise contact-text removal. Input image 1 is the edit target. Remove ONLY the two small black contact lines below the red "ЗАПИСАТЬСЯ" brushstroke at the bottom right: "ЦАРЁВА VILLAGE, ТУКАЯ, 14" and "8 937 520 00 51". Preserve the red "ЗАПИСАТЬСЯ" brushstroke and its arrow exactly unchanged. Restore the aged beige paper underneath seamlessly, matching the immediately surrounding tone, texture, stains and grain. Preserve ALL other content exactly: faces, hands, illustrations, Russian and English text, every price and discount, promotional conditions, red ribbons, borders, composition, framing, aspect ratio and color balance. Do not crop, move, scale, restyle, relayout, reword or add anything. Only the specified contact text should disappear. Return the entire edited poster with the same aspect ratio.

### return-28-days.webp

> Use case: precise-object-edit. Asset type: existing vintage barbershop promotion poster, precise contact-text removal. Input image 1 is the edit target. Remove ONLY the small contact block at the BOTTOM RIGHT: "Царёва Village", "Тукая, 14", "Казань", "8 937 520 00 51". Keep the small horizontal black rule above this block unchanged. Preserve the red "ЗАПИСАТЬСЯ" banner next to it and the humorous text at bottom left unchanged. Restore the aged cream paper texture underneath seamlessly, matching the immediately surrounding colors, grain and weathering. Preserve EVERYTHING ELSE unchanged: people, faces, hands, entire illustration, brand name, all other Russian text, discount figures, conditions, decorative lines, red ribbons, framing, dimensions and color balance. No new text, no crop, no resizing, no redesign, no reflow or repositioning. The only visible difference should be disappearance of the specified contact details. Return the entire edited poster with the same aspect ratio.

### sons.webp, friends.webp

> Use case: precise-object-edit. Asset type: existing vintage barbershop promotion poster, precise contact-text removal. Input image 1 is the edit target. Remove ONLY the two contact rows underneath the thin dark horizontal rule near the BOTTOM: the phone icon plus the line "Запись: 8-937-520-00-51", and the map-pin icon plus the line "Царёво Village, Тукая 14". Leave the horizontal rule, outer red/dark borders, "При совместном визите" and any age condition EXACTLY unchanged. Leave the freed contact area as matching unprinted cream paper; do not close the gap or move the border. Restore the aged cream paper texture underneath seamlessly, matching the immediately surrounding colors, grain and weathering. Preserve EVERYTHING ELSE unchanged: people, faces, hands, entire illustration, brand name, all other Russian text, discount figures, conditions, decorative lines, red ribbons, framing, dimensions and color balance. No new text, no crop, no resizing, no redesign, no reflow or repositioning. The only visible difference should be disappearance of the specified contact details. Return the entire edited poster with the same aspect ratio.

### father-son.webp, grandfather-grandson.webp

> Use case: precise-object-edit. Asset type: existing vintage barbershop promotion poster, precise contact-text removal. Input image 1 is the edit target. Remove ONLY the two contact rows underneath the thin dark horizontal rule near the BOTTOM: the phone icon plus the entire line "Запись: 8-937-520-00-51", and the map-pin icon plus the line "Царёво Village, Тукая 14". Preserve the horizontal rule, outer red/dark borders, "При совместном визите" and any age condition EXACTLY unchanged. Restore matching aged cream paper underneath the removed text/icons seamlessly, matching the immediately surrounding tones, grain and weathering. Leave that area as blank paper without moving anything to fill the gap. Preserve EVERYTHING ELSE unchanged: all people, faces, hands, whole illustration, all other Russian words, logo, discount numbers, conditions, decorative lines and shapes, layout, dimensions, borders, palette and framing. No new text, no crop, no redesign, no reflow or repositioning. Return the entire edited poster with the exact original aspect ratio.

### other-barbershop.webp

> Use case: precise-object-edit. Asset type: existing vintage barbershop promotion poster, precise contact-text removal. Input image 1 is the edit target. There are TWO places to clean: (1) At the very bottom below the thin horizontal dark rule, remove the phone icon and entire "Запись: 8-937-520-00-51" line, plus the map-pin icon and "Царёво Village, Тукая 14" line. (2) On the small tilted illustrated RECEIPT at the right, remove ONLY its bottom map-pin icon and address "Царёво Village, Тукая 14". Preserve the receipt paper itself, its torn lower edge, dashed rule above the address, "Спасибо за визит!", scissors, receipt number, date, service and amount EXACTLY unchanged. Preserve the large red "В 51-м ШТАТЕ" banner and all framing. Restore matching aged cream paper underneath the removed text/icons seamlessly, matching the immediately surrounding tones, grain and weathering. Leave that area as blank paper without moving anything to fill the gap. Preserve EVERYTHING ELSE unchanged: all people, faces, hands, whole illustration, all other Russian words, logo, discount numbers, conditions, decorative lines and shapes, layout, dimensions, borders, palette and framing. No new text, no crop, no redesign, no reflow or repositioning. Return the entire edited poster with the exact original aspect ratio.

