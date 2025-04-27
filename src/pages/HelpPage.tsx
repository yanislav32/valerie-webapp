
export function HelpPage() {
  return (
    <div className="p-8">
      <h1>Помощь</h1>
      <p>Нажмите кнопку, чтобы перейти в наш Telegram-бот.</p>
      <button
        onClick={() => window.open('https://t.me/ValerieCoutureFleurBot', '_blank')}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Перейти в бот
      </button>
    </div>
  );
}