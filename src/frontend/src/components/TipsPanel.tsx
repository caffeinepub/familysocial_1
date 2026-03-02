import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Keyboard,
  Lightbulb,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Tip {
  id: string;
  type: "info" | "feature" | "shortcut" | "warning";
  title: string;
  content: string;
}

const MODULE_TIPS: Record<string, Tip[]> = {
  "family-tree": [
    {
      id: "ft1",
      type: "feature",
      title: "Add Family Circle",
      content:
        "Create a named family group by clicking 'Manage Circle' at the top of the Family Tree page to invite and manage members.",
    },
    {
      id: "ft2",
      type: "info",
      title: "Edit Your Profile",
      content:
        "Hover over your own node (marked 'You') and click the pencil icon to update your name, occupation, blood type, and bio.",
    },
    {
      id: "ft3",
      type: "feature",
      title: "Matrimony & Dating",
      content:
        "Enable the Matrimony or Dating toggles in Lifestyle Settings to make your profile discoverable on the Geomap and matching modules.",
    },
    {
      id: "ft4",
      type: "shortcut",
      title: "Add Business Quickly",
      content:
        "Scroll to the 'My Businesses' section at the bottom of Family Tree to link multiple businesses to your profile.",
    },
    {
      id: "ft5",
      type: "info",
      title: "Privacy per Section",
      content:
        "In the extended profile, each section (Medical, Financial, Jobs) has its own privacy setting — control visibility independently.",
    },
  ],
  "social-feed": [
    {
      id: "sf1",
      type: "feature",
      title: "Module Feed Tabs",
      content:
        "Use the 9 tabs (All, Family, Community, Jobs, etc.) to filter posts by module. Your feed remembers your last selected tab.",
    },
    {
      id: "sf2",
      type: "info",
      title: "Privacy on Posts",
      content:
        "Each post can be set to Private, Family Only, Community, Friends, or Public. Posts appear on the Geomap only for your chosen audience.",
    },
    {
      id: "sf3",
      type: "shortcut",
      title: "Post to a Module",
      content:
        "Use the module selector in the compose box to direct your post to a specific module like Jobs, Real Estate, or Blog.",
    },
    {
      id: "sf4",
      type: "feature",
      title: "Notifications",
      content:
        "Click the bell icon in the header for real-time notifications across all modules — new matches, community alerts, and job updates.",
    },
    {
      id: "sf5",
      type: "warning",
      title: "Avoid Blocking",
      content:
        "Repeated abusive or spam posts will trigger an automatic warning. 3 violations result in a temporary block.",
    },
  ],
  map: [
    {
      id: "gm1",
      type: "feature",
      title: "Toggle Layers",
      content:
        "Click 'Layers' on the map to turn module layers on/off — Family, Jobs, Real Estate, Matrimony, Dating, and more.",
    },
    {
      id: "gm2",
      type: "info",
      title: "Privacy Controls",
      content:
        "Matrimony and Dating pins only show users whose privacy settings allow discovery. Set your visibility under Layers > Settings.",
    },
    {
      id: "gm3",
      type: "feature",
      title: "Filter Matches",
      content:
        "The Matrimony and Dating layers have separate filter panels — click the filter icon while those layers are active.",
    },
    {
      id: "gm4",
      type: "shortcut",
      title: "Find Yourself",
      content:
        "Your own pin is marked with a ★ star marker. If you don't see it, make sure Matrimony or Dating toggle is enabled in Family Tree.",
    },
  ],
  "personal-feed": [
    {
      id: "pf1",
      type: "feature",
      title: "Draft First, Publish Later",
      content:
        "All posts here are private drafts by default. Write freely and publish when ready by clicking 'Publish to Module'.",
    },
    {
      id: "pf2",
      type: "info",
      title: "Choose Your Audience",
      content:
        "When publishing a draft, select the target module (Jobs, Community, etc.) and privacy level before it goes live.",
    },
    {
      id: "pf3",
      type: "shortcut",
      title: "Add Mood Tags",
      content:
        "Mood tags help you organize your drafts and also help the co-worker agent suggest relevant content.",
    },
  ],
  community: [
    {
      id: "co1",
      type: "feature",
      title: "Join or Create",
      content:
        "You can create your own community or request to join an existing one. Admins approve new members.",
    },
    {
      id: "co2",
      type: "info",
      title: "Community Feed",
      content:
        "Each community has its own feed. Posts here are visible to community members based on their privacy settings.",
    },
    {
      id: "co3",
      type: "shortcut",
      title: "Find Your Society",
      content:
        "Use the search bar to find societies by name, city, or area. Geomap Community layer shows nearby communities.",
    },
  ],
  "gated-community": [
    {
      id: "gc1",
      type: "feature",
      title: "QR Gate Entry",
      content:
        "Your unique QR code is shown on the Gate Entry tab. Security scans it for fast check-in and check-out.",
    },
    {
      id: "gc2",
      type: "info",
      title: "Lodge Complaints",
      content:
        "Report issues (plumbing, electrical, noise) linked to your flat number. Track resolution status in real time.",
    },
    {
      id: "gc3",
      type: "feature",
      title: "Community Marketplace",
      content:
        "Browse products and services listed by your community members with exclusive member-only pricing.",
    },
    {
      id: "gc4",
      type: "shortcut",
      title: "Parking Rental",
      content:
        "List your unused parking spot for rent to other community members by day or month in the Parking tab.",
    },
  ],
  products: [
    {
      id: "pr1",
      type: "feature",
      title: "Multi-Photo Upload",
      content:
        "Drag and drop multiple photos when creating a product. The first photo becomes the cover image.",
    },
    {
      id: "pr2",
      type: "info",
      title: "Add Variants",
      content:
        "Click 'Add Variant Group' to create Size, Color, or custom options. Each variant can have its own price modifier.",
    },
    {
      id: "pr3",
      type: "feature",
      title: "Rental Options",
      content:
        "Enable the 'Rental' toggle to set availability dates and auto-calculate rental costs per day.",
    },
    {
      id: "pr4",
      type: "shortcut",
      title: "Community Pricing",
      content:
        "Set special prices visible only to members of specific communities in the Advanced Pricing section.",
    },
  ],
  pos: [
    {
      id: "pos1",
      type: "feature",
      title: "Quick Add to Cart",
      content:
        "Click any product in the catalog to add it. Items with variants or rental dates will prompt for selection first.",
    },
    {
      id: "pos2",
      type: "info",
      title: "Apply Discounts",
      content:
        "Use the Discount field in the cart to apply flat amount or percentage discounts before completing the sale.",
    },
    {
      id: "pos3",
      type: "shortcut",
      title: "Print Receipts",
      content:
        "After completing a sale, click 'Print' on the receipt popup. Sales history is accessible in the History tab.",
    },
  ],
  jobs: [
    {
      id: "jb1",
      type: "feature",
      title: "Browse by Scope",
      content:
        "Switch between 'Local' and 'Global' using the scope filter to see jobs near you or remote/international roles.",
    },
    {
      id: "jb2",
      type: "info",
      title: "Recruiter Mode",
      content:
        "Have a company linked in your Family Tree? Switch to the Recruiter tab to post jobs and track applicants through ATS stages.",
    },
    {
      id: "jb3",
      type: "feature",
      title: "Delivery Jobs",
      content:
        "Apply for delivery jobs in the Delivery tab. Set your vehicle type and availability, then track commissions per delivery.",
    },
    {
      id: "jb4",
      type: "shortcut",
      title: "Track Applications",
      content:
        "All your job applications are visible in 'My Applications' with the current ATS stage and recruiter notes.",
    },
  ],
  healthcare: [
    {
      id: "hc1",
      type: "feature",
      title: "Book an Advisor",
      content:
        "Browse specialists in the Advisors tab and click 'Book Consultation' to schedule an appointment with fee details.",
    },
    {
      id: "hc2",
      type: "info",
      title: "Insurance Policies",
      content:
        "Add your insurance policies in the Insurance tab. Set expiry dates to get renewal reminders.",
    },
    {
      id: "hc3",
      type: "shortcut",
      title: "Family Health View",
      content:
        "The Family Health tab shows a quick overview of all family members' blood types and conditions.",
    },
  ],
  "real-estate": [
    {
      id: "re1",
      type: "feature",
      title: "Add a Listing",
      content:
        "Click 'Add Listing' to post a property for sale or rent. Include location, price, and property type for better visibility.",
    },
    {
      id: "re2",
      type: "info",
      title: "Rent Management",
      content:
        "Open any listing and switch to the 'Rent Management' tab to track tenant payments, dues, and history.",
    },
    {
      id: "re3",
      type: "shortcut",
      title: "Geomap Integration",
      content:
        "All property listings appear on the Geomap under the Real Estate layer with click-to-view popups.",
    },
  ],
  education: [
    {
      id: "ed1",
      type: "feature",
      title: "Role Selection",
      content:
        "Use the role switcher at the top to switch between Student, Parent, Teacher, and School Admin views.",
    },
    {
      id: "ed2",
      type: "info",
      title: "Self-Enrollment",
      content:
        "Students can browse school enrollment pages and request to join. Schools receive and approve requests.",
    },
    {
      id: "ed3",
      type: "shortcut",
      title: "Library Cart",
      content:
        "Browse the Library tab to buy, borrow, or sell books. Add books to cart just like the main marketplace.",
    },
  ],
  travel: [
    {
      id: "tr1",
      type: "feature",
      title: "Create Packages",
      content:
        "Only users with a business linked in their Family Tree can create travel packages. Regular users can browse and book.",
    },
    {
      id: "tr2",
      type: "info",
      title: "Cab Booking",
      content:
        "The Cab tab calculates fares by distance. Enter pick-up and drop-off points for an instant quote and booking.",
    },
    {
      id: "tr3",
      type: "shortcut",
      title: "Build Itinerary",
      content:
        "Use the Itinerary tab to plan day-by-day trip details. An itinerary can be attached to a package or booked standalone.",
    },
  ],
  blog: [
    {
      id: "bl1",
      type: "feature",
      title: "Use Templates",
      content:
        "Choose from 7 templates (Product, Recipe, Travel, etc.) when creating a new blog post for a pre-structured layout.",
    },
    {
      id: "bl2",
      type: "info",
      title: "Attach Affiliate Links",
      content:
        "Use the 'Add Affiliate Link' button to link products from any FamilySocial module or add external affiliate URLs.",
    },
    {
      id: "bl3",
      type: "shortcut",
      title: "Track Commissions",
      content:
        "Your affiliate earnings and click-through rates are tracked in Dashboard > Affiliate & Commissions.",
    },
  ],
  matrimony: [
    {
      id: "mt1",
      type: "feature",
      title: "Compatibility Score",
      content:
        "Each profile shows a compatibility percentage across 11 criteria — Caste, Height, Horoscope, Profession, and more.",
    },
    {
      id: "mt2",
      type: "info",
      title: "Shortlist Profiles",
      content:
        "Use the Shortlist tab to save profiles you're interested in. Send requests directly from a profile card.",
    },
    {
      id: "mt3",
      type: "warning",
      title: "Privacy First",
      content:
        "Your profile is only visible to users who also have Matrimony enabled. Update visibility in your Geomap layer settings.",
    },
  ],
  dating: [
    {
      id: "dt1",
      type: "feature",
      title: "Swipe Actions",
      content:
        "Like, Pass, Super Like, or Save profiles. Mutual likes appear in your Matches tab for direct conversation.",
    },
    {
      id: "dt2",
      type: "info",
      title: "Habit Matching",
      content:
        "Complete your habits and preferences in your Dating profile for better compatibility matching.",
    },
    {
      id: "dt3",
      type: "warning",
      title: "Safe Interaction",
      content:
        "Any inappropriate behavior can be reported by other users. Three reports trigger an automatic review.",
    },
  ],
  dashboard: [
    {
      id: "db1",
      type: "feature",
      title: "Affiliate Commissions",
      content:
        "Check the Affiliate & Commissions tab to see total earnings, per-module breakdown, and referral performance.",
    },
    {
      id: "db2",
      type: "info",
      title: "Delivery Income",
      content:
        "If you're a delivery rider, the Delivery Income tab tracks commissions per delivery with daily/weekly totals.",
    },
    {
      id: "db3",
      type: "shortcut",
      title: "Export Reports",
      content:
        "Use the Export button on any tab to download your earnings data as CSV for offline review.",
    },
  ],
  settings: [
    {
      id: "st1",
      type: "feature",
      title: "Profile Privacy",
      content:
        "Control who can see your profile — go to Privacy Settings to manage visibility per section.",
    },
    {
      id: "st2",
      type: "info",
      title: "Referral Code",
      content:
        "Your unique referral code is visible here. Share it for affiliate commissions when others sign up or purchase.",
    },
    {
      id: "st3",
      type: "shortcut",
      title: "Notification Preferences",
      content:
        "Configure which modules send you notifications in the Notifications section of Settings.",
    },
  ],
  "admin-panel": [
    {
      id: "ap1",
      type: "feature",
      title: "16 Active Agents",
      content:
        "Use the tab bar to access all 16 AI agents — each handles a specific aspect of platform management.",
    },
    {
      id: "ap2",
      type: "info",
      title: "Agent Factory",
      content:
        "Create custom agents from the Agent Factory tab. New agents won't interfere with existing ones.",
    },
    {
      id: "ap3",
      type: "warning",
      title: "Super Admin Only",
      content:
        "You are the sole Super Admin. No other user can be elevated to admin status through the platform.",
    },
    {
      id: "ap4",
      type: "shortcut",
      title: "Agent Network",
      content:
        "The Agent Factory tab shows a visual diagram of how all agents communicate with each other.",
    },
  ],
};

const TIP_ICONS = {
  info: Info,
  feature: Lightbulb,
  shortcut: Keyboard,
  warning: AlertTriangle,
};

const TIP_COLORS = {
  info: {
    bg: "oklch(0.55 0.15 240 / 0.08)",
    icon: "oklch(0.55 0.15 240)",
    border: "oklch(0.55 0.15 240 / 0.2)",
  },
  feature: {
    bg: "oklch(0.52 0.14 155 / 0.08)",
    icon: "oklch(0.52 0.14 155)",
    border: "oklch(0.52 0.14 155 / 0.2)",
  },
  shortcut: {
    bg: "oklch(0.55 0.22 280 / 0.08)",
    icon: "oklch(0.55 0.22 280)",
    border: "oklch(0.55 0.22 280 / 0.2)",
  },
  warning: {
    bg: "oklch(0.72 0.17 85 / 0.08)",
    icon: "oklch(0.72 0.17 85)",
    border: "oklch(0.72 0.17 85 / 0.2)",
  },
};

interface Props {
  open: boolean;
  onClose: () => void;
  currentPage: string;
}

export default function TipsPanel({ open, onClose, currentPage }: Props) {
  const [dismissedTips, setDismissedTips] = useState<Set<string>>(new Set());
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const tips = MODULE_TIPS[currentPage] ?? MODULE_TIPS["social-feed"];
  const activeTips = tips.filter((t) => !dismissedTips.has(t.id));

  const pageName =
    currentPage
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ") || "This Page";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20"
            onClick={onClose}
          />
          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-card border-l border-border flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: "oklch(0.55 0.22 280 / 0.1)" }}
                >
                  <Lightbulb
                    size={15}
                    style={{ color: "oklch(0.55 0.22 280)" }}
                  />
                </div>
                <div>
                  <p className="text-sm font-label font-semibold text-foreground">
                    Tips
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {pageName}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={onClose}
              >
                <X size={14} />
              </Button>
            </div>

            {/* Tips list */}
            <ScrollArea className="flex-1">
              <div className="p-3 space-y-2">
                {activeTips.length === 0 ? (
                  <div className="text-center py-10">
                    <CheckCircle2
                      size={32}
                      className="mx-auto mb-2"
                      style={{ color: "oklch(0.52 0.14 155)" }}
                    />
                    <p className="text-sm font-label font-semibold text-foreground">
                      All caught up!
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      You've dismissed all tips for this page.
                    </p>
                  </div>
                ) : (
                  activeTips.map((tip) => {
                    const Icon = TIP_ICONS[tip.type];
                    const colors = TIP_COLORS[tip.type];
                    return (
                      <div
                        key={tip.id}
                        className="rounded-xl p-3 border"
                        style={{
                          background: colors.bg,
                          borderColor: colors.border,
                        }}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2 flex-1 min-w-0">
                            <Icon
                              size={14}
                              className="shrink-0 mt-0.5"
                              style={{ color: colors.icon }}
                            />
                            <div className="min-w-0">
                              <p className="text-xs font-label font-semibold text-foreground mb-0.5">
                                {tip.title}
                              </p>
                              <p className="text-[11px] text-muted-foreground leading-relaxed">
                                {tip.content}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setDismissedTips(
                                (prev) => new Set([...prev, tip.id]),
                              )
                            }
                            className="shrink-0 text-muted-foreground hover:text-foreground transition-colors mt-0.5"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t border-border p-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => {
                    setDontShowAgain(e.target.checked);
                    if (e.target.checked) {
                      setDismissedTips(new Set(tips.map((t) => t.id)));
                    }
                  }}
                  className="w-3.5 h-3.5 rounded"
                />
                <span className="text-[11px] text-muted-foreground">
                  Don't show tips for this page
                </span>
              </label>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
