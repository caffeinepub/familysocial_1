import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";
import {
  Bell,
  BookMarked,
  BookOpen,
  Briefcase,
  Building2,
  Bus,
  Car,
  ChevronRight,
  Clock,
  CreditCard,
  GraduationCap,
  Heart,
  HelpCircle,
  Home,
  LayoutDashboard,
  LogOut,
  type LucideIcon,
  Map as MapIcon,
  Menu,
  PhoneCall,
  Plane,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  TreePine,
  UserCircle,
  Users,
  X,
  Zap,
} from "lucide-react";
import {
  Component,
  type ErrorInfo,
  type ReactNode,
  Suspense,
  lazy,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";
import { useUserLevel } from "../contexts/UserLevelContext";
import { useAdminStatus } from "../hooks/useAdminStatus";
import type { UserProfile } from "../types/platform";
import CoworkerAssistant from "./CoworkerAssistant";
import CurrencySelector from "./CurrencySelector";
import NotificationsPanel from "./NotificationsPanel";
import SuggestionsPanel from "./SuggestionsPanel";
import TipsPanel from "./TipsPanel";

// Lazy-loaded pages
const AdminPanelPage = lazy(() => import("../pages/AdminPanelPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const ComingSoonPage = lazy(() => import("../pages/ComingSoonPage"));
const CommunityPage = lazy(() => import("../pages/CommunityPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const DatingPage = lazy(() => import("../pages/DatingPage"));
const EducationPage = lazy(() => import("../pages/EducationPage"));
const FamilyTreePage = lazy(() => import("../pages/FamilyTreePage"));
const GatedCommunityPage = lazy(() => import("../pages/GatedCommunityPage"));
const GeoMapPage = lazy(() => import("../pages/GeoMapPage"));
const HealthcarePage = lazy(() => import("../pages/HealthcarePage"));
const JobsPage = lazy(() => import("../pages/JobsPage"));
const MatrimonyPage = lazy(() => import("../pages/MatrimonyPage"));
const POSPage = lazy(() => import("../pages/POSPage"));
const PersonalFeedPage = lazy(() => import("../pages/PersonalFeedPage"));
const ProductsServicesPage = lazy(
  () => import("../pages/ProductsServicesPage"),
);
const RealEstatePage = lazy(() => import("../pages/RealEstatePage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));
const SocialFeedPage = lazy(() => import("../pages/SocialFeedPage"));
const TimelinePage = lazy(() => import("../pages/TimelinePage"));
const TravelPage = lazy(() => import("../pages/TravelPage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const MyAccountPage = lazy(() => import("../pages/MyAccountPage"));
const RideBookingPage = lazy(() => import("../pages/RideBookingPage"));
const BusinessPage = lazy(() => import("../pages/BusinessPage"));
const SpiritualStoriesPage = lazy(
  () => import("../pages/SpiritualStoriesPage"),
);
const TransportBookingPage = lazy(
  () => import("../pages/TransportBookingPage"),
);
const LoginPage = lazy(() => import("../pages/LoginPage"));
import { getNotifications } from "../stores/notificationStore";
import AgentConsentBanner from "./AgentConsentBanner";
import Footer from "./Footer";
import NearbySearchBar from "./NearbySearchBar";
import SupportChatWidget from "./SupportChatWidget";

// ---- ErrorBoundary ----
interface EBState {
  hasError: boolean;
  error: Error | null;
}
class PageErrorBoundary extends Component<{ children: ReactNode }, EBState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error): EBState {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[IndyaCentral] Page error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center gap-4">
          <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center">
            <span className="text-2xl">⚠️</span>
          </div>
          <div>
            <p className="font-semibold text-lg text-foreground">
              Something went wrong on this page
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {this.state.error?.message || "Unknown error"}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try again
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

function PageLoader() {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: number;
}

const GUEST_NAV_IDS = new Set(["social-feed", "shop", "contact-us", "jobs"]);

const NAV_ITEMS: NavItem[] = [
  { id: "social-feed", label: "Home", icon: Home, badge: 3 },
  { id: "shop", label: "Shop", icon: ShoppingBag },
  { id: "family-tree", label: "Family Tree", icon: TreePine },
  { id: "business", label: "Business", icon: Building2 },
  { id: "community", label: "Community", icon: Users },
  { id: "gated-community", label: "Gated Community", icon: Building2 },
  { id: "jobs", label: "Jobs", icon: Briefcase },
  { id: "healthcare", label: "Healthcare", icon: Heart },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "real-estate", label: "Real Estate", icon: Building2 },
  { id: "travel", label: "Travel", icon: Plane },
  { id: "transport", label: "Transport & Pay", icon: Bus },
  { id: "rides", label: "Rides", icon: Car },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "admin-panel", label: "Admin Panel", icon: ShieldCheck },
];

const COMING_SOON_META: Record<
  string,
  { title: string; description: string; icon: LucideIcon }
> = {};

interface Props {
  currentPage: string;
  onNavigate: (page: string) => void;
  userProfile: UserProfile | null | undefined;
  isAuthenticated?: boolean;
  onEmailLogin?: (user: { name: string; email: string }) => void;
}

export default function AppShell({
  currentPage,
  onNavigate,
  userProfile,
  isAuthenticated = false,
  onEmailLogin,
}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [tipsOpen, setTipsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(5);
  const [_storeNotifCount, setStoreNotifCount] = useState(
    () => getNotifications().filter((n) => n.unread).length,
  );

  useEffect(() => {
    const handler = () =>
      setStoreNotifCount(getNotifications().filter((n) => n.unread).length);
    window.addEventListener("indya_notification_added", handler);
    return () =>
      window.removeEventListener("indya_notification_added", handler);
  }, []);
  const { clear, identity } = useInternetIdentity();
  const queryClient = useQueryClient();
  const { isAdmin, assignAdmin: claimAdminMutation } = useAdminStatus();
  const { level } = useUserLevel();

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
  };

  const initials = userProfile?.name
    ? userProfile.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U";

  const renderPage = () => {
    if (COMING_SOON_META[currentPage]) {
      const meta = COMING_SOON_META[currentPage];
      return (
        <ComingSoonPage
          title={meta.title}
          description={meta.description}
          Icon={meta.icon}
        />
      );
    }
    switch (currentPage) {
      case "family-tree":
        return (
          <FamilyTreePage userProfile={userProfile} onNavigate={onNavigate} />
        );
      case "social-feed":
        return <SocialFeedPage userProfile={userProfile} />;
      case "map":
        return <GeoMapPage />;
      case "personal-feed":
        return <PersonalFeedPage />;
      case "timeline":
        return <TimelinePage />;
      case "community":
        return <CommunityPage />;
      case "gated-community":
        return <GatedCommunityPage />;
      case "products":
        return <ProductsServicesPage />;
      case "shop":
        return <ShopPage />;
      case "pos":
        return <POSPage />;
      case "jobs":
        return <JobsPage />;
      case "healthcare":
        return <HealthcarePage userProfile={userProfile} />;
      case "spiritual":
        return <SpiritualStoriesPage />;
      case "real-estate":
        return <RealEstatePage />;
      case "education":
        return <EducationPage />;
      case "travel":
        return <TravelPage />;
      case "transport":
        return <TransportBookingPage />;
      case "blog":
        return <BlogPage />;
      case "matrimony":
        return <MatrimonyPage />;
      case "dating":
        return <DatingPage />;
      case "admin-panel":
        return <AdminPanelPage />;
      case "dashboard":
        return <DashboardPage />;
      case "settings":
        return <SettingsPage userProfile={userProfile} />;
      case "my-account":
        return <MyAccountPage />;
      case "rides":
        return <RideBookingPage />;
      case "business":
        return <BusinessPage />;

      case "contact-us":
        return <ContactUsPage />;
      case "login":
        return <LoginPage onEmailLogin={onEmailLogin ?? (() => {})} />;
      default:
        return (
          <FamilyTreePage userProfile={userProfile} onNavigate={onNavigate} />
        );
    }
  };

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = currentPage === item.id;
    const Icon = item.icon;
    return (
      <button
        type="button"
        onClick={() => {
          onNavigate(item.id);
          setSidebarOpen(false);
        }}
        className={`
          w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-label font-medium
          transition-all duration-150 group relative
          ${
            isActive
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
          }
        `}
      >
        {isActive && (
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full"
            style={{ background: "oklch(var(--sidebar-primary))" }}
          />
        )}
        <Icon
          size={17}
          className={`shrink-0 transition-colors ${isActive ? "text-sidebar-primary" : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground/80"}`}
        />
        <span className="truncate">{item.label}</span>
        {item.badge && (
          <span
            className="ml-auto text-xs rounded-full px-1.5 py-0.5 font-label font-bold"
            style={{
              background: "oklch(0.65 0.25 335 / 0.25)",
              color: "oklch(0.65 0.25 335)",
            }}
          >
            {item.badge}
          </span>
        )}
      </button>
    );
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="px-4 py-5 border-b border-sidebar-border flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.65 0.25 335)" }}
        >
          <TreePine
            size={18}
            style={{ color: "oklch(var(--sidebar-primary-foreground))" }}
          />
        </div>
        <div>
          <span className="text-base font-display font-bold text-sidebar-foreground">
            IndyaCentral
          </span>
          <p className="text-[10px] font-label text-sidebar-foreground/40 leading-none mt-0.5">
            IndyaCentral
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto sidebar-scroll px-3 py-4 space-y-0.5">
        {NAV_ITEMS.filter((item) => {
          if (!isAuthenticated && !GUEST_NAV_IDS.has(item.id)) return false;
          if (item.id === "admin-panel" && !isAdmin) return false;
          if (item.id === "products") return false;
          return true;
        }).map((item) => (
          <NavLink key={item.id} item={item} />
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-sidebar-accent/50 transition-colors">
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarFallback
              className="text-xs font-label font-bold"
              style={{
                background: "oklch(0.65 0.25 335 / 0.25)",
                color: "oklch(0.65 0.25 335)",
              }}
            >
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-sidebar-foreground truncate flex items-center gap-1.5">
              {userProfile?.name || "My Profile"}
              {isAdmin && (
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    background: "oklch(0.65 0.25 335)",
                    color: "oklch(0.98 0.005 335)",
                  }}
                >
                  Admin
                </span>
              )}
            </p>
            <p className="text-[10px] text-sidebar-foreground/40 truncate">
              {userProfile?.occupation || "IndyaCentral Member"}
            </p>
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full inline-block mt-0.5"
              style={{
                background:
                  level === "Advanced"
                    ? "oklch(0.75 0.18 85 / 0.25)"
                    : level === "Intermediate"
                      ? "oklch(0.55 0.18 240 / 0.2)"
                      : "oklch(0.5 0 0 / 0.15)",
                color:
                  level === "Advanced"
                    ? "oklch(0.62 0.15 85)"
                    : level === "Intermediate"
                      ? "oklch(0.45 0.18 240)"
                      : "oklch(0.5 0 0)",
              }}
            >
              {level}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-sidebar-foreground/40 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={handleLogout}
            title="Sign out"
          >
            <LogOut size={14} />
          </Button>
        </div>
      </div>
    </div>
  );

  // Guest top-nav layout
  if (!isAuthenticated) {
    const GUEST_LINKS = [
      { id: "social-feed", label: "Home" },
      { id: "shop", label: "Shop" },
      { id: "jobs", label: "Jobs" },
    ];
    return (
      <div
        className="flex flex-col min-h-screen bg-background"
        data-ocid="guest.page"
      >
        {/* Guest Top Nav */}
        <header
          className="sticky top-0 z-40 border-b px-4 sm:px-8 flex items-center gap-4 h-14 shrink-0"
          style={{
            background: "oklch(var(--background))",
            borderColor: "oklch(var(--border))",
          }}
        >
          <div className="flex items-center gap-2 mr-4">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "oklch(0.65 0.25 335)" }}
            >
              <TreePine size={14} style={{ color: "oklch(0.98 0.005 335)" }} />
            </div>
            <span className="text-base font-display font-bold text-foreground hidden sm:block">
              IndyaCentral
            </span>
          </div>
          <nav className="flex items-center gap-1 flex-1">
            {GUEST_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-label font-medium transition-colors ${
                  currentPage === link.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                data-ocid={`guest.${link.id}.link`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => onNavigate("login")}
            className="px-4 py-1.5 rounded-lg text-sm font-label font-semibold transition-colors text-primary-foreground"
            style={{ background: "oklch(0.65 0.25 335)" }}
            data-ocid="guest.login.primary_button"
          >
            Login
          </button>
        </header>
        <main className="flex-1 overflow-y-auto main-scroll">
          <PageErrorBoundary>
            <Suspense fallback={<PageLoader />}>{renderPage()}</Suspense>
          </PageErrorBoundary>
        </main>
        <Footer />
        <CoworkerAssistant currentPage={currentPage} />
        <SupportChatWidget />
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <aside
        className="hidden lg:flex flex-col w-60 shrink-0 border-r"
        style={{
          background: "oklch(var(--sidebar))",
          borderColor: "oklch(var(--sidebar-border))",
        }}
      >
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setSidebarOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close sidebar"
          />
          <aside
            className="relative z-10 flex flex-col w-72"
            style={{ background: "oklch(var(--sidebar))" }}
          >
            <div className="absolute top-3 right-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-sidebar-foreground/60 hover:text-sidebar-foreground"
                onClick={() => setSidebarOpen(false)}
              >
                <X size={16} />
              </Button>
            </div>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-14 shrink-0 border-b border-border bg-card flex items-center gap-3 px-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={18} />
          </Button>

          <div className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground">
            <span className="font-label">IndyaCentral</span>
            <ChevronRight size={14} />
            <span className="font-label font-semibold text-foreground">
              {NAV_ITEMS.find((n) => n.id === currentPage)?.label ||
                "Family Tree"}
            </span>
          </div>

          <div className="flex-1 max-w-xs ml-auto sm:ml-4">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search..."
                className="pl-8 h-8 text-sm bg-secondary/60 border-0 focus-visible:ring-1"
              />
            </div>
          </div>

          <CurrencySelector />

          {!!identity && !isAdmin && (
            <button
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-label font-semibold border border-amber-400/60 bg-amber-400/10 text-amber-600 dark:text-amber-400 hover:bg-amber-400/20 transition-colors"
              onClick={() =>
                claimAdminMutation.mutate(undefined, {
                  onSuccess: () => toast.success("Admin access claimed!"),
                  onError: () =>
                    toast.error("Failed to claim admin. Try again."),
                })
              }
              data-ocid="header.claim_admin_button"
              title="Claim super admin access"
            >
              <Shield size={13} />
              Claim Admin
            </button>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 relative"
            onClick={() => {
              setTipsOpen((v) => !v);
              setNotifOpen(false);
              setSuggestOpen(false);
            }}
            aria-label="Tips for this page"
          >
            <HelpCircle size={17} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 relative"
            onClick={() => {
              setSuggestOpen((v) => !v);
              setNotifOpen(false);
              setTipsOpen(false);
            }}
            aria-label="Suggestions"
          >
            <Sparkles size={17} />
            <span
              className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-label font-bold px-1"
              style={{
                background: "oklch(0.65 0.25 335)",
                color: "oklch(0.98 0.005 335)",
              }}
            >
              New
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 relative"
            onClick={() => {
              setNotifOpen((v) => !v);
              setSuggestOpen(false);
              setTipsOpen(false);
            }}
            aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ""}`}
          >
            <Bell size={17} />
            {unreadCount > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-label font-bold px-1"
                style={{
                  background: "oklch(0.65 0.25 335)",
                  color: "oklch(0.98 0.005 335)",
                }}
              >
                {unreadCount}
              </span>
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 w-9 rounded-full p-0">
                <Avatar className="h-8 w-8">
                  <AvatarFallback
                    className="text-xs font-label font-bold"
                    style={{
                      background: "oklch(0.55 0.22 280 / 0.15)",
                      color: "oklch(0.55 0.22 280)",
                    }}
                  >
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <div className="px-2 py-1.5">
                <p className="text-sm font-semibold">
                  {userProfile?.name || "My Account"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {userProfile?.occupation || ""}
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => onNavigate("personal-feed")}
                data-ocid="account.myfeeds.link"
              >
                <BookMarked size={14} className="mr-2" /> My Feeds
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onNavigate("timeline")}
                data-ocid="account.timeline.link"
              >
                <Clock size={14} className="mr-2" /> Timeline
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onNavigate("dashboard")}
                data-ocid="account.dashboard.link"
              >
                <LayoutDashboard size={14} className="mr-2" /> Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onNavigate("matrimony")}
                data-ocid="account.matrimony.link"
              >
                <Heart size={14} className="mr-2" /> Matrimony
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onNavigate("dating")}
                data-ocid="account.dating.link"
              >
                <Zap size={14} className="mr-2" /> Dating
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => onNavigate("my-account")}
                data-ocid="account.myaccount.link"
              >
                <UserCircle size={14} className="mr-2" /> My Account
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onNavigate("settings")}
                data-ocid="account.settings.link"
              >
                <Settings size={14} className="mr-2" /> Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-destructive focus:text-destructive"
                data-ocid="account.logout.button"
              >
                <LogOut size={14} className="mr-2" /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto main-scroll">
          <AgentConsentBanner />
          <PageErrorBoundary>
            <Suspense fallback={<PageLoader />}>{renderPage()}</Suspense>
          </PageErrorBoundary>
        </main>
        <Footer />
      </div>

      <SupportChatWidget />

      <NotificationsPanel
        open={notifOpen}
        onClose={() => setNotifOpen(false)}
        unreadCount={unreadCount}
        onMarkAllRead={() => setUnreadCount(0)}
        onNavigateHome={() => {
          setNotifOpen(false);
          onNavigate("social-feed");
        }}
      />

      <SuggestionsPanel
        open={suggestOpen}
        onClose={() => setSuggestOpen(false)}
        onNavigateHome={() => {
          setSuggestOpen(false);
          onNavigate("social-feed");
        }}
      />

      <TipsPanel
        open={tipsOpen}
        onClose={() => setTipsOpen(false)}
        currentPage={currentPage}
      />

      <CoworkerAssistant currentPage={currentPage} />

      {isAuthenticated && <NearbySearchBar />}
    </div>
  );
}
