// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function bootstrap() {
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.expand();
    // Подхватим цвет фона из Telegram (по желанию)
    document.body.style.backgroundColor = tg.themeParams?.bg_color || '#000';
  }
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode><App /></React.StrictMode>
  );
}

if (document.readyState === 'complete') bootstrap();
else window.addEventListener('load', bootstrap);