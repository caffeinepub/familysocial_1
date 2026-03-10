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
import { useQueryClient } from "@tanstack/react-query";
import {
  Bell,
  BookMarked,
  BookOpen,
  Briefcase,
  Building2,
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
  Plane,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TreePine,
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
  useState,
} from "react";
import type { UserProfile } from "../backend.d";
import { useAdminStatus } from "../hooks/useAdminStatus";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import CoworkerAssistant from "./CoworkerAssistant";
import CurrencySelector from "./CurrencySelector";
import NotificationsPanel from "./NotificationsPanel";
import SuggestionsPanel from "./SuggestionsPanel";
import TipsPanel from "./TipsPanel";

// Lazy-loaded pages for code splitting (improves initial load time significantly)
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
import AgentConsentBanner from "./AgentConsentBanner";
import SupportChatWidget from "./SupportChatWidget";

// ---- ErrorBoundary: prevents one broken page from crashing the whole app ----
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

// Page loading skeleton
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

const NAV_ITEMS: NavItem[] = [
  { id: "family-tree", label: "Family Tree", icon: TreePine },
  { id: "social-feed", label: "Social Feed", icon: Home, badge: 3 },
  { id: "map", label: "Geomap", icon: MapIcon },
  { id: "personal-feed", label: "My Feed", icon: BookMarked },
  { id: "timeline", label: "Timeline", icon: Clock },
  { id: "community", label: "Community", icon: Users },
  { id: "gated-community", label: "Gated Community", icon: Building2 },
  { id: "products", label: "Products & Services", icon: ShoppingBag },
  { id: "shop", label: "Shop", icon: ShoppingBag },
  { id: "pos", label: "Point of Sale", icon: CreditCard },
  { id: "jobs", label: "Jobs", icon: Briefcase },
  { id: "healthcare", label: "Healthcare", icon: Heart },
  { id: "real-estate", label: "Real Estate", icon: Building2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "travel", label: "Travel", icon: Plane },
  { id: "blog", label: "Blog & Affiliate", icon: BookOpen },
  { id: "matrimony", label: "Matrimony", icon: Heart },
  { id: "dating", label: "Dating", icon: Zap },
  { id: "admin-panel", label: "Admin Panel", icon: ShieldCheck },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "settings", label: "Settings", icon: Settings },
];

const COMING_SOON_META: Record<
  string,
  { title: string; description: string; icon: LucideIcon }
> = {};

interface Props {
  currentPage: string;
  onNavigate: (page: string) => void;
  userProfile: UserProfile | null | undefined;
}

export default function AppShell({
  currentPage,
  onNavigate,
  userProfile,
}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [tipsOpen, setTipsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(5);
  const { clear } = useInternetIdentity();
  const queryClient = useQueryClient();
  const { isAdmin } = useAdminStatus();

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
      case "real-estate":
        return <RealEstatePage />;
      case "education":
        return <EducationPage />;
      case "travel":
        return <TravelPage />;
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
      {/* Logo */}
      <div className="px-4 py-5 border-b border-sidebar-border flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.65 0.25 335)" }}
        >
          <TreePine size={18} style={{ color: "oklch(0.98 0.005 335)" }} />
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

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto sidebar-scroll px-3 py-4 space-y-0.5">
        {NAV_ITEMS.filter((item) => item.id !== "admin-panel" || isAdmin).map(
          (item) => (
            <NavLink key={item.id} item={item} />
          ),
        )}
      </nav>

      {/* User section */}
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
            <p className="text-xs font-semibold text-sidebar-foreground truncate">
              {userProfile?.name || "My Profile"}
            </p>
            <p className="text-[10px] text-sidebar-foreground/40 truncate">
              {userProfile?.occupation || "IndyaCentral Member"}
            </p>
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

          {/* Breadcrumb / page title */}
          <div className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground">
            <span className="font-label">IndyaCentral</span>
            <ChevronRight size={14} />
            <span className="font-label font-semibold text-foreground">
              {NAV_ITEMS.find((n) => n.id === currentPage)?.label ||
                "Family Tree"}
            </span>
          </div>

          {/* Search */}
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

          {/* Currency selector */}
          <CurrencySelector />

          {/* Tips button */}
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

          {/* Suggestions button */}
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

          {/* Notification bell */}
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

          {/* User avatar */}
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
              <DropdownMenuItem onClick={() => onNavigate("settings")}>
                <Settings size={14} className="mr-2" /> Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-destructive focus:text-destructive"
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
      </div>

      {/* Support Chat Widget */}
      <SupportChatWidget />

      {/* Notifications panel */}
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

      {/* Suggestions panel */}
      <SuggestionsPanel
        open={suggestOpen}
        onClose={() => setSuggestOpen(false)}
        onNavigateHome={() => {
          setSuggestOpen(false);
          onNavigate("social-feed");
        }}
      />

      {/* Tips panel */}
      <TipsPanel
        open={tipsOpen}
        onClose={() => setTipsOpen(false)}
        currentPage={currentPage}
      />

      {/* Friend assistant */}
      <CoworkerAssistant currentPage={currentPage} />
    </div>
  );
}
