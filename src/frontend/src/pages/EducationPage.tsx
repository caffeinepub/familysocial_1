import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  BadgeCheck,
  BookMarked,
  BookOpen,
  Briefcase,
  Building2,
  Bus,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  DollarSign,
  Edit3,
  FileText,
  GraduationCap,
  Grid,
  Library,
  Loader2,
  LogIn,
  MapPin,
  MessageSquare,
  Microscope,
  PenTool,
  Play,
  Plus,
  School,
  Search,
  Send,
  ShoppingCart,
  Star,
  Trash2,
  TrendingUp,
  Trophy,
  UserCheck,
  UserCog,
  UserPlus,
  Users,
  Video,
  X,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import EventsTab from "../components/EventsTab";
import QuickAddBar from "../components/QuickAddBar";

// ─── Types ───────────────────────────────────────────────────────────────────

type Role = "student" | "parent" | "teacher" | "admin" | null;

// ─── Mock Data ───────────────────────────────────────────────────────────────

const SCHOOLS = [
  {
    id: 1,
    name: "Beacon House School System",
    city: "Lahore",
    branches: 12,
    established: 1975,
    logo: "BH",
  },
  {
    id: 2,
    name: "The City School",
    city: "Karachi",
    branches: 18,
    established: 1978,
    logo: "CS",
  },
  {
    id: 3,
    name: "Lahore Grammar School",
    city: "Lahore",
    branches: 6,
    established: 1979,
    logo: "LG",
  },
  {
    id: 4,
    name: "Army Public School",
    city: "Rawalpindi",
    branches: 9,
    established: 1981,
    logo: "AP",
  },
  {
    id: 5,
    name: "Roots International Schools",
    city: "Islamabad",
    branches: 14,
    established: 1988,
    logo: "RI",
  },
];

const STUDENT_SUBJECTS = [
  {
    id: 1,
    name: "Mathematics",
    teacher: "Mr. Kashif Raza",
    schedule: "Mon/Wed 8:00–9:00",
    grade: "A",
    progress: 88,
  },
  {
    id: 2,
    name: "Physics",
    teacher: "Ms. Sana Mirza",
    schedule: "Tue/Thu 9:00–10:00",
    grade: "B+",
    progress: 74,
  },
  {
    id: 3,
    name: "English",
    teacher: "Mr. Arif Hussain",
    schedule: "Mon/Wed/Fri 10:00–11:00",
    grade: "A",
    progress: 92,
  },
  {
    id: 4,
    name: "Urdu",
    teacher: "Ms. Nadia Akhtar",
    schedule: "Tue/Thu 11:00–12:00",
    grade: "A-",
    progress: 85,
  },
  {
    id: 5,
    name: "Chemistry",
    teacher: "Mr. Bilal Ahmed",
    schedule: "Mon/Wed 12:00–1:00",
    grade: "B",
    progress: 70,
  },
  {
    id: 6,
    name: "Biology",
    teacher: "Ms. Farah Khan",
    schedule: "Fri 8:00–10:00",
    grade: "A+",
    progress: 96,
  },
];

const STUDENT_ASSIGNMENTS = [
  {
    id: 1,
    subject: "Mathematics",
    title: "Calculus Problem Set 3",
    due: "2026-03-10",
    status: "pending",
    grade: null,
  },
  {
    id: 2,
    subject: "Physics",
    title: "Lab Report: Wave Motion",
    due: "2026-03-08",
    status: "submitted",
    grade: null,
  },
  {
    id: 3,
    subject: "English",
    title: "Essay: Climate Change",
    due: "2026-02-28",
    status: "graded",
    grade: "A",
  },
  {
    id: 4,
    subject: "Chemistry",
    title: "Periodic Table Quiz Prep",
    due: "2026-03-05",
    status: "graded",
    grade: "B+",
  },
  {
    id: 5,
    subject: "Biology",
    title: "Diagram: Human Digestive System",
    due: "2026-03-12",
    status: "pending",
    grade: null,
  },
];

const STUDENT_RESULTS = [
  {
    subject: "Mathematics",
    exam: "Mid-Term",
    marks: "88/100",
    grade: "A",
    remarks: "Excellent",
  },
  {
    subject: "Physics",
    exam: "Mid-Term",
    marks: "74/100",
    grade: "B+",
    remarks: "Good, needs improvement in optics",
  },
  {
    subject: "English",
    exam: "Mid-Term",
    marks: "92/100",
    grade: "A",
    remarks: "Outstanding writing skills",
  },
  {
    subject: "Urdu",
    exam: "Mid-Term",
    marks: "85/100",
    grade: "A-",
    remarks: "Very good",
  },
  {
    subject: "Chemistry",
    exam: "Mid-Term",
    marks: "70/100",
    grade: "B",
    remarks: "Focus on organic chemistry",
  },
  {
    subject: "Biology",
    exam: "Mid-Term",
    marks: "96/100",
    grade: "A+",
    remarks: "Perfect score in practicals",
  },
];

const STUDENT_ATTENDANCE = [
  { date: "2026-02-24", subject: "Mathematics", status: "present" },
  { date: "2026-02-24", subject: "Physics", status: "present" },
  { date: "2026-02-25", subject: "English", status: "absent" },
  { date: "2026-02-25", subject: "Urdu", status: "present" },
  { date: "2026-02-26", subject: "Chemistry", status: "excused" },
  { date: "2026-02-26", subject: "Biology", status: "present" },
  { date: "2026-02-27", subject: "Mathematics", status: "present" },
  { date: "2026-02-28", subject: "English", status: "present" },
];

const CHILDREN = [
  {
    id: 1,
    name: "Ahmed Tariq",
    class: "Grade 10",
    school: "Beacon House School System",
    attendance: 92,
    lastResult: "A",
  },
  {
    id: 2,
    name: "Ayesha Tariq",
    class: "Grade 7",
    school: "Lahore Grammar School",
    attendance: 87,
    lastResult: "B+",
  },
];

const PARENT_FEES = [
  {
    child: "Ahmed Tariq",
    month: "February 2026",
    tuition: 8500,
    lab: 500,
    library: 200,
    transport: 1200,
    total: 10400,
    status: "paid",
  },
  {
    child: "Ahmed Tariq",
    month: "March 2026",
    tuition: 8500,
    lab: 500,
    library: 200,
    transport: 1200,
    total: 10400,
    status: "due",
  },
  {
    child: "Ayesha Tariq",
    month: "February 2026",
    tuition: 7000,
    lab: 400,
    library: 150,
    transport: 1000,
    total: 8550,
    status: "paid",
  },
  {
    child: "Ayesha Tariq",
    month: "March 2026",
    tuition: 7000,
    lab: 400,
    library: 150,
    transport: 1000,
    total: 8550,
    status: "overdue",
  },
];

const TEACHER_STUDENTS = 156;
const TEACHER_TIMETABLE = [
  {
    day: "Mon",
    periods: [
      "Class 10A - Math",
      "Class 9B - Math",
      "Free",
      "Class 10B - Math",
      "Class 8A - Math",
      "Free",
      "Lab",
      "Admin",
    ],
  },
  {
    day: "Tue",
    periods: [
      "Free",
      "Class 10A - Math",
      "Class 9A - Math",
      "Free",
      "Class 10B - Math",
      "Class 8B - Math",
      "Free",
      "Staff Meeting",
    ],
  },
  {
    day: "Wed",
    periods: [
      "Class 10A - Math",
      "Class 9B - Math",
      "Free",
      "Class 10B - Math",
      "Class 8A - Math",
      "Free",
      "Lab",
      "Free",
    ],
  },
  {
    day: "Thu",
    periods: [
      "Free",
      "Class 10A - Math",
      "Class 9A - Math",
      "Class 10C - Math",
      "Free",
      "Class 8B - Math",
      "Free",
      "Free",
    ],
  },
  {
    day: "Fri",
    periods: [
      "Class 10A - Math",
      "Free",
      "Class 9B - Math",
      "Free",
      "Class 10B - Math",
      "Free",
      "Admin",
      "Free",
    ],
  },
];

const TEACHER_ASSIGNMENTS = [
  {
    id: 1,
    title: "Calculus Problem Set 3",
    subject: "Mathematics",
    class: "Class 10A",
    type: "group",
    due: "2026-03-10",
    submissions: 18,
    total: 28,
  },
  {
    id: 2,
    title: "Algebra Quiz Prep",
    subject: "Mathematics",
    class: "Class 9B",
    type: "individual",
    due: "2026-03-08",
    submissions: 22,
    total: 25,
  },
  {
    id: 3,
    title: "Statistics Practical",
    subject: "Mathematics",
    class: "Class 10B",
    type: "group",
    due: "2026-03-15",
    submissions: 5,
    total: 30,
  },
];

const TEACHER_QUIZZES = [
  {
    id: 1,
    title: "Mid-Term Math Quiz",
    subject: "Mathematics",
    class: "Class 10A",
    date: "2026-02-20",
    avgScore: 74,
    maxScore: 50,
  },
  {
    id: 2,
    title: "Algebra Test",
    subject: "Mathematics",
    class: "Class 9B",
    date: "2026-02-15",
    avgScore: 68,
    maxScore: 40,
  },
];

const TEACHER_TUTORIALS = [
  {
    id: 1,
    title: "Introduction to Calculus",
    subject: "Mathematics",
    url: "https://youtube.com/watch?v=example1",
    class: "Class 10A",
    views: 42,
  },
  {
    id: 2,
    title: "Solving Quadratic Equations",
    subject: "Mathematics",
    url: "https://youtube.com/watch?v=example2",
    class: "Class 9B",
    views: 67,
  },
  {
    id: 3,
    title: "Trigonometry Basics",
    subject: "Mathematics",
    url: "https://youtube.com/watch?v=example3",
    class: "Class 10B",
    views: 31,
  },
];

const TEACHER_ATTENDANCE_PENDING = [
  {
    id: 1,
    student: "Omar Farooq",
    class: "Class 10A",
    subject: "Mathematics",
    date: "2026-02-28",
    note: "I was unwell with fever, doctor's note attached",
  },
  {
    id: 2,
    student: "Hina Baig",
    class: "Class 9B",
    subject: "Mathematics",
    date: "2026-02-27",
    note: "Family emergency required immediate travel",
  },
  {
    id: 3,
    student: "Zain Malik",
    class: "Class 10A",
    subject: "Mathematics",
    date: "2026-02-26",
    note: "Power outage at home, could not attend online class",
  },
];

const FREELANCER_COURSES = [
  {
    id: 1,
    title: "Advanced Mathematics for O-Levels",
    price: 4500,
    enrolled: 34,
    rating: 4.8,
    category: "Mathematics",
  },
  {
    id: 2,
    title: "SAT Math Preparation",
    price: 6000,
    enrolled: 21,
    rating: 4.6,
    category: "Test Prep",
  },
  {
    id: 3,
    title: "Calculus from Scratch",
    price: 3500,
    enrolled: 58,
    rating: 4.9,
    category: "Mathematics",
  },
];

const SCHOOL_DEPARTMENTS = [
  {
    id: 1,
    name: "Science Department",
    head: "Dr. Amina Qureshi",
    teachers: 12,
    students: 340,
  },
  {
    id: 2,
    name: "Arts Department",
    head: "Mr. Sajid Rana",
    teachers: 8,
    students: 210,
  },
  {
    id: 3,
    name: "Commerce Department",
    head: "Ms. Lubna Siddiqui",
    teachers: 7,
    students: 185,
  },
  {
    id: 4,
    name: "Administration",
    head: "Mr. Tariq Mehmood",
    teachers: 4,
    students: 0,
  },
];

const SCHOOL_BRANCHES = [
  {
    id: 1,
    name: "Main Campus",
    city: "Lahore",
    address: "Gulberg III, Lahore",
    students: 850,
  },
  {
    id: 2,
    name: "DHA Branch",
    city: "Lahore",
    address: "DHA Phase 5, Lahore",
    students: 620,
  },
  {
    id: 3,
    name: "Johar Town Branch",
    city: "Lahore",
    address: "Johar Town, Lahore",
    students: 480,
  },
];

const PENDING_ENROLLMENTS = {
  students: [
    {
      id: 1,
      name: "Ali Hassan",
      class: "Grade 9",
      parent: "Mr. Hassan Raza",
      city: "Lahore",
      applied: "2026-02-25",
    },
    {
      id: 2,
      name: "Fatima Noor",
      class: "Grade 11",
      parent: "Ms. Noor Fatima",
      city: "Lahore",
      applied: "2026-02-26",
    },
    {
      id: 3,
      name: "Usman Tariq",
      class: "Grade 8",
      parent: "Mr. Tariq Ahmed",
      city: "Lahore",
      applied: "2026-02-28",
    },
  ],
  teachers: [
    {
      id: 1,
      name: "Dr. Shahida Parveen",
      subject: "Biology",
      qualification: "PhD Biology",
      exp: "12 years",
      applied: "2026-02-20",
    },
    {
      id: 2,
      name: "Mr. Kamran Ali",
      subject: "Physics",
      qualification: "MSc Physics",
      exp: "8 years",
      applied: "2026-02-22",
    },
  ],
  parents: [
    {
      id: 1,
      name: "Mrs. Rukhsana Ahmed",
      child: "Saad Ahmed (Grade 7)",
      phone: "0321-4567890",
      applied: "2026-02-27",
    },
  ],
};

const SCHOOL_SALARIES = [
  {
    id: 1,
    name: "Dr. Amina Qureshi",
    role: "Department Head",
    salary: 85000,
    lastPaid: "2026-02-01",
    status: "paid",
  },
  {
    id: 2,
    name: "Mr. Kashif Raza",
    role: "Senior Teacher",
    salary: 65000,
    lastPaid: "2026-02-01",
    status: "paid",
  },
  {
    id: 3,
    name: "Ms. Sana Mirza",
    role: "Teacher",
    salary: 55000,
    lastPaid: "2026-02-01",
    status: "paid",
  },
  {
    id: 4,
    name: "Mr. Arif Hussain",
    role: "Teacher",
    salary: 52000,
    lastPaid: "2026-02-01",
    status: "due",
  },
  {
    id: 5,
    name: "Ms. Nadia Akhtar",
    role: "Teacher",
    salary: 50000,
    lastPaid: "2026-02-01",
    status: "due",
  },
];

const SCHOOL_LEAVE_REQUESTS = [
  {
    id: 1,
    staff: "Mr. Kashif Raza",
    type: "Sick Leave",
    from: "2026-03-05",
    to: "2026-03-07",
    days: 3,
    status: "pending",
  },
  {
    id: 2,
    staff: "Ms. Sana Mirza",
    type: "Annual Leave",
    from: "2026-03-15",
    to: "2026-03-20",
    days: 6,
    status: "pending",
  },
  {
    id: 3,
    staff: "Mr. Arif Hussain",
    type: "Emergency Leave",
    from: "2026-02-28",
    to: "2026-02-28",
    days: 1,
    status: "approved",
  },
];

const SCHOOL_GROUPS = [
  {
    id: 1,
    name: "Class 10-A",
    members: 28,
    type: "class",
    latestPost: "Exam schedule for March finals has been uploaded",
  },
  {
    id: 2,
    name: "Class 9-B",
    members: 25,
    type: "class",
    latestPost: "Science fair registrations close Friday",
  },
  {
    id: 3,
    name: "Science Department",
    members: 12,
    type: "department",
    latestPost: "Lab equipment inventory due Monday",
  },
  {
    id: 4,
    name: "All Teachers",
    members: 35,
    type: "faculty",
    latestPost: "Parent-teacher meeting scheduled for March 12",
  },
];

const TRANSFER_REQUESTS = [
  {
    id: 1,
    name: "Sara Hussain",
    type: "Student",
    from: "Beacon House - Main",
    to: "The City School, Karachi",
    reason: "Family relocation",
    date: "2026-02-25",
  },
  {
    id: 2,
    name: "Mr. Imran Siddiqui",
    type: "Teacher",
    from: "Beacon House - Main",
    to: "Roots International, Islamabad",
    reason: "Personal reasons",
    date: "2026-02-22",
  },
];

const SCHOOL_TIMELINE = [
  {
    date: "2026-02-28",
    event: "Student Sara Hussain transfer request submitted",
    type: "transfer",
  },
  {
    date: "2026-02-25",
    event: "3 new student enrollment applications received",
    type: "enrollment",
  },
  {
    date: "2026-02-20",
    event: "Science Department teacher Dr. Shahida applied",
    type: "staff",
  },
  {
    date: "2026-02-15",
    event: "DHA Branch monthly fee collection completed: PKR 2.4M",
    type: "finance",
  },
  {
    date: "2026-02-10",
    event: "New Computer Lab opened at Johar Town Branch",
    type: "facility",
  },
  {
    date: "2026-02-01",
    event: "February salaries processed for 35 staff members",
    type: "finance",
  },
  {
    date: "2026-01-15",
    event: "Mid-term exams completed, results published",
    type: "academic",
  },
  {
    date: "2026-01-05",
    event: "New Academic Year 2026 commenced",
    type: "academic",
  },
];

const BOOKS = [
  {
    id: 1,
    title: "Mathematics Grade 10",
    author: "Punjab Curriculum Board",
    isbn: "978-969-00-1234",
    status: "available",
    price: 850,
    type: "textbook",
  },
  {
    id: 2,
    title: "Physics Practical Manual",
    author: "Dr. Ahmed Nawaz",
    isbn: "978-969-00-5678",
    status: "borrowed",
    price: 1200,
    type: "reference",
  },
  {
    id: 3,
    title: "English Literature Anthology",
    author: "Oxford Pakistan",
    isbn: "978-0-19-470000",
    status: "available",
    price: 1450,
    type: "literature",
  },
  {
    id: 4,
    title: "Urdu Adab",
    author: "Punjab Textbook Board",
    isbn: "978-969-00-9012",
    status: "for-sale",
    price: 600,
    type: "textbook",
  },
  {
    id: 5,
    title: "Chemistry Practical Lab",
    author: "Sindh Textbook Board",
    isbn: "978-969-00-3456",
    status: "available",
    price: 950,
    type: "reference",
  },
  {
    id: 6,
    title: "Biology Class XI",
    author: "National Book Foundation",
    isbn: "978-969-614-000",
    status: "for-sale",
    price: 780,
    type: "textbook",
  },
  {
    id: 7,
    title: "Pakistan Studies",
    author: "Punjab Curriculum Board",
    isbn: "978-969-00-7890",
    status: "available",
    price: 420,
    type: "textbook",
  },
  {
    id: 8,
    title: "Islamiyat",
    author: "Punjab Textbook Board",
    isbn: "978-969-00-2345",
    status: "borrowed",
    price: 380,
    type: "textbook",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    present: "bg-green-500/15 text-green-600",
    absent: "bg-red-500/15 text-red-600",
    excused: "bg-yellow-500/15 text-yellow-600",
    paid: "bg-green-500/15 text-green-600",
    due: "bg-yellow-500/15 text-yellow-600",
    overdue: "bg-red-500/15 text-red-600",
    pending: "bg-yellow-500/15 text-yellow-600",
    submitted: "bg-blue-500/15 text-blue-600",
    graded: "bg-green-500/15 text-green-600",
    approved: "bg-green-500/15 text-green-600",
    rejected: "bg-red-500/15 text-red-600",
    available: "bg-green-500/15 text-green-600",
    borrowed: "bg-blue-500/15 text-blue-600",
    "for-sale": "bg-purple-500/15 text-purple-600",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize ${map[status] ?? "bg-gray-200 text-gray-600"}`}
    >
      {status}
    </span>
  );
}

function TimelineItem({
  date,
  event,
  type,
}: { date: string; event: string; type: string }) {
  const colorMap: Record<string, string> = {
    transfer: "bg-blue-500",
    enrollment: "bg-green-500",
    staff: "bg-purple-500",
    finance: "bg-yellow-500",
    facility: "bg-orange-500",
    academic: "bg-primary",
  };
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div
          className={`w-3 h-3 rounded-full mt-1 shrink-0 ${colorMap[type] ?? "bg-muted-foreground"}`}
        />
        <div className="w-0.5 bg-border flex-1 mt-1" />
      </div>
      <div className="pb-4">
        <p className="text-sm text-foreground">{event}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{date}</p>
      </div>
    </div>
  );
}

// ─── Role Selector ───────────────────────────────────────────────────────────

function RoleSelector({ onSelect }: { onSelect: (r: Role) => void }) {
  const roles = [
    {
      id: "student" as Role,
      label: "Student",
      icon: GraduationCap,
      desc: "Enroll, view subjects, assignments & results",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      id: "parent" as Role,
      label: "Parent / Guardian",
      icon: Users,
      desc: "Monitor children's attendance, fees & progress",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "teacher" as Role,
      label: "Teacher",
      icon: PenTool,
      desc: "Manage classes, tutorials, quizzes & results",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: "admin" as Role,
      label: "School Admin",
      icon: Building2,
      desc: "Manage school, staff, enrollments & finance",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
          style={{ background: "oklch(var(--primary) / 0.15)" }}
        >
          <School size={32} style={{ color: "oklch(var(--primary))" }} />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Education Hub</h1>
        <p className="text-muted-foreground mt-1">
          Select your role to access the Education module
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {roles.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => onSelect(r.id)}
            className="group text-left p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-200 overflow-hidden relative"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${r.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
            />
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${r.gradient}`}
            >
              <r.icon size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-foreground text-base">
              {r.label}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
            <ChevronRight
              size={16}
              className="absolute top-5 right-5 text-muted-foreground group-hover:text-primary transition-colors"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Library Tab (shared) ─────────────────────────────────────────────────────

function LibraryTab() {
  const [cart, setCart] = useState<(typeof BOOKS)[number][]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [myBorrowed] = useState([
    { ...BOOKS[1], dueDate: "2026-03-15" },
    { ...BOOKS[7], dueDate: "2026-03-20" },
  ]);

  const addToCart = (book: (typeof BOOKS)[number]) => {
    setCart((c) => [...c, book]);
    toast.success(`"${book.title}" added to cart`);
  };
  const removeFromCart = (id: number) =>
    setCart((c) => c.filter((b) => b.id !== id));
  const cartTotal = cart.reduce((s, b) => s + b.price, 0);

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Library & Books</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCartOpen(true)}
          className="gap-2 relative"
        >
          <ShoppingCart size={14} />
          Cart
          {cart.length > 0 && (
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold"
              style={{ background: "oklch(var(--primary))", color: "white" }}
            >
              {cart.length}
            </span>
          )}
        </Button>
      </div>

      <Tabs defaultValue="catalog">
        <TabsList>
          <TabsTrigger value="catalog">Book Catalog</TabsTrigger>
          <TabsTrigger value="borrowed">My Borrowed</TabsTrigger>
          <TabsTrigger value="sell">Sell a Book</TabsTrigger>
        </TabsList>

        <TabsContent value="catalog" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {BOOKS.map((book) => (
              <Card key={book.id} className="flex flex-col">
                <div
                  className="h-24 rounded-t-lg flex items-center justify-center"
                  style={{ background: "oklch(var(--primary) / 0.08)" }}
                >
                  <BookOpen
                    size={32}
                    style={{ color: "oklch(var(--primary))" }}
                  />
                </div>
                <CardContent className="p-3 flex flex-col flex-1">
                  <p className="font-semibold text-sm leading-tight">
                    {book.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {book.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ISBN: {book.isbn}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <StatusBadge status={book.status} />
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "oklch(var(--primary))" }}
                    >
                      PKR {book.price}
                    </span>
                  </div>
                  <div className="mt-2">
                    {book.status === "available" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full text-xs h-7"
                        onClick={() =>
                          toast.success(
                            `"${book.title}" borrowing request sent!`,
                          )
                        }
                      >
                        <BookMarked size={12} className="mr-1" /> Borrow
                      </Button>
                    )}
                    {book.status === "for-sale" && (
                      <Button
                        size="sm"
                        className="w-full text-xs h-7"
                        onClick={() => addToCart(book)}
                      >
                        <ShoppingCart size={12} className="mr-1" /> Buy
                      </Button>
                    )}
                    {book.status === "borrowed" && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-full text-xs h-7"
                        disabled
                      >
                        Unavailable
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="borrowed" className="mt-4">
          <div className="space-y-3">
            {myBorrowed.map((book) => (
              <Card key={book.id}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "oklch(var(--primary) / 0.1)" }}
                  >
                    <BookOpen
                      size={20}
                      style={{ color: "oklch(var(--primary))" }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{book.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {book.author}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      Due: {book.dueDate}
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-1 text-xs h-6"
                      onClick={() => toast.success("Return request submitted!")}
                    >
                      Return
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sell" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">List a Book for Sale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Book Title</Label>
                  <Input
                    placeholder="e.g. Mathematics Grade 10"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Author</Label>
                  <Input
                    placeholder="e.g. Punjab Textbook Board"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>ISBN</Label>
                  <Input placeholder="e.g. 978-969-00-0000" className="mt-1" />
                </div>
                <div>
                  <Label>Price (PKR)</Label>
                  <Input type="number" placeholder="0" className="mt-1" />
                </div>
              </div>
              <div>
                <Label>Condition</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New / Unused</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="worn">Worn but readable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                className="w-full"
                onClick={() => toast.success("Book listed for sale!")}
              >
                List for Sale
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Cart Dialog */}
      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Shopping Cart</DialogTitle>
          </DialogHeader>
          {cart.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-3">
              {cart.map((b, i) => (
                <div key={`${b.id}-${i}`} className="flex items-center gap-3">
                  <BookOpen size={16} className="text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{b.title}</p>
                    <p className="text-xs text-muted-foreground">
                      PKR {b.price}
                    </p>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7"
                    onClick={() => removeFromCart(b.id)}
                  >
                    <X size={12} />
                  </Button>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>PKR {cartTotal.toLocaleString()}</span>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  toast.success("Order placed successfully!");
                  setCart([]);
                  setCartOpen(false);
                }}
              >
                Checkout (PKR {cartTotal.toLocaleString()})
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Student View ─────────────────────────────────────────────────────────────

function StudentView() {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [attendNoteOpen, setAttendNoteOpen] = useState(false);
  const [enrollments] = useState<
    Record<number, "none" | "pending" | "approved">
  >({
    1: "approved",
    2: "none",
    3: "none",
    4: "none",
    5: "pending",
  });

  return (
    <div className="p-4">
      <Tabs defaultValue="enrollment">
        <ScrollArea>
          <TabsList className="mb-4">
            <TabsTrigger value="enrollment">
              <LogIn size={13} className="mr-1" />
              Enrollment
            </TabsTrigger>
            <TabsTrigger value="subjects">
              <Grid size={13} className="mr-1" />
              Subjects
            </TabsTrigger>
            <TabsTrigger value="assignments">
              <ClipboardList size={13} className="mr-1" />
              Assignments
            </TabsTrigger>
            <TabsTrigger value="attendance">
              <CalendarDays size={13} className="mr-1" />
              Attendance
            </TabsTrigger>
            <TabsTrigger value="timeline">
              <TrendingUp size={13} className="mr-1" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="library">
              <Library size={13} className="mr-1" />
              Library
            </TabsTrigger>
          </TabsList>
        </ScrollArea>

        {/* Enrollment */}
        <TabsContent value="enrollment">
          <div className="space-y-3">
            {SCHOOLS.map((school) => {
              const status = enrollments[school.id] ?? "none";
              return (
                <Card key={school.id}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 text-white"
                      style={{ background: "oklch(var(--primary))" }}
                    >
                      {school.logo}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{school.name}</p>
                      <p className="text-xs text-muted-foreground">
                        <MapPin size={10} className="inline mr-1" />
                        {school.city} &bull; {school.branches} branches &bull;
                        Est. {school.established}
                      </p>
                    </div>
                    <div>
                      {status === "approved" && (
                        <Badge className="bg-green-500/15 text-green-600 border-0">
                          Enrolled
                        </Badge>
                      )}
                      {status === "pending" && (
                        <Badge className="bg-yellow-500/15 text-yellow-600 border-0">
                          Pending
                        </Badge>
                      )}
                      {status === "none" && (
                        <Dialog open={enrollOpen} onOpenChange={setEnrollOpen}>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">
                              <UserPlus size={13} className="mr-1" />
                              Apply
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Apply to {school.name}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-3 mt-2">
                              <div>
                                <Label>Class / Grade applying for</Label>
                                <Select>
                                  <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Select class" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {[
                                      "Grade 8",
                                      "Grade 9",
                                      "Grade 10",
                                      "Grade 11",
                                      "Grade 12",
                                    ].map((g) => (
                                      <SelectItem key={g} value={g}>
                                        {g}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label>
                                  Enrollment message (will be posted as feed)
                                </Label>
                                <Textarea
                                  className="mt-1"
                                  placeholder="Write a brief introduction about yourself..."
                                  rows={3}
                                />
                              </div>
                              <div>
                                <Label>Privacy</Label>
                                <Select>
                                  <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Who can see this" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="school">
                                      School Only
                                    </SelectItem>
                                    <SelectItem value="family">
                                      Family Only
                                    </SelectItem>
                                    <SelectItem value="public">
                                      Public
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button
                                className="w-full"
                                onClick={() => {
                                  toast.success(
                                    "Enrollment application submitted!",
                                  );
                                  setEnrollOpen(false);
                                }}
                              >
                                Submit Application
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Subjects */}
        <TabsContent value="subjects">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STUDENT_SUBJECTS.map((s) => (
              <Card key={s.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm">{s.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {s.grade}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{s.teacher}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock size={10} />
                    {s.schedule}
                  </p>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>{s.progress}%</span>
                    </div>
                    <Progress value={s.progress} className="h-1.5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Assignments & Results */}
        <TabsContent value="assignments">
          <Tabs defaultValue="assignments">
            <TabsList className="mb-3">
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            <TabsContent value="assignments">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {STUDENT_ASSIGNMENTS.map((a) => (
                    <TableRow key={a.id}>
                      <TableCell className="text-sm">{a.subject}</TableCell>
                      <TableCell className="text-sm font-medium">
                        {a.title}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {a.due}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={a.status} />
                      </TableCell>
                      <TableCell className="text-sm font-semibold">
                        {a.grade ?? "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="results">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Exam Type</TableHead>
                    <TableHead>Marks</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Remarks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {STUDENT_RESULTS.map((r) => (
                    <TableRow key={r.subject}>
                      <TableCell className="text-sm font-medium">
                        {r.subject}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {r.exam}
                      </TableCell>
                      <TableCell className="text-sm">{r.marks}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{r.grade}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {r.remarks}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* Attendance */}
        <TabsContent value="attendance">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Attendance Record</h3>
              <Dialog open={attendNoteOpen} onOpenChange={setAttendNoteOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Send size={13} className="mr-1" />
                    Send Attendance Note
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Attendance Note to Teacher</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-3 mt-2">
                    <div>
                      <Label>Subject</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {STUDENT_SUBJECTS.map((s) => (
                            <SelectItem key={s.id} value={s.name}>
                              {s.name} — {s.teacher}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Date of absence</Label>
                      <Input type="date" className="mt-1" />
                    </div>
                    <div>
                      <Label>Reason / Note</Label>
                      <Textarea
                        className="mt-1"
                        placeholder="Explain your absence..."
                        rows={3}
                      />
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => {
                        toast.success("Attendance note sent to teacher!");
                        setAttendNoteOpen(false);
                      }}
                    >
                      Send Note
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {STUDENT_ATTENDANCE.map((a) => (
                  <TableRow key={`${a.date}-${a.subject}`}>
                    <TableCell className="text-sm">{a.date}</TableCell>
                    <TableCell className="text-sm font-medium">
                      {a.subject}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={a.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Timeline */}
        <TabsContent value="timeline">
          <div className="space-y-1 pt-2">
            {[
              {
                date: "2026-01-05",
                event:
                  "Enrolled at Beacon House School System, Grade 10, Lahore",
                type: "enrollment",
              },
              {
                date: "2025-07-10",
                event:
                  "Transferred from Army Public School, Rawalpindi to Lahore",
                type: "transfer",
              },
              {
                date: "2025-07-01",
                event: "City changed: Rawalpindi → Lahore",
                type: "facility",
              },
              {
                date: "2025-01-05",
                event: "Promoted to Grade 9 at Army Public School",
                type: "academic",
              },
              {
                date: "2024-01-05",
                event: "Enrolled at Army Public School, Grade 8, Rawalpindi",
                type: "enrollment",
              },
            ].map((item) => (
              <TimelineItem key={item.date} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="library">
          <LibraryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── Parent View ─────────────────────────────────────────────────────────────

function ParentView() {
  const [payOpen, setPayOpen] = useState(false);
  const [selectedFee, setSelectedFee] = useState<
    (typeof PARENT_FEES)[number] | null
  >(null);
  const outstanding = PARENT_FEES.filter((f) => f.status !== "paid").reduce(
    (s, f) => s + f.total,
    0,
  );

  return (
    <div className="p-4">
      <Tabs defaultValue="children">
        <ScrollArea>
          <TabsList className="mb-4">
            <TabsTrigger value="children">
              <Users size={13} className="mr-1" />
              Children
            </TabsTrigger>
            <TabsTrigger value="attendance">
              <CalendarDays size={13} className="mr-1" />
              Attendance
            </TabsTrigger>
            <TabsTrigger value="results">
              <Trophy size={13} className="mr-1" />
              Results
            </TabsTrigger>
            <TabsTrigger value="fees">
              <DollarSign size={13} className="mr-1" />
              Fees
            </TabsTrigger>
            <TabsTrigger value="timeline">
              <TrendingUp size={13} className="mr-1" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="library">
              <Library size={13} className="mr-1" />
              Library
            </TabsTrigger>
          </TabsList>
        </ScrollArea>

        <TabsContent value="children">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CHILDREN.map((child) => (
              <Card key={child.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback
                        style={{
                          background: "oklch(var(--primary) / 0.15)",
                          color: "oklch(var(--primary))",
                        }}
                      >
                        {child.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{child.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {child.class}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                    <School size={10} />
                    {child.school}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-secondary/50 rounded-lg p-2 text-center">
                      <p
                        className="text-lg font-bold"
                        style={{ color: "oklch(var(--primary))" }}
                      >
                        {child.attendance}%
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Attendance
                      </p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-2 text-center">
                      <p
                        className="text-lg font-bold"
                        style={{ color: "oklch(var(--primary))" }}
                      >
                        {child.lastResult}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Latest Grade
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="attendance">
          {CHILDREN.map((child) => (
            <div key={child.id} className="mb-6">
              <h3 className="font-semibold mb-2">
                {child.name} — {child.class}
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {STUDENT_ATTENDANCE.map((a) => (
                    <TableRow key={`parent-${a.date}-${a.subject}`}>
                      <TableCell className="text-sm">{a.date}</TableCell>
                      <TableCell className="text-sm">{a.subject}</TableCell>
                      <TableCell>
                        <StatusBadge status={a.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="results">
          {CHILDREN.map((child) => (
            <div key={child.id} className="mb-6">
              <h3 className="font-semibold mb-2">
                {child.name} — {child.class}
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Exam</TableHead>
                    <TableHead>Marks</TableHead>
                    <TableHead>Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {STUDENT_RESULTS.map((r) => (
                    <TableRow key={r.subject}>
                      <TableCell className="text-sm font-medium">
                        {r.subject}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {r.exam}
                      </TableCell>
                      <TableCell className="text-sm">{r.marks}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{r.grade}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="fees">
          <div className="mb-4 p-4 rounded-xl border border-destructive/30 bg-destructive/5 flex items-center gap-3">
            <AlertCircle size={18} className="text-destructive" />
            <div>
              <p className="text-sm font-semibold text-destructive">
                Outstanding Balance: PKR {outstanding.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">
                2 invoices pending payment
              </p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Child</TableHead>
                <TableHead>Month</TableHead>
                <TableHead>Tuition</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {PARENT_FEES.map((fee) => (
                <TableRow key={`${fee.child}-${fee.month}`}>
                  <TableCell className="text-sm font-medium">
                    {fee.child}
                  </TableCell>
                  <TableCell className="text-sm">{fee.month}</TableCell>
                  <TableCell className="text-sm">
                    PKR {fee.tuition.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-sm font-semibold">
                    PKR {fee.total.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={fee.status} />
                  </TableCell>
                  <TableCell>
                    {fee.status !== "paid" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs h-7"
                        onClick={() => {
                          setSelectedFee(fee);
                          setPayOpen(true);
                        }}
                      >
                        Pay Now
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Dialog open={payOpen} onOpenChange={setPayOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Pay Fee Invoice</DialogTitle>
              </DialogHeader>
              {selectedFee && (
                <div className="space-y-3 mt-2">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Child</span>
                      <span className="font-medium">{selectedFee.child}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Month</span>
                      <span>{selectedFee.month}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tuition</span>
                      <span>PKR {selectedFee.tuition.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lab Fee</span>
                      <span>PKR {selectedFee.lab.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Library</span>
                      <span>PKR {selectedFee.library.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Transport</span>
                      <span>PKR {selectedFee.transport.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-base">
                      <span>Total</span>
                      <span>PKR {selectedFee.total.toLocaleString()}</span>
                    </div>
                  </div>
                  <div>
                    <Label>Payment Method</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jazzcash">JazzCash</SelectItem>
                        <SelectItem value="easypaisa">EasyPaisa</SelectItem>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="card">Debit/Credit Card</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => {
                      toast.success(
                        `Payment of PKR ${selectedFee.total.toLocaleString()} submitted!`,
                      );
                      setPayOpen(false);
                    }}
                  >
                    Pay PKR {selectedFee.total.toLocaleString()}
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </TabsContent>

        <TabsContent value="timeline">
          <div className="space-y-1 pt-2">
            {[
              {
                date: "2026-01-05",
                event: "Ahmed Tariq enrolled at Beacon House, Grade 10, Lahore",
                type: "enrollment",
              },
              {
                date: "2025-07-10",
                event:
                  "Ahmed Tariq transferred: Army Public School → Beacon House",
                type: "transfer",
              },
              {
                date: "2025-07-01",
                event: "Family relocated: Rawalpindi → Lahore",
                type: "facility",
              },
              {
                date: "2025-01-05",
                event: "Ahmed Tariq promoted to Grade 9",
                type: "academic",
              },
              {
                date: "2024-09-01",
                event:
                  "Ayesha Tariq enrolled at Lahore Grammar School, Grade 6",
                type: "enrollment",
              },
            ].map((item) => (
              <TimelineItem key={item.date} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="library">
          <LibraryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── Teacher View ─────────────────────────────────────────────────────────────

function TeacherView() {
  const [mode, setMode] = useState<"school" | "freelancer">("school");
  const [createAssignOpen, setCreateAssignOpen] = useState(false);
  const [createQuizOpen, setCreateQuizOpen] = useState(false);
  const [addVideoOpen, setAddVideoOpen] = useState(false);
  const [attendDecisions, setAttendDecisions] = useState<
    Record<number, "approved" | "rejected" | null>
  >({ 1: null, 2: null, 3: null });

  return (
    <div className="p-4">
      <Tabs defaultValue="dashboard">
        <ScrollArea>
          <TabsList className="mb-4 flex-wrap">
            <TabsTrigger value="dashboard">
              <TrendingUp size={13} className="mr-1" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="timetable">
              <CalendarDays size={13} className="mr-1" />
              Timetable
            </TabsTrigger>
            <TabsTrigger value="assignments">
              <ClipboardList size={13} className="mr-1" />
              Assignments
            </TabsTrigger>
            <TabsTrigger value="quizzes">
              <FileText size={13} className="mr-1" />
              Quizzes & Exams
            </TabsTrigger>
            <TabsTrigger value="results">
              <Trophy size={13} className="mr-1" />
              Results
            </TabsTrigger>
            <TabsTrigger value="tutorials">
              <Video size={13} className="mr-1" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="attendance">
              <UserCheck size={13} className="mr-1" />
              Attendance
            </TabsTrigger>
            <TabsTrigger value="library">
              <Library size={13} className="mr-1" />
              Library
            </TabsTrigger>
          </TabsList>
        </ScrollArea>

        {/* Dashboard */}
        <TabsContent value="dashboard">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Mode:
            </span>
            <Button
              size="sm"
              variant={mode === "school" ? "default" : "outline"}
              onClick={() => setMode("school")}
              className="h-7 text-xs"
            >
              <School size={12} className="mr-1" />
              School Teacher
            </Button>
            <Button
              size="sm"
              variant={mode === "freelancer" ? "default" : "outline"}
              onClick={() => setMode("freelancer")}
              className="h-7 text-xs"
            >
              <Briefcase size={12} className="mr-1" />
              Freelancer
            </Button>
          </div>

          {mode === "school" ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  {
                    label: "Total Students",
                    value: TEACHER_STUDENTS,
                    icon: Users,
                    color: "oklch(var(--primary))",
                  },
                  {
                    label: "Classes Today",
                    value: 4,
                    icon: CalendarDays,
                    color: "oklch(0.65 0.25 335)",
                  },
                  {
                    label: "Pending Approvals",
                    value: 3,
                    icon: AlertCircle,
                    color: "#f59e0b",
                  },
                  {
                    label: "To Grade",
                    value: 12,
                    icon: PenTool,
                    color: "#10b981",
                  },
                ].map((stat) => (
                  <Card key={stat.label}>
                    <CardContent className="p-4">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center mb-2"
                        style={{ background: `${stat.color}20` }}
                      >
                        <stat.icon size={18} style={{ color: stat.color }} />
                      </div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">My Freelance Courses</h3>
                <Button size="sm">
                  <Plus size={13} className="mr-1" />
                  New Course
                </Button>
              </div>
              {FREELANCER_COURSES.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "oklch(var(--primary) / 0.1)" }}
                    >
                      <GraduationCap
                        size={20}
                        style={{ color: "oklch(var(--primary))" }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{course.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {course.category} &bull; {course.enrolled} enrolled
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className="font-bold text-sm"
                        style={{ color: "oklch(var(--primary))" }}
                      >
                        PKR {course.price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <Star
                          size={11}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="text-xs">{course.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Timetable */}
        <TabsContent value="timetable">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr>
                  <th className="p-2 bg-secondary text-left font-semibold w-12">
                    Day
                  </th>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((p) => (
                    <th
                      key={p}
                      className="p-2 bg-secondary text-center font-semibold min-w-[90px]"
                    >
                      P{p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TEACHER_TIMETABLE.map((row) => (
                  <tr key={row.day} className="border-t border-border">
                    <td className="p-2 font-semibold text-muted-foreground">
                      {row.day}
                    </td>
                    {row.periods.map((p, periodIdx) => (
                      <td
                        key={`${row.day}-p${periodIdx}`}
                        className={`p-2 text-center rounded border-l border-border ${p === "Free" ? "text-muted-foreground/50" : "bg-primary/5 text-foreground font-medium"}`}
                      >
                        {p}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Assignments */}
        <TabsContent value="assignments">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Assignments</h3>
            <Dialog open={createAssignOpen} onOpenChange={setCreateAssignOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus size={13} className="mr-1" />
                  Create Assignment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Assignment</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 mt-2">
                  <div>
                    <Label>Title</Label>
                    <Input className="mt-1" placeholder="Assignment title" />
                  </div>
                  <div>
                    <Label>Subject</Label>
                    <Input className="mt-1" placeholder="e.g. Mathematics" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Class/Group</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "Class 10A",
                            "Class 10B",
                            "Class 9A",
                            "Class 9B",
                            "Class 8A",
                          ].map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Type</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="group">Group</SelectItem>
                          <SelectItem value="individual">Individual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label>Due Date</Label>
                    <Input type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      className="mt-1"
                      rows={3}
                      placeholder="Assignment details..."
                    />
                  </div>
                  <div>
                    <Label>Attachment URL (optional)</Label>
                    <Input className="mt-1" placeholder="https://..." />
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => {
                      toast.success("Assignment created!");
                      setCreateAssignOpen(false);
                    }}
                  >
                    Create
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="space-y-3">
            {TEACHER_ASSIGNMENTS.map((a) => (
              <Card key={a.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-sm">{a.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {a.subject} &bull; {a.class} &bull; Due: {a.due}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs capitalize">
                      {a.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Progress
                      value={(a.submissions / a.total) * 100}
                      className="flex-1 h-1.5"
                    />
                    <span className="text-xs text-muted-foreground">
                      {a.submissions}/{a.total} submitted
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Quizzes & Exams */}
        <TabsContent value="quizzes">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Quizzes & Exams</h3>
            <Dialog open={createQuizOpen} onOpenChange={setCreateQuizOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus size={13} className="mr-1" />
                  Create Quiz
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Quiz / Exam</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 mt-2">
                  <div>
                    <Label>Quiz Title</Label>
                    <Input
                      className="mt-1"
                      placeholder="e.g. Mid-Term Math Quiz"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Subject</Label>
                      <Input className="mt-1" placeholder="Subject" />
                    </div>
                    <div>
                      <Label>Class</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Class" />
                        </SelectTrigger>
                        <SelectContent>
                          {["Class 10A", "Class 9B", "Class 8A"].map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Date</Label>
                      <Input type="date" className="mt-1" />
                    </div>
                    <div>
                      <Label>Total Marks</Label>
                      <Input type="number" className="mt-1" placeholder="100" />
                    </div>
                  </div>
                  <div>
                    <Label>Question 1 (Multiple Choice)</Label>
                    <Input className="mt-1" placeholder="Question text..." />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {["Option A", "Option B", "Option C", "Option D"].map(
                      (o) => (
                        <Input key={o} placeholder={o} className="text-xs" />
                      ),
                    )}
                  </div>
                  <div>
                    <Label>Correct Answer</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select correct option" />
                      </SelectTrigger>
                      <SelectContent>
                        {["A", "B", "C", "D"].map((o) => (
                          <SelectItem key={o} value={o}>
                            Option {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus size={13} className="mr-1" />
                    Add Question
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => {
                      toast.success("Quiz created!");
                      setCreateQuizOpen(false);
                    }}
                  >
                    Create Quiz
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="space-y-3">
            {TEACHER_QUIZZES.map((q) => (
              <Card key={q.id}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "oklch(var(--primary) / 0.1)" }}
                  >
                    <FileText
                      size={20}
                      style={{ color: "oklch(var(--primary))" }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{q.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {q.subject} &bull; {q.class} &bull; {q.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className="text-sm font-bold"
                      style={{ color: "oklch(var(--primary))" }}
                    >
                      {q.avgScore}/{q.maxScore}
                    </p>
                    <p className="text-xs text-muted-foreground">Avg Score</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Results */}
        <TabsContent value="results">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Publish Results</h3>
              <Select>
                <SelectTrigger className="w-40 h-8 text-sm">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {["Class 10A", "Class 9B", "Class 8A"].map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Marks</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    student: "Omar Farooq",
                    subject: "Mathematics",
                    marks: "",
                    grade: "",
                  },
                  {
                    student: "Hina Baig",
                    subject: "Mathematics",
                    marks: "",
                    grade: "",
                  },
                  {
                    student: "Zain Malik",
                    subject: "Mathematics",
                    marks: "",
                    grade: "",
                  },
                  {
                    student: "Amna Sheikh",
                    subject: "Mathematics",
                    marks: "",
                    grade: "",
                  },
                ].map((row) => (
                  <TableRow key={row.student}>
                    <TableCell className="text-sm font-medium">
                      {row.student}
                    </TableCell>
                    <TableCell className="text-sm">{row.subject}</TableCell>
                    <TableCell>
                      <Input
                        className="h-7 w-20 text-sm"
                        placeholder="e.g. 85"
                      />
                    </TableCell>
                    <TableCell>
                      <Select>
                        <SelectTrigger className="h-7 w-20 text-xs">
                          <SelectValue placeholder="Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "A+",
                            "A",
                            "A-",
                            "B+",
                            "B",
                            "B-",
                            "C",
                            "D",
                            "F",
                          ].map((g) => (
                            <SelectItem key={g} value={g}>
                              {g}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button
              className="w-full"
              onClick={() => toast.success("Results published to class!")}
            >
              Publish Results
            </Button>
          </div>
        </TabsContent>

        {/* Tutorials */}
        <TabsContent value="tutorials">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Video Tutorials</h3>
            <Dialog open={addVideoOpen} onOpenChange={setAddVideoOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus size={13} className="mr-1" />
                  Add Tutorial
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Video Tutorial</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 mt-2">
                  <div>
                    <Label>Title</Label>
                    <Input className="mt-1" placeholder="Tutorial title" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Subject</Label>
                      <Input className="mt-1" placeholder="Subject" />
                    </div>
                    <div>
                      <Label>Target Class</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Class" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "Class 10A",
                            "Class 9B",
                            "Class 8A",
                            "All Classes",
                          ].map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label>Video URL (YouTube / Vimeo)</Label>
                    <Input
                      className="mt-1"
                      placeholder="https://youtube.com/watch?v=..."
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      className="mt-1"
                      rows={2}
                      placeholder="What this tutorial covers..."
                    />
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => {
                      toast.success("Tutorial added!");
                      setAddVideoOpen(false);
                    }}
                  >
                    Add Tutorial
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEACHER_TUTORIALS.map((t) => (
              <Card key={t.id} className="overflow-hidden">
                <div
                  className="h-32 flex items-center justify-center relative"
                  style={{ background: "oklch(var(--primary) / 0.08)" }}
                >
                  <Play size={36} style={{ color: "oklch(var(--primary))" }} />
                  <span className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                    {t.views} views
                  </span>
                </div>
                <CardContent className="p-3">
                  <p className="font-semibold text-sm">{t.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t.subject} &bull; {t.class}
                  </p>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs mt-2 inline-flex items-center gap-1"
                    style={{ color: "oklch(var(--primary))" }}
                  >
                    <Video size={11} />
                    Watch on YouTube
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Attendance Approval */}
        <TabsContent value="attendance">
          <div className="space-y-3">
            <h3 className="font-semibold mb-4">Pending Attendance Notes</h3>
            {TEACHER_ATTENDANCE_PENDING.map((item) => {
              const decision = attendDecisions[item.id];
              return (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-9 w-9 shrink-0">
                        <AvatarFallback
                          style={{
                            background: "oklch(var(--primary) / 0.15)",
                            color: "oklch(var(--primary))",
                          }}
                        >
                          {item.student
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{item.student}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.class} &bull; {item.subject} &bull; {item.date}
                        </p>
                        <p className="text-sm mt-1 text-foreground/80">
                          {item.note}
                        </p>
                      </div>
                    </div>
                    {decision === null ? (
                      <div className="flex gap-2 mt-3">
                        <Button
                          size="sm"
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white h-7 text-xs"
                          onClick={() => {
                            setAttendDecisions((d) => ({
                              ...d,
                              [item.id]: "approved",
                            }));
                            toast.success("Attendance approved");
                          }}
                        >
                          <CheckCircle2 size={12} className="mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-red-300 text-red-600 hover:bg-red-50 h-7 text-xs"
                          onClick={() => {
                            setAttendDecisions((d) => ({
                              ...d,
                              [item.id]: "rejected",
                            }));
                            toast.error("Attendance rejected");
                          }}
                        >
                          <XCircle size={12} className="mr-1" />
                          Reject
                        </Button>
                      </div>
                    ) : (
                      <div className="mt-3">
                        <StatusBadge status={decision} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="library">
          <LibraryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── School Admin View ────────────────────────────────────────────────────────

interface SchoolRecord {
  id: number;
  name: string;
  city: string;
  type: "School" | "Academy" | "College" | "University";
  established: string;
}

const INITIAL_SCHOOLS: SchoolRecord[] = [
  {
    id: 1,
    name: "Beacon House School System",
    city: "Lahore",
    type: "School",
    established: "1975",
  },
  {
    id: 2,
    name: "The City Academy",
    city: "Karachi",
    type: "Academy",
    established: "2002",
  },
  {
    id: 3,
    name: "Knowledge College",
    city: "Delhi",
    type: "College",
    established: "1990",
  },
];

function AdminView() {
  const [schools, setSchools] = useState<SchoolRecord[]>(INITIAL_SCHOOLS);
  const [selectedSchoolId, setSelectedSchoolId] = useState<number>(1);
  const [createSchoolOpen, setCreateSchoolOpen] = useState(false);
  const [newSchool, setNewSchool] = useState({
    name: "",
    city: "",
    type: "School" as SchoolRecord["type"],
    established: "",
  });
  const [addBranchOpen, setAddBranchOpen] = useState(false);
  const [addDeptOpen, setAddDeptOpen] = useState(false);

  const selectedSchool =
    schools.find((s) => s.id === selectedSchoolId) ?? schools[0];
  const [leaveDecisions, setLeaveDecisions] = useState<
    Record<number, "approved" | "rejected" | null>
  >({ 1: null, 2: null });
  const [enrollDecisions, setEnrollDecisions] = useState<
    Record<string, "approved" | "rejected" | null>
  >({});
  const [salaryPaid, setSalaryPaid] = useState<Record<number, boolean>>({});
  const [transferDecisions, setTransferDecisions] = useState<
    Record<number, "approved" | "rejected" | null>
  >({});

  const makeEnrollKey = (type: string, id: number) => `${type}-${id}`;

  const handleCreateSchool = () => {
    if (!newSchool.name.trim()) {
      return;
    }
    const id = Date.now();
    setSchools((prev) => [...prev, { ...newSchool, id }]);
    setSelectedSchoolId(id);
    setNewSchool({ name: "", city: "", type: "School", established: "" });
    setCreateSchoolOpen(false);
    toast.success(`${newSchool.name} created!`);
  };

  return (
    <div className="p-4">
      {/* School Selector Header */}
      <div className="flex flex-wrap items-center gap-3 mb-4 p-3 bg-card border border-border rounded-xl">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <School size={16} style={{ color: "oklch(var(--primary))" }} />
          <Select
            value={String(selectedSchoolId)}
            onValueChange={(v) => setSelectedSchoolId(Number(v))}
          >
            <SelectTrigger
              className="h-8 text-sm font-medium flex-1 max-w-xs"
              data-ocid="education.school.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {schools.map((s) => (
                <SelectItem key={s.id} value={String(s.id)}>
                  {s.name} — {s.city} ({s.type})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Dialog open={createSchoolOpen} onOpenChange={setCreateSchoolOpen}>
          <DialogTrigger asChild>
            <Button
              size="sm"
              className="h-8 text-xs gap-1"
              data-ocid="education.create_school.button"
            >
              <Plus size={13} />
              Create School/Academy
            </Button>
          </DialogTrigger>
          <DialogContent
            className="max-w-md"
            data-ocid="education.create_school.dialog"
          >
            <DialogHeader>
              <DialogTitle>Create New School / Academy</DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <div>
                <Label>Name</Label>
                <Input
                  className="mt-1"
                  placeholder="e.g. Sunrise International School"
                  value={newSchool.name}
                  onChange={(e) =>
                    setNewSchool((p) => ({ ...p, name: e.target.value }))
                  }
                  data-ocid="education.school.name_input"
                />
              </div>
              <div>
                <Label>City</Label>
                <Input
                  className="mt-1"
                  placeholder="e.g. Mumbai"
                  value={newSchool.city}
                  onChange={(e) =>
                    setNewSchool((p) => ({ ...p, city: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label>Type</Label>
                <Select
                  value={newSchool.type}
                  onValueChange={(v) =>
                    setNewSchool((p) => ({
                      ...p,
                      type: v as SchoolRecord["type"],
                    }))
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="School">School</SelectItem>
                    <SelectItem value="Academy">Academy</SelectItem>
                    <SelectItem value="College">College</SelectItem>
                    <SelectItem value="University">University</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Established Year</Label>
                <Input
                  className="mt-1"
                  placeholder="e.g. 2010"
                  value={newSchool.established}
                  onChange={(e) =>
                    setNewSchool((p) => ({ ...p, established: e.target.value }))
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setCreateSchoolOpen(false)}
                data-ocid="education.create_school.cancel_button"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateSchool}
                data-ocid="education.create_school.submit_button"
              >
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Tabs defaultValue="profile">
        <ScrollArea>
          <TabsList className="mb-4 flex-wrap">
            <TabsTrigger value="profile">
              <School size={13} className="mr-1" />
              School Profile
            </TabsTrigger>
            <TabsTrigger value="departments">
              <Building2 size={13} className="mr-1" />
              Departments
            </TabsTrigger>
            <TabsTrigger value="enrollments">
              <UserPlus size={13} className="mr-1" />
              Enrollments
            </TabsTrigger>
            <TabsTrigger value="fees">
              <DollarSign size={13} className="mr-1" />
              Fees & Salaries
            </TabsTrigger>
            <TabsTrigger value="leave">
              <CalendarDays size={13} className="mr-1" />
              Staff Leave
            </TabsTrigger>
            <TabsTrigger value="groups">
              <MessageSquare size={13} className="mr-1" />
              Groups & Feeds
            </TabsTrigger>
            <TabsTrigger value="transfers">
              <Bus size={13} className="mr-1" />
              Transfers
            </TabsTrigger>
            <TabsTrigger value="timeline">
              <TrendingUp size={13} className="mr-1" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="library">
              <Library size={13} className="mr-1" />
              Library
            </TabsTrigger>
          </TabsList>
        </ScrollArea>

        {/* School Profile */}
        <TabsContent value="profile">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">School Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label>School Name</Label>
                  <Input defaultValue={selectedSchool.name} className="mt-1" />
                </div>
                <div>
                  <Label>City</Label>
                  <Input defaultValue={selectedSchool.city} className="mt-1" />
                </div>
                <div>
                  <Label>Address</Label>
                  <Input defaultValue="Gulberg III, Lahore" className="mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Established</Label>
                    <Input defaultValue="1975" className="mt-1" />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input defaultValue="042-35761234" className="mt-1" />
                  </div>
                </div>
                <Button
                  onClick={() => toast.success("School profile updated!")}
                  className="w-full"
                >
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">
                  Branches ({SCHOOL_BRANCHES.length})
                </h3>
                <Dialog open={addBranchOpen} onOpenChange={setAddBranchOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus size={13} className="mr-1" />
                      Add Branch
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Branch</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3 mt-2">
                      <div>
                        <Label>Branch Name</Label>
                        <Input
                          className="mt-1"
                          placeholder="e.g. Johar Town Branch"
                        />
                      </div>
                      <div>
                        <Label>City</Label>
                        <Input className="mt-1" placeholder="e.g. Lahore" />
                      </div>
                      <div>
                        <Label>Address</Label>
                        <Input className="mt-1" placeholder="Full address" />
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => {
                          toast.success("Branch added!");
                          setAddBranchOpen(false);
                        }}
                      >
                        Add Branch
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="space-y-2">
                {SCHOOL_BRANCHES.map((b) => (
                  <Card key={b.id}>
                    <CardContent className="p-3 flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "oklch(var(--primary) / 0.1)" }}
                      >
                        <MapPin
                          size={15}
                          style={{ color: "oklch(var(--primary))" }}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{b.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {b.address}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {b.students} students
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Departments */}
        <TabsContent value="departments">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Departments</h3>
            <Dialog open={addDeptOpen} onOpenChange={setAddDeptOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus size={13} className="mr-1" />
                  Add Department
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Department</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 mt-2">
                  <div>
                    <Label>Department Name</Label>
                    <Input
                      className="mt-1"
                      placeholder="e.g. Computer Science"
                    />
                  </div>
                  <div>
                    <Label>Head Teacher</Label>
                    <Input className="mt-1" placeholder="Full name" />
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => {
                      toast.success("Department created!");
                      setAddDeptOpen(false);
                    }}
                  >
                    Create
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SCHOOL_DEPARTMENTS.map((d) => (
              <Card key={d.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "oklch(var(--primary) / 0.1)" }}
                    >
                      <Microscope
                        size={20}
                        style={{ color: "oklch(var(--primary))" }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{d.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Head: {d.head}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-secondary/50 rounded-lg p-2">
                      <p
                        className="font-bold text-sm"
                        style={{ color: "oklch(var(--primary))" }}
                      >
                        {d.teachers}
                      </p>
                      <p className="text-xs text-muted-foreground">Teachers</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-2">
                      <p
                        className="font-bold text-sm"
                        style={{ color: "oklch(var(--primary))" }}
                      >
                        {d.students}
                      </p>
                      <p className="text-xs text-muted-foreground">Students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Enrollment Approvals */}
        <TabsContent value="enrollments">
          <Tabs defaultValue="students">
            <TabsList className="mb-4">
              <TabsTrigger value="students">
                Students ({PENDING_ENROLLMENTS.students.length})
              </TabsTrigger>
              <TabsTrigger value="teachers">
                Teachers ({PENDING_ENROLLMENTS.teachers.length})
              </TabsTrigger>
              <TabsTrigger value="parents">
                Parents ({PENDING_ENROLLMENTS.parents.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="students">
              <div className="space-y-3">
                {PENDING_ENROLLMENTS.students.map((s) => {
                  const key = makeEnrollKey("student", s.id);
                  const decision = enrollDecisions[key] ?? null;
                  return (
                    <Card key={s.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback
                              style={{
                                background: "oklch(var(--primary) / 0.1)",
                                color: "oklch(var(--primary))",
                              }}
                            >
                              {s.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm">{s.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {s.class} &bull; Parent: {s.parent} &bull;{" "}
                              {s.city}
                            </p>
                          </div>
                          <span className="ml-auto text-xs text-muted-foreground">
                            Applied: {s.applied}
                          </span>
                        </div>
                        {decision === null ? (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white h-7 text-xs"
                              onClick={() => {
                                setEnrollDecisions((d) => ({
                                  ...d,
                                  [key]: "approved",
                                }));
                                toast.success(`${s.name} enrollment approved`);
                              }}
                            >
                              <BadgeCheck size={12} className="mr-1" />
                              Approve & Enroll
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-red-300 text-red-600 h-7 text-xs"
                              onClick={() => {
                                setEnrollDecisions((d) => ({
                                  ...d,
                                  [key]: "rejected",
                                }));
                                toast.error("Enrollment rejected");
                              }}
                            >
                              <XCircle size={12} className="mr-1" />
                              Reject
                            </Button>
                          </div>
                        ) : (
                          <StatusBadge status={decision} />
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="teachers">
              <div className="space-y-3">
                {PENDING_ENROLLMENTS.teachers.map((t) => {
                  const key = makeEnrollKey("teacher", t.id);
                  const decision = enrollDecisions[key] ?? null;
                  return (
                    <Card key={t.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback
                              style={{
                                background: "oklch(0.65 0.25 280 / 0.1)",
                                color: "oklch(0.65 0.25 280)",
                              }}
                            >
                              {t.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm">{t.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {t.subject} &bull; {t.qualification} &bull;{" "}
                              {t.exp} experience
                            </p>
                          </div>
                          <span className="ml-auto text-xs text-muted-foreground">
                            Applied: {t.applied}
                          </span>
                        </div>
                        {decision === null ? (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white h-7 text-xs"
                              onClick={() => {
                                setEnrollDecisions((d) => ({
                                  ...d,
                                  [key]: "approved",
                                }));
                                toast.success(`${t.name} approved as teacher`);
                              }}
                            >
                              <BadgeCheck size={12} className="mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-red-300 text-red-600 h-7 text-xs"
                              onClick={() => {
                                setEnrollDecisions((d) => ({
                                  ...d,
                                  [key]: "rejected",
                                }));
                              }}
                            >
                              <XCircle size={12} className="mr-1" />
                              Reject
                            </Button>
                          </div>
                        ) : (
                          <StatusBadge status={decision} />
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="parents">
              <div className="space-y-3">
                {PENDING_ENROLLMENTS.parents.map((p) => {
                  const key = makeEnrollKey("parent", p.id);
                  const decision = enrollDecisions[key] ?? null;
                  return (
                    <Card key={p.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback
                              style={{
                                background: "oklch(0.65 0.25 335 / 0.1)",
                                color: "oklch(0.65 0.25 335)",
                              }}
                            >
                              {p.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm">{p.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Child: {p.child} &bull; {p.phone}
                            </p>
                          </div>
                          <span className="ml-auto text-xs text-muted-foreground">
                            Applied: {p.applied}
                          </span>
                        </div>
                        {decision === null ? (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white h-7 text-xs"
                              onClick={() => {
                                setEnrollDecisions((d) => ({
                                  ...d,
                                  [key]: "approved",
                                }));
                                toast.success(
                                  `${p.name} parent access granted`,
                                );
                              }}
                            >
                              <BadgeCheck size={12} className="mr-1" />
                              Grant Access
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-red-300 text-red-600 h-7 text-xs"
                              onClick={() => {
                                setEnrollDecisions((d) => ({
                                  ...d,
                                  [key]: "rejected",
                                }));
                              }}
                            >
                              <XCircle size={12} className="mr-1" />
                              Reject
                            </Button>
                          </div>
                        ) : (
                          <StatusBadge status={decision} />
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* Fees & Salaries */}
        <TabsContent value="fees">
          <Tabs defaultValue="fees">
            <TabsList className="mb-4">
              <TabsTrigger value="fees">Student Fees</TabsTrigger>
              <TabsTrigger value="salaries">Staff Salaries</TabsTrigger>
            </TabsList>

            <TabsContent value="fees">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Fee Structure (per class)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Class</TableHead>
                        <TableHead>Tuition (PKR)</TableHead>
                        <TableHead>Lab (PKR)</TableHead>
                        <TableHead>Library (PKR)</TableHead>
                        <TableHead>Transport (PKR)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        "Grade 8",
                        "Grade 9",
                        "Grade 10",
                        "Grade 11",
                        "Grade 12",
                      ].map((cls) => (
                        <TableRow key={cls}>
                          <TableCell className="font-medium text-sm">
                            {cls}
                          </TableCell>
                          <TableCell>
                            <Input
                              className="h-7 w-24 text-sm"
                              defaultValue={
                                cls === "Grade 12"
                                  ? "12000"
                                  : cls === "Grade 11"
                                    ? "11000"
                                    : "8500"
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              className="h-7 w-20 text-sm"
                              defaultValue="500"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              className="h-7 w-20 text-sm"
                              defaultValue="200"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              className="h-7 w-20 text-sm"
                              defaultValue="1200"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Button
                    className="mt-4 w-full"
                    onClick={() => toast.success("Fee structure saved!")}
                  >
                    Save Fee Structure
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="salaries">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Staff Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Salary (PKR)</TableHead>
                    <TableHead>Last Paid</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {SCHOOL_SALARIES.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell className="text-sm font-medium">
                        {s.name}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {s.role}
                      </TableCell>
                      <TableCell className="text-sm">
                        PKR {s.salary.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {s.lastPaid}
                      </TableCell>
                      <TableCell>
                        <StatusBadge
                          status={salaryPaid[s.id] ? "paid" : s.status}
                        />
                      </TableCell>
                      <TableCell>
                        {s.status === "due" && !salaryPaid[s.id] && (
                          <Button
                            size="sm"
                            className="h-7 text-xs"
                            onClick={() => {
                              setSalaryPaid((p) => ({ ...p, [s.id]: true }));
                              toast.success(`Salary paid to ${s.name}`);
                            }}
                          >
                            Pay
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* Staff Leave */}
        <TabsContent value="leave">
          <div className="space-y-3">
            <h3 className="font-semibold mb-2">Leave Requests</h3>
            {SCHOOL_LEAVE_REQUESTS.map((req) => {
              const decision =
                leaveDecisions[req.id] ??
                (req.status === "approved" ? "approved" : null);
              return (
                <Card key={req.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "oklch(var(--primary) / 0.1)" }}
                      >
                        <UserCog
                          size={17}
                          style={{ color: "oklch(var(--primary))" }}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{req.staff}</p>
                        <p className="text-xs text-muted-foreground">
                          {req.type} &bull; {req.from} to {req.to} &bull;{" "}
                          {req.days} day(s)
                        </p>
                      </div>
                    </div>
                    {decision === null ? (
                      <div className="flex gap-2 mt-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white h-7 text-xs"
                          onClick={() => {
                            setLeaveDecisions((d) => ({
                              ...d,
                              [req.id]: "approved",
                            }));
                            toast.success("Leave approved");
                          }}
                        >
                          <CheckCircle2 size={12} className="mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-red-300 text-red-600 h-7 text-xs"
                          onClick={() => {
                            setLeaveDecisions((d) => ({
                              ...d,
                              [req.id]: "rejected",
                            }));
                            toast.error("Leave rejected");
                          }}
                        >
                          <XCircle size={12} className="mr-1" />
                          Reject
                        </Button>
                      </div>
                    ) : (
                      <StatusBadge status={decision} />
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Groups & Feeds */}
        <TabsContent value="groups">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">School Groups</h3>
            <Button size="sm">
              <Plus size={13} className="mr-1" />
              Create Group
            </Button>
          </div>
          <div className="space-y-3">
            {SCHOOL_GROUPS.map((g) => (
              <Card key={g.id}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "oklch(var(--primary) / 0.1)" }}
                  >
                    <Users
                      size={18}
                      style={{ color: "oklch(var(--primary))" }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm">{g.name}</p>
                      <Badge variant="outline" className="text-xs capitalize">
                        {g.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {g.members} members &bull; Latest: {g.latestPost}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs h-7"
                    onClick={() => toast.success(`Opened ${g.name} feed`)}
                  >
                    <MessageSquare size={12} className="mr-1" />
                    Feed
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Transfers */}
        <TabsContent value="transfers">
          <Tabs defaultValue="outgoing">
            <TabsList className="mb-4">
              <TabsTrigger value="outgoing">
                Outgoing ({TRANSFER_REQUESTS.length})
              </TabsTrigger>
              <TabsTrigger value="incoming">Incoming (1)</TabsTrigger>
              <TabsTrigger value="cross-school">Between Schools</TabsTrigger>
            </TabsList>
            <TabsContent value="outgoing">
              <div className="space-y-3">
                {TRANSFER_REQUESTS.map((t) => {
                  const decision = transferDecisions[t.id] ?? null;
                  return (
                    <Card key={t.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3 mb-2">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback
                              style={{
                                background: "oklch(var(--primary) / 0.1)",
                                color: "oklch(var(--primary))",
                              }}
                            >
                              {t.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{t.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {t.type} &bull; {t.from} → {t.to}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Reason: {t.reason} &bull; Date: {t.date}
                            </p>
                          </div>
                        </div>
                        {decision === null ? (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white h-7 text-xs"
                              onClick={() => {
                                setTransferDecisions((d) => ({
                                  ...d,
                                  [t.id]: "approved",
                                }));
                                toast.success(
                                  `Transfer approved and data sent to ${t.to}`,
                                );
                              }}
                            >
                              <Send size={12} className="mr-1" />
                              Approve & Send Data
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-red-300 text-red-600 h-7 text-xs"
                              onClick={() => {
                                setTransferDecisions((d) => ({
                                  ...d,
                                  [t.id]: "rejected",
                                }));
                              }}
                            >
                              <XCircle size={12} className="mr-1" />
                              Reject
                            </Button>
                          </div>
                        ) : (
                          <StatusBadge status={decision} />
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="incoming">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback
                        style={{
                          background: "oklch(var(--primary) / 0.1)",
                          color: "oklch(var(--primary))",
                        }}
                      >
                        ZA
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Zara Ahmed</p>
                      <p className="text-xs text-muted-foreground">
                        Student &bull; From: The City School, Karachi &bull;
                        Grade 9
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Requesting transfer to DHA Branch, Lahore
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white h-7 text-xs"
                      onClick={() =>
                        toast.success(
                          "Transfer accepted and student data imported!",
                        )
                      }
                    >
                      <UserCheck size={12} className="mr-1" />
                      Accept & Import Data
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-red-300 text-red-600 h-7 text-xs"
                      onClick={() => toast.error("Transfer declined")}
                    >
                      <XCircle size={12} className="mr-1" />
                      Decline
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cross-school">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">
                    Transfer Between Schools/Academies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs">From School</Label>
                      <Select defaultValue={String(selectedSchoolId)}>
                        <SelectTrigger className="mt-1 h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {schools.map((s) => (
                            <SelectItem key={s.id} value={String(s.id)}>
                              {s.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">To School</Label>
                      <Select defaultValue="2">
                        <SelectTrigger className="mt-1 h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {schools.map((s) => (
                            <SelectItem key={s.id} value={String(s.id)}>
                              {s.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs">Student/Staff Name</Label>
                    <Input
                      className="mt-1 h-8 text-xs"
                      placeholder="Search member..."
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Transfer Reason</Label>
                    <Textarea
                      className="mt-1 text-xs"
                      placeholder="Reason for cross-school transfer..."
                      rows={2}
                    />
                  </div>
                  <Button
                    size="sm"
                    className="w-full h-8 text-xs"
                    onClick={() =>
                      toast.success(
                        "Cross-school transfer request submitted for admin approval!",
                      )
                    }
                  >
                    Submit Transfer Request
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* School Timeline */}
        <TabsContent value="timeline">
          <div className="space-y-1 pt-2">
            {SCHOOL_TIMELINE.map((item) => (
              <TimelineItem key={item.date} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="library">
          <LibraryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

// ─── School Directory ────────────────────────────────────────────────────────────────────

const SCHOOL_DIRECTORY = [
  {
    id: "sch-1",
    name: "Greenwood International School",
    location: "Mumbai, Maharashtra",
    type: "Secondary" as const,
    branches: 3,
    enrollment: 1840,
    description:
      "CBSE affiliated institution offering world-class education from KG to Class 12 with STEM focus.",
    accessible: true,
  },
  {
    id: "sch-2",
    name: "Delhi Public School",
    location: "New Delhi, NCT",
    type: "Primary" as const,
    branches: 7,
    enrollment: 3200,
    description:
      "One of India's premier school networks with strong academics, sports, and cultural programs.",
    accessible: true,
  },
  {
    id: "sch-3",
    name: "Sunrise Academy of Sciences",
    location: "Bengaluru, Karnataka",
    type: "University" as const,
    branches: 2,
    enrollment: 5600,
    description:
      "A leading science and technology academy offering undergraduate and postgraduate programs.",
    accessible: false,
  },
  {
    id: "sch-4",
    name: "Little Stars Montessori",
    location: "Pune, Maharashtra",
    type: "Primary" as const,
    branches: 4,
    enrollment: 620,
    description:
      "Early childhood education using the Montessori method, nurturing creativity and independence.",
    accessible: false,
  },
  {
    id: "sch-5",
    name: "IndyaCentral Tech Academy",
    location: "Hyderabad, Telangana",
    type: "Academy" as const,
    branches: 1,
    enrollment: 980,
    description:
      "Vocational and professional training in technology, design, and digital marketing.",
    accessible: true,
  },
  {
    id: "sch-6",
    name: "Heritage Convent School",
    location: "Chennai, Tamil Nadu",
    type: "Secondary" as const,
    branches: 2,
    enrollment: 1450,
    description:
      "An established institution with 70+ years of academic excellence and holistic development.",
    accessible: false,
  },
];

type SchoolDirType = "Primary" | "Secondary" | "University" | "Academy";

function SchoolDirectoryView({
  onEnterSchool,
}: { onEnterSchool: (name: string) => void }) {
  const [requested, setRequested] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const typeColor: Record<SchoolDirType, string> = {
    Primary: "oklch(0.62 0.18 145)",
    Secondary: "oklch(0.55 0.18 240)",
    University: "oklch(0.58 0.20 290)",
    Academy: "oklch(0.62 0.18 50)",
  };

  const filtered = SCHOOL_DIRECTORY.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.location.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center gap-3 flex-wrap">
        <h2 className="font-display font-bold text-foreground text-xl flex-1">
          School Directory
        </h2>
        <div className="relative w-full sm:w-64">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search schools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 h-9 text-sm"
            data-ocid="education.directory.search_input"
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground -mt-2">
        {filtered.length} institution{filtered.length !== 1 ? "s" : ""} · Login
        available for accessible schools only
      </p>
      {filtered.length === 0 ? (
        <div
          className="text-center py-16 text-muted-foreground"
          data-ocid="education.directory.empty_state"
        >
          <School size={40} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">No schools found for &ldquo;{search}&rdquo;</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((school, idx) => {
            const color = typeColor[school.type as SchoolDirType];
            const isRequested = requested.includes(school.id);
            return (
              <div
                key={school.id}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                data-ocid={`education.directory.item.${idx + 1}`}
              >
                <div
                  className="h-2 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${color}60, ${color}20)`,
                  }}
                />
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${color}18` }}
                    >
                      <School size={18} style={{ color }} />
                    </div>
                    <Badge
                      className="text-[10px] px-2 py-0 shrink-0"
                      style={{ background: `${color}15`, color }}
                    >
                      {school.type}
                    </Badge>
                  </div>
                  <h3 className="font-label font-bold text-foreground text-sm leading-tight mb-1">
                    {school.name}
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                    <MapPin size={10} />
                    {school.location}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2 flex-1">
                    {school.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="bg-secondary/50 rounded-lg p-2 text-center">
                      <p className="font-label font-bold text-foreground">
                        {school.branches}
                      </p>
                      <p className="text-muted-foreground">Branches</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-2 text-center">
                      <p className="font-label font-bold text-foreground">
                        {school.enrollment.toLocaleString()}
                      </p>
                      <p className="text-muted-foreground">Students</p>
                    </div>
                  </div>
                  {school.accessible ? (
                    <Button
                      size="sm"
                      className="w-full h-8 text-xs font-label gap-1.5"
                      onClick={() => onEnterSchool(school.name)}
                      data-ocid={`education.directory.enter_button.${idx + 1}`}
                    >
                      <LogIn size={12} />
                      Enter School
                    </Button>
                  ) : isRequested ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full h-8 text-xs font-label gap-1.5"
                      disabled
                      data-ocid={`education.directory.requested_button.${idx + 1}`}
                    >
                      <CheckCircle2 size={12} className="text-emerald-500" />
                      Request Sent
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full h-8 text-xs font-label gap-1.5"
                      onClick={() => {
                        setRequested((prev) => [...prev, school.id]);
                        toast.success(`Access request sent to ${school.name}`);
                      }}
                      data-ocid={`education.directory.request_button.${idx + 1}`}
                    >
                      <Send size={12} />
                      Request Access
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function EducationPage() {
  const [role, setRole] = useState<Role>(null);
  const [activeSchool, setActiveSchool] = useState<string | null>(null);
  const [mainTab, setMainTab] = useState("directory");

  const handleEnterSchool = (schoolName: string) => {
    setActiveSchool(schoolName);
    setMainTab("school");
  };

  const roleLabel: Record<NonNullable<Role>, string> = {
    student: "Student",
    parent: "Parent / Guardian",
    teacher: "Teacher",
    admin: "School Admin",
  };

  return (
    <div className="min-h-full bg-background">
      <div className="sticky top-0 z-10 bg-card border-b border-border px-4 py-2 flex items-center gap-3">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "oklch(var(--primary) / 0.12)" }}
        >
          <GraduationCap size={15} style={{ color: "oklch(var(--primary))" }} />
        </div>
        <span className="text-sm font-semibold">Education Hub</span>
        {activeSchool && (
          <>
            <ChevronRight size={13} className="text-muted-foreground" />
            <span
              className="text-sm font-medium"
              style={{ color: "oklch(var(--primary))" }}
            >
              {activeSchool}
            </span>
          </>
        )}
        {role && (
          <>
            <ChevronRight size={13} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {roleLabel[role]}
            </span>
          </>
        )}
        {(activeSchool || role) && (
          <Button
            size="sm"
            variant="ghost"
            className="ml-auto text-xs h-7 text-muted-foreground"
            onClick={() => {
              setRole(null);
              setActiveSchool(null);
              setMainTab("directory");
            }}
          >
            ← Directory
          </Button>
        )}
      </div>

      <Tabs value={mainTab} onValueChange={setMainTab}>
        <div className="px-4 pt-4">
          <TabsList>
            <TabsTrigger value="directory" data-ocid="education.directory.tab">
              <Grid size={13} className="mr-1.5" />
              School Directory
            </TabsTrigger>
            <TabsTrigger value="school" data-ocid="education.school.tab">
              <School size={13} className="mr-1.5" />
              My School
            </TabsTrigger>
            <TabsTrigger value="events" data-ocid="education.events.tab">
              <CalendarDays size={13} className="mr-1.5" />
              Events
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="directory">
          <SchoolDirectoryView onEnterSchool={handleEnterSchool} />
        </TabsContent>

        <TabsContent value="school">
          {role === null ? (
            <RoleSelector onSelect={setRole} />
          ) : (
            <div>
              <div
                className="mx-4 mt-4 flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border"
                style={{
                  background: "oklch(0.60 0.20 190 / 0.06)",
                  borderColor: "oklch(0.60 0.20 190 / 0.2)",
                }}
              >
                <div className="flex items-center gap-2">
                  <Briefcase
                    size={14}
                    style={{ color: "oklch(0.60 0.20 190)" }}
                  />
                  <span className="text-xs font-label text-foreground font-medium">
                    Teaching &amp; Admin Jobs Available
                  </span>
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    — full-time, part-time &amp; freelance teaching roles
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs font-label shrink-0"
                  onClick={() => toast.info("Navigating to Jobs...")}
                >
                  View Jobs
                </Button>
              </div>
              <QuickAddBar moduleName="Education" />
              {role === "student" && <StudentView />}
              {role === "parent" && <ParentView />}
              {role === "teacher" && <TeacherView />}
              {role === "admin" && <AdminView />}
            </div>
          )}
        </TabsContent>

        <TabsContent value="events">
          <div className="p-4">
            <EventsTab
              moduleName="Education"
              moduleColor="oklch(0.55 0.18 240)"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
