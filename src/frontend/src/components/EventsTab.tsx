import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  ExternalLink,
  Globe,
  Lock,
  MapPin,
  Plus,
  Share2,
  Ticket,
  Trophy,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCurrency } from "../contexts/CurrencyContext";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "Public" | "Private" | "Ticket" | "Open Invite" | "Contest";
  rsvpCount: number;
  organizer: string;
  ticketPrice?: number;
  maxAttendees?: number;
  isRSVPed?: boolean;
}

const TYPE_COLORS: Record<string, string> = {
  Public: "oklch(0.52 0.14 155)",
  Private: "oklch(0.55 0.22 280)",
  Ticket: "oklch(0.65 0.25 335)",
  Contest: "oklch(0.62 0.20 40)",
  "Open Invite": "oklch(0.62 0.20 190)",
};

const TYPE_ICONS: Record<string, React.ElementType> = {
  Public: Globe,
  Private: Lock,
  Ticket: Ticket,
  "Open Invite": Users,
  Contest: Trophy,
};

function generateSampleEvents(moduleName: string): Event[] {
  const now = new Date();
  const addDays = (d: number) => {
    const dt = new Date(now);
    dt.setDate(dt.getDate() + d);
    return dt.toLocaleDateString("en-PK", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const baseEvents: Record<string, Event[]> = {
    "Family Tree": [
      {
        id: 1,
        title: "Annual Hassan Family Reunion",
        description:
          "Our yearly gathering to celebrate our heritage and reconnect with extended family.",
        date: addDays(14),
        time: "4:00 PM",
        location: "Hassan Family Farmhouse, Lahore",
        type: "Private",
        rsvpCount: 47,
        organizer: "Khalid Hassan",
        maxAttendees: 80,
      },
      {
        id: 2,
        title: "Grandparents' 50th Wedding Anniversary",
        description:
          "A celebration of 50 golden years. All family members are invited.",
        date: addDays(21),
        time: "7:00 PM",
        location: "Pearl Continental, Lahore",
        type: "Private",
        rsvpCount: 120,
        organizer: "Ahmed Hassan",
        ticketPrice: 0,
      },
      {
        id: 3,
        title: "Family Tree Documentation Workshop",
        description:
          "Learn how to use FamilySocial to document your family history and add DNA information.",
        date: addDays(7),
        time: "11:00 AM",
        location: "Online (Zoom)",
        type: "Open Invite",
        rsvpCount: 28,
        organizer: "Fatima Hassan",
      },
      {
        id: 4,
        title: "Children's Eid Party",
        description:
          "A fun-filled Eid celebration for children aged 3-12 with games and prizes.",
        date: addDays(30),
        time: "3:00 PM",
        location: "Garrison Club, Lahore",
        type: "Private",
        rsvpCount: 35,
        organizer: "Sana Hassan",
        maxAttendees: 50,
      },
      {
        id: 5,
        title: "Heritage Day — Old Photos Exhibition",
        description:
          "Bringing out our old family photos and sharing stories from the past generations.",
        date: addDays(-7),
        time: "2:00 PM",
        location: "Family Home, Model Town",
        type: "Private",
        rsvpCount: 22,
        organizer: "Nadia Hassan",
      },
    ],
    "Social Feed": [
      {
        id: 1,
        title: "FamilySocial Community Meetup — Lahore",
        description:
          "Meet fellow FamilySocial users in Lahore. Networking, demos, and discussions.",
        date: addDays(10),
        time: "6:00 PM",
        location: "Cowork Lahore, Gulberg",
        type: "Public",
        rsvpCount: 89,
        organizer: "FamilySocial Team",
      },
      {
        id: 2,
        title: "Photography Walk — Walled City",
        description:
          "Capture the beauty of old Lahore with fellow photography enthusiasts.",
        date: addDays(5),
        time: "8:00 AM",
        location: "Delhi Gate, Old Lahore",
        type: "Open Invite",
        rsvpCount: 34,
        organizer: "Hamza Raza",
      },
      {
        id: 3,
        title: "Food Bloggers' Iftar Meetup",
        description:
          "Share your favorite recipes and review local restaurants together.",
        date: addDays(18),
        time: "6:30 PM",
        location: "Café Aylanto, Lahore",
        type: "Public",
        rsvpCount: 56,
        organizer: "Sana Malik",
        ticketPrice: 500,
      },
      {
        id: 4,
        title: "Startup Pitch Night",
        description:
          "Local entrepreneurs pitch their ideas to a panel of investors.",
        date: addDays(12),
        time: "7:00 PM",
        location: "Arfa Tech Park, Lahore",
        type: "Ticket",
        rsvpCount: 142,
        organizer: "TechPK Community",
        ticketPrice: 1000,
      },
      {
        id: 5,
        title: "Art Exhibition — Young Pakistani Artists",
        description: "Showcasing works from emerging artists across Pakistan.",
        date: addDays(25),
        time: "5:00 PM",
        location: "Alhamra Arts Centre, Lahore",
        type: "Public",
        rsvpCount: 78,
        organizer: "Art Pakistan",
      },
    ],
    Community: [
      {
        id: 1,
        title: "Community General Meeting",
        description:
          "Monthly meeting to discuss community matters, upcoming projects, and member concerns.",
        date: addDays(3),
        time: "8:00 PM",
        location: "Community Hall, Block C",
        type: "Open Invite",
        rsvpCount: 65,
        organizer: "Community Admin",
      },
      {
        id: 2,
        title: "Park Renovation Planning Session",
        description:
          "Open discussion on the proposed renovation of the central park.",
        date: addDays(8),
        time: "10:00 AM",
        location: "Community Center",
        type: "Open Invite",
        rsvpCount: 41,
        organizer: "Parks Committee",
      },
      {
        id: 3,
        title: "Eid Bazaar & Food Festival",
        description:
          "Annual community bazaar with local vendors, food stalls, and entertainment.",
        date: addDays(20),
        time: "4:00 PM",
        location: "Community Ground",
        type: "Public",
        rsvpCount: 250,
        organizer: "Events Committee",
        ticketPrice: 0,
      },
      {
        id: 4,
        title: "Health & Fitness Camp",
        description:
          "Free health checkup camp with blood pressure, diabetes, and eye testing.",
        date: addDays(15),
        time: "9:00 AM",
        location: "Community Center",
        type: "Public",
        rsvpCount: 93,
        organizer: "Health Committee",
      },
      {
        id: 5,
        title: "Children's Art Competition",
        description:
          "Encouraging creativity in children aged 5-15. Prizes for top 3 in each age group.",
        date: addDays(28),
        time: "2:00 PM",
        location: "Community Hall",
        type: "Public",
        rsvpCount: 38,
        organizer: "Youth Committee",
        ticketPrice: 200,
      },
    ],
    Jobs: [
      {
        id: 1,
        title: "Career Fair 2026 — Lahore",
        description:
          "Over 50 companies hiring across IT, Finance, Marketing, and Engineering.",
        date: addDays(7),
        time: "10:00 AM",
        location: "Expo Centre, Lahore",
        type: "Public",
        rsvpCount: 856,
        organizer: "JobsPK",
      },
      {
        id: 2,
        title: "Freelancing Workshop — Fiverr & Upwork",
        description:
          "How to build your freelancing career from scratch. Practical tips from top earners.",
        date: addDays(4),
        time: "2:00 PM",
        location: "Online (Zoom)",
        type: "Ticket",
        rsvpCount: 312,
        organizer: "FreelancePK",
        ticketPrice: 500,
      },
      {
        id: 3,
        title: "Tech Startup Hiring Day",
        description:
          "10 tech startups hiring developers, designers, and product managers.",
        date: addDays(11),
        time: "11:00 AM",
        location: "Plan9, NUST Campus",
        type: "Public",
        rsvpCount: 224,
        organizer: "StartupPK",
      },
      {
        id: 4,
        title: "HR & Recruitment Best Practices Seminar",
        description:
          "For HR professionals and business owners. Learn modern recruitment strategies.",
        date: addDays(16),
        time: "9:00 AM",
        location: "Serena Hotel, Islamabad",
        type: "Ticket",
        rsvpCount: 87,
        organizer: "HRPK Association",
        ticketPrice: 2000,
      },
      {
        id: 5,
        title: "Networking Night — Young Professionals",
        description:
          "Connect with professionals across industries. Bring your business cards!",
        date: addDays(9),
        time: "7:00 PM",
        location: "Café Niche, Karachi",
        type: "Ticket",
        rsvpCount: 145,
        organizer: "YPN Karachi",
        ticketPrice: 800,
      },
    ],
    Healthcare: [
      {
        id: 1,
        title: "Free Blood Donation Drive",
        description:
          "Help save lives. All blood groups needed. Light refreshments provided.",
        date: addDays(5),
        time: "9:00 AM",
        location: "Services Hospital, Lahore",
        type: "Public",
        rsvpCount: 78,
        organizer: "Blood Bank Services",
      },
      {
        id: 2,
        title: "Mental Health Awareness Seminar",
        description:
          "Breaking the stigma around mental health in Pakistan. Expert panel discussion.",
        date: addDays(12),
        time: "3:00 PM",
        location: "Lahore Press Club",
        type: "Public",
        rsvpCount: 134,
        organizer: "Mind Matters PK",
      },
      {
        id: 3,
        title: "Diabetes Management Workshop",
        description:
          "Practical guidance on diet, exercise, and medication management for diabetics.",
        date: addDays(8),
        time: "10:00 AM",
        location: "Shaukat Khanum, Lahore",
        type: "Ticket",
        rsvpCount: 67,
        organizer: "Dr. Ayesha Clinic",
        ticketPrice: 1000,
      },
      {
        id: 4,
        title: "Mother & Child Health Camp",
        description:
          "Free checkup for mothers and children under 5. Immunization available.",
        date: addDays(15),
        time: "8:00 AM",
        location: "DHQ Hospital, Islamabad",
        type: "Public",
        rsvpCount: 92,
        organizer: "MCH Program",
      },
      {
        id: 5,
        title: "Physiotherapy & Fitness Session",
        description:
          "Learn proper exercise techniques to prevent workplace injuries.",
        date: addDays(20),
        time: "6:00 PM",
        location: "Online (Zoom)",
        type: "Open Invite",
        rsvpCount: 45,
        organizer: "HealthyPK",
      },
    ],
    "Real Estate": [
      {
        id: 1,
        title: "DHA Property Expo 2026",
        description:
          "Latest residential and commercial projects by top developers. Open for buyers and investors.",
        date: addDays(10),
        time: "10:00 AM",
        location: "DHA Club, Lahore",
        type: "Public",
        rsvpCount: 432,
        organizer: "DHA Lahore",
      },
      {
        id: 2,
        title: "First-Time Buyers Seminar",
        description:
          "Everything you need to know before purchasing your first property in Pakistan.",
        date: addDays(6),
        time: "4:00 PM",
        location: "Lahore Chamber of Commerce",
        type: "Ticket",
        rsvpCount: 178,
        organizer: "Property Advisors PK",
        ticketPrice: 500,
      },
      {
        id: 3,
        title: "Rental Market Update Q1 2026",
        description:
          "Market analysts present rental trends in major cities for Q1 2026.",
        date: addDays(4),
        time: "6:00 PM",
        location: "Online (Zoom)",
        type: "Public",
        rsvpCount: 256,
        organizer: "Zameen.com",
      },
      {
        id: 4,
        title: "Legal Aspects of Property Transactions",
        description:
          "Advocate explains NOC, registry, and tax requirements for buyers and sellers.",
        date: addDays(18),
        time: "3:00 PM",
        location: "Pearl Continental, Karachi",
        type: "Ticket",
        rsvpCount: 89,
        organizer: "Law Chambers PK",
        ticketPrice: 1500,
      },
      {
        id: 5,
        title: "Community Property Open Day",
        description:
          "Visit available units in Green Valley Society. Tea and refreshments.",
        date: addDays(22),
        time: "11:00 AM",
        location: "Green Valley Society, Islamabad",
        type: "Open Invite",
        rsvpCount: 34,
        organizer: "Green Valley Management",
      },
    ],
    Education: [
      {
        id: 1,
        title: "O Level Results Day 2026",
        description:
          "Results distribution and counseling session for students and parents.",
        date: addDays(5),
        time: "9:00 AM",
        location: "City School North Campus",
        type: "Private",
        rsvpCount: 156,
        organizer: "City School",
      },
      {
        id: 2,
        title: "University Admissions Open Day",
        description:
          "Visit booths from LUMS, NUST, FAST, UET and more. Talk to admissions officers.",
        date: addDays(12),
        time: "10:00 AM",
        location: "Expo Centre, Lahore",
        type: "Public",
        rsvpCount: 734,
        organizer: "HEC Pakistan",
      },
      {
        id: 3,
        title: "Science Project Competition",
        description:
          "Inter-school competition for grades 6-10. Top 3 get national recognition.",
        date: addDays(20),
        time: "8:00 AM",
        location: "NUST H-12, Islamabad",
        type: "Ticket",
        rsvpCount: 89,
        organizer: "Science Society PK",
        ticketPrice: 300,
      },
      {
        id: 4,
        title: "Parent-Teacher Conference",
        description:
          "Scheduled meetings between parents and subject teachers for progress review.",
        date: addDays(8),
        time: "2:00 PM",
        location: "Green Valley Academy",
        type: "Private",
        rsvpCount: 67,
        organizer: "GVA Admin",
      },
      {
        id: 5,
        title: "Teachers' Professional Development Day",
        description:
          "Training on modern pedagogy, EdTech tools, and assessment methods.",
        date: addDays(14),
        time: "9:00 AM",
        location: "Punjab Education Foundation",
        type: "Open Invite",
        rsvpCount: 123,
        organizer: "PEF",
      },
    ],
    Travel: [
      {
        id: 1,
        title: "Northern Pakistan Group Tour — July 2026",
        description:
          "8-day Hunza & Skardu tour with professional guide. All-inclusive package.",
        date: addDays(90),
        time: "6:00 AM",
        location: "Departure: Lahore Airport",
        type: "Ticket",
        rsvpCount: 24,
        organizer: "Usman Travels",
        ticketPrice: 45000,
        maxAttendees: 30,
      },
      {
        id: 2,
        title: "Travel Photography Workshop",
        description:
          "Learn composition, lighting, and editing for travel photography with a pro photographer.",
        date: addDays(8),
        time: "3:00 PM",
        location: "Online (Zoom)",
        type: "Ticket",
        rsvpCount: 67,
        organizer: "TravelPK",
        ticketPrice: 1500,
      },
      {
        id: 3,
        title: "Balochistan Discovery Weekend",
        description:
          "2-day jeep tour of Hingol National Park and coastal areas. Limited seats.",
        date: addDays(30),
        time: "5:00 AM",
        location: "Karachi Hub",
        type: "Ticket",
        rsvpCount: 18,
        organizer: "Discover PK Tours",
        ticketPrice: 12000,
        maxAttendees: 20,
      },
      {
        id: 4,
        title: "Dubai Travel Fair 2026",
        description:
          "Book your summer 2026 holiday with special discounts from 20+ travel agents.",
        date: addDays(15),
        time: "10:00 AM",
        location: "PC Hotel, Karachi",
        type: "Public",
        rsvpCount: 312,
        organizer: "TAAP Pakistan",
      },
      {
        id: 5,
        title: "Backpacking Southeast Asia Info Session",
        description:
          "Tips and routes for budget travel across Thailand, Vietnam, and Indonesia.",
        date: addDays(5),
        time: "7:00 PM",
        location: "The Second Floor Café, Lahore",
        type: "Open Invite",
        rsvpCount: 45,
        organizer: "Backpackers PK",
      },
    ],
    Blog: [
      {
        id: 1,
        title: "Blogging for Income — Masterclass",
        description:
          "How to monetize your blog through affiliate marketing and sponsored content.",
        date: addDays(7),
        time: "2:00 PM",
        location: "Online (Zoom)",
        type: "Ticket",
        rsvpCount: 234,
        organizer: "BlogPK",
        ticketPrice: 2000,
      },
      {
        id: 2,
        title: "Content Creators' Meetup — Lahore",
        description:
          "Network with bloggers, vloggers, and social media creators from across Pakistan.",
        date: addDays(14),
        time: "6:00 PM",
        location: "Cafe The Lounge, DHA Lahore",
        type: "Open Invite",
        rsvpCount: 89,
        organizer: "Creators PK",
      },
      {
        id: 3,
        title: "SEO & Content Strategy Workshop",
        description: "Practical training on ranking your blog posts on Google.",
        date: addDays(10),
        time: "10:00 AM",
        location: "Online (Zoom)",
        type: "Ticket",
        rsvpCount: 156,
        organizer: "DigitalPK",
        ticketPrice: 1500,
      },
      {
        id: 4,
        title: "Eid Recipe Challenge — Live Cookoff",
        description:
          "Cook your best Eid recipe and win prizes. Live streamed on FamilySocial.",
        date: addDays(25),
        time: "4:00 PM",
        location: "Online (Live Stream)",
        type: "Public",
        rsvpCount: 678,
        organizer: "FamilySocial",
      },
      {
        id: 5,
        title: "Affiliate Marketing Summit 2026",
        description:
          "Two-day summit on affiliate marketing strategies with industry leaders.",
        date: addDays(35),
        time: "9:00 AM",
        location: "Avari Hotel, Lahore",
        type: "Ticket",
        rsvpCount: 312,
        organizer: "AffPK",
        ticketPrice: 5000,
      },
    ],
    Matrimony: [
      {
        id: 1,
        title: "Family Rishta Event — Lahore (All Sects Welcome)",
        description:
          "Meet families looking for suitable matches. Separate areas for men and women.",
        date: addDays(14),
        time: "4:00 PM",
        location: "Pearl Continental, Lahore",
        type: "Ticket",
        rsvpCount: 156,
        organizer: "NikkahConnect PK",
        ticketPrice: 2000,
      },
      {
        id: 2,
        title: "Online Rishta Webinar — Digital Matrimony Guide",
        description:
          "How to use FamilySocial Matrimony effectively. Q&A with matchmakers.",
        date: addDays(5),
        time: "8:00 PM",
        location: "Online (Zoom)",
        type: "Open Invite",
        rsvpCount: 234,
        organizer: "FamilySocial",
      },
      {
        id: 3,
        title: "Marriage Compatibility Workshop",
        description:
          "Psychology experts discuss compatibility factors beyond caste and profession.",
        date: addDays(20),
        time: "3:00 PM",
        location: "Avari Hotel, Islamabad",
        type: "Ticket",
        rsvpCount: 78,
        organizer: "Marriage Counselors PK",
        ticketPrice: 3000,
      },
      {
        id: 4,
        title: "Wedding Planning Exhibition 2026",
        description:
          "Meet vendors for catering, photography, venue, and bridal outfits.",
        date: addDays(28),
        time: "11:00 AM",
        location: "Expo Centre, Karachi",
        type: "Public",
        rsvpCount: 892,
        organizer: "Weddings PK",
      },
      {
        id: 5,
        title: "Singles Coffee Morning — Islamabad (25-35)",
        description:
          "Casual morning for single professionals aged 25-35. No pressure, just connections.",
        date: addDays(8),
        time: "10:00 AM",
        location: "Espresso, F-6, Islamabad",
        type: "Ticket",
        rsvpCount: 34,
        organizer: "SinglesPK",
        ticketPrice: 500,
        maxAttendees: 40,
      },
    ],
    Dating: [
      {
        id: 1,
        title: "Speed Dating Evening — Lahore (21-30)",
        description:
          "Meet 10 new people in 2 hours. Fun format with structured mini-dates.",
        date: addDays(12),
        time: "7:00 PM",
        location: "Xander's Restaurant, DHA Lahore",
        type: "Ticket",
        rsvpCount: 48,
        organizer: "DatesPK",
        ticketPrice: 1500,
        maxAttendees: 50,
      },
      {
        id: 2,
        title: "Adventure Hike & Social Karachi",
        description:
          "Hike to Gadap area with like-minded individuals. Single professionals welcome.",
        date: addDays(9),
        time: "6:00 AM",
        location: "Karachi Hub (TBD)",
        type: "Ticket",
        rsvpCount: 32,
        organizer: "Adventure Singles PK",
        ticketPrice: 800,
        maxAttendees: 40,
      },
      {
        id: 3,
        title: "Art & Paint Night — Singles Edition",
        description:
          "Paint, drink (mocktails), and meet new people in a creative setting.",
        date: addDays(16),
        time: "7:00 PM",
        location: "The Canvas Studio, Gulberg",
        type: "Ticket",
        rsvpCount: 28,
        organizer: "Canvas Nights",
        ticketPrice: 2000,
        maxAttendees: 30,
      },
      {
        id: 4,
        title: "Singles Travel Group — Murree Weekend",
        description:
          "Weekend getaway to Murree for solo travelers and singles.",
        date: addDays(21),
        time: "8:00 AM",
        location: "Islamabad Motorway Entry",
        type: "Ticket",
        rsvpCount: 22,
        organizer: "Solo Travellers PK",
        ticketPrice: 8000,
        maxAttendees: 25,
      },
      {
        id: 5,
        title: "Online: What Women Want — Discussion Panel",
        description:
          "Open conversation about modern relationships and expectations.",
        date: addDays(4),
        time: "9:00 PM",
        location: "Online (Instagram Live)",
        type: "Public",
        rsvpCount: 1245,
        organizer: "RelationshipsPK",
      },
    ],
    "Gated Community": [
      {
        id: 1,
        title: "Residents' Annual Dinner Gala",
        description:
          "Formal dinner for all residents of Green Valley Society. Black tie optional.",
        date: addDays(20),
        time: "8:00 PM",
        location: "Community Banquet Hall",
        type: "Ticket",
        rsvpCount: 89,
        organizer: "Society Management",
        ticketPrice: 1500,
      },
      {
        id: 2,
        title: "Children's Sports Day 2026",
        description:
          "Track, field, and team sports for children 5-16. Breakfast provided.",
        date: addDays(14),
        time: "7:00 AM",
        location: "Society Sports Ground",
        type: "Private",
        rsvpCount: 134,
        organizer: "Sports Committee",
      },
      {
        id: 3,
        title: "Emergency Safety Drill",
        description:
          "Fire and earthquake evacuation drill. Mandatory for all residents.",
        date: addDays(7),
        time: "10:00 AM",
        location: "Community Ground",
        type: "Private",
        rsvpCount: 256,
        organizer: "Security Team",
      },
      {
        id: 4,
        title: "Community Eid Mela",
        description:
          "Games, food stalls, and entertainment for the whole family.",
        date: addDays(25),
        time: "5:00 PM",
        location: "Society Main Gate Area",
        type: "Private",
        rsvpCount: 312,
        organizer: "Events Committee",
      },
      {
        id: 5,
        title: "Maintenance Volunteers Day",
        description:
          "Help plant trees and beautify the community gardens. Free lunch for volunteers.",
        date: addDays(5),
        time: "8:00 AM",
        location: "Community Gardens",
        type: "Private",
        rsvpCount: 45,
        organizer: "Green Committee",
      },
    ],
  };

  return baseEvents[moduleName] || baseEvents["Social Feed"];
}

interface Props {
  moduleName: string;
  moduleColor?: string;
}

export default function EventsTab({
  moduleName,
  moduleColor = "oklch(0.55 0.22 280)",
}: Props) {
  const { formatPrice } = useCurrency();
  const [events, setEvents] = useState<Event[]>(() =>
    generateSampleEvents(moduleName),
  );
  const [rsvped, setRsvped] = useState<Set<number>>(new Set());
  const [shareDialogEvent, setShareDialogEvent] = useState<Event | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    type: "Public" as Event["type"],
    maxAttendees: "",
    ticketPrice: "",
  });

  const now = new Date();
  const upcomingEvents = events.filter((e) => {
    const eventDate = new Date(e.date);
    return eventDate >= now;
  });
  const pastEvents = events.filter((e) => {
    const eventDate = new Date(e.date);
    return eventDate < now;
  });

  const handleRSVP = (eventId: number) => {
    setRsvped((prev) => {
      const next = new Set(prev);
      if (next.has(eventId)) {
        next.delete(eventId);
        toast.info("RSVP cancelled");
      } else {
        next.add(eventId);
        toast.success("RSVP confirmed! Check your calendar.");
      }
      return next;
    });
  };

  const handleCreateEvent = () => {
    if (!newEvent.title || !newEvent.date) {
      toast.error("Title and date are required");
      return;
    }
    const event: Event = {
      id: Date.now(),
      title: newEvent.title,
      description: newEvent.description,
      date: new Date(newEvent.date).toLocaleDateString("en-PK", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      time: newEvent.time || "TBD",
      location: newEvent.location || "TBD",
      type: newEvent.type,
      rsvpCount: 0,
      organizer: "You",
      maxAttendees: newEvent.maxAttendees
        ? Number(newEvent.maxAttendees)
        : undefined,
      ticketPrice: newEvent.ticketPrice
        ? Number(newEvent.ticketPrice)
        : undefined,
    };
    setEvents((prev) => [event, ...prev]);
    setCreateOpen(false);
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      type: "Public",
      maxAttendees: "",
      ticketPrice: "",
    });
    toast.success("Event created successfully!");
  };

  const getGoogleCalendarLink = (event: Event) => {
    const dateStr = event.date.replace(/ /g, "+");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${dateStr}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}`;
  };

  const getFacebookEventLink = (event: Event) => {
    return `https://www.facebook.com/events/create?name=${encodeURIComponent(event.title)}&description=${encodeURIComponent(event.description)}`;
  };

  const EventCard = ({ event }: { event: Event }) => {
    const TypeIcon = TYPE_ICONS[event.type] ?? Globe;
    const typeColor = TYPE_COLORS[event.type] ?? moduleColor;
    const isRSVPedEvent = rsvped.has(event.id);

    return (
      <div className="bg-card border border-border rounded-xl p-4 hover:border-border/80 transition-all hover:shadow-sm group">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span
                className="inline-flex items-center gap-1 text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
                style={{ background: `${typeColor}18`, color: typeColor }}
              >
                <TypeIcon size={9} />
                {event.type}
              </span>
              {event.ticketPrice !== undefined && event.type === "Ticket" && (
                <span
                  className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: "oklch(0.65 0.25 335 / 0.12)",
                    color: "oklch(0.50 0.20 335)",
                  }}
                >
                  {event.ticketPrice === 0
                    ? "Free"
                    : formatPrice(event.ticketPrice)}
                </span>
              )}
            </div>
            <h3 className="text-sm font-label font-semibold text-foreground leading-tight mb-1">
              {event.title}
            </h3>
            <p className="text-[11px] text-muted-foreground line-clamp-2">
              {event.description}
            </p>
          </div>
        </div>

        <div className="space-y-1.5 mb-3">
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Calendar size={11} style={{ color: moduleColor }} />
            <span>{event.date}</span>
            <Clock
              size={11}
              className="ml-1.5"
              style={{ color: moduleColor }}
            />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <MapPin size={11} style={{ color: moduleColor }} />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Users size={11} style={{ color: moduleColor }} />
            <span>
              {event.rsvpCount} attending
              {event.maxAttendees
                ? ` · ${event.maxAttendees - event.rsvpCount} spots left`
                : ""}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {event.type === "Ticket" ? (
            <Button
              size="sm"
              className="h-7 text-[11px] font-label flex-1"
              style={
                isRSVPedEvent
                  ? { background: "oklch(0.52 0.14 155)", color: "white" }
                  : {
                      background: `${typeColor}18`,
                      color: typeColor,
                      border: `1px solid ${typeColor}30`,
                    }
              }
              variant="outline"
              onClick={() => handleRSVP(event.id)}
            >
              <Ticket size={11} className="mr-1" />
              {isRSVPedEvent
                ? "Ticket Booked ✓"
                : `Buy Ticket${event.ticketPrice ? ` — ${formatPrice(event.ticketPrice)}` : " (Free)"}`}
            </Button>
          ) : (
            <Button
              size="sm"
              className="h-7 text-[11px] font-label flex-1"
              style={
                isRSVPedEvent
                  ? { background: "oklch(0.52 0.14 155)", color: "white" }
                  : {}
              }
              variant={isRSVPedEvent ? "default" : "outline"}
              onClick={() => handleRSVP(event.id)}
            >
              {isRSVPedEvent ? "RSVP'd ✓" : "RSVP"}
            </Button>
          )}
          <Button
            size="sm"
            variant="ghost"
            className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
            onClick={() => setShareDialogEvent(event)}
            aria-label="Share event"
          >
            <Share2 size={13} />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-label font-semibold text-foreground">
            Events
          </h3>
          <p className="text-xs text-muted-foreground">
            {events.length} events in {moduleName}
          </p>
        </div>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button
              size="sm"
              className="h-8 text-xs font-label gap-1.5"
              style={{ background: moduleColor }}
            >
              <Plus size={13} />
              Create Event
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-label">Create New Event</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <div className="space-y-1.5">
                <Label className="text-xs">Event Title *</Label>
                <Input
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent((p) => ({ ...p, title: e.target.value }))
                  }
                  placeholder="e.g. Family Reunion 2026"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Description</Label>
                <Textarea
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent((p) => ({ ...p, description: e.target.value }))
                  }
                  placeholder="Describe your event..."
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs">Date *</Label>
                  <Input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) =>
                      setNewEvent((p) => ({ ...p, date: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Time</Label>
                  <Input
                    type="time"
                    value={newEvent.time}
                    onChange={(e) =>
                      setNewEvent((p) => ({ ...p, time: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Location</Label>
                <Input
                  value={newEvent.location}
                  onChange={(e) =>
                    setNewEvent((p) => ({ ...p, location: e.target.value }))
                  }
                  placeholder="e.g. Pearl Continental, Lahore or Online"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs">Event Type</Label>
                  <Select
                    value={newEvent.type}
                    onValueChange={(v) =>
                      setNewEvent((p) => ({ ...p, type: v as Event["type"] }))
                    }
                  >
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Public">Public</SelectItem>
                      <SelectItem value="Private">Private</SelectItem>
                      <SelectItem value="Ticket">Ticket-Based</SelectItem>
                      <SelectItem value="Open Invite">Open Invite</SelectItem>
                      <SelectItem value="Contest">Contest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Max Attendees</Label>
                  <Input
                    type="number"
                    value={newEvent.maxAttendees}
                    onChange={(e) =>
                      setNewEvent((p) => ({
                        ...p,
                        maxAttendees: e.target.value,
                      }))
                    }
                    placeholder="Unlimited"
                  />
                </div>
              </div>
              {newEvent.type === "Ticket" && (
                <div className="space-y-1.5">
                  <Label className="text-xs">Ticket Price (PKR)</Label>
                  <Input
                    type="number"
                    value={newEvent.ticketPrice}
                    onChange={(e) =>
                      setNewEvent((p) => ({
                        ...p,
                        ticketPrice: e.target.value,
                      }))
                    }
                    placeholder="0 for free"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCreateOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleCreateEvent}
                style={{ background: moduleColor }}
              >
                Create Event
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Event tabs */}
      <Tabs defaultValue="upcoming">
        <TabsList className="h-8">
          <TabsTrigger value="upcoming" className="text-xs h-7">
            Upcoming ({upcomingEvents.length})
          </TabsTrigger>
          <TabsTrigger value="past" className="text-xs h-7">
            Past ({pastEvents.length})
          </TabsTrigger>
          <TabsTrigger value="my-events" className="text-xs h-7">
            My Events
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-3">
          <div className="grid gap-3 sm:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-3">
          <div className="grid gap-3 sm:grid-cols-2">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
            {pastEvents.length === 0 && (
              <p className="text-sm text-muted-foreground col-span-2 text-center py-8">
                No past events
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="my-events" className="mt-3">
          <div className="grid gap-3 sm:grid-cols-2">
            {events
              .filter((_e, i) => i === 0)
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
          <div className="mt-4 text-center">
            <Button
              variant="outline"
              size="sm"
              className="text-xs font-label gap-1.5"
              onClick={() => setCreateOpen(true)}
            >
              <Plus size={12} />
              Create Your First Event
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Share dialog */}
      <Dialog
        open={!!shareDialogEvent}
        onOpenChange={() => setShareDialogEvent(null)}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-label text-sm">
              Share Event
            </DialogTitle>
          </DialogHeader>
          {shareDialogEvent && (
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">
                {shareDialogEvent.title}
              </p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full h-9 text-xs font-label justify-start gap-2"
                  onClick={() => {
                    window.open(
                      getGoogleCalendarLink(shareDialogEvent),
                      "_blank",
                    );
                    toast.success("Opening Google Calendar...");
                  }}
                >
                  <ExternalLink size={13} />
                  Add to Google Calendar
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-9 text-xs font-label justify-start gap-2"
                  onClick={() => {
                    window.open(
                      getFacebookEventLink(shareDialogEvent),
                      "_blank",
                    );
                    toast.success("Opening Facebook Events...");
                  }}
                >
                  <ExternalLink size={13} />
                  Share on Facebook Events
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-9 text-xs font-label justify-start gap-2"
                  onClick={() => {
                    const text = `${shareDialogEvent.title} — ${shareDialogEvent.date} at ${shareDialogEvent.time}, ${shareDialogEvent.location}`;
                    navigator.clipboard
                      .writeText(text)
                      .then(() => toast.success("Copied to clipboard!"))
                      .catch(() => toast.info(`Copy manually: ${text}`));
                  }}
                >
                  <Share2 size={13} />
                  Copy Event Details
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
