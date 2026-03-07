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
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Eye,
  EyeOff,
  Globe2,
  Link2,
  MapPin,
  Network,
  Package,
  Plus,
  Search,
  Settings2,
  Star,
  TreePine,
  Truck,
  UserCheck,
  UserPlus,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import EventsTab from "../components/EventsTab";

// ─── Types ───────────────────────────────────────────────────────────────────

type JobType =
  | "Full Time"
  | "Part Time"
  | "Delivery"
  | "Freelance"
  | "Contract";
type JobScope = "Local" | "Global";
type ATSStage =
  | "Applied"
  | "Shortlisted"
  | "Interview Scheduled"
  | "Hired"
  | "Rejected";

interface Company {
  id: number;
  name: string;
  industry: string;
  size: string;
  hq: string;
  branches: string[];
  about: string;
  linkedFamilyMember: string;
  openRoles: number;
  initials: string;
  color: string;
}

interface JobEnhanced {
  id: number;
  title: string;
  description: string;
  companyId: number;
  type: JobType;
  scope: JobScope;
  salary: string;
  location: string;
  postedAt: string;
  skills: string[];
  deadline: string;
  commissionRate?: string;
  applied: boolean;
  myPosting?: boolean;
}

interface Applicant {
  id: number;
  name: string;
  jobId: number;
  stage: ATSStage;
  appliedAt: string;
  note: string;
  skills: string[];
}

interface DeliveryRider {
  id: number;
  name: string;
  vehicle: string;
  scope: JobScope;
  area: string;
  available: boolean;
  completedDeliveries: number;
  totalEarned: string;
}

interface FreelancerProfile {
  id: number;
  name: string;
  title: string;
  skills: string[];
  hourlyRate: string;
  portfolio: string;
  rating: number;
  completedJobs: number;
}

// ─── Sample Data ──────────────────────────────────────────────────────────────

const COMPANIES: Company[] = [
  {
    id: 1,
    name: "TechPK Solutions",
    industry: "Information Technology",
    size: "50–200 employees",
    hq: "Lahore, Punjab",
    branches: ["Karachi", "Islamabad", "Dubai (Remote)"],
    about:
      "TechPK Solutions is a leading software development and IT consultancy firm based in Lahore. We build scalable web and mobile applications for clients across Pakistan, UAE, and the UK. Our team of 150+ engineers specializes in React, Node.js, cloud architecture, and AI-driven solutions.",
    linkedFamilyMember: "Usman Khalid",
    openRoles: 6,
    initials: "TP",
    color: "oklch(0.55 0.22 280)",
  },
  {
    id: 2,
    name: "Beacon House School",
    industry: "Education",
    size: "500+ employees",
    hq: "Islamabad, ICT",
    branches: ["Lahore", "Karachi", "Rawalpindi", "Faisalabad"],
    about:
      "Beacon House School System is one of Pakistan's most renowned private school chains offering Cambridge O/A Levels curriculum. We employ 500+ educators and administrative staff and are committed to quality education and professional growth.",
    linkedFamilyMember: "Amina Siddiqui",
    openRoles: 4,
    initials: "BH",
    color: "oklch(0.60 0.20 190)",
  },
  {
    id: 3,
    name: "QuickEats",
    industry: "Food Delivery",
    size: "200–500 employees",
    hq: "Karachi, Sindh",
    branches: ["Lahore", "Islamabad", "Rawalpindi"],
    about:
      "QuickEats is Pakistan's fastest growing food delivery platform connecting thousands of restaurants with hungry customers. We operate a fleet of 1,200+ delivery riders and are expanding to 5 new cities. Riders earn competitive per-delivery commissions.",
    linkedFamilyMember: "Hassan Qureshi",
    openRoles: 12,
    initials: "QE",
    color: "oklch(0.72 0.17 55)",
  },
  {
    id: 4,
    name: "Hassan Textiles",
    industry: "Manufacturing",
    size: "200–500 employees",
    hq: "Lahore, Punjab",
    branches: ["Faisalabad", "Multan"],
    about:
      "Hassan Textiles is a 40-year-old family-owned textile manufacturing business producing premium fabrics and garments for export to Europe and the US. We employ 350+ skilled workers across our two production facilities.",
    linkedFamilyMember: "Khalid Hassan",
    openRoles: 3,
    initials: "HT",
    color: "oklch(0.65 0.14 50)",
  },
  {
    id: 5,
    name: "MediCare Clinics",
    industry: "Healthcare",
    size: "50–200 employees",
    hq: "Lahore, Punjab",
    branches: ["DHA Phase 5", "Gulberg", "Johar Town"],
    about:
      "MediCare Clinics is a network of modern outpatient healthcare facilities providing general medicine, specialist consultations, and diagnostics across Lahore. We are currently expanding and hiring experienced medical and administrative professionals.",
    linkedFamilyMember: "Dr. Zainab Mirza",
    openRoles: 5,
    initials: "MC",
    color: "oklch(0.58 0.22 25)",
  },
];

const JOBS: JobEnhanced[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    description:
      "Build and maintain scalable web applications using React, Node.js, and AWS. You'll be part of a cross-functional team delivering world-class products for our global clients.",
    companyId: 1,
    type: "Full Time",
    scope: "Local",
    salary: "PKR 150,000 – 200,000/mo",
    location: "Lahore (Hybrid)",
    postedAt: "2 days ago",
    skills: ["React", "Node.js", "AWS", "TypeScript", "GraphQL"],
    deadline: "Mar 20, 2026",
    applied: false,
  },
  {
    id: 2,
    title: "Frontend Developer",
    description:
      "Create pixel-perfect UI components using React and Tailwind CSS. Work closely with designers and backend engineers to deliver seamless user experiences for clients worldwide.",
    companyId: 1,
    type: "Full Time",
    scope: "Global",
    salary: "$2,500 – $3,500/mo",
    location: "Remote (Global)",
    postedAt: "3 days ago",
    skills: ["React", "Tailwind CSS", "TypeScript", "Figma"],
    deadline: "Mar 25, 2026",
    applied: true,
  },
  {
    id: 3,
    title: "Primary School Teacher (Grade 1–5)",
    description:
      "Deliver engaging and age-appropriate lessons using the Cambridge curriculum. Strong communication skills and patience required. Previous BEACONHOUSE experience preferred.",
    companyId: 2,
    type: "Full Time",
    scope: "Local",
    salary: "PKR 60,000 – 80,000/mo",
    location: "Islamabad",
    postedAt: "5 days ago",
    skills: ["Cambridge Curriculum", "Child Psychology", "English"],
    deadline: "Mar 30, 2026",
    applied: false,
  },
  {
    id: 4,
    title: "Math & Science Tutor",
    description:
      "Part-time online tutoring for O-Level students. Flexible schedule — choose your own hours. Strong math and science knowledge required with O/A level teaching experience.",
    companyId: 2,
    type: "Part Time",
    scope: "Global",
    salary: "PKR 800 – 1,200/hr",
    location: "Online",
    postedAt: "1 week ago",
    skills: ["Mathematics", "Physics", "O-Level"],
    deadline: "Apr 5, 2026",
    applied: false,
  },
  {
    id: 5,
    title: "Food Delivery Rider",
    description:
      "Join the QuickEats delivery fleet. Own motorcycle required. Earn per delivery with surge pricing during peak hours. Flexible schedule — set your own working hours.",
    companyId: 3,
    type: "Delivery",
    scope: "Local",
    salary: "PKR 600–900/delivery",
    location: "Karachi",
    postedAt: "1 day ago",
    skills: ["Motorcycle", "Navigation", "Time Management"],
    deadline: "Apr 1, 2026",
    commissionRate: "PKR 700/delivery",
    applied: false,
  },
  {
    id: 6,
    title: "Delivery Operations Manager",
    description:
      "Manage fleet logistics, rider performance, and delivery zones for QuickEats Lahore region. 3+ years supply chain or logistics experience required.",
    companyId: 3,
    type: "Full Time",
    scope: "Local",
    salary: "PKR 80,000 – 110,000/mo",
    location: "Lahore",
    postedAt: "4 days ago",
    skills: ["Logistics", "Fleet Management", "Excel", "Leadership"],
    deadline: "Mar 28, 2026",
    applied: false,
  },
  {
    id: 7,
    title: "Accounts & Finance Manager",
    description:
      "Oversee accounts payable/receivable, monthly financial reporting, and tax compliance for our Lahore and Faisalabad facilities. CA or ACCA qualification required.",
    companyId: 4,
    type: "Full Time",
    scope: "Local",
    salary: "PKR 100,000 – 130,000/mo",
    location: "Lahore",
    postedAt: "5 days ago",
    skills: ["ACCA", "QuickBooks", "Tax", "Financial Reporting"],
    deadline: "Apr 10, 2026",
    applied: false,
  },
  {
    id: 8,
    title: "Export Sales Coordinator",
    description:
      "Coordinate with European and US buyers for export orders. Manage order processing, shipping documentation, and client communication. Fluent English required.",
    companyId: 4,
    type: "Contract",
    scope: "Global",
    salary: "PKR 70,000 – 90,000/mo",
    location: "Lahore / Remote",
    postedAt: "1 week ago",
    skills: ["Export Documentation", "Communication", "SAP", "Negotiation"],
    deadline: "Apr 15, 2026",
    applied: false,
  },
  {
    id: 9,
    title: "General Physician (MBBS)",
    description:
      "Provide outpatient consultations at our DHA Phase 5 clinic. 2+ years post-MBBS experience required. PMDC registered. Competitive salary + performance bonuses.",
    companyId: 5,
    type: "Full Time",
    scope: "Local",
    salary: "PKR 120,000 – 160,000/mo",
    location: "DHA Phase 5, Lahore",
    postedAt: "3 days ago",
    skills: ["MBBS", "PMDC", "Diagnostics", "Patient Care"],
    deadline: "Apr 5, 2026",
    applied: false,
  },
  {
    id: 10,
    title: "Medical Receptionist",
    description:
      "Manage patient scheduling, front desk operations, and insurance coordination for our Gulberg clinic. Hospitality or medical admin background preferred.",
    companyId: 5,
    type: "Part Time",
    scope: "Local",
    salary: "PKR 30,000 – 45,000/mo",
    location: "Gulberg, Lahore",
    postedAt: "2 days ago",
    skills: ["MS Office", "Patient Scheduling", "Communication"],
    deadline: "Mar 25, 2026",
    applied: false,
  },
  {
    id: 11,
    title: "Full-Stack Dev (Freelance)",
    description:
      "Build a SaaS MVP using Next.js and Supabase. 3-month contract with possibility of extension. Strong portfolio of shipped products required.",
    companyId: 1,
    type: "Freelance",
    scope: "Global",
    salary: "$40–60/hr",
    location: "Remote",
    postedAt: "6 hrs ago",
    skills: ["Next.js", "Supabase", "PostgreSQL", "Stripe"],
    deadline: "Mar 18, 2026",
    applied: false,
  },
  {
    id: 12,
    title: "International Delivery Partner",
    description:
      "Cross-city and inter-province delivery using van or car. Fixed + commission-based structure. Long haul experience preferred.",
    companyId: 3,
    type: "Delivery",
    scope: "Global",
    salary: "PKR 1,200/delivery",
    location: "Nationwide",
    postedAt: "2 days ago",
    skills: ["Long Haul Driving", "Navigation", "Van/Car"],
    deadline: "Apr 1, 2026",
    commissionRate: "PKR 1,200/delivery",
    applied: false,
  },
];

const APPLICANTS: Applicant[] = [
  {
    id: 1,
    name: "Hamza Raza",
    jobId: 1,
    stage: "Shortlisted",
    appliedAt: "Feb 28, 2026",
    note: "Strong React experience, 5 years. Good portfolio.",
    skills: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    name: "Sana Malik",
    jobId: 1,
    stage: "Interview Scheduled",
    appliedAt: "Feb 27, 2026",
    note: "Interview on Mar 5 at 3PM. Works at Arbisoft currently.",
    skills: ["React", "AWS", "GraphQL"],
  },
  {
    id: 3,
    name: "Bilal Chaudhry",
    jobId: 1,
    stage: "Applied",
    appliedAt: "Mar 1, 2026",
    note: "",
    skills: ["Vue.js", "Python", "Django"],
  },
  {
    id: 4,
    name: "Ayesha Tariq",
    jobId: 2,
    stage: "Hired",
    appliedAt: "Feb 20, 2026",
    note: "Hired! Joining March 15. Excellent candidate.",
    skills: ["React", "Figma", "Tailwind"],
  },
  {
    id: 5,
    name: "Zara Siddiqui",
    jobId: 3,
    stage: "Applied",
    appliedAt: "Mar 1, 2026",
    note: "",
    skills: ["Cambridge Curriculum", "English", "Science"],
  },
  {
    id: 6,
    name: "Kamran Ali",
    jobId: 3,
    stage: "Rejected",
    appliedAt: "Feb 25, 2026",
    note: "Not enough experience. Only 6 months.",
    skills: ["Teaching", "Urdu"],
  },
  {
    id: 7,
    name: "Nadia Hussain",
    jobId: 9,
    stage: "Interview Scheduled",
    appliedAt: "Feb 26, 2026",
    note: "Interview scheduled Mar 8, 10AM at DHA clinic.",
    skills: ["MBBS", "PMDC", "Cardiology"],
  },
  {
    id: 8,
    name: "Omar Qureshi",
    jobId: 7,
    stage: "Shortlisted",
    appliedAt: "Mar 2, 2026",
    note: "ACCA finalist. Previous role at Hassan & Co.",
    skills: ["ACCA", "QuickBooks", "SAP"],
  },
];

const DELIVERY_RIDERS: DeliveryRider[] = [
  {
    id: 1,
    name: "Zubair Ahmed",
    vehicle: "Motorcycle",
    scope: "Local",
    area: "Lahore (DHA, Gulberg, Model Town)",
    available: true,
    completedDeliveries: 342,
    totalEarned: "PKR 239,400",
  },
  {
    id: 2,
    name: "Shahbaz Khan",
    vehicle: "Van",
    scope: "Global",
    area: "Punjab & KPK provinces",
    available: false,
    completedDeliveries: 128,
    totalEarned: "PKR 153,600",
  },
  {
    id: 3,
    name: "Ali Raza",
    vehicle: "Bicycle",
    scope: "Local",
    area: "Johar Town, Gulshan-e-Ravi",
    available: true,
    completedDeliveries: 87,
    totalEarned: "PKR 43,500",
  },
  {
    id: 4,
    name: "Imran Butt",
    vehicle: "Car",
    scope: "Global",
    area: "Nationwide",
    available: true,
    completedDeliveries: 214,
    totalEarned: "PKR 256,800",
  },
];

const FREELANCERS: FreelancerProfile[] = [
  {
    id: 1,
    name: "Arslan Mehmood",
    title: "Full-Stack Engineer & UI/UX Designer",
    skills: ["React", "Next.js", "Figma", "Node.js", "PostgreSQL"],
    hourlyRate: "$45/hr",
    portfolio: "arslanmehmood.dev",
    rating: 4.9,
    completedJobs: 47,
  },
  {
    id: 2,
    name: "Fareeha Iqbal",
    title: "Content Writer & SEO Specialist",
    skills: ["SEO", "Blog Writing", "Copywriting", "Keyword Research"],
    hourlyRate: "$20/hr",
    portfolio: "fareehaiqbal.com",
    rating: 4.7,
    completedJobs: 132,
  },
  {
    id: 3,
    name: "Tariq Jamil",
    title: "Data Scientist & ML Engineer",
    skills: ["Python", "TensorFlow", "Scikit-learn", "SQL", "Power BI"],
    hourlyRate: "$55/hr",
    portfolio: "tariqjamil.ai",
    rating: 5.0,
    completedJobs: 23,
  },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const JOB_TYPE_COLORS: Record<JobType, string> = {
  "Full Time": "oklch(0.52 0.14 155)",
  "Part Time": "oklch(0.65 0.14 50)",
  Delivery: "oklch(0.72 0.17 55)",
  Freelance: "oklch(0.55 0.22 280)",
  Contract: "oklch(0.60 0.20 190)",
};

const ATS_COLORS: Record<ATSStage, { bg: string; text: string; row: string }> =
  {
    Applied: {
      bg: "oklch(0.55 0.18 240 / 0.15)",
      text: "oklch(0.50 0.16 240)",
      row: "oklch(0.55 0.18 240 / 0.04)",
    },
    Shortlisted: {
      bg: "oklch(0.72 0.17 85 / 0.15)",
      text: "oklch(0.55 0.14 65)",
      row: "oklch(0.72 0.17 85 / 0.05)",
    },
    "Interview Scheduled": {
      bg: "oklch(0.55 0.22 280 / 0.15)",
      text: "oklch(0.55 0.22 280)",
      row: "oklch(0.55 0.22 280 / 0.04)",
    },
    Hired: {
      bg: "oklch(0.52 0.14 155 / 0.15)",
      text: "oklch(0.32 0.085 155)",
      row: "oklch(0.52 0.14 155 / 0.06)",
    },
    Rejected: {
      bg: "oklch(0.55 0.22 25 / 0.12)",
      text: "oklch(0.45 0.18 25)",
      row: "oklch(0.55 0.22 25 / 0.04)",
    },
  };

function getCompany(id: number) {
  return COMPANIES.find((c) => c.id === id);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CompanyAvatar({
  company,
  size = "md",
}: {
  company: Company;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
  };
  return (
    <div
      className={`${sizes[size]} rounded-xl flex items-center justify-center font-display font-bold text-white shrink-0`}
      style={{ background: company.color }}
    >
      {company.initials}
    </div>
  );
}

function TypeBadge({ type }: { type: JobType }) {
  const color = JOB_TYPE_COLORS[type];
  return (
    <span
      className="inline-flex items-center text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
      style={{ background: `${color}18`, color }}
    >
      {type}
    </span>
  );
}

function ScopeBadge({ scope }: { scope: JobScope }) {
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
      style={
        scope === "Local"
          ? {
              background: "oklch(0.60 0.20 190 / 0.15)",
              color: "oklch(0.40 0.14 190)",
            }
          : {
              background: "oklch(0.55 0.18 240 / 0.15)",
              color: "oklch(0.45 0.14 240)",
            }
      }
    >
      {scope === "Global" ? <Globe2 size={9} /> : <MapPin size={9} />}
      {scope}
    </span>
  );
}

function ATSStagePill({ stage }: { stage: ATSStage }) {
  const cfg = ATS_COLORS[stage];
  return (
    <span
      className="inline-flex text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
      style={{ background: cfg.bg, color: cfg.text }}
    >
      {stage}
    </span>
  );
}

// ─── Tab 1: Browse ────────────────────────────────────────────────────────────

function BrowseTab({
  jobs,
  onApply,
}: {
  jobs: JobEnhanced[];
  onApply: (id: number) => void;
}) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"All" | JobType>("All");
  const [scopeFilter, setScopeFilter] = useState<"All" | JobScope>("All");
  const [industryFilter, setIndustryFilter] = useState("All");

  const industries = [
    "All",
    ...Array.from(new Set(COMPANIES.map((c) => c.industry))),
  ];

  const filtered = jobs.filter((j) => {
    const company = getCompany(j.companyId);
    const searchMatch =
      search === "" ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      (company?.name ?? "").toLowerCase().includes(search.toLowerCase()) ||
      j.location.toLowerCase().includes(search.toLowerCase());
    const typeMatch = typeFilter === "All" || j.type === typeFilter;
    const scopeMatch = scopeFilter === "All" || j.scope === scopeFilter;
    const industryMatch =
      industryFilter === "All" || company?.industry === industryFilter;
    return searchMatch && typeMatch && scopeMatch && industryMatch;
  });

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="relative flex-1 min-w-[180px]">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search jobs, companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-9 text-sm"
          />
        </div>
        <Select
          value={typeFilter}
          onValueChange={(v) => setTypeFilter(v as "All" | JobType)}
        >
          <SelectTrigger className="w-36 h-9 text-xs font-label">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Types</SelectItem>
            <SelectItem value="Full Time">Full Time</SelectItem>
            <SelectItem value="Part Time">Part Time</SelectItem>
            <SelectItem value="Delivery">Delivery</SelectItem>
            <SelectItem value="Freelance">Freelance</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={scopeFilter}
          onValueChange={(v) => setScopeFilter(v as "All" | JobScope)}
        >
          <SelectTrigger className="w-32 h-9 text-xs font-label">
            <SelectValue placeholder="Scope" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Scopes</SelectItem>
            <SelectItem value="Local">Local</SelectItem>
            <SelectItem value="Global">Global</SelectItem>
          </SelectContent>
        </Select>
        <Select value={industryFilter} onValueChange={setIndustryFilter}>
          <SelectTrigger className="w-44 h-9 text-xs font-label">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((ind) => (
              <SelectItem key={ind} value={ind}>
                {ind}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Briefcase
            size={40}
            className="mx-auto text-muted-foreground/30 mb-4"
          />
          <p className="text-muted-foreground font-label">
            No jobs found matching your search
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((job, i) => {
            const company = getCompany(job.companyId);
            if (!company) return null;
            const applied = job.applied;
            return (
              <div
                key={job.id}
                className="bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all animate-fade-up"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <CompanyAvatar company={company} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-label font-semibold text-foreground text-sm leading-tight">
                        {job.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {company.name}
                      </p>
                    </div>
                    <TypeBadge type={job.type} />
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {job.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-label px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="text-[10px] font-label px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        +{job.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <ScopeBadge scope={job.scope} />
                    <span className="text-xs font-label font-medium text-foreground">
                      {job.salary}
                    </span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <MapPin size={10} />
                      {job.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Clock size={10} />
                      {job.postedAt}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      Due: {job.deadline}
                    </span>
                  </div>

                  {job.commissionRate && (
                    <div
                      className="text-xs font-label font-semibold mb-3 px-3 py-1.5 rounded-lg flex items-center gap-2"
                      style={{
                        background: "oklch(0.72 0.17 55 / 0.12)",
                        color: "oklch(0.55 0.14 55)",
                      }}
                    >
                      <Zap size={12} />
                      Commission: {job.commissionRate}
                    </div>
                  )}

                  <Button
                    size="sm"
                    className="w-full h-8 text-xs font-label"
                    variant={applied ? "outline" : "default"}
                    onClick={() => !applied && onApply(job.id)}
                    disabled={applied}
                  >
                    {applied ? (
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2
                          size={13}
                          style={{ color: "oklch(0.52 0.14 155)" }}
                        />
                        Applied
                      </span>
                    ) : (
                      "Apply Now"
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Tab 2: Companies ─────────────────────────────────────────────────────────

function CompaniesTab({
  jobs,
  onApply,
}: { jobs: JobEnhanced[]; onApply: (id: number) => void }) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {COMPANIES.map((company, i) => {
          const companyJobs = jobs.filter((j) => j.companyId === company.id);
          return (
            <button
              key={company.id}
              type="button"
              className="bg-card border border-border rounded-xl p-5 text-left hover:shadow-card-hover transition-all animate-fade-up cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={() => {
                setSelectedCompany(company);
                setSheetOpen(true);
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <CompanyAvatar company={company} size="lg" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-foreground text-sm">
                    {company.name}
                  </h3>
                  <span
                    className="inline-flex text-[10px] font-label font-semibold px-2 py-0.5 rounded-full mt-1"
                    style={{
                      background: `${company.color}18`,
                      color: company.color,
                    }}
                  >
                    {company.industry}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users size={12} />
                  <span>{company.size}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin size={12} />
                  <span>{company.hq}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Building2 size={12} />
                  <span>
                    {company.branches.length} branch
                    {company.branches.length > 1 ? "es" : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TreePine size={12} />
                  <span className="font-medium text-foreground">
                    {company.linkedFamilyMember}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  Family Owner
                </span>
                <span
                  className="text-xs font-label font-bold"
                  style={{ color: company.color }}
                >
                  {companyJobs.length} open roles
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          {selectedCompany && (
            <>
              <SheetHeader className="mb-6">
                <div className="flex items-center gap-4">
                  <CompanyAvatar company={selectedCompany} size="lg" />
                  <div>
                    <SheetTitle className="font-display text-xl">
                      {selectedCompany.name}
                    </SheetTitle>
                    <span
                      className="inline-flex text-xs font-label font-semibold px-2.5 py-1 rounded-full mt-1"
                      style={{
                        background: `${selectedCompany.color}18`,
                        color: selectedCompany.color,
                      }}
                    >
                      {selectedCompany.industry}
                    </span>
                  </div>
                </div>
              </SheetHeader>

              <div className="space-y-5">
                <div>
                  <p className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wide mb-2">
                    About
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedCompany.about}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wide mb-2">
                    Details
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-muted-foreground" />
                      <span className="font-semibold">HQ:</span>
                      <span className="text-muted-foreground">
                        {selectedCompany.hq}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={14} className="text-muted-foreground" />
                      <span className="font-semibold">Size:</span>
                      <span className="text-muted-foreground">
                        {selectedCompany.size}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <TreePine
                        size={14}
                        style={{ color: selectedCompany.color }}
                      />
                      <span className="font-semibold">Family Owner:</span>
                      <span style={{ color: selectedCompany.color }}>
                        {selectedCompany.linkedFamilyMember}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wide mb-2">
                    Branches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCompany.branches.map((b) => (
                      <span
                        key={b}
                        className="text-xs font-label px-3 py-1 rounded-full bg-secondary text-foreground"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wide mb-3">
                    Open Roles
                  </p>
                  <div className="space-y-3">
                    {jobs
                      .filter((j) => j.companyId === selectedCompany.id)
                      .map((job) => (
                        <div
                          key={job.id}
                          className="flex items-center justify-between p-3 bg-secondary/40 rounded-lg"
                        >
                          <div>
                            <p className="text-sm font-label font-semibold text-foreground">
                              {job.title}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <TypeBadge type={job.type} />
                              <ScopeBadge scope={job.scope} />
                            </div>
                          </div>
                          <Button
                            size="sm"
                            className="h-7 text-xs font-label"
                            variant={job.applied ? "outline" : "default"}
                            onClick={() => !job.applied && onApply(job.id)}
                            disabled={job.applied}
                          >
                            {job.applied ? "Applied" : "Apply"}
                          </Button>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

// ─── Tab 3: Recruiter ─────────────────────────────────────────────────────────

interface PostJobFormData {
  title: string;
  description: string;
  type: JobType;
  scope: JobScope;
  salary: string;
  location: string;
  skills: string;
  deadline: string;
  commissionRate: string;
}

const DEFAULT_POST_FORM: PostJobFormData = {
  title: "",
  description: "",
  type: "Full Time",
  scope: "Local",
  salary: "",
  location: "",
  skills: "",
  deadline: "",
  commissionRate: "",
};

function RecruiterTab({
  jobs,
  setJobs,
}: {
  jobs: JobEnhanced[];
  setJobs: React.Dispatch<React.SetStateAction<JobEnhanced[]>>;
}) {
  const [hasCompany, setHasCompany] = useState(false);
  const [myCompany, setMyCompany] = useState<Company | null>(null);
  const [applicants, setApplicants] = useState<Applicant[]>(APPLICANTS);
  const [postOpen, setPostOpen] = useState(false);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [form, setForm] = useState<PostJobFormData>(DEFAULT_POST_FORM);
  const [companyForm, setCompanyForm] = useState({
    name: "",
    industry: "",
    size: "",
    hq: "",
    about: "",
    linkedMember: "",
  });

  const myPostedJobs = jobs.filter((j) => j.myPosting);

  const handleCreateCompany = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyForm.name.trim()) return;
    const newCompany: Company = {
      id: Date.now(),
      name: companyForm.name,
      industry: companyForm.industry || "Technology",
      size: companyForm.size || "1–10 employees",
      hq: companyForm.hq || "Pakistan",
      branches: [],
      about: companyForm.about || "A growing business.",
      linkedFamilyMember: companyForm.linkedMember || "You",
      openRoles: 0,
      initials: companyForm.name.slice(0, 2).toUpperCase(),
      color: "oklch(0.55 0.22 280)",
    };
    setMyCompany(newCompany);
    setHasCompany(true);
    toast.success(`${newCompany.name} created!`);
  };

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !myCompany) return;
    const newJob: JobEnhanced = {
      id: Date.now(),
      title: form.title,
      description: form.description || "No description provided.",
      companyId: myCompany.id,
      type: form.type,
      scope: form.scope,
      salary: form.salary || "Negotiable",
      location: form.location || "Pakistan",
      postedAt: "Just now",
      skills: form.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      deadline: form.deadline || "Open",
      commissionRate:
        form.type === "Delivery" && form.commissionRate
          ? form.commissionRate
          : undefined,
      applied: false,
      myPosting: true,
    };
    setJobs((p) => [newJob, ...p]);
    toast.success("Job posted successfully!");
    setPostOpen(false);
    setForm(DEFAULT_POST_FORM);
  };

  const updateApplicantStage = (applicantId: number, stage: ATSStage) => {
    setApplicants((prev) =>
      prev.map((a) => (a.id === applicantId ? { ...a, stage } : a)),
    );
  };

  const updateApplicantNote = (applicantId: number, note: string) => {
    setApplicants((prev) =>
      prev.map((a) => (a.id === applicantId ? { ...a, note } : a)),
    );
  };

  if (!hasCompany) {
    return (
      <div className="max-w-xl mx-auto py-8">
        <div className="bg-card border border-border rounded-2xl p-8 text-center mb-8">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: "oklch(0.55 0.22 280 / 0.12)" }}
          >
            <Building2 size={28} style={{ color: "oklch(0.55 0.22 280)" }} />
          </div>
          <h2 className="font-display font-bold text-xl text-foreground mb-2">
            Create Your Company Profile
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Link your business from the Family Tree to start posting jobs and
            managing applicants.
          </p>
        </div>
        <form onSubmit={handleCreateCompany} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 col-span-2">
              <Label>Company Name *</Label>
              <Input
                placeholder="e.g. TechPK Solutions"
                value={companyForm.name}
                onChange={(e) =>
                  setCompanyForm((p) => ({ ...p, name: e.target.value }))
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Industry</Label>
              <Input
                placeholder="e.g. Technology"
                value={companyForm.industry}
                onChange={(e) =>
                  setCompanyForm((p) => ({ ...p, industry: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Company Size</Label>
              <Input
                placeholder="e.g. 50–200 employees"
                value={companyForm.size}
                onChange={(e) =>
                  setCompanyForm((p) => ({ ...p, size: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Headquarters</Label>
              <Input
                placeholder="e.g. Lahore, Pakistan"
                value={companyForm.hq}
                onChange={(e) =>
                  setCompanyForm((p) => ({ ...p, hq: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Linked Family Member</Label>
              <Input
                placeholder="Your name in Family Tree"
                value={companyForm.linkedMember}
                onChange={(e) =>
                  setCompanyForm((p) => ({
                    ...p,
                    linkedMember: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2 col-span-2">
              <Label>About the Company</Label>
              <Textarea
                rows={3}
                className="resize-none"
                placeholder="Brief description of your business..."
                value={companyForm.about}
                onChange={(e) =>
                  setCompanyForm((p) => ({ ...p, about: e.target.value }))
                }
              />
            </div>
          </div>
          <Button type="submit" className="w-full font-label">
            Create Company Profile
          </Button>
        </form>
      </div>
    );
  }

  // Dashboard once company is set up
  const totalApplicants = applicants.length;
  const hired = applicants.filter((a) => a.stage === "Hired").length;
  const interviews = applicants.filter(
    (a) => a.stage === "Interview Scheduled",
  ).length;

  return (
    <div>
      {/* Recruiter stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Total Postings",
            value: myPostedJobs.length + 2,
            color: "oklch(0.55 0.22 280)",
            icon: Briefcase,
          },
          {
            label: "Total Applicants",
            value: totalApplicants,
            color: "oklch(0.60 0.20 190)",
            icon: Users,
          },
          {
            label: "Hired",
            value: hired,
            color: "oklch(0.52 0.14 155)",
            icon: UserCheck,
          },
          {
            label: "Interviews Pending",
            value: interviews,
            color: "oklch(0.72 0.17 85)",
            icon: Clock,
          },
        ].map(({ label, value, color, icon: Icon }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-xl p-4"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
              style={{ background: `${color}15` }}
            >
              <Icon size={17} style={{ color }} />
            </div>
            <p className="text-2xl font-display font-bold text-foreground">
              {value}
            </p>
            <p className="text-xs text-muted-foreground font-label mt-0.5">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-bold text-foreground">
          Your Job Postings
        </h2>
        <Dialog open={postOpen} onOpenChange={setPostOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-2 font-label text-xs h-8">
              <Plus size={14} /> Post New Job
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-display">Post a New Job</DialogTitle>
            </DialogHeader>
            <form onSubmit={handlePostJob} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label>Job Title *</Label>
                <Input
                  placeholder="e.g. Senior Accountant"
                  value={form.title}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, title: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  rows={3}
                  className="resize-none"
                  placeholder="Describe the role..."
                  value={form.description}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, description: e.target.value }))
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select
                    value={form.type}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, type: v as JobType }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full Time">Full Time</SelectItem>
                      <SelectItem value="Part Time">Part Time</SelectItem>
                      <SelectItem value="Delivery">Delivery</SelectItem>
                      <SelectItem value="Freelance">Freelance</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Scope</Label>
                  <Select
                    value={form.scope}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, scope: v as JobScope }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Local">Local</SelectItem>
                      <SelectItem value="Global">Global</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Salary</Label>
                  <Input
                    placeholder="e.g. PKR 80,000/mo"
                    value={form.salary}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, salary: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input
                    placeholder="e.g. Lahore, Remote"
                    value={form.location}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, location: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Required Skills (comma-separated)</Label>
                <Input
                  placeholder="e.g. React, Node.js, AWS"
                  value={form.skills}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, skills: e.target.value }))
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Application Deadline</Label>
                  <Input
                    type="date"
                    value={form.deadline}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, deadline: e.target.value }))
                    }
                  />
                </div>
                {form.type === "Delivery" && (
                  <div className="space-y-2">
                    <Label>Commission Rate</Label>
                    <Input
                      placeholder="e.g. PKR 700/delivery"
                      value={form.commissionRate}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          commissionRate: e.target.value,
                        }))
                      }
                    />
                  </div>
                )}
              </div>
              <Button type="submit" className="w-full font-label">
                Post Job
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Posted jobs with applicant expansion */}
      <div className="space-y-3">
        {/* Sample company jobs shown for demo */}
        {JOBS.filter((j) => j.companyId === 1 || j.companyId === 2)
          .slice(0, 3)
          .concat(myPostedJobs)
          .map((job) => {
            const company = getCompany(job.companyId) ?? myCompany;
            if (!company) return null;
            const jobApplicants = applicants.filter((a) => a.jobId === job.id);
            const isExpanded = expandedJob === job.id;
            return (
              <div
                key={job.id}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center gap-4 p-4 hover:bg-secondary/20 transition-colors text-left"
                  onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                >
                  <CompanyAvatar company={company} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="font-label font-semibold text-foreground text-sm">
                      {job.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <TypeBadge type={job.type} />
                      <ScopeBadge scope={job.scope} />
                      <span className="text-xs text-muted-foreground">
                        {jobApplicants.length} applicant
                        {jobApplicants.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp
                      size={16}
                      className="text-muted-foreground shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={16}
                      className="text-muted-foreground shrink-0"
                    />
                  )}
                </button>

                {isExpanded && (
                  <div className="border-t border-border">
                    {jobApplicants.length === 0 ? (
                      <p className="text-sm text-muted-foreground text-center py-6">
                        No applicants yet
                      </p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-border bg-secondary/30">
                              <th className="text-left px-4 py-2.5 font-label font-semibold text-muted-foreground">
                                Applicant
                              </th>
                              <th className="text-left px-3 py-2.5 font-label font-semibold text-muted-foreground">
                                Applied
                              </th>
                              <th className="text-left px-3 py-2.5 font-label font-semibold text-muted-foreground">
                                Stage
                              </th>
                              <th className="text-left px-3 py-2.5 font-label font-semibold text-muted-foreground">
                                Skills
                              </th>
                              <th className="text-left px-3 py-2.5 font-label font-semibold text-muted-foreground">
                                Note
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {jobApplicants.map((applicant) => {
                              const atsCfg = ATS_COLORS[applicant.stage];
                              return (
                                <tr
                                  key={applicant.id}
                                  style={{ background: atsCfg.row }}
                                >
                                  <td className="px-4 py-2.5 font-label font-medium text-foreground whitespace-nowrap">
                                    {applicant.name}
                                  </td>
                                  <td className="px-3 py-2.5 text-muted-foreground whitespace-nowrap">
                                    {applicant.appliedAt}
                                  </td>
                                  <td className="px-3 py-2.5">
                                    <Select
                                      value={applicant.stage}
                                      onValueChange={(v) =>
                                        updateApplicantStage(
                                          applicant.id,
                                          v as ATSStage,
                                        )
                                      }
                                    >
                                      <SelectTrigger className="h-7 text-[10px] w-36 border-0 bg-transparent p-0 focus:ring-0">
                                        <ATSStagePill stage={applicant.stage} />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Applied">
                                          Applied
                                        </SelectItem>
                                        <SelectItem value="Shortlisted">
                                          Shortlisted
                                        </SelectItem>
                                        <SelectItem value="Interview Scheduled">
                                          Interview Scheduled
                                        </SelectItem>
                                        <SelectItem value="Hired">
                                          Hired
                                        </SelectItem>
                                        <SelectItem value="Rejected">
                                          Rejected
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </td>
                                  <td className="px-3 py-2.5">
                                    <div className="flex flex-wrap gap-1">
                                      {applicant.skills.slice(0, 2).map((s) => (
                                        <span
                                          key={s}
                                          className="text-[9px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground"
                                        >
                                          {s}
                                        </span>
                                      ))}
                                    </div>
                                  </td>
                                  <td className="px-3 py-2.5 min-w-[180px]">
                                    <Input
                                      className="h-7 text-xs"
                                      placeholder="Add note..."
                                      value={applicant.note}
                                      onChange={(e) =>
                                        updateApplicantNote(
                                          applicant.id,
                                          e.target.value,
                                        )
                                      }
                                    />
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

// ─── Tab 4: My Applications ───────────────────────────────────────────────────

function MyApplicationsTab({ jobs }: { jobs: JobEnhanced[] }) {
  const applied = jobs.filter((j) => j.applied);

  if (applied.length === 0) {
    return (
      <div className="text-center py-20">
        <Briefcase
          size={48}
          className="mx-auto text-muted-foreground/20 mb-4"
        />
        <h3 className="font-display font-bold text-foreground mb-2">
          No applications yet
        </h3>
        <p className="text-sm text-muted-foreground">
          Browse jobs to get started — your applications will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {applied.map((job, i) => {
        const company = getCompany(job.companyId);
        if (!company) return null;
        // Find applicant record if any
        const applicantRecord = APPLICANTS.find((a) => a.jobId === job.id);
        const stage: ATSStage = applicantRecord?.stage ?? "Applied";
        return (
          <div
            key={job.id}
            className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 animate-fade-up"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <CompanyAvatar company={company} />
            <div className="flex-1 min-w-0">
              <p className="font-label font-semibold text-foreground text-sm truncate">
                {job.title}
              </p>
              <p className="text-xs text-muted-foreground">{company.name}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <TypeBadge type={job.type} />
                <ScopeBadge scope={job.scope} />
              </div>
            </div>
            <div className="text-right shrink-0">
              <ATSStagePill stage={stage} />
              {applicantRecord?.note && (
                <p className="text-[10px] text-muted-foreground mt-1 max-w-[140px] line-clamp-1">
                  {applicantRecord.note}
                </p>
              )}
              <p className="text-[10px] text-muted-foreground mt-1">
                Applied: {applicantRecord?.appliedAt ?? "Recently"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Tab 5: Delivery ──────────────────────────────────────────────────────────

function DeliveryTab({
  jobs,
  onApply,
}: { jobs: JobEnhanced[]; onApply: (id: number) => void }) {
  const [scopeFilter, setScopeFilter] = useState<"All" | JobScope>("All");
  const [hasRiderProfile, setHasRiderProfile] = useState(true);
  const [riderForm, setRiderForm] = useState({
    vehicle: "",
    area: "",
    scope: "Local" as JobScope,
  });
  const [myRider] = useState<DeliveryRider>(DELIVERY_RIDERS[0]);
  const [available, setAvailable] = useState(myRider.available);

  const deliveryJobs = jobs.filter(
    (j) =>
      j.type === "Delivery" &&
      (scopeFilter === "All" || j.scope === scopeFilter),
  );

  const DELIVERY_HISTORY = [
    { orderId: "QE-2290", date: "Mar 1", amount: "PKR 700", status: "Paid" },
    { orderId: "QE-2245", date: "Feb 28", amount: "PKR 650", status: "Paid" },
    {
      orderId: "QE-2201",
      date: "Feb 28",
      amount: "PKR 700",
      status: "Pending",
    },
    { orderId: "QE-2188", date: "Feb 27", amount: "PKR 750", status: "Paid" },
    { orderId: "QE-2150", date: "Feb 26", amount: "PKR 700", status: "Paid" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Delivery jobs */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-foreground">
              Delivery Jobs
            </h2>
            <Select
              value={scopeFilter}
              onValueChange={(v) => setScopeFilter(v as "All" | JobScope)}
            >
              <SelectTrigger className="w-28 h-8 text-xs font-label">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Local">Local</SelectItem>
                <SelectItem value="Global">Global</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            {deliveryJobs.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                No delivery jobs found
              </p>
            ) : (
              deliveryJobs.map((job) => {
                const company = getCompany(job.companyId);
                if (!company) return null;
                return (
                  <div
                    key={job.id}
                    className="bg-card border border-border rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <CompanyAvatar company={company} size="sm" />
                      <div className="flex-1 min-w-0">
                        <p className="font-label font-semibold text-foreground text-sm">
                          {job.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {company.name}
                        </p>
                      </div>
                      <ScopeBadge scope={job.scope} />
                    </div>
                    {job.commissionRate && (
                      <div
                        className="text-base font-display font-bold mb-2"
                        style={{ color: "oklch(0.72 0.17 55)" }}
                      >
                        {job.commissionRate}
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {job.description}
                    </p>
                    <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                      <Truck size={12} />
                      <span>
                        Vehicle:{" "}
                        {job.skills.find(
                          (s) =>
                            s === "Motorcycle" ||
                            s === "Van/Car" ||
                            s === "Bicycle",
                        ) ?? "Any"}
                      </span>
                      <MapPin size={12} className="ml-2" />
                      <span>{job.location}</span>
                    </div>
                    <Button
                      size="sm"
                      className="w-full h-8 text-xs font-label"
                      variant={job.applied ? "outline" : "default"}
                      onClick={() => !job.applied && onApply(job.id)}
                      disabled={job.applied}
                    >
                      {job.applied ? "✓ Applied as Rider" : "Apply as Rider"}
                    </Button>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Rider profile */}
        <div>
          <h2 className="font-display font-bold text-foreground mb-4">
            My Rider Profile
          </h2>
          {hasRiderProfile ? (
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.72 0.17 55 / 0.15)" }}
                  >
                    <Truck size={22} style={{ color: "oklch(0.72 0.17 55)" }} />
                  </div>
                  <div>
                    <p className="font-label font-bold text-foreground">
                      {myRider.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {myRider.vehicle} • {myRider.scope}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setAvailable((v) => !v)}
                  className={`text-xs font-label font-bold px-3 py-1.5 rounded-full transition-all ${available ? "" : "opacity-60"}`}
                  style={
                    available
                      ? {
                          background: "oklch(0.52 0.14 155 / 0.15)",
                          color: "oklch(0.32 0.085 155)",
                        }
                      : {
                          background: "oklch(0.55 0.22 25 / 0.12)",
                          color: "oklch(0.45 0.18 25)",
                        }
                  }
                >
                  {available ? "● Available" : "● Offline"}
                </button>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Service Area</span>
                  <span className="font-label font-medium text-foreground text-xs">
                    {myRider.area}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Completed Deliveries
                  </span>
                  <span
                    className="font-display font-bold"
                    style={{ color: "oklch(0.72 0.17 55)" }}
                  >
                    {myRider.completedDeliveries}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Earned</span>
                  <span
                    className="font-display font-bold"
                    style={{ color: "oklch(0.52 0.14 155)" }}
                  >
                    {myRider.totalEarned}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wide mb-2">
                  Recent Deliveries
                </p>
                <div className="space-y-1.5">
                  {DELIVERY_HISTORY.map((d) => (
                    <div
                      key={d.orderId}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="font-mono text-muted-foreground">
                        {d.orderId}
                      </span>
                      <span className="text-muted-foreground">{d.date}</span>
                      <span className="font-label font-semibold text-foreground">
                        {d.amount}
                      </span>
                      <span
                        className="font-label px-2 py-0.5 rounded-full text-[10px]"
                        style={
                          d.status === "Paid"
                            ? {
                                background: "oklch(0.52 0.14 155 / 0.12)",
                                color: "oklch(0.32 0.085 155)",
                              }
                            : {
                                background: "oklch(0.72 0.17 85 / 0.15)",
                                color: "oklch(0.55 0.14 65)",
                              }
                        }
                      >
                        {d.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="text-center mb-5">
                <Truck
                  size={32}
                  className="mx-auto text-muted-foreground/30 mb-2"
                />
                <p className="text-sm text-muted-foreground">
                  Set up your rider profile to apply for delivery jobs
                </p>
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label>Vehicle Type</Label>
                  <Select
                    value={riderForm.vehicle}
                    onValueChange={(v) =>
                      setRiderForm((p) => ({ ...p, vehicle: v }))
                    }
                  >
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Select vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="Bicycle">Bicycle</SelectItem>
                      <SelectItem value="Car">Car</SelectItem>
                      <SelectItem value="Van">Van</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Service Area</Label>
                  <Input
                    placeholder="e.g. DHA Phase 5, Gulberg"
                    value={riderForm.area}
                    onChange={(e) =>
                      setRiderForm((p) => ({ ...p, area: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Scope</Label>
                  <Select
                    value={riderForm.scope}
                    onValueChange={(v) =>
                      setRiderForm((p) => ({ ...p, scope: v as JobScope }))
                    }
                  >
                    <SelectTrigger className="text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Local">Local</SelectItem>
                      <SelectItem value="Global">Global</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  className="w-full font-label"
                  onClick={() => setHasRiderProfile(true)}
                >
                  Create Rider Profile
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Tab 6: Freelancers ───────────────────────────────────────────────────────

function FreelancersTab({ jobs }: { jobs: JobEnhanced[] }) {
  const [freelancers, setFreelancers] =
    useState<FreelancerProfile[]>(FREELANCERS);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [regForm, setRegForm] = useState({
    name: "",
    title: "",
    skills: "",
    hourlyRate: "",
    portfolio: "",
  });

  const freelanceJobs = jobs.filter((j) => j.type === "Freelance");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regForm.name.trim()) return;
    const newFreelancer: FreelancerProfile = {
      id: Date.now(),
      name: regForm.name,
      title: regForm.title || "Freelancer",
      skills: regForm.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      hourlyRate: regForm.hourlyRate || "Negotiable",
      portfolio: regForm.portfolio || "",
      rating: 5.0,
      completedJobs: 0,
    };
    setFreelancers((p) => [newFreelancer, ...p]);
    toast.success("Freelancer profile created!");
    setRegisterOpen(false);
    setRegForm({
      name: "",
      title: "",
      skills: "",
      hourlyRate: "",
      portfolio: "",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display font-bold text-foreground">
          Freelancer Directory
        </h2>
        <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-2 font-label text-xs h-8">
              <Plus size={14} /> Register as Freelancer
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-display">
                Register as Freelancer
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleRegister} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label>Full Name *</Label>
                <Input
                  placeholder="e.g. Ahmed Khan"
                  value={regForm.name}
                  onChange={(e) =>
                    setRegForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Professional Title</Label>
                <Input
                  placeholder="e.g. Full-Stack Developer"
                  value={regForm.title}
                  onChange={(e) =>
                    setRegForm((p) => ({ ...p, title: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Skills (comma-separated)</Label>
                <Input
                  placeholder="e.g. React, Node.js, Python"
                  value={regForm.skills}
                  onChange={(e) =>
                    setRegForm((p) => ({ ...p, skills: e.target.value }))
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Hourly Rate</Label>
                  <Input
                    placeholder="e.g. $30/hr"
                    value={regForm.hourlyRate}
                    onChange={(e) =>
                      setRegForm((p) => ({ ...p, hourlyRate: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Portfolio URL</Label>
                  <Input
                    placeholder="yourwebsite.com"
                    value={regForm.portfolio}
                    onChange={(e) =>
                      setRegForm((p) => ({ ...p, portfolio: e.target.value }))
                    }
                  />
                </div>
              </div>
              <Button type="submit" className="w-full font-label">
                Create Profile
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Freelancer cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
        {freelancers.map((f, i) => (
          <div
            key={f.id}
            className="bg-card border border-border rounded-xl p-5 hover:shadow-card-hover transition-all animate-fade-up"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-white text-sm shrink-0"
                style={{ background: "oklch(0.55 0.22 280)" }}
              >
                {f.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-label font-bold text-foreground text-sm">
                  {f.name}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {f.title}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              {f.skills.slice(0, 4).map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-label px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p
                  className="text-xl font-display font-bold"
                  style={{ color: "oklch(0.55 0.22 280)" }}
                >
                  {f.hourlyRate}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={11}
                      style={{
                        color:
                          star <= Math.round(f.rating)
                            ? "oklch(0.72 0.17 85)"
                            : "oklch(var(--border))",
                        fill:
                          star <= Math.round(f.rating)
                            ? "oklch(0.72 0.17 85)"
                            : "none",
                      }}
                    />
                  ))}
                  <span className="text-xs font-label text-muted-foreground ml-1">
                    {f.rating}
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground">
                  {f.completedJobs} jobs done
                </p>
              </div>
            </div>
            <Button
              size="sm"
              className="w-full h-8 text-xs font-label"
              onClick={() => toast.success(`Hire request sent to ${f.name}`)}
            >
              Hire {f.name.split(" ")[0]}
            </Button>
          </div>
        ))}
      </div>

      {/* Freelance job listings */}
      {freelanceJobs.length > 0 && (
        <>
          <h2 className="font-display font-bold text-foreground mb-4">
            Freelance Job Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {freelanceJobs.map((job) => {
              const company = getCompany(job.companyId);
              if (!company) return null;
              return (
                <div
                  key={job.id}
                  className="bg-card border border-border rounded-xl p-4 flex items-start gap-4"
                >
                  <CompanyAvatar company={company} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="font-label font-semibold text-foreground text-sm">
                      {job.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {company.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <ScopeBadge scope={job.scope} />
                      <span
                        className="text-xs font-label font-bold"
                        style={{ color: "oklch(0.55 0.22 280)" }}
                      >
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="h-7 text-xs font-label shrink-0"
                    variant="outline"
                    onClick={() => toast.success(`Applied to ${job.title}`)}
                  >
                    Apply
                  </Button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Tab 7: Professional Network ─────────────────────────────────────────────

interface Connection {
  id: number;
  name: string;
  title: string;
  company: string;
  mutualConnections: number;
  location: string;
  initials: string;
  color: string;
  isConnected: boolean;
  isSuggested: boolean;
  endorsedSkills: string[];
  connectionType: "colleague" | "recruiter" | "mentor" | "client" | "family";
}

interface NetworkProfile {
  headline: string;
  summary: string;
  openToWork: boolean;
  openToHire: boolean;
  profileVisibility: "public" | "connections" | "private";
  showOnMap: boolean;
  skills: string[];
  languages: string[];
  certifications: string[];
  contactEmail: string;
  linkedinUrl: string;
  portfolioUrl: string;
  jobAlerts: boolean;
  weeklyDigest: boolean;
  connectionRequests: boolean;
  messageNotifications: boolean;
}

const SAMPLE_CONNECTIONS: Connection[] = [
  {
    id: 1,
    name: "Usman Khalid",
    title: "CTO at TechPK Solutions",
    company: "TechPK Solutions",
    mutualConnections: 12,
    location: "Lahore, Punjab",
    initials: "UK",
    color: "oklch(0.55 0.22 280)",
    isConnected: true,
    isSuggested: false,
    endorsedSkills: ["React", "Node.js", "Leadership"],
    connectionType: "colleague",
  },
  {
    id: 2,
    name: "Amina Siddiqui",
    title: "HR Manager at Beacon House",
    company: "Beacon House School",
    mutualConnections: 7,
    location: "Islamabad, ICT",
    initials: "AS",
    color: "oklch(0.60 0.20 190)",
    isConnected: true,
    isSuggested: false,
    endorsedSkills: ["Recruitment", "HR Strategy"],
    connectionType: "recruiter",
  },
  {
    id: 3,
    name: "Hassan Qureshi",
    title: "CEO at QuickEats",
    company: "QuickEats",
    mutualConnections: 5,
    location: "Karachi, Sindh",
    initials: "HQ",
    color: "oklch(0.72 0.17 55)",
    isConnected: true,
    isSuggested: false,
    endorsedSkills: ["Operations", "Logistics", "Strategy"],
    connectionType: "mentor",
  },
  {
    id: 4,
    name: "Zainab Mirza",
    title: "Lead Physician at MediCare",
    company: "MediCare Clinics",
    mutualConnections: 3,
    location: "Lahore, Punjab",
    initials: "ZM",
    color: "oklch(0.58 0.22 25)",
    isConnected: false,
    isSuggested: true,
    endorsedSkills: ["Medicine", "Patient Care"],
    connectionType: "colleague",
  },
  {
    id: 5,
    name: "Bilal Ahmed",
    title: "Product Manager at StartupPK",
    company: "StartupPK",
    mutualConnections: 9,
    location: "Lahore, Punjab",
    initials: "BA",
    color: "oklch(0.62 0.22 310)",
    isConnected: false,
    isSuggested: true,
    endorsedSkills: ["Product", "Agile", "UX"],
    connectionType: "colleague",
  },
  {
    id: 6,
    name: "Sadia Rahman",
    title: "Senior Developer at TechCorp",
    company: "TechCorp Pakistan",
    mutualConnections: 14,
    location: "Lahore, Punjab",
    initials: "SR",
    color: "oklch(0.55 0.22 280)",
    isConnected: false,
    isSuggested: true,
    endorsedSkills: ["React", "TypeScript", "GraphQL"],
    connectionType: "colleague",
  },
];

const DEFAULT_NETWORK_PROFILE: NetworkProfile = {
  headline: "Software Engineer · Full-Stack Developer · Open to Opportunities",
  summary:
    "Experienced full-stack developer with 5+ years building scalable web applications. Passionate about clean code, system design, and mentoring junior developers.",
  openToWork: true,
  openToHire: false,
  profileVisibility: "connections",
  showOnMap: true,
  skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "GraphQL"],
  languages: ["English (Fluent)", "Urdu (Native)", "Punjabi (Conversational)"],
  certifications: ["AWS Solutions Architect", "Google Cloud Professional"],
  contactEmail: "you@indyacentral.com",
  linkedinUrl: "",
  portfolioUrl: "",
  jobAlerts: true,
  weeklyDigest: true,
  connectionRequests: true,
  messageNotifications: true,
};

const CONNECTION_TYPE_COLORS: Record<
  Connection["connectionType"],
  { bg: string; text: string }
> = {
  colleague: {
    bg: "oklch(0.55 0.22 280 / 0.12)",
    text: "oklch(0.55 0.22 280)",
  },
  recruiter: {
    bg: "oklch(0.60 0.20 190 / 0.12)",
    text: "oklch(0.40 0.14 190)",
  },
  mentor: { bg: "oklch(0.72 0.17 85 / 0.12)", text: "oklch(0.55 0.14 65)" },
  client: { bg: "oklch(0.65 0.20 55 / 0.12)", text: "oklch(0.48 0.14 55)" },
  family: { bg: "oklch(0.62 0.22 350 / 0.12)", text: "oklch(0.55 0.22 350)" },
};

function NetworkTab() {
  const [profile, setProfile] = useState<NetworkProfile>(
    DEFAULT_NETWORK_PROFILE,
  );
  const [connections, setConnections] =
    useState<Connection[]>(SAMPLE_CONNECTIONS);
  const [activeSection, setActiveSection] = useState<
    "profile" | "connections" | "settings"
  >("profile");
  const [newSkill, setNewSkill] = useState("");
  const [newCert, setNewCert] = useState("");
  const [newLang, setNewLang] = useState("");
  const [saved, setSaved] = useState(false);
  const [connectionFilter, setConnectionFilter] = useState<
    "all" | "connected" | "suggested"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleConnect = (id: number) => {
    setConnections((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isConnected: true, isSuggested: false } : c,
      ),
    );
    const conn = connections.find((c) => c.id === id);
    toast.success(`Connection request sent to ${conn?.name}`);
  };

  const handleDisconnect = (id: number) => {
    setConnections((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isConnected: false, isSuggested: true } : c,
      ),
    );
  };

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile((p) => ({ ...p, skills: [...p.skills, newSkill.trim()] }));
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setProfile((p) => ({ ...p, skills: p.skills.filter((s) => s !== skill) }));
  };

  const addCert = () => {
    if (newCert.trim() && !profile.certifications.includes(newCert.trim())) {
      setProfile((p) => ({
        ...p,
        certifications: [...p.certifications, newCert.trim()],
      }));
      setNewCert("");
    }
  };

  const removeCert = (cert: string) => {
    setProfile((p) => ({
      ...p,
      certifications: p.certifications.filter((c) => c !== cert),
    }));
  };

  const addLang = () => {
    if (newLang.trim() && !profile.languages.includes(newLang.trim())) {
      setProfile((p) => ({
        ...p,
        languages: [...p.languages, newLang.trim()],
      }));
      setNewLang("");
    }
  };

  const handleSave = () => {
    setSaved(true);
    toast.success("Network profile saved!");
    setTimeout(() => setSaved(false), 2000);
  };

  const connectedList = connections.filter((c) => c.isConnected);
  const suggestedList = connections.filter((c) => c.isSuggested);

  const filteredConnections = connections.filter((c) => {
    if (connectionFilter === "connected" && !c.isConnected) return false;
    if (connectionFilter === "suggested" && !c.isSuggested) return false;
    if (
      searchQuery &&
      !c.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !c.company.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !c.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div>
      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Connections",
            value: connectedList.length,
            color: "oklch(0.55 0.22 280)",
            icon: Network,
          },
          {
            label: "Profile Views",
            value: 142,
            color: "oklch(0.60 0.20 190)",
            icon: Eye,
          },
          {
            label: "Suggestions",
            value: suggestedList.length,
            color: "oklch(0.65 0.20 55)",
            icon: UserPlus,
          },
          {
            label: "Endorsements",
            value: connections.reduce(
              (acc, c) => acc + c.endorsedSkills.length,
              0,
            ),
            color: "oklch(0.52 0.14 155)",
            icon: Award,
          },
        ].map(({ label, value, color, icon: Icon }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-xl p-4"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
              style={{ background: `${color}15` }}
            >
              <Icon size={17} style={{ color }} />
            </div>
            <p className="text-2xl font-display font-bold text-foreground">
              {value}
            </p>
            <p className="text-xs text-muted-foreground font-label mt-0.5">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Section nav */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(["profile", "connections", "settings"] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setActiveSection(s)}
            className="px-4 py-2 rounded-lg text-sm font-label font-medium transition-all capitalize"
            style={
              activeSection === s
                ? {
                    background: "oklch(0.55 0.22 280 / 0.15)",
                    color: "oklch(0.55 0.22 280)",
                    border: "1px solid oklch(0.55 0.22 280 / 0.3)",
                  }
                : {
                    background: "transparent",
                    color: "oklch(var(--muted-foreground))",
                    border: "1px solid oklch(var(--border))",
                  }
            }
            data-ocid={`network.section.${s}.tab`}
          >
            {s === "profile" && (
              <span className="flex items-center gap-1.5">
                <Users size={13} />
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </span>
            )}
            {s === "connections" && (
              <span className="flex items-center gap-1.5">
                <Network size={13} />
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </span>
            )}
            {s === "settings" && (
              <span className="flex items-center gap-1.5">
                <Settings2 size={13} />
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Profile Section ── */}
      {activeSection === "profile" && (
        <div className="space-y-5">
          {/* Open to work / hire banners */}
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                setProfile((p) => ({ ...p, openToWork: !p.openToWork }))
              }
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-label font-semibold transition-all"
              style={
                profile.openToWork
                  ? {
                      background: "oklch(0.52 0.14 155 / 0.12)",
                      borderColor: "oklch(0.52 0.14 155 / 0.4)",
                      color: "oklch(0.32 0.085 155)",
                    }
                  : {
                      background: "transparent",
                      borderColor: "oklch(var(--border))",
                      color: "oklch(var(--muted-foreground))",
                    }
              }
              data-ocid="network.open_to_work.toggle"
            >
              <Briefcase size={14} />
              {profile.openToWork ? "✓ Open to Work" : "Open to Work"}
            </button>
            <button
              type="button"
              onClick={() =>
                setProfile((p) => ({ ...p, openToHire: !p.openToHire }))
              }
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-label font-semibold transition-all"
              style={
                profile.openToHire
                  ? {
                      background: "oklch(0.55 0.22 280 / 0.12)",
                      borderColor: "oklch(0.55 0.22 280 / 0.4)",
                      color: "oklch(0.55 0.22 280)",
                    }
                  : {
                      background: "transparent",
                      borderColor: "oklch(var(--border))",
                      color: "oklch(var(--muted-foreground))",
                    }
              }
              data-ocid="network.open_to_hire.toggle"
            >
              <UserCheck size={14} />
              {profile.openToHire ? "✓ Open to Hire" : "Open to Hire"}
            </button>
          </div>

          {/* Profile headline & summary */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h3 className="font-display font-bold text-foreground text-sm flex items-center gap-2">
              <Users size={15} className="text-primary" />
              Professional Profile
            </h3>
            <div className="space-y-2">
              <Label className="text-xs font-label">Headline</Label>
              <Input
                value={profile.headline}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, headline: e.target.value }))
                }
                placeholder="e.g. Senior Engineer · Open to Opportunities"
                data-ocid="network.headline.input"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-label">Professional Summary</Label>
              <Textarea
                rows={3}
                className="resize-none"
                value={profile.summary}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, summary: e.target.value }))
                }
                placeholder="Describe your experience and goals..."
                data-ocid="network.summary.textarea"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-label">Contact Email</Label>
                <Input
                  type="email"
                  value={profile.contactEmail}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, contactEmail: e.target.value }))
                  }
                  placeholder="your@email.com"
                  data-ocid="network.contact_email.input"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-label">
                  Portfolio / Website
                </Label>
                <div className="relative">
                  <Link2
                    size={13}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    className="pl-8"
                    value={profile.portfolioUrl}
                    onChange={(e) =>
                      setProfile((p) => ({
                        ...p,
                        portfolioUrl: e.target.value,
                      }))
                    }
                    placeholder="yourwebsite.com"
                    data-ocid="network.portfolio_url.input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h3 className="font-display font-bold text-foreground text-sm flex items-center gap-2">
              <Zap size={15} className="text-primary" />
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 text-xs font-label px-3 py-1 rounded-full"
                  style={{
                    background: "oklch(0.55 0.22 280 / 0.12)",
                    color: "oklch(0.55 0.22 280)",
                  }}
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="hover:opacity-60 transition-opacity"
                  >
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                className="h-9 text-xs flex-1"
                placeholder="Add a skill..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill();
                  }
                }}
                data-ocid="network.add_skill.input"
              />
              <Button
                size="sm"
                className="h-9 font-label text-xs"
                onClick={addSkill}
                data-ocid="network.add_skill.button"
              >
                <Plus size={13} />
              </Button>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h3 className="font-display font-bold text-foreground text-sm flex items-center gap-2">
              <Award size={15} className="text-primary" />
              Certifications
            </h3>
            <div className="space-y-2">
              {profile.certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center justify-between px-3 py-2 bg-secondary/40 rounded-lg"
                >
                  <span className="text-sm font-label text-foreground">
                    {cert}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeCert(cert)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                className="h-9 text-xs flex-1"
                placeholder="Add a certification..."
                value={newCert}
                onChange={(e) => setNewCert(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addCert();
                  }
                }}
                data-ocid="network.add_cert.input"
              />
              <Button
                size="sm"
                className="h-9 font-label text-xs"
                onClick={addCert}
                data-ocid="network.add_cert.button"
              >
                <Plus size={13} />
              </Button>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h3 className="font-display font-bold text-foreground text-sm flex items-center gap-2">
              <Globe2 size={15} className="text-primary" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.languages.map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-1.5 text-xs font-label px-3 py-1 rounded-full bg-secondary text-foreground"
                >
                  {lang}
                  <button
                    type="button"
                    onClick={() =>
                      setProfile((p) => ({
                        ...p,
                        languages: p.languages.filter((l) => l !== lang),
                      }))
                    }
                    className="hover:opacity-60 transition-opacity"
                  >
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                className="h-9 text-xs flex-1"
                placeholder="e.g. English (Fluent)"
                value={newLang}
                onChange={(e) => setNewLang(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addLang();
                  }
                }}
                data-ocid="network.add_language.input"
              />
              <Button
                size="sm"
                className="h-9 font-label text-xs"
                onClick={addLang}
                data-ocid="network.add_language.button"
              >
                <Plus size={13} />
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              className="font-label px-8"
              data-ocid="network.save_profile.button"
            >
              {saved ? "✓ Saved" : "Save Profile"}
            </Button>
          </div>
        </div>
      )}

      {/* ── Connections Section ── */}
      {activeSection === "connections" && (
        <div className="space-y-5">
          {/* Search + filter bar */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 min-w-[200px]">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search connections..."
                className="pl-9 h-9 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-ocid="network.search_connections.input"
              />
            </div>
            <div className="flex gap-2">
              {(["all", "connected", "suggested"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setConnectionFilter(f)}
                  className="h-9 px-3 rounded-lg text-xs font-label transition-all capitalize"
                  style={
                    connectionFilter === f
                      ? {
                          background: "oklch(0.55 0.22 280 / 0.15)",
                          color: "oklch(0.55 0.22 280)",
                          border: "1px solid oklch(0.55 0.22 280 / 0.3)",
                        }
                      : {
                          background: "transparent",
                          border: "1px solid oklch(var(--border))",
                          color: "oklch(var(--muted-foreground))",
                        }
                  }
                  data-ocid={`network.filter.${f}.tab`}
                >
                  {f === "all"
                    ? `All (${connections.length})`
                    : f === "connected"
                      ? `Connected (${connectedList.length})`
                      : `Suggested (${suggestedList.length})`}
                </button>
              ))}
            </div>
          </div>

          {filteredConnections.length === 0 ? (
            <div className="text-center py-16">
              <Network
                size={40}
                className="mx-auto text-muted-foreground/30 mb-4"
              />
              <p className="text-muted-foreground font-label">
                No connections found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredConnections.map((conn, i) => {
                const typeCfg = CONNECTION_TYPE_COLORS[conn.connectionType];
                return (
                  <div
                    key={conn.id}
                    className="bg-card border border-border rounded-xl p-5 hover:shadow-card-hover transition-all animate-fade-up"
                    style={{ animationDelay: `${i * 0.04}s` }}
                    data-ocid={`network.connection.card.${i + 1}`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-white shrink-0"
                        style={{ background: conn.color }}
                      >
                        {conn.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-label font-bold text-foreground text-sm truncate">
                          {conn.name}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {conn.title}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                          <span
                            className="text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              background: typeCfg.bg,
                              color: typeCfg.text,
                            }}
                          >
                            {conn.connectionType}
                          </span>
                          {conn.isConnected && (
                            <span
                              className="text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                background: "oklch(0.52 0.14 155 / 0.12)",
                                color: "oklch(0.32 0.085 155)",
                              }}
                            >
                              Connected
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Building2 size={11} />
                        <span>{conn.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin size={11} />
                        <span>{conn.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users size={11} />
                        <span>{conn.mutualConnections} mutual connections</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {conn.endorsedSkills.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-label px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {conn.isConnected ? (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 h-8 text-xs font-label"
                          onClick={() =>
                            toast.success(`Message sent to ${conn.name}`)
                          }
                          data-ocid={`network.message.${i + 1}.button`}
                        >
                          Message
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 text-xs font-label text-muted-foreground hover:text-destructive"
                          onClick={() => handleDisconnect(conn.id)}
                          data-ocid={`network.disconnect.${i + 1}.button`}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        className="w-full h-8 text-xs font-label gap-1.5"
                        onClick={() => handleConnect(conn.id)}
                        data-ocid={`network.connect.${i + 1}.button`}
                      >
                        <UserPlus size={12} />
                        Connect
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Settings Section ── */}
      {activeSection === "settings" && (
        <div className="space-y-5 max-w-2xl">
          {/* Privacy & Visibility */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-5">
            <h3 className="font-display font-bold text-foreground text-sm flex items-center gap-2">
              <Eye size={15} className="text-primary" />
              Privacy & Visibility
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-label font-semibold text-foreground">
                    Profile Visibility
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Who can see your professional profile
                  </p>
                </div>
                <Select
                  value={profile.profileVisibility}
                  onValueChange={(v) =>
                    setProfile((p) => ({
                      ...p,
                      profileVisibility:
                        v as NetworkProfile["profileVisibility"],
                    }))
                  }
                >
                  <SelectTrigger
                    className="w-36 h-9 text-xs font-label"
                    data-ocid="network.visibility.select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="connections">
                      Connections Only
                    </SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-label font-semibold text-foreground">
                    Show on Geomap
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Show your professional pin on the Connections Map
                  </p>
                </div>
                <Switch
                  checked={profile.showOnMap}
                  onCheckedChange={(v) =>
                    setProfile((p) => ({ ...p, showOnMap: v }))
                  }
                  data-ocid="network.show_on_map.switch"
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-label font-semibold text-foreground">
                    Open to Work
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Show the "Open to Work" badge on your profile
                  </p>
                </div>
                <Switch
                  checked={profile.openToWork}
                  onCheckedChange={(v) =>
                    setProfile((p) => ({ ...p, openToWork: v }))
                  }
                  data-ocid="network.open_to_work_switch.switch"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-label font-semibold text-foreground">
                    Open to Hire
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Indicate that you are actively looking for talent
                  </p>
                </div>
                <Switch
                  checked={profile.openToHire}
                  onCheckedChange={(v) =>
                    setProfile((p) => ({ ...p, openToHire: v }))
                  }
                  data-ocid="network.open_to_hire_switch.switch"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-5">
            <h3 className="font-display font-bold text-foreground text-sm flex items-center gap-2">
              <Settings2 size={15} className="text-primary" />
              Notification Preferences
            </h3>
            <div className="space-y-4">
              {[
                {
                  key: "jobAlerts" as const,
                  label: "Job Alerts",
                  desc: "Get notified about jobs matching your skills and preferences",
                },
                {
                  key: "weeklyDigest" as const,
                  label: "Weekly Network Digest",
                  desc: "A weekly summary of your network activity and new opportunities",
                },
                {
                  key: "connectionRequests" as const,
                  label: "Connection Requests",
                  desc: "Get notified when someone wants to connect with you",
                },
                {
                  key: "messageNotifications" as const,
                  label: "Messages",
                  desc: "Notifications for new messages from connections",
                },
              ].map((n, i) => (
                <div key={n.key}>
                  {i > 0 && <Separator className="mb-4" />}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-label font-semibold text-foreground">
                        {n.label}
                      </p>
                      <p className="text-xs text-muted-foreground max-w-xs">
                        {n.desc}
                      </p>
                    </div>
                    <Switch
                      checked={profile[n.key]}
                      onCheckedChange={(v) =>
                        setProfile((p) => ({ ...p, [n.key]: v }))
                      }
                      data-ocid={`network.${n.key}.switch`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Danger zone */}
          <div className="bg-card border border-destructive/20 rounded-xl p-5 space-y-4">
            <h3 className="font-display font-bold text-destructive text-sm flex items-center gap-2">
              <EyeOff size={15} />
              Danger Zone
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-label font-semibold text-foreground">
                  Hide Professional Profile
                </p>
                <p className="text-xs text-muted-foreground max-w-xs">
                  Temporarily hide your profile from recruiters and connections.
                  You can re-enable it at any time.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-xs font-label text-destructive border-destructive/30 hover:bg-destructive/10"
                onClick={() =>
                  toast.info("Profile hidden from professional network")
                }
                data-ocid="network.hide_profile.button"
              >
                Hide Profile
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              className="font-label px-8"
              data-ocid="network.save_settings.button"
            >
              {saved ? "✓ Saved" : "Save Settings"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main JobsPage ────────────────────────────────────────────────────────────

export default function JobsPage() {
  const [jobs, setJobs] = useState<JobEnhanced[]>(JOBS);
  const [dismissedBanner, setDismissedBanner] = useState(false);

  const handleApply = (id: number) => {
    setJobs((prev) =>
      prev.map((j) => (j.id === id ? { ...j, applied: true } : j)),
    );
    const job = jobs.find((j) => j.id === id);
    toast.success(`Applied to ${job?.title ?? "job"}!`);
  };

  const appliedCount = jobs.filter((j) => j.applied).length;

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 animate-fade-up">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Jobs & Talent
          </h1>
          <p className="text-muted-foreground mt-1">
            {jobs.length} positions across {COMPANIES.length} companies
            {appliedCount > 0 && ` · ${appliedCount} applied`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.2), oklch(0.72 0.17 55 / 0.2))",
            }}
          >
            <Briefcase size={20} style={{ color: "oklch(0.55 0.22 280)" }} />
          </div>
        </div>
      </div>

      {/* Quick links banner */}
      {!dismissedBanner && (
        <div
          className="flex items-center justify-between gap-3 mb-5 px-4 py-3 rounded-xl border animate-fade-up"
          style={{
            background: "oklch(0.55 0.22 280 / 0.06)",
            borderColor: "oklch(0.55 0.22 280 / 0.2)",
          }}
        >
          <div className="flex items-center gap-2 flex-wrap">
            <Package size={14} style={{ color: "oklch(0.55 0.22 280)" }} />
            <span className="text-xs font-label text-foreground">
              Jobs are available across all modules —
            </span>
            <span className="text-xs text-muted-foreground">
              Community (Security) · Healthcare · Education · Real Estate ·
              Travel
            </span>
          </div>
          <button
            type="button"
            onClick={() => setDismissedBanner(true)}
            className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <Tabs defaultValue="browse">
        <TabsList className="mb-6 h-10 flex-wrap">
          <TabsTrigger value="browse" className="font-label text-xs">
            Browse Jobs
          </TabsTrigger>
          <TabsTrigger value="companies" className="font-label text-xs">
            Companies
          </TabsTrigger>
          <TabsTrigger value="recruiter" className="font-label text-xs">
            Recruiter
          </TabsTrigger>
          <TabsTrigger value="applications" className="font-label text-xs">
            My Applications {appliedCount > 0 && `(${appliedCount})`}
          </TabsTrigger>
          <TabsTrigger value="delivery" className="font-label text-xs">
            Delivery
          </TabsTrigger>
          <TabsTrigger value="freelancers" className="font-label text-xs">
            Freelancers
          </TabsTrigger>
          <TabsTrigger value="events" className="font-label text-xs">
            Events
          </TabsTrigger>
          <TabsTrigger value="network" className="font-label text-xs">
            Network
          </TabsTrigger>
        </TabsList>

        <TabsContent value="browse">
          <BrowseTab jobs={jobs} onApply={handleApply} />
        </TabsContent>

        <TabsContent value="companies">
          <CompaniesTab jobs={jobs} onApply={handleApply} />
        </TabsContent>

        <TabsContent value="recruiter">
          <RecruiterTab jobs={jobs} setJobs={setJobs} />
        </TabsContent>

        <TabsContent value="applications">
          <MyApplicationsTab jobs={jobs} />
        </TabsContent>

        <TabsContent value="delivery">
          <DeliveryTab jobs={jobs} onApply={handleApply} />
        </TabsContent>

        <TabsContent value="freelancers">
          <FreelancersTab jobs={jobs} />
        </TabsContent>

        <TabsContent value="events">
          <div className="p-2">
            <EventsTab moduleName="Jobs" moduleColor="oklch(0.52 0.14 155)" />
          </div>
        </TabsContent>

        <TabsContent value="network">
          <NetworkTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
