'use client';
import { useEffect, useState } from 'react';
import { events } from '../content/site';
import { eventDate, upcoming } from '../lib/content';
/** Versioned static data; hide past events without needing a running server. */
export function UpcomingEvents() {
  const [visible, setVisible] = useState<typeof events>([]);
  useEffect(() => {
    const refresh = () => setVisible(upcoming(events));
    refresh();
    const timer = window.setInterval(refresh, 30_000);
    document.addEventListener('visibilitychange', refresh);
    return () => { window.clearInterval(timer); document.removeEventListener('visibilitychange', refresh); };
  }, []);
  return <>{visible.map(event => <p key={`${event.title}-${event.start}`}><strong>{event.title}</strong><br/><time dateTime={event.start}>{eventDate(event.start)}</time></p>)}</>;
}
