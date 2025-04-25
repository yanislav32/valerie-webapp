cat > README.md << 'EOF'
# Valerie Couture WebApp

Клиентская часть Telegram WebApp для проекта **Valerie Couture**.  
Построена на **Vite**, **React** и **TypeScript**, стилизована с помощью **Tailwind CSS** и шрифта **Anonymous Pro**.

---

## Установка

\`\`\`bash
npm install
\`\`\`

## Разработка

\`\`\`bash
npm run dev
\`\`\`

Откройте [http://localhost:5173](http://localhost:5173) в браузере или запустите WebApp внутри мобильного Telegram.

## Сборка и предпросмотр

\`\`\`bash
npm run build
npm run preview
\`\`\`

Собранный результат будет в папке \`dist/\`.

---

## Структура проекта

\`\`\`
valerie-webapp/
├── public/             # Статичные файлы (шрифты, изображения)
│   └── fonts/
│       └── AnonymousPro-Regular.woff2
├── src/
│   ├── pages/          # Страницы приложения (FeedPage, CatalogPage и т.д.)
│   ├── components/     # Повторно используемые компоненты
│   ├── App.tsx         # Роутер с React-Router
│   ├── main.tsx        # Точка входа (ReactDOM.render)
│   └── index.css       # Tailwind, шрифты и глобальные стили
├── tailwind.config.js  # Конфиг Tailwind CSS (fontFamily и пути)
├── postcss.config.cjs  # Конфиг PostCSS
├── vite.config.ts      # Конфиг Vite
└── index.html          # Шаблон HTML с подключением Telegram WebApp SDK
\`\`\`

---

## Tailwind CSS и шрифт

1. В \`tailwind.config.js\`:
   \`\`\`js
   module.exports = {
     content: ['./index.html', './src/**/*.{ts,tsx}'],
     theme: {
       extend: {
         fontFamily: {
           'anonymous-pro': ['"Anonymous Pro"', 'monospace'],
         },
       },
     },
     plugins: [],
   }
   \`\`\`
2. В \`src/index.css\`:
   \`\`\`css
   @import "tailwindcss/base";
   @import "tailwindcss/components";
   @import "tailwindcss/utilities";

   @font-face {
     font-family: 'Anonymous Pro';
     font-style: normal;
     font-weight: 400;
     src: url('/fonts/AnonymousPro-Regular.woff2') format('woff2');
   }

   body {
     font-family: 'Anonymous Pro', monospace;
   }
   \`\`\`

---

## Переменные окружения

Создайте файл \`.env\` в корне (не коммитится!) и добавьте:

\`\`\`env
VITE_WEBAPP_URL=https://your-app-domain.com  # URL вашего WebApp (ngrok или Vercel)
\`\`\`

---

## Деплой

1. Запушьте репозиторий на GitHub (ветка \`main\`).
2. В Vercel нажмите **Import Project**, выберите \`valerie-webapp\`.
3. Убедитесь, что в настройках сборки указано:
   - Build Command: \`npm run build\`
   - Output Directory: \`dist\`
4. После деплоя ваш WebApp будет доступен по адресу вида \`https://<your-project>.vercel.app\`.

Этот же домен (без \`https://\`) укажите в BotFather через \`/setdomain\` и в \`.env\` бота как \`WEBAPP_URL\`.

---

*Автор: команда Valerie Couture*  
EOF