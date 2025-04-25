// src/global.d.ts

// Расширяем глобальную область видимости для Telegram Web App API
declare global {
  /**
   * Необработанные данные инициализации (не проверяются подписи)
   */
  interface TelegramWebAppInitDataUnsafe {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
    };
    chat?: {
      id: number;
      type: string;
    };
    startParam?: string; // код старта из deep-link
  }

  /**
   * Параметры темы оформления из Telegram
   */
  interface TelegramWebAppThemeParams {
    bg_color: string;
    text_color: string;
    hint_color: string;
    link_color: string;
    button_color: string;
    button_text_color: string;
  }

  /**
   * Основной интерфейс Telegram Web App
   */
  interface TelegramWebApp {
    initData: string;                 // подписанные данные
    initDataUnsafe: TelegramWebAppInitDataUnsafe;
    themeParams: TelegramWebAppThemeParams;
    ready(): void;                    // уведомляет, что готово к использованию
    expand(): void;                   // расширяет WebApp на весь экран
    close(): void;                    // закрывает WebApp
    sendData(data: string): void;     // отправляет данные боту через web_app_data
    onEvent(event: string, handler: () => void): void;   // подписка на события
    offEvent(event: string, handler: () => void): void;  // отписка от событий
    enableClosingConfirmation(): void; // включает подтверждение при закрытии
    disableClosingConfirmation(): void;// отключает подтверждение при закрытии
  }

  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

export {};
