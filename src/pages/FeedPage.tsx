export function FeedPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <header className="flex items-center space-x-4 mb-6">
        <img
          src="/path/to/avatar.jpg"
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1 flex items-center space-x-4">
          <span className="text-2xl">⭐ 500</span>
          <span className="text-2xl">V 200</span>
        </div>
        <button className="bg-gray-700 px-4 py-2 rounded-full">
          Корзина (1)
        </button>
      </header>

      {/* Empty state */}
      <div className="flex-1 flex justify-center items-center">
        <p className="text-xl opacity-50">Здесь будет лента заказов</p>
      </div>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-black p-4 flex justify-between">
        <button className="bg-white text-black px-6 py-3 rounded-full">
          Каталог
        </button>
        <span className="text-2xl">V</span>
        <button className="bg-red-600 px-6 py-3 rounded-full text-white">
          Помощь
        </button>
      </nav>
    </div>
  )
}