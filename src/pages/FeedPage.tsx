// File: src/pages/FeedPage.tsx
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

// Fetcher для SWR
const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Order {
  date: string;
  name: string;
  v_bonus: number;
  star_bonus: number;
}
interface Balance {
  stars: number;
  v_powder: number;
}

export function FeedPage() {
  // Telegram WebApp init
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.expand?.();
      setUserId(tg.initDataUnsafe?.user?.id?.toString() || null);
    }
  }, []);

  // Данные
  const { data: balance } = useSWR<Balance>(
    userId ? `/api/user/${userId}/balance` : null,
    fetcher
  );
  const { data: orders } = useSWR<Order[]>(
    userId ? `/api/user/${userId}/orders?limit=3` : null,
    fetcher
  );

  return (
    <div className="h-screen w-screen bg-black text-white font-anonymous-pro flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black bg-opacity-60 backdrop-blur-sm z-10">
        <button onClick={() => window.location.href = '/profile'}>
          <img
            src="/avatar.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </button>
        <div className="flex items-center space-x-6">
          <span className="text-2xl">⭐ {balance?.stars ?? 0}</span>
          <span className="text-2xl">V {balance?.v_powder ?? 0}</span>
          <button
            onClick={() => window.location.href = '/cart'}
            className="bg-gray-800 bg-opacity-70 text-sm px-4 py-2 rounded-full"
          >
            Корзина ({orders?.length ?? 0})
          </button>
        </div>
      </header>

      {/* Orders list */}
      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-24 space-y-4">
        {orders?.map((o, idx) => (
          <div
            key={idx}
            className="bg-white text-black rounded-2xl p-4 flex justify-between items-center"
          >
            <div>
              <div className="text-sm opacity-70">
                {new Date(o.date).toLocaleDateString()}
              </div>
              <div className="font-mono underline text-lg mt-1">{o.name}</div>
            </div>
            <div className="text-right">
              <div className="text-xl">V {o.v_bonus}</div>
              <div className="text-xl mt-1">⭐ {o.star_bonus}</div>
            </div>
          </div>
        ))}
      </main>

      {/* Tab bar */}
      <nav className="absolute bottom-0 inset-x-0 flex px-4 py-3 space-x-2 z-10">
        <button
          className="flex-1 bg-white bg-opacity-90 text-black py-3 rounded-full"
          onClick={() => window.location.href = '/catalog'}
        >
          Каталог
        </button>
        <button
          className="flex-1 text-white text-2xl text-center"
        >
          V
        </button>
        <button
          className="flex-1 bg-red-600 text-white py-3 rounded-full text-center"
          onClick={() => window.location.href = '/help'}
        >
          Помощь
        </button>
      </nav>
    </div>
  );
}