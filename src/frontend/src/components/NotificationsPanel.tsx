import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Briefcase,
  Building2,
  FileText,
  Heart,
  Home,
  Plane,
  ShoppingBag,
  TreePine,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Notification {
  id: number;
  module: string;
  text: string;
  timestamp: string;
  unread: boolean;
  initials: string;
}

const MODULE_COLORS: Record<string, string> = {
  Family: "oklch(0.55 0.22 280)",
  Community: "oklch(0.60 0.20 190)",
  Jobs: "oklch(0.62 0.20 150)",
  Products: "oklch(0.65 0.25 335)",
  "Real Estate": "oklch(0.62 0.19 55)",
  Healthcare: "oklch(0.58 0.22 25)",
  Travel: "oklch(0.55 0.18 240)",
  Blog: "oklch(0.60 0.22 310)",
};

const MODULE_ICONS: Record<string, React.ElementType> = {
  Family: TreePine,
  Community: Users,
  Jobs: Briefcase,
  Products: ShoppingBag,
  "Real Estate": Building2,
  Healthcare: Heart,
  Travel: Plane,
  Blog: FileText,
};

const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    module: "Family",
    text: "Fatima Hassan liked your post in Family",
    timestamp: "2 min ago",
    unread: true,
    initials: "FH",
  },
  {
    id: 2,
    module: "Jobs",
    text: "New job posted: Senior Engineer at TechCorp Lahore",
    timestamp: "15 min ago",
    unread: true,
    initials: "TC",
  },
  {
    id: 3,
    module: "Community",
    text: "Community announcement: Water maintenance scheduled for tomorrow 8AM",
    timestamp: "1 hr ago",
    unread: true,
    initials: "SM",
  },
  {
    id: 4,
    module: "Real Estate",
    text: "New property listed: 3BR apartment in DHA Phase 6 — PKR 2.8 Cr",
    timestamp: "2 hr ago",
    unread: true,
    initials: "RA",
  },
  {
    id: 5,
    module: "Healthcare",
    text: "Dr. Ayesha confirmed your appointment for tomorrow at 3:00 PM",
    timestamp: "3 hr ago",
    unread: true,
    initials: "DA",
  },
  {
    id: 6,
    module: "Products",
    text: "Omar Hassan commented on your product listing: 'Is this still available?'",
    timestamp: "5 hr ago",
    unread: false,
    initials: "OH",
  },
  {
    id: 7,
    module: "Travel",
    text: "Maldives Honeymoon Package is now 20% off — limited time offer!",
    timestamp: "6 hr ago",
    unread: false,
    initials: "TP",
  },
  {
    id: 8,
    module: "Blog",
    text: "Your blog post 'Family Heritage in the Digital Age' got 50 new reads",
    timestamp: "Yesterday",
    unread: false,
    initials: "YB",
  },
  {
    id: 9,
    module: "Family",
    text: "Khalid Hassan added a new member to the family tree",
    timestamp: "Yesterday",
    unread: false,
    initials: "KH",
  },
  {
    id: 10,
    module: "Jobs",
    text: "Your application for 'Product Manager at StartupPK' was viewed",
    timestamp: "Yesterday",
    unread: false,
    initials: "SP",
  },
  {
    id: 11,
    module: "Community",
    text: "Community vote: New park benches proposal passed with 78% approval",
    timestamp: "2 days ago",
    unread: false,
    initials: "CV",
  },
  {
    id: 12,
    module: "Products",
    text: "Your order for 'Handwoven Kashmiri Shawl' has been shipped",
    timestamp: "2 days ago",
    unread: false,
    initials: "OS",
  },
  {
    id: 13,
    module: "Real Estate",
    text: "Price drop alert: 5 marla house in Gulberg down by PKR 15 Lakh",
    timestamp: "3 days ago",
    unread: false,
    initials: "PD",
  },
  {
    id: 14,
    module: "Healthcare",
    text: "Your blood test results are ready. Please check with Dr. Mirza.",
    timestamp: "3 days ago",
    unread: false,
    initials: "DR",
  },
  {
    id: 15,
    module: "Travel",
    text: "Zara Ali invited you to join the Northern Areas group tour in July",
    timestamp: "4 days ago",
    unread: false,
    initials: "ZA",
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
  unreadCount: number;
  onMarkAllRead: () => void;
  notifications?: Notification[];
  onNavigateHome?: () => void;
}

export default function NotificationsPanel({
  open,
  onClose,
  unreadCount,
  onMarkAllRead,
  notifications = SAMPLE_NOTIFICATIONS,
  onNavigateHome,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
        aria-hidden="true"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        // biome-ignore lint/a11y/useSemanticElements: panel uses div to avoid native dialog open-attr rendering issues
        role="dialog"
        aria-label="Notifications"
        aria-modal="true"
        className="fixed top-0 right-0 h-full z-50 flex flex-col bg-card border-l border-border shadow-2xl"
        style={{
          width: "min(380px, 100vw)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0"
          style={{ background: "oklch(var(--sidebar))" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.65 0.25 335 / 0.2)" }}
            >
              <Bell size={15} style={{ color: "oklch(0.65 0.25 335)" }} />
            </div>
            <div>
              <h2 className="text-sm font-label font-bold text-sidebar-foreground">
                Notifications
              </h2>
              {unreadCount > 0 && (
                <p className="text-[10px] text-sidebar-foreground/50">
                  {unreadCount} unread
                </p>
              )}
            </div>
            {unreadCount > 0 && (
              <span
                className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: "oklch(0.65 0.25 335)",
                  color: "oklch(0.98 0.005 335)",
                }}
              >
                {unreadCount}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-[11px] font-label text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent px-2"
                onClick={onMarkAllRead}
              >
                Mark all read
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={onClose}
              aria-label="Close notifications"
            >
              <X size={14} />
            </Button>
          </div>
        </div>

        {/* Back to Home button */}
        {onNavigateHome && (
          <div className="px-5 py-2.5 border-b border-border/50 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-[11px] font-label text-primary hover:text-primary/80 hover:bg-primary/10 px-2 gap-1.5"
              onClick={onNavigateHome}
            >
              <Home size={12} />
              Back to Home Feed
            </Button>
          </div>
        )}

        {/* Notification list */}
        <div className="flex-1 overflow-y-auto main-scroll">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 gap-3">
              <Bell size={32} className="text-muted-foreground/30" />
              <p className="text-sm text-muted-foreground">
                You're all caught up!
              </p>
            </div>
          ) : (
            <div className="py-2">
              {notifications.map((notif) => {
                const ModuleIcon = MODULE_ICONS[notif.module] ?? Bell;
                const moduleColor =
                  MODULE_COLORS[notif.module] ?? "oklch(0.55 0.22 280)";
                const isUnread =
                  unreadCount > 0 &&
                  SAMPLE_NOTIFICATIONS.findIndex((n) => n.id === notif.id) < 5;

                return (
                  <button
                    key={notif.id}
                    type="button"
                    className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-secondary/60 transition-colors relative group"
                    style={{
                      background: isUnread ? `${moduleColor}08` : "transparent",
                    }}
                  >
                    {/* Unread dot */}
                    {isUnread && (
                      <span
                        className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: moduleColor }}
                      />
                    )}

                    {/* Module icon avatar */}
                    <Avatar className="h-9 w-9 shrink-0 mt-0.5">
                      <AvatarFallback
                        className="text-[10px] font-label font-bold"
                        style={{
                          background: `${moduleColor}22`,
                          color: moduleColor,
                        }}
                      >
                        <ModuleIcon size={14} />
                      </AvatarFallback>
                    </Avatar>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span
                          className="text-[10px] font-label font-bold rounded px-1 py-0"
                          style={{
                            background: `${moduleColor}18`,
                            color: moduleColor,
                          }}
                        >
                          {notif.module}
                        </span>
                      </div>
                      <p
                        className={`text-xs leading-relaxed ${isUnread ? "font-medium text-foreground" : "text-muted-foreground"}`}
                      >
                        {notif.text}
                      </p>
                      <p className="text-[10px] text-muted-foreground/60 mt-1">
                        {notif.timestamp}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border px-5 py-3 shrink-0">
          <Button
            variant="ghost"
            className="w-full h-8 text-xs font-label text-muted-foreground hover:text-foreground"
          >
            View all notifications
          </Button>
        </div>
      </div>
    </>,
    document.body,
  );
}
