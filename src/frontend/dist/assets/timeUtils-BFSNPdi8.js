function formatTimeAgo(date) {
  const now = Date.now();
  const then = new Date(date).getTime();
  if (Number.isNaN(then)) return String(date);
  const diff = Math.floor((now - then) / 1e3);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short"
  });
}
export {
  formatTimeAgo as f
};
