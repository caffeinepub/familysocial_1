export interface StoreNotification {
  id: number;
  module: string;
  text: string;
  timestamp: string;
  unread: boolean;
  initials: string;
}

const STORAGE_KEY = "indya_notifications";

export function addNotification(n: Omit<StoreNotification, "id">): void {
  const existing = getNotifications();
  const newNotif: StoreNotification = { ...n, id: Date.now() };
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([newNotif, ...existing].slice(0, 50)),
  );
  window.dispatchEvent(new CustomEvent("indya_notification_added"));
}

export function getNotifications(): StoreNotification[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearAllNotifications(): void {
  localStorage.removeItem(STORAGE_KEY);
}
