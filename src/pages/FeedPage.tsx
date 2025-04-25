// src/pages/FeedPage.tsx
import React, { useEffect, useState } from 'react';

interface ActivateResponse {
  ok: boolean;
  stars?: number;
  v_powder?: number;
  error?: string;
}

export function FeedPage() {
  const tg = (window as any).Telegram.WebApp;
  const [status, setStatus] = useState<'idle'|'loading'|'done'|'error'>('idle');
  const [balance, setBalance] = useState<{ stars: number; v_powder: number } | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    tg.expand();
    tg.MainButton
      .setText('Activate Invite')
      .onClick(onActivate)
      .show();
  }, []);

  async function onActivate() {
    setStatus('loading');
    try {
      const inviteCode = tg.initDataUnsafe?.startParam;
      const telegramId = tg.initDataUnsafe?.user?.id;
      if (!inviteCode || !telegramId) throw new Error('No startParam or user ID');

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/invite/activate`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ inviteCode, telegramId })
      }).then(r=>r.json()) as ActivateResponse;

      if (!res.ok) throw new Error(res.error || 'Activation failed');
      setBalance({ stars: res.stars!, v_powder: res.v_powder! });
      setStatus('done');
      tg.sendData(JSON.stringify({ action:'invite_activated', ...res }));
    } catch (e: any) {
      setError(e.message);
      setStatus('error');
    }
  }

  return (
    <div className="h-full bg-black text-white p-4">
      {status === 'idle' && <p>Нажмите кнопку ниже, чтобы активировать приглашение.</p>}
      {status === 'loading' && <p>Активируем…</p>}
      {status === 'done' && balance && (
        <div>
          <h2>Успешно!</h2>
          <p>⭐ Звёзды: {balance.stars}</p>
          <p>V-пыль: {balance.v_powder}</p>
        </div>
      )}
      {status === 'error' && <p className="text-red-500">Ошибка: {error}</p>}
    </div>
  );
}