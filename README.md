# Ritmo de Latina — сайт школи латиноамериканських танців

Односторінковий сайт-візитка для танцювальної студії в Харкові. Чистий HTML, CSS і JavaScript — без фреймворків, без збірки, без залежностей.

**Живий сайт:** https://ritmodelatina.com/

## Що всередині

| Файл | Призначення |
|---|---|
| `index.html` | Головна сторінка: hero, про проєкт, розклад, ціни, локація, контакти |
| `privacy.html` | Політика конфіденційності (Cookie, права за ЗУ «Про захист персональних даних» і GDPR) |
| `styles.css` | Дизайн-токени, світла й темна теми, адаптив |
| `script.js` | Перемикач UA/EN, теми, плавна прокрутка, cookie-згода, збирання телефонів |
| `favicon.svg` | Іконка сайту |
| `_headers` | Заголовки безпеки для Netlify / Cloudflare Pages |
| `vercel.json` | Те саме для Vercel |
| `.htaccess` | Те саме для Apache / cPanel |
| `SECURITY.md` | Памятка власнику: Cloudflare, 2FA, SSL, перевірки |

## Розклад і ціни

**Щосуботи**

- 16:00 — Бачата
- 17:00 — Сальса
- 18:00 — Сальса Нью-Йорк

**Ціни (на одну людину)**

- 300 грн — разове заняття (один напрямок)
- 1000 грн — 4 заняття одного напрямку
- 1600 грн — 8 занять обох напрямків

Усі абонементи діють 30 календарних днів.

## Контакти

- **Адреса:** вул. Мирослава Мисли, 48В, Харків, 61202 (Олексіївка, метро «Олексіївська», спортклуб RAM)
- **Телефони:** +38 (066) 494-83-28, +38 (050) 285-92-72
- **Instagram:** [@ritmodelatina](https://www.instagram.com/ritmodelatina/)

## Технічні рішення

- **Шрифти:** Unbounded (заголовки), Manrope (текст), Lora italic (акценти). Усі три мають кириличний набір, тому при перемиканні UA/EN типографіка не змінюється.
- **Темна тема:** `[data-theme="dark"]` на `<html>`, вибір зберігається в `localStorage`.
- **Мова:** українська за замовчуванням (`<html lang="uk">`), англійська — перемикачем у шапці.
- **Доступність:** skip-link, `aria-current` для активного розділу, фокус-стилі, `prefers-reduced-motion`.
- **Безпека:** сувора CSP без `unsafe-inline`, усі зовнішні посилання з `rel="noopener noreferrer nofollow"`, карта в `iframe` з `sandbox`.

## Локальний запуск

Достатньо відкрити `index.html` у браузері. Або підняти сервер, щоб працювали відносні шляхи й заголовки:

```bash
python -m http.server 8000
# або
npx serve .
```

## Публікація

### Варіант 1 — GitHub Pages (безкоштовно)

```bash
git init
git add .
git commit -m "Ritmo de Latina: сайт студії"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГІН/ritmo-de-latina.git
git push -u origin main
```

Далі в репозиторії: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
Через 1–2 хвилини сайт буде на `https://ВАШ_ЛОГІН.github.io/ritmo-de-latina/`.

> **Важливо:** GitHub Pages не підтримує власні HTTP-заголовки, тому `_headers` там не працює. CSP і HSTS запрацюють лише на Netlify, Cloudflare Pages, Vercel або Apache-хостингу.

### Варіант 2 — Cloudflare Pages або Netlify (з заголовками безпеки)

1. Запуште код у GitHub (команди вище).
2. Cloudflare Pages: **Create project → Connect to Git → виберіть репозиторій**.
   Build command: порожнє. Output directory: `/`.
3. Файл `_headers` застосується автоматично.

### Варіант 3 — власний домен

Після деплою додайте домен у налаштуваннях хостингу й увімкніть HTTPS. Не забудьте замінити `https://ritmodelatina.example/` у `canonical` та `og:url` на реальний домен.

## Ліцензія

Код — MIT. Контент, назва й дані студії належать Ritmo de Latina.
