# Логотип сайта

- Файл: `public/logo.png`.
- Размер: 1523 × 1033 px, PNG с прозрачностью.
- Источник: предоставленный пользователем `codex-clipboard-50114286-9919-4aca-bcce-4b3fc9bb9c05.jpg`.
- Обработка: встроенный ImageGen, удаление внешнего белого фона и уточнение красного цвета по оригиналу. Белые элементы внутри рисунка и надписи сохранены.

## Финальный запрос ImageGen

```text
Use case: background-extraction, final color fidelity correction.
Image 1 is the already extracted transparent PNG edit target. Image 2 is the user's original logo and is the authoritative color and artwork reference.
Make one targeted correction to image 1: restore the red emblem's original muted flat red fill from image 2 (approximately #D52229), with completely uniform flat fill, NO bright red, NO gradients, NO lighting, NO texture. Preserve the original dark charcoal rim.
Retain image 1's real alpha transparency, all positions, exact black strokes, crown, wings, heartbeat lines, handwritten side lettering, dragon silhouette, and the text «ШТАТ 51». Preserve the white fills inside the dragon and the outlined block letters. Retain the original full landscape composition and aspect ratio. No crop, no redesign, no added detail, no shifted text, no added white border, no halo. Deliver a clean transparent PNG with actual alpha, not a checkerboard image. Background must remain transparent everywhere outside the logo artwork.
```

