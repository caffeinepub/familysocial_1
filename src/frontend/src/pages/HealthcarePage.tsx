import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
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
  Activity,
  AlertCircle,
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock,
  Droplets,
  Edit3,
  GraduationCap,
  Heart,
  MapPin,
  Phone,
  Pill,
  Plus,
  Shield,
  ShieldCheck,
  Star,
  Stethoscope,
  Trash2,
  User,
  Users,
  X,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { UserProfile } from "../backend.d";
import EventsTab from "../components/EventsTab";
import QuickAddBar from "../components/QuickAddBar";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface Prescription {
  id: number;
  medication: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  expiry: string;
  memberName?: string;
}

interface VitalReading {
  id: number;
  date: string;
  bp: string;
  pulse: number;
  glucose: number;
  weight: number;
  memberName?: string;
}

interface Appointment {
  id: number;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  clinic: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  notes?: string;
}

interface InsurancePolicy {
  id: number;
  provider: string;
  policyNumber: string;
  type: "Individual" | "Individual + Family" | "Corporate";
  premium: number;
  coverage: number;
  expiryDate: string;
  startDate: string;
  status: "Active" | "Expired";
}

interface InsuranceClaim {
  id: number;
  date: string;
  amount: number;
  status: "Approved" | "Pending" | "Rejected";
  description: string;
}

interface Advisor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  hospital: string;
  availability: "Available" | "Busy";
  bio: string;
  qualifications: string[];
  consultationFee: number;
  workingHours: string;
  reviews: { author: string; rating: number; comment: string }[];
}

interface FamilyHealthMember {
  id: number;
  name: string;
  relationship: string;
  bloodType: string;
  age: number;
  medicalConditions: string[];
}

// ─────────────────────────────────────────────
// Mock Data
// ─────────────────────────────────────────────
const MOCK_PRESCRIPTIONS: Prescription[] = [
  {
    id: 1,
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    prescribedBy: "Dr. Ayesha Siddiqui",
    expiry: "Dec 2026",
  },
  {
    id: 2,
    medication: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    prescribedBy: "Dr. Usman Tariq",
    expiry: "Mar 2026",
  },
  {
    id: 3,
    medication: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once at night",
    prescribedBy: "Dr. Ayesha Siddiqui",
    expiry: "Jun 2026",
  },
];

const MOCK_VITALS: VitalReading[] = [
  {
    id: 1,
    date: "Mar 01, 2026",
    bp: "128/82",
    pulse: 74,
    glucose: 112,
    weight: 78,
  },
  {
    id: 2,
    date: "Feb 22, 2026",
    bp: "130/85",
    pulse: 78,
    glucose: 118,
    weight: 78.5,
  },
  {
    id: 3,
    date: "Feb 15, 2026",
    bp: "125/80",
    pulse: 72,
    glucose: 105,
    weight: 79,
  },
  {
    id: 4,
    date: "Feb 08, 2026",
    bp: "132/88",
    pulse: 80,
    glucose: 124,
    weight: 79.2,
  },
  {
    id: 5,
    date: "Feb 01, 2026",
    bp: "127/83",
    pulse: 76,
    glucose: 115,
    weight: 79.5,
  },
];

const MOCK_UPCOMING_APPOINTMENTS: Appointment[] = [
  {
    id: 1,
    doctor: "Dr. Ayesha Siddiqui",
    specialty: "Cardiologist",
    date: "Mar 10, 2026",
    time: "11:00 AM",
    clinic: "AKUH Cardiology Clinic",
    status: "Confirmed",
    notes:
      "Follow-up for blood pressure management. Please bring your last 3 BP readings. Medication review planned.",
  },
  {
    id: 2,
    doctor: "Dr. Bilal Ahmed",
    specialty: "Nutritionist",
    date: "Mar 18, 2026",
    time: "3:30 PM",
    clinic: "Online Consultation",
    status: "Pending",
    notes: "Initial diet consultation for diabetes management.",
  },
  {
    id: 3,
    doctor: "Dr. Fatima Khan",
    specialty: "Dermatologist",
    date: "Mar 25, 2026",
    time: "2:00 PM",
    clinic: "CMH Lahore",
    status: "Confirmed",
    notes: "Annual skin checkup.",
  },
];

const MOCK_PAST_APPOINTMENTS: Appointment[] = [
  {
    id: 4,
    doctor: "Dr. Usman Tariq",
    specialty: "General Physician",
    date: "Feb 12, 2026",
    time: "10:00 AM",
    clinic: "Shaukat Khanum",
    status: "Confirmed",
    notes:
      "Routine checkup completed. Blood tests ordered — HbA1c, lipid panel, CBC. Results normal except slightly elevated LDL. Advised dietary changes and follow-up in 6 weeks.",
  },
  {
    id: 5,
    doctor: "Dr. Ayesha Siddiqui",
    specialty: "Cardiologist",
    date: "Jan 20, 2026",
    time: "9:30 AM",
    clinic: "AKUH Cardiology Clinic",
    status: "Confirmed",
    notes:
      "ECG performed — normal sinus rhythm. BP was 134/88, slightly high. Lisinopril dose adjusted from 5mg to 10mg. Lifestyle modification counseling provided. Next appointment in 6 weeks.",
  },
  {
    id: 6,
    doctor: "Dr. Sara Malik",
    specialty: "Psychologist",
    date: "Jan 05, 2026",
    time: "5:00 PM",
    clinic: "Online Consultation",
    status: "Confirmed",
    notes:
      "Session focused on stress management techniques. Patient reported improved sleep. CBT exercises assigned. Follow-up in one month.",
  },
];

const MOCK_POLICIES: InsurancePolicy[] = [
  {
    id: 1,
    provider: "Jubilee Health Insurance",
    policyNumber: "JHL-2024-88231",
    type: "Individual + Family",
    premium: 45000,
    coverage: 5000000,
    startDate: "Jan 2024",
    expiryDate: "Dec 2025",
    status: "Active",
  },
  {
    id: 2,
    provider: "State Life",
    policyNumber: "SLI-2023-55109",
    type: "Individual",
    premium: 18000,
    coverage: 1500000,
    startDate: "Apr 2023",
    expiryDate: "Mar 2024",
    status: "Expired",
  },
];

const MOCK_CLAIMS: InsuranceClaim[] = [
  {
    id: 1,
    date: "Feb 14, 2026",
    amount: 18500,
    status: "Approved",
    description: "Lab tests & cardiac consultation at AKUH",
  },
  {
    id: 2,
    date: "Jan 22, 2026",
    amount: 35000,
    status: "Pending",
    description: "Specialist consultation and diagnostics",
  },
  {
    id: 3,
    date: "Nov 10, 2025",
    amount: 72000,
    status: "Approved",
    description: "Minor surgical procedure – day care",
  },
  {
    id: 4,
    date: "Sep 03, 2025",
    amount: 8200,
    status: "Rejected",
    description: "Dental scaling (not covered under policy)",
  },
];

const MOCK_ADVISORS: Advisor[] = [
  {
    id: 1,
    name: "Dr. Ayesha Siddiqui",
    specialty: "Cardiologist",
    experience: 15,
    rating: 4.8,
    hospital: "AKUH, Karachi",
    availability: "Available",
    bio: "Dr. Ayesha Siddiqui is a consultant cardiologist with 15 years of clinical experience at Aga Khan University Hospital. She specializes in interventional cardiology, heart failure management, and preventive cardiac care.",
    qualifications: [
      "MBBS – Dow University",
      "FCPS Cardiology",
      "Fellowship – Johns Hopkins",
      "Fellow of American College of Cardiology",
    ],
    consultationFee: 3500,
    workingHours: "Mon–Fri: 9am–5pm",
    reviews: [
      {
        author: "Kamran M.",
        rating: 5,
        comment:
          "Exceptionally thorough. Took time to explain everything. Highly recommend.",
      },
      {
        author: "Sana R.",
        rating: 5,
        comment: "Very professional and caring. Best cardiologist in Karachi.",
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Usman Tariq",
    specialty: "General Physician",
    experience: 8,
    rating: 4.5,
    hospital: "Shaukat Khanum, Lahore",
    availability: "Available",
    bio: "Dr. Usman Tariq is a general physician with expertise in managing chronic diseases including diabetes, hypertension, and thyroid disorders. He offers comprehensive preventive care and health screenings.",
    qualifications: [
      "MBBS – King Edward Medical University",
      "MRCP (UK)",
      "Diploma in Diabetes Management",
    ],
    consultationFee: 2000,
    workingHours: "Mon–Sat: 10am–6pm",
    reviews: [
      {
        author: "Ali H.",
        rating: 4,
        comment:
          "Very knowledgeable doctor. Quick diagnosis and practical advice.",
      },
      {
        author: "Fatima K.",
        rating: 5,
        comment: "Excellent doctor, always available for follow-up questions.",
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Fatima Khan",
    specialty: "Dermatologist",
    experience: 10,
    rating: 4.7,
    hospital: "CMH Lahore",
    availability: "Busy",
    bio: "Dr. Fatima Khan is a board-certified dermatologist specializing in medical and cosmetic dermatology. She treats acne, eczema, psoriasis, and performs laser treatments.",
    qualifications: [
      "MBBS – Allama Iqbal Medical College",
      "FCPS Dermatology",
      "DAAA Certification",
    ],
    consultationFee: 2500,
    workingHours: "Tue, Thu, Sat: 2pm–8pm",
    reviews: [
      {
        author: "Maira S.",
        rating: 5,
        comment:
          "Amazing results after just 4 sessions. Very thorough diagnosis.",
      },
      {
        author: "Hassan B.",
        rating: 4,
        comment: "Professional and knowledgeable. Wait times can be long.",
      },
    ],
  },
  {
    id: 4,
    name: "Dr. Bilal Ahmed",
    specialty: "Nutritionist",
    experience: 6,
    rating: 4.6,
    hospital: "Online Practice",
    availability: "Available",
    bio: "Dr. Bilal Ahmed is a clinical nutritionist and dietitian specializing in therapeutic nutrition for diabetes, obesity, PCOS, and sports performance. He conducts online and in-person consultations.",
    qualifications: [
      "BSc Food & Nutrition – Lahore College",
      "MSc Clinical Nutrition – AKU",
      "Certified Diabetes Educator",
    ],
    consultationFee: 1500,
    workingHours: "Mon–Sun: 9am–9pm (Online)",
    reviews: [
      {
        author: "Zara T.",
        rating: 5,
        comment:
          "Life-changing diet plan. Lost 8kg in 3 months following his guidance.",
      },
      {
        author: "Omar F.",
        rating: 4,
        comment: "Very responsive and supportive. Great meal plans.",
      },
    ],
  },
  {
    id: 5,
    name: "Dr. Sara Malik",
    specialty: "Psychologist",
    experience: 12,
    rating: 4.9,
    hospital: "Online Practice",
    availability: "Available",
    bio: "Dr. Sara Malik is a licensed clinical psychologist with 12 years of experience in CBT, mindfulness-based therapy, and trauma counseling. She specializes in anxiety, depression, and stress-related disorders.",
    qualifications: [
      "BSc Psychology – LUMS",
      "MSc Clinical Psychology – Punjab University",
      "PhD – University of Toronto",
      "Certified CBT Practitioner",
    ],
    consultationFee: 3000,
    workingHours: "Mon–Fri: 5pm–9pm (Online)",
    reviews: [
      {
        author: "Nadia A.",
        rating: 5,
        comment:
          "Dr. Sara changed my life. She is compassionate and incredibly insightful.",
      },
      {
        author: "Imran Q.",
        rating: 5,
        comment:
          "Best therapist I've ever seen. Very professional and empathetic.",
      },
    ],
  },
  {
    id: 6,
    name: "Dr. Hamid Raza",
    specialty: "Orthopedic Surgeon",
    experience: 20,
    rating: 4.4,
    hospital: "Services Hospital, Lahore",
    availability: "Busy",
    bio: "Dr. Hamid Raza is a senior orthopedic surgeon with 20 years of experience in joint replacement, spine surgery, and sports injuries. He has performed over 3,000 successful orthopedic procedures.",
    qualifications: [
      "MBBS – KEMU",
      "FCPS Orthopedic Surgery",
      "Fellowship Joint Replacement – Germany",
      "Member Pakistan Orthopedic Association",
    ],
    consultationFee: 4000,
    workingHours: "Mon, Wed, Fri: 10am–2pm",
    reviews: [
      {
        author: "Rehman G.",
        rating: 4,
        comment:
          "Very experienced surgeon. My knee replacement was very successful.",
      },
      {
        author: "Asma N.",
        rating: 5,
        comment: "Highly skilled. Explained the surgery procedure thoroughly.",
      },
    ],
  },
];

const MOCK_FAMILY_HEALTH: FamilyHealthMember[] = [
  {
    id: 1,
    name: "Amjad Ali",
    relationship: "Father",
    bloodType: "O+",
    age: 65,
    medicalConditions: ["Type 2 Diabetes", "Hypertension"],
  },
  {
    id: 2,
    name: "Shahida Bibi",
    relationship: "Mother",
    bloodType: "A+",
    age: 60,
    medicalConditions: ["Arthritis", "Thyroid Disorder"],
  },
  {
    id: 3,
    name: "Saad Ali",
    relationship: "Son",
    bloodType: "B+",
    age: 18,
    medicalConditions: [],
  },
  {
    id: 4,
    name: "Hira Ali",
    relationship: "Daughter",
    bloodType: "A-",
    age: 14,
    medicalConditions: ["Asthma"],
  },
  {
    id: 5,
    name: "Tariq Ali",
    relationship: "Brother",
    bloodType: "AB+",
    age: 38,
    medicalConditions: ["High Cholesterol"],
  },
];

// ─────────────────────────────────────────────
// Color helpers
// ─────────────────────────────────────────────
const STATUS_STYLES = {
  Confirmed: {
    bg: "oklch(0.52 0.14 155 / 0.15)",
    color: "oklch(0.52 0.14 155)",
  },
  Pending: { bg: "oklch(0.65 0.14 50 / 0.15)", color: "oklch(0.65 0.14 50)" },
  Cancelled: { bg: "oklch(0.55 0.22 25 / 0.15)", color: "oklch(0.55 0.22 25)" },
};

const CLAIM_STYLES = {
  Approved: {
    bg: "oklch(0.52 0.14 155 / 0.15)",
    color: "oklch(0.52 0.14 155)",
  },
  Pending: { bg: "oklch(0.65 0.14 50 / 0.15)", color: "oklch(0.65 0.14 50)" },
  Rejected: { bg: "oklch(0.55 0.22 25 / 0.15)", color: "oklch(0.55 0.22 25)" },
};

const BLOOD_TYPE_COLORS: Record<string, string> = {
  "A+": "oklch(0.55 0.22 280)",
  "A-": "oklch(0.55 0.22 280)",
  "B+": "oklch(0.65 0.25 335)",
  "B-": "oklch(0.65 0.25 335)",
  "AB+": "oklch(0.55 0.22 25)",
  "AB-": "oklch(0.55 0.22 25)",
  "O+": "oklch(0.52 0.14 155)",
  "O-": "oklch(0.52 0.14 155)",
};

const SPECIALTY_COLORS: Record<string, string> = {
  Cardiologist: "oklch(0.55 0.22 25)",
  "General Physician": "oklch(0.52 0.14 155)",
  Dermatologist: "oklch(0.65 0.25 335)",
  Nutritionist: "oklch(0.60 0.20 85)",
  Psychologist: "oklch(0.55 0.22 280)",
  "Orthopedic Surgeon": "oklch(0.55 0.12 200)",
};

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function SectionHeader({
  title,
  action,
}: { title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-label font-semibold text-foreground">
        {title}
      </h3>
      {action}
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 1: Medical Records
// ─────────────────────────────────────────────
function MedicalRecordsTab({
  userProfile,
}: { userProfile?: UserProfile | null }) {
  const [conditions, setConditions] = useState([
    "Hypertension",
    "Type 2 Diabetes",
  ]);
  const [allergies, setAllergies] = useState(["Penicillin", "Dust"]);
  const [prescriptions, setPrescriptions] =
    useState<Prescription[]>(MOCK_PRESCRIPTIONS);
  const [vitals, setVitals] = useState<VitalReading[]>(MOCK_VITALS);
  const [diseaseReadings, setDiseaseReadings] = useState<Record<string, any[]>>(
    {
      diabetes: [],
      hypertension: [],
      heart: [],
      thyroid: [],
      kidney: [],
      respiratory: [],
    },
  );
  const [diseaseActiveTab, setDiseaseActiveTab] = useState("vitals");
  const [conditionInput, setConditionInput] = useState("");
  const [allergyInput, setAllergyInput] = useState("");
  const [rxOpen, setRxOpen] = useState(false);
  const [vitalOpen, setVitalOpen] = useState(false);
  const [rxMember, setRxMember] = useState("Self");
  const [vitalMember, setVitalMember] = useState("Self");
  const [familyMembers, setFamilyMembers] = useState<
    { name: string; relationship: string }[]
  >(() => {
    try {
      const stored = localStorage.getItem("ic_family_members");
      if (stored)
        return [{ name: "Self", relationship: "Self" }, ...JSON.parse(stored)];
    } catch {
      /* ignore */
    }
    return [
      { name: "Self", relationship: "Self" },
      { name: "Spouse", relationship: "Spouse" },
      { name: "Father", relationship: "Father" },
      { name: "Mother", relationship: "Mother" },
    ];
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: storage sync
  useEffect(() => {
    const handler = () => {
      try {
        const stored = localStorage.getItem("ic_family_members");
        if (stored)
          setFamilyMembers([
            { name: "Self", relationship: "Self" },
            ...JSON.parse(stored),
          ]);
      } catch {
        /* ignore */
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ic_healthcare_prescriptions");
      if (stored) setPrescriptions(JSON.parse(stored));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ic_healthcare_vitals");
      if (stored) setVitals(JSON.parse(stored));
    } catch {
      /* ignore */
    }
  }, []);

  const [rxForm, setRxForm] = useState({
    medication: "",
    dosage: "",
    frequency: "",
    prescribedBy: "",
    expiry: "",
  });
  const [vitalForm, setVitalForm] = useState({
    bp: "",
    pulse: "",
    glucose: "",
    weight: "",
    temperature: "",
    spo2: "",
  });
  const [diabetesForm, setDiabetesForm] = useState({
    fastingGlucose: "",
    postMealGlucose: "",
    hba1c: "",
    insulin: "",
  });
  const [hypertensionForm, setHypertensionForm] = useState({
    systolic: "",
    diastolic: "",
    pulse: "",
    timeOfDay: "Morning",
  });
  const [heartForm, setHeartForm] = useState({
    heartRate: "",
    ecgNotes: "",
    chestPain: "None",
    medication: "",
  });
  const [thyroidForm, setThyroidForm] = useState({
    tsh: "",
    t3: "",
    t4: "",
    symptoms: "",
  });
  const [kidneyForm, setKidneyForm] = useState({
    creatinine: "",
    bun: "",
    egfr: "",
    fluidIntake: "",
  });
  const [respiratoryForm, setRespiratoryForm] = useState({
    peakFlow: "",
    o2sat: "",
    difficulty: "None",
    inhalerUsed: false,
  });

  const addCondition = () => {
    if (conditionInput.trim()) {
      setConditions((p) => [...p, conditionInput.trim()]);
      setConditionInput("");
    }
  };
  const addAllergy = () => {
    if (allergyInput.trim()) {
      setAllergies((p) => [...p, allergyInput.trim()]);
      setAllergyInput("");
    }
  };

  const addPrescription = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rxForm.medication.trim()) return;
    const newRx = { id: Date.now(), ...rxForm, memberName: rxMember };
    setPrescriptions((p) => {
      const updated = [newRx, ...p];
      try {
        localStorage.setItem(
          "ic_healthcare_prescriptions",
          JSON.stringify(updated),
        );
      } catch {
        /* ignore */
      }
      return updated;
    });
    setRxForm({
      medication: "",
      dosage: "",
      frequency: "",
      prescribedBy: "",
      expiry: "",
    });
    setRxMember("Self");
    setRxOpen(false);
    toast.success("Prescription added.");
  };

  const addVital = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    if (diseaseActiveTab === "vitals") {
      setVitals((prev) => {
        const updated = [
          {
            id: Date.now(),
            date: now,
            bp: vitalForm.bp,
            pulse: Number(vitalForm.pulse),
            glucose: Number(vitalForm.glucose),
            weight: Number(vitalForm.weight),
            memberName: vitalMember,
          },
          ...prev,
        ].slice(0, 10);
        try {
          localStorage.setItem("ic_healthcare_vitals", JSON.stringify(updated));
        } catch {
          /* ignore */
        }
        return updated;
      });
      setVitalForm({
        bp: "",
        pulse: "",
        glucose: "",
        weight: "",
        temperature: "",
        spo2: "",
      });
    } else if (diseaseActiveTab === "diabetes") {
      setDiseaseReadings((prev) => ({
        ...prev,
        diabetes: [
          { id: Date.now(), date: now, ...diabetesForm },
          ...prev.diabetes,
        ].slice(0, 10),
      }));
      setDiabetesForm({
        fastingGlucose: "",
        postMealGlucose: "",
        hba1c: "",
        insulin: "",
      });
    } else if (diseaseActiveTab === "hypertension") {
      setDiseaseReadings((prev) => ({
        ...prev,
        hypertension: [
          { id: Date.now(), date: now, ...hypertensionForm },
          ...prev.hypertension,
        ].slice(0, 10),
      }));
      setHypertensionForm({
        systolic: "",
        diastolic: "",
        pulse: "",
        timeOfDay: "Morning",
      });
    } else if (diseaseActiveTab === "heart") {
      setDiseaseReadings((prev) => ({
        ...prev,
        heart: [
          { id: Date.now(), date: now, ...heartForm },
          ...prev.heart,
        ].slice(0, 10),
      }));
      setHeartForm({
        heartRate: "",
        ecgNotes: "",
        chestPain: "None",
        medication: "",
      });
    } else if (diseaseActiveTab === "thyroid") {
      setDiseaseReadings((prev) => ({
        ...prev,
        thyroid: [
          { id: Date.now(), date: now, ...thyroidForm },
          ...prev.thyroid,
        ].slice(0, 10),
      }));
      setThyroidForm({ tsh: "", t3: "", t4: "", symptoms: "" });
    } else if (diseaseActiveTab === "kidney") {
      setDiseaseReadings((prev) => ({
        ...prev,
        kidney: [
          { id: Date.now(), date: now, ...kidneyForm },
          ...prev.kidney,
        ].slice(0, 10),
      }));
      setKidneyForm({ creatinine: "", bun: "", egfr: "", fluidIntake: "" });
    } else if (diseaseActiveTab === "respiratory") {
      setDiseaseReadings((prev) => ({
        ...prev,
        respiratory: [
          { id: Date.now(), date: now, ...respiratoryForm },
          ...prev.respiratory,
        ].slice(0, 10),
      }));
      setRespiratoryForm({
        peakFlow: "",
        o2sat: "",
        difficulty: "None",
        inhalerUsed: false,
      });
    }
    setVitalOpen(false);
    toast.success("Reading logged successfully.");
  };

  return (
    <div className="space-y-6">
      {/* Health Summary */}
      <div
        className="rounded-2xl p-5 animate-fade-up"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.12), oklch(0.65 0.25 335 / 0.10))",
          border: "1px solid oklch(0.55 0.22 280 / 0.2)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "oklch(0.55 0.22 280 / 0.15)" }}
          >
            <Heart size={20} style={{ color: "oklch(0.55 0.22 280)" }} />
          </div>
          <div>
            <h3 className="font-display font-bold text-foreground">
              Health Summary
            </h3>
            <p className="text-xs text-muted-foreground font-label">
              {userProfile?.name || "Your Profile"}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {
              label: "Blood Type",
              value: userProfile?.bloodType || "A+",
              icon: Droplets,
              color: "oklch(0.55 0.22 280)",
            },
            {
              label: "Age",
              value: userProfile?.dateOfBirth
                ? `${new Date().getFullYear() - new Date(userProfile.dateOfBirth).getFullYear()} yrs`
                : "35 yrs",
              icon: User,
              color: "oklch(0.65 0.25 335)",
            },
            {
              label: "Last Checkup",
              value: "Feb 12, 2026",
              icon: CalendarDays,
              color: "oklch(0.52 0.14 155)",
            },
            {
              label: "Active Rx",
              value: prescriptions.length,
              icon: Pill,
              color: "oklch(0.60 0.20 85)",
            },
          ].map(({ label, value, icon: Icon, color }) => (
            <div
              key={label}
              className="bg-card/80 rounded-xl p-3 flex items-center gap-2.5"
            >
              <Icon size={16} style={{ color }} />
              <div>
                <p className="text-xs text-muted-foreground font-label">
                  {label}
                </p>
                <p className="text-sm font-label font-bold text-foreground">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conditions & Allergies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up animate-fade-up-1">
        {/* Conditions */}
        <Card className="border-border shadow-card">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
              <AlertCircle size={15} style={{ color: "oklch(0.55 0.22 25)" }} />
              Medical Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 space-y-3">
            <div className="flex flex-wrap gap-1.5 min-h-[36px]">
              {conditions.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 text-xs font-label px-2.5 py-1 rounded-full"
                  style={{
                    background: "oklch(0.55 0.22 25 / 0.12)",
                    color: "oklch(0.55 0.22 25)",
                  }}
                >
                  {c}
                  <button
                    type="button"
                    onClick={() =>
                      setConditions((p) => p.filter((x) => x !== c))
                    }
                    className="ml-0.5 hover:opacity-70"
                  >
                    <X size={11} />
                  </button>
                </span>
              ))}
              {conditions.length === 0 && (
                <p className="text-xs text-muted-foreground font-label">
                  No conditions recorded
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add condition..."
                value={conditionInput}
                onChange={(e) => setConditionInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addCondition();
                  }
                }}
                className="h-8 text-xs flex-1"
              />
              <Button size="sm" className="h-8 px-3" onClick={addCondition}>
                <Plus size={13} />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Allergies */}
        <Card className="border-border shadow-card">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
              <Shield size={15} style={{ color: "oklch(0.65 0.25 335)" }} />
              Allergies
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 space-y-3">
            <div className="flex flex-wrap gap-1.5 min-h-[36px]">
              {allergies.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1 text-xs font-label px-2.5 py-1 rounded-full"
                  style={{
                    background: "oklch(0.65 0.25 335 / 0.12)",
                    color: "oklch(0.65 0.25 335)",
                  }}
                >
                  {a}
                  <button
                    type="button"
                    onClick={() =>
                      setAllergies((p) => p.filter((x) => x !== a))
                    }
                    className="ml-0.5 hover:opacity-70"
                  >
                    <X size={11} />
                  </button>
                </span>
              ))}
              {allergies.length === 0 && (
                <p className="text-xs text-muted-foreground font-label">
                  No allergies recorded
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add allergy..."
                value={allergyInput}
                onChange={(e) => setAllergyInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addAllergy();
                  }
                }}
                className="h-8 text-xs flex-1"
              />
              <Button size="sm" className="h-8 px-3" onClick={addAllergy}>
                <Plus size={13} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Prescriptions */}
      <div className="animate-fade-up animate-fade-up-2">
        <SectionHeader
          title="Prescriptions"
          action={
            <Dialog open={rxOpen} onOpenChange={setRxOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="h-7 text-xs font-label gap-1">
                  <Plus size={12} /> Add Rx
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display">
                    Add Prescription
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={addPrescription} className="space-y-4 mt-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs">Medication *</Label>
                      <Input
                        className="h-8 text-sm"
                        value={rxForm.medication}
                        onChange={(e) =>
                          setRxForm((p) => ({
                            ...p,
                            medication: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs">Dosage</Label>
                      <Input
                        className="h-8 text-sm"
                        placeholder="e.g. 10mg"
                        value={rxForm.dosage}
                        onChange={(e) =>
                          setRxForm((p) => ({ ...p, dosage: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs">Frequency</Label>
                      <Input
                        className="h-8 text-sm"
                        placeholder="e.g. Twice daily"
                        value={rxForm.frequency}
                        onChange={(e) =>
                          setRxForm((p) => ({
                            ...p,
                            frequency: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs">Expiry</Label>
                      <Input
                        className="h-8 text-sm"
                        placeholder="e.g. Dec 2026"
                        value={rxForm.expiry}
                        onChange={(e) =>
                          setRxForm((p) => ({ ...p, expiry: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Prescribed By</Label>
                    <Input
                      className="h-8 text-sm"
                      placeholder="Doctor name"
                      value={rxForm.prescribedBy}
                      onChange={(e) =>
                        setRxForm((p) => ({
                          ...p,
                          prescribedBy: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Family Member</Label>
                    <Select value={rxMember} onValueChange={setRxMember}>
                      <SelectTrigger
                        className="h-8 text-sm"
                        data-ocid="rx.member.select"
                      >
                        <SelectValue placeholder="Select member" />
                      </SelectTrigger>
                      <SelectContent>
                        {familyMembers.map((m) => (
                          <SelectItem
                            key={m.name}
                            value={m.name}
                            className="text-sm"
                          >
                            {m.name} ({m.relationship})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full font-label">
                    Save Prescription
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          }
        />
        <div className="border border-border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs font-label">Medication</TableHead>
                <TableHead className="text-xs font-label">Member</TableHead>
                <TableHead className="text-xs font-label">Dosage</TableHead>
                <TableHead className="text-xs font-label hidden sm:table-cell">
                  Frequency
                </TableHead>
                <TableHead className="text-xs font-label hidden md:table-cell">
                  Prescribed By
                </TableHead>
                <TableHead className="text-xs font-label">Expiry</TableHead>
                <TableHead className="w-8" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {prescriptions.map((rx) => (
                <TableRow key={rx.id}>
                  <TableCell className="text-sm font-label font-semibold">
                    {rx.medication}
                  </TableCell>
                  <TableCell>
                    <span
                      className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-label"
                      style={{
                        background: "oklch(0.55 0.22 280 / 0.12)",
                        color: "oklch(0.55 0.22 280)",
                      }}
                    >
                      {rx.memberName || "Self"}
                    </span>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {rx.dosage}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground hidden sm:table-cell">
                    {rx.frequency}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground hidden md:table-cell">
                    {rx.prescribedBy}
                  </TableCell>
                  <TableCell className="text-xs font-label">
                    {rx.expiry}
                  </TableCell>
                  <TableCell>
                    <button
                      type="button"
                      onClick={() =>
                        setPrescriptions((p) => p.filter((x) => x.id !== rx.id))
                      }
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 size={13} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Vitals Log */}
      <div className="animate-fade-up animate-fade-up-3">
        <SectionHeader
          title="Vitals Log"
          action={
            <Dialog open={vitalOpen} onOpenChange={setVitalOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="h-7 text-xs font-label gap-1">
                  <Plus size={12} /> Add Reading
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="font-display">
                    Log Health Reading
                  </DialogTitle>
                </DialogHeader>
                <Tabs
                  value={diseaseActiveTab}
                  onValueChange={setDiseaseActiveTab}
                  className="mt-2"
                >
                  <TabsList className="w-full flex-wrap h-auto gap-0.5">
                    <TabsTrigger
                      value="vitals"
                      className="text-[11px] px-2 py-1"
                    >
                      🩺 Vitals
                    </TabsTrigger>
                    <TabsTrigger
                      value="diabetes"
                      className="text-[11px] px-2 py-1"
                    >
                      🩸 Diabetes
                    </TabsTrigger>
                    <TabsTrigger
                      value="hypertension"
                      className="text-[11px] px-2 py-1"
                    >
                      💉 BP
                    </TabsTrigger>
                    <TabsTrigger
                      value="heart"
                      className="text-[11px] px-2 py-1"
                    >
                      ❤️ Heart
                    </TabsTrigger>
                    <TabsTrigger
                      value="thyroid"
                      className="text-[11px] px-2 py-1"
                    >
                      🦋 Thyroid
                    </TabsTrigger>
                    <TabsTrigger
                      value="kidney"
                      className="text-[11px] px-2 py-1"
                    >
                      🫘 Kidney
                    </TabsTrigger>
                    <TabsTrigger
                      value="respiratory"
                      className="text-[11px] px-2 py-1"
                    >
                      🫁 Lungs
                    </TabsTrigger>
                  </TabsList>
                  <form onSubmit={addVital} className="space-y-3 mt-3">
                    <TabsContent value="vitals" className="mt-0">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs">Blood Pressure</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="120/80"
                            value={vitalForm.bp}
                            onChange={(e) =>
                              setVitalForm((p) => ({
                                ...p,
                                bp: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Pulse (bpm)</Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="72"
                            value={vitalForm.pulse}
                            onChange={(e) =>
                              setVitalForm((p) => ({
                                ...p,
                                pulse: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Temperature (°C)</Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="36.8"
                            value={vitalForm.temperature}
                            onChange={(e) =>
                              setVitalForm((p) => ({
                                ...p,
                                temperature: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Weight (kg)</Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="70"
                            value={vitalForm.weight}
                            onChange={(e) =>
                              setVitalForm((p) => ({
                                ...p,
                                weight: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Glucose (mg/dL)</Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="95"
                            value={vitalForm.glucose}
                            onChange={(e) =>
                              setVitalForm((p) => ({
                                ...p,
                                glucose: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">SpO2 (%)</Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="98"
                            value={vitalForm.spo2}
                            onChange={(e) =>
                              setVitalForm((p) => ({
                                ...p,
                                spo2: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="diabetes" className="mt-0">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs">
                            Fasting Glucose (mg/dL)
                          </Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="90"
                            value={diabetesForm.fastingGlucose}
                            onChange={(e) =>
                              setDiabetesForm((p) => ({
                                ...p,
                                fastingGlucose: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">
                            Post-meal Glucose (mg/dL)
                          </Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="140"
                            value={diabetesForm.postMealGlucose}
                            onChange={(e) =>
                              setDiabetesForm((p) => ({
                                ...p,
                                postMealGlucose: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">HbA1c (%)</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="6.5%"
                            value={diabetesForm.hba1c}
                            onChange={(e) =>
                              setDiabetesForm((p) => ({
                                ...p,
                                hba1c: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Insulin Dose</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="e.g. 10 units"
                            value={diabetesForm.insulin}
                            onChange={(e) =>
                              setDiabetesForm((p) => ({
                                ...p,
                                insulin: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="hypertension" className="mt-0">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs">Systolic (mmHg)</Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="120"
                            value={hypertensionForm.systolic}
                            onChange={(e) =>
                              setHypertensionForm((p) => ({
                                ...p,
                                systolic: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Diastolic (mmHg)</Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="80"
                            value={hypertensionForm.diastolic}
                            onChange={(e) =>
                              setHypertensionForm((p) => ({
                                ...p,
                                diastolic: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Pulse (bpm)</Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="72"
                            value={hypertensionForm.pulse}
                            onChange={(e) =>
                              setHypertensionForm((p) => ({
                                ...p,
                                pulse: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Time of Day</Label>
                          <Select
                            value={hypertensionForm.timeOfDay}
                            onValueChange={(v) =>
                              setHypertensionForm((p) => ({
                                ...p,
                                timeOfDay: v,
                              }))
                            }
                          >
                            <SelectTrigger className="h-8 text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Morning">Morning</SelectItem>
                              <SelectItem value="Evening">Evening</SelectItem>
                              <SelectItem value="Night">Night</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="heart" className="mt-0">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs">Heart Rate (bpm)</Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="75"
                            value={heartForm.heartRate}
                            onChange={(e) =>
                              setHeartForm((p) => ({
                                ...p,
                                heartRate: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Chest Pain</Label>
                          <Select
                            value={heartForm.chestPain}
                            onValueChange={(v) =>
                              setHeartForm((p) => ({ ...p, chestPain: v }))
                            }
                          >
                            <SelectTrigger className="h-8 text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="None">None</SelectItem>
                              <SelectItem value="Mild">Mild</SelectItem>
                              <SelectItem value="Moderate">Moderate</SelectItem>
                              <SelectItem value="Severe">Severe</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1 col-span-2">
                          <Label className="text-xs">ECG Notes</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="Normal sinus rhythm"
                            value={heartForm.ecgNotes}
                            onChange={(e) =>
                              setHeartForm((p) => ({
                                ...p,
                                ecgNotes: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1 col-span-2">
                          <Label className="text-xs">Medication Taken</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="e.g. Aspirin 75mg"
                            value={heartForm.medication}
                            onChange={(e) =>
                              setHeartForm((p) => ({
                                ...p,
                                medication: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="thyroid" className="mt-0">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs">TSH (mIU/L)</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="2.5"
                            value={thyroidForm.tsh}
                            onChange={(e) =>
                              setThyroidForm((p) => ({
                                ...p,
                                tsh: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">T3</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="2.0"
                            value={thyroidForm.t3}
                            onChange={(e) =>
                              setThyroidForm((p) => ({
                                ...p,
                                t3: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">T4</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="1.2"
                            value={thyroidForm.t4}
                            onChange={(e) =>
                              setThyroidForm((p) => ({
                                ...p,
                                t4: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Symptoms</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="fatigue, weight gain"
                            value={thyroidForm.symptoms}
                            onChange={(e) =>
                              setThyroidForm((p) => ({
                                ...p,
                                symptoms: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="kidney" className="mt-0">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs">Creatinine (mg/dL)</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="0.9"
                            value={kidneyForm.creatinine}
                            onChange={(e) =>
                              setKidneyForm((p) => ({
                                ...p,
                                creatinine: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">BUN</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="15"
                            value={kidneyForm.bun}
                            onChange={(e) =>
                              setKidneyForm((p) => ({
                                ...p,
                                bun: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">eGFR</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="90"
                            value={kidneyForm.egfr}
                            onChange={(e) =>
                              setKidneyForm((p) => ({
                                ...p,
                                egfr: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Fluid Intake (ml)</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="2000"
                            value={kidneyForm.fluidIntake}
                            onChange={(e) =>
                              setKidneyForm((p) => ({
                                ...p,
                                fluidIntake: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="respiratory" className="mt-0">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs">Peak Flow (L/min)</Label>
                          <Input
                            className="h-8 text-sm"
                            placeholder="450"
                            value={respiratoryForm.peakFlow}
                            onChange={(e) =>
                              setRespiratoryForm((p) => ({
                                ...p,
                                peakFlow: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">O2 Saturation (%)</Label>
                          <Input
                            type="number"
                            className="h-8 text-sm"
                            placeholder="98"
                            value={String(respiratoryForm.o2sat)}
                            onChange={(e) =>
                              setRespiratoryForm((p) => ({
                                ...p,
                                o2sat: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">
                            Breathing Difficulty
                          </Label>
                          <Select
                            value={respiratoryForm.difficulty}
                            onValueChange={(v) =>
                              setRespiratoryForm((p) => ({
                                ...p,
                                difficulty: v,
                              }))
                            }
                          >
                            <SelectTrigger className="h-8 text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="None">None</SelectItem>
                              <SelectItem value="Mild">Mild</SelectItem>
                              <SelectItem value="Moderate">Moderate</SelectItem>
                              <SelectItem value="Severe">Severe</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1 flex items-center gap-2 pt-4">
                          <input
                            type="checkbox"
                            id="inhaler"
                            checked={respiratoryForm.inhalerUsed}
                            onChange={(e) =>
                              setRespiratoryForm((p) => ({
                                ...p,
                                inhalerUsed: e.target.checked,
                              }))
                            }
                            className="rounded"
                          />
                          <Label
                            htmlFor="inhaler"
                            className="text-xs cursor-pointer"
                          >
                            Inhaler Used
                          </Label>
                        </div>
                      </div>
                    </TabsContent>
                    <div className="space-y-1 mt-2">
                      <Label className="text-xs">Family Member</Label>
                      <Select
                        value={vitalMember}
                        onValueChange={setVitalMember}
                      >
                        <SelectTrigger
                          className="h-8 text-sm"
                          data-ocid="vital.member.select"
                        >
                          <SelectValue placeholder="Select member" />
                        </SelectTrigger>
                        <SelectContent>
                          {familyMembers.map((m) => (
                            <SelectItem
                              key={m.name}
                              value={m.name}
                              className="text-sm"
                            >
                              {m.name} ({m.relationship})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full font-label mt-2">
                      Log Reading
                    </Button>
                  </form>
                </Tabs>
              </DialogContent>
            </Dialog>
          }
        />
        <div className="border border-border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs font-label">Date</TableHead>
                <TableHead className="text-xs font-label">Member</TableHead>
                <TableHead className="text-xs font-label">BP</TableHead>
                <TableHead className="text-xs font-label">Pulse</TableHead>
                <TableHead className="text-xs font-label hidden sm:table-cell">
                  Glucose
                </TableHead>
                <TableHead className="text-xs font-label hidden sm:table-cell">
                  Weight
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vitals.slice(0, 5).map((v) => (
                <TableRow key={v.id}>
                  <TableCell className="text-xs text-muted-foreground font-label">
                    {v.date}
                  </TableCell>
                  <TableCell>
                    <span
                      className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-label"
                      style={{
                        background: "oklch(0.60 0.18 150 / 0.12)",
                        color: "oklch(0.60 0.18 150)",
                      }}
                    >
                      {v.memberName || "Self"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className="text-xs font-label font-semibold"
                      style={{ color: "oklch(0.55 0.22 25)" }}
                    >
                      {v.bp}
                    </span>
                  </TableCell>
                  <TableCell className="text-xs font-label">
                    {v.pulse} <span className="text-muted-foreground">bpm</span>
                  </TableCell>
                  <TableCell className="text-xs font-label hidden sm:table-cell">
                    {v.glucose}{" "}
                    <span className="text-muted-foreground">mg/dL</span>
                  </TableCell>
                  <TableCell className="text-xs font-label hidden sm:table-cell">
                    {v.weight} <span className="text-muted-foreground">kg</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Disease-Specific Readings */}
      {Object.entries({
        diabetes: {
          label: "🩸 Diabetes Readings",
          icon: "🩸",
          cols: ["Date", "Fasting", "Post-meal", "HbA1c", "Insulin"],
        },
        hypertension: {
          label: "💉 Blood Pressure Readings",
          icon: "💉",
          cols: ["Date", "Systolic", "Diastolic", "Pulse", "Time"],
        },
        heart: {
          label: "❤️ Heart Readings",
          icon: "❤️",
          cols: ["Date", "Heart Rate", "Chest Pain", "ECG Notes", "Medication"],
        },
        thyroid: {
          label: "🦋 Thyroid Readings",
          icon: "🦋",
          cols: ["Date", "TSH", "T3", "T4", "Symptoms"],
        },
        kidney: {
          label: "🫘 Kidney Readings",
          icon: "🫘",
          cols: ["Date", "Creatinine", "BUN", "eGFR", "Fluid Intake"],
        },
        respiratory: {
          label: "🫁 Respiratory Readings",
          icon: "🫁",
          cols: ["Date", "Peak Flow", "O2 Sat", "Difficulty", "Inhaler"],
        },
      }).map(([key, meta]) => {
        const readings = diseaseReadings[key] || [];
        if (readings.length === 0) return null;
        return (
          <div key={key} className="animate-fade-up mt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold">{meta.label}</h4>
              <span className="text-[10px] text-muted-foreground">
                {readings.length} reading{readings.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="border border-border rounded-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    {meta.cols.map((col) => (
                      <TableHead key={col} className="text-xs font-label">
                        {col}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {readings.slice(0, 5).map((r: any) => (
                    <TableRow key={r.id}>
                      <TableCell className="text-xs text-muted-foreground">
                        {r.date}
                      </TableCell>
                      {key === "diabetes" && (
                        <>
                          <TableCell className="text-xs">
                            {r.fastingGlucose || "—"} mg/dL
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.postMealGlucose || "—"} mg/dL
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.hba1c || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.insulin || "—"}
                          </TableCell>
                        </>
                      )}
                      {key === "hypertension" && (
                        <>
                          <TableCell
                            className="text-xs font-semibold"
                            style={{ color: "oklch(0.55 0.22 25)" }}
                          >
                            {r.systolic || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.diastolic || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.pulse || "—"} bpm
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.timeOfDay || "—"}
                          </TableCell>
                        </>
                      )}
                      {key === "heart" && (
                        <>
                          <TableCell className="text-xs">
                            {r.heartRate || "—"} bpm
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.chestPain || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.ecgNotes || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.medication || "—"}
                          </TableCell>
                        </>
                      )}
                      {key === "thyroid" && (
                        <>
                          <TableCell className="text-xs">
                            {r.tsh || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.t3 || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.t4 || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.symptoms || "—"}
                          </TableCell>
                        </>
                      )}
                      {key === "kidney" && (
                        <>
                          <TableCell className="text-xs">
                            {r.creatinine || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.bun || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.egfr || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.fluidIntake || "—"}
                          </TableCell>
                        </>
                      )}
                      {key === "respiratory" && (
                        <>
                          <TableCell className="text-xs">
                            {r.peakFlow || "—"} L/min
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.o2sat || "—"}%
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.difficulty || "—"}
                          </TableCell>
                          <TableCell className="text-xs">
                            {r.inhalerUsed ? "Yes" : "No"}
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 2: Appointments
// ─────────────────────────────────────────────
function AppointmentsTab() {
  const [upcoming, setUpcoming] = useState<Appointment[]>(
    MOCK_UPCOMING_APPOINTMENTS,
  );
  const [past] = useState<Appointment[]>(MOCK_PAST_APPOINTMENTS);
  const [notesOpen, setNotesOpen] = useState<number | null>(null);
  const [bookOpen, setBookOpen] = useState(false);
  const [bookForm, setBookForm] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const notesAppt = past.find((a) => a.id === notesOpen);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookForm.doctor || !bookForm.date) return;
    const advisor = MOCK_ADVISORS.find((a) => a.name === bookForm.doctor);
    const newAppt: Appointment = {
      id: Date.now(),
      doctor: bookForm.doctor,
      specialty: advisor?.specialty || "General",
      date: bookForm.date,
      time: bookForm.time || "10:00 AM",
      clinic: advisor?.hospital || "TBD",
      status: "Pending",
      notes: bookForm.reason,
    };
    setUpcoming((p) => [...p, newAppt]);
    setBookForm({ doctor: "", date: "", time: "", reason: "" });
    setBookOpen(false);
    toast.success("Appointment booked successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Upcoming */}
      <div className="animate-fade-up">
        <SectionHeader
          title="Upcoming Appointments"
          action={
            <Dialog open={bookOpen} onOpenChange={setBookOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="h-7 text-xs font-label gap-1">
                  <Plus size={12} /> Book Appointment
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display">
                    Book Appointment
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleBook} className="space-y-4 mt-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Select Doctor *</Label>
                    <Select
                      value={bookForm.doctor}
                      onValueChange={(v) =>
                        setBookForm((p) => ({ ...p, doctor: v }))
                      }
                    >
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {MOCK_ADVISORS.map((a) => (
                          <SelectItem key={a.id} value={a.name}>
                            {a.name} — {a.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs">Date *</Label>
                      <Input
                        type="date"
                        className="h-8 text-sm"
                        value={bookForm.date}
                        onChange={(e) =>
                          setBookForm((p) => ({ ...p, date: e.target.value }))
                        }
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs">Time</Label>
                      <Input
                        type="time"
                        className="h-8 text-sm"
                        value={bookForm.time}
                        onChange={(e) =>
                          setBookForm((p) => ({ ...p, time: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Reason / Notes</Label>
                    <Textarea
                      className="text-sm resize-none"
                      rows={3}
                      placeholder="Describe your concern..."
                      value={bookForm.reason}
                      onChange={(e) =>
                        setBookForm((p) => ({ ...p, reason: e.target.value }))
                      }
                    />
                  </div>
                  <Button type="submit" className="w-full font-label">
                    Confirm Booking
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          }
        />

        {upcoming.length === 0 ? (
          <div className="text-center py-10 bg-secondary/30 rounded-xl">
            <CalendarDays
              size={28}
              className="mx-auto text-muted-foreground/30 mb-2"
            />
            <p className="text-sm text-muted-foreground font-label">
              No upcoming appointments
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {upcoming.map((appt) => {
              const style = STATUS_STYLES[appt.status];
              return (
                <div
                  key={appt.id}
                  className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 animate-fade-up shadow-card"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "oklch(0.55 0.22 280 / 0.12)" }}
                  >
                    <Stethoscope
                      size={20}
                      style={{ color: "oklch(0.55 0.22 280)" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <p className="text-sm font-label font-semibold text-foreground">
                        {appt.doctor}
                      </p>
                      <Badge
                        className="text-[10px] px-1.5 py-0 border-0 font-label"
                        style={{
                          background: "oklch(0.55 0.22 280 / 0.12)",
                          color: "oklch(0.55 0.22 280)",
                        }}
                      >
                        {appt.specialty}
                      </Badge>
                      <Badge
                        className="text-[10px] px-1.5 py-0 border-0 font-label"
                        style={style}
                      >
                        {appt.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={10} />
                        {appt.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {appt.time}
                      </span>
                      <span className="flex items-center gap-1 hidden sm:flex">
                        <MapPin size={10} />
                        {appt.clinic}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs font-label shrink-0"
                    onClick={() =>
                      setUpcoming((p) => p.filter((a) => a.id !== appt.id))
                    }
                  >
                    Cancel
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Past */}
      <div className="animate-fade-up animate-fade-up-2">
        <SectionHeader title="Past Appointments" />
        <div className="space-y-3">
          {past.map((appt) => (
            <div
              key={appt.id}
              className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 shadow-card"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.52 0.14 155 / 0.12)" }}
              >
                <CheckCircle2
                  size={20}
                  style={{ color: "oklch(0.52 0.14 155)" }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <p className="text-sm font-label font-semibold text-foreground">
                    {appt.doctor}
                  </p>
                  <Badge
                    className="text-[10px] px-1.5 py-0 border-0 font-label"
                    style={{
                      background: "oklch(0.52 0.14 155 / 0.12)",
                      color: "oklch(0.52 0.14 155)",
                    }}
                  >
                    {appt.specialty}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={10} />
                    {appt.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={10} />
                    {appt.clinic}
                  </span>
                </div>
              </div>
              <Dialog
                open={notesOpen === appt.id}
                onOpenChange={(v) => setNotesOpen(v ? appt.id : null)}
              >
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs font-label shrink-0 gap-1"
                  >
                    <BookOpen size={11} /> View Notes
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-display">
                      Doctor's Notes
                    </DialogTitle>
                  </DialogHeader>
                  {notesAppt && (
                    <div className="space-y-3 mt-2">
                      <div className="flex items-center gap-2 text-sm font-label">
                        <span className="font-semibold">
                          {notesAppt.doctor}
                        </span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-muted-foreground">
                          {notesAppt.date}
                        </span>
                      </div>
                      <div className="bg-secondary/50 rounded-xl p-4 text-sm text-foreground leading-relaxed">
                        {notesAppt.notes || "No notes recorded."}
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 3: Insurance
// ─────────────────────────────────────────────
function InsuranceTab() {
  const [policies, setPolicies] = useState<InsurancePolicy[]>(MOCK_POLICIES);
  const [claims] = useState<InsuranceClaim[]>(MOCK_CLAIMS);
  const [addOpen, setAddOpen] = useState(false);
  const [form, setForm] = useState({
    provider: "",
    policyNumber: "",
    type: "Individual" as InsurancePolicy["type"],
    coverage: "",
    premium: "",
    startDate: "",
    endDate: "",
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.provider.trim() || !form.policyNumber.trim()) return;
    const today = new Date();
    const endD = form.endDate ? new Date(form.endDate) : null;
    const isActive = !endD || endD >= today;
    setPolicies((p) => [
      {
        id: Date.now(),
        provider: form.provider,
        policyNumber: form.policyNumber,
        type: form.type,
        coverage: Number(form.coverage) || 0,
        premium: Number(form.premium) || 0,
        startDate: form.startDate,
        expiryDate: form.endDate,
        status: isActive ? "Active" : "Expired",
      },
      ...p,
    ]);
    setForm({
      provider: "",
      policyNumber: "",
      type: "Individual",
      coverage: "",
      premium: "",
      startDate: "",
      endDate: "",
    });
    setAddOpen(false);
    toast.success("Insurance policy added!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-up">
        <div>
          <h3 className="text-sm font-label font-semibold text-foreground">
            Insurance Policies
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {policies.filter((p) => p.status === "Active").length} active,{" "}
            {policies.filter((p) => p.status === "Expired").length} expired
          </p>
        </div>
        <Dialog open={addOpen} onOpenChange={setAddOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="h-7 text-xs font-label gap-1">
              <Plus size={12} /> Add Policy
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-display">
                Add Insurance Policy
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAdd} className="space-y-4 mt-2">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-xs">Provider *</Label>
                  <Input
                    className="h-8 text-sm"
                    placeholder="e.g. Jubilee Health Insurance"
                    value={form.provider}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, provider: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Policy Number *</Label>
                  <Input
                    className="h-8 text-sm"
                    placeholder="JHL-2024-XXXXX"
                    value={form.policyNumber}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, policyNumber: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Type</Label>
                  <Select
                    value={form.type}
                    onValueChange={(v) =>
                      setForm((p) => ({
                        ...p,
                        type: v as InsurancePolicy["type"],
                      }))
                    }
                  >
                    <SelectTrigger className="h-8 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Individual">Individual</SelectItem>
                      <SelectItem value="Individual + Family">
                        Individual + Family
                      </SelectItem>
                      <SelectItem value="Corporate">Corporate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Coverage (PKR)</Label>
                  <Input
                    type="number"
                    className="h-8 text-sm"
                    placeholder="5000000"
                    value={form.coverage}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, coverage: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Annual Premium (PKR)</Label>
                  <Input
                    type="number"
                    className="h-8 text-sm"
                    placeholder="45000"
                    value={form.premium}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, premium: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Start Date</Label>
                  <Input
                    type="date"
                    className="h-8 text-sm"
                    value={form.startDate}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, startDate: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">End Date</Label>
                  <Input
                    type="date"
                    className="h-8 text-sm"
                    value={form.endDate}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, endDate: e.target.value }))
                    }
                  />
                </div>
              </div>
              <Button type="submit" className="w-full font-label">
                Save Policy
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Policy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up animate-fade-up-1">
        {policies.map((policy) => {
          const isActive = policy.status === "Active";
          const borderColor = isActive
            ? "oklch(0.52 0.14 155)"
            : "oklch(0.55 0.22 25)";
          const bgGradient = isActive
            ? "linear-gradient(135deg, oklch(0.52 0.14 155 / 0.06), oklch(0.55 0.22 280 / 0.04))"
            : "linear-gradient(135deg, oklch(0.55 0.22 25 / 0.06), oklch(0.65 0.14 50 / 0.04))";

          return (
            <div
              key={policy.id}
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background: bgGradient,
                border: `1px solid ${borderColor}30`,
              }}
            >
              {/* Left border accent */}
              <div
                className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
                style={{ background: borderColor }}
              />

              <div className="pl-3">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${borderColor}18` }}
                    >
                      <ShieldCheck size={17} style={{ color: borderColor }} />
                    </div>
                    <div>
                      <p className="text-sm font-label font-bold text-foreground">
                        {policy.provider}
                      </p>
                      <p className="text-xs text-muted-foreground font-label">
                        {policy.policyNumber}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className="text-[10px] px-2 py-0.5 border-0 font-label shrink-0"
                    style={{
                      background: `${borderColor}18`,
                      color: borderColor,
                    }}
                  >
                    {policy.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                  <div>
                    <span className="text-muted-foreground font-label">
                      Type
                    </span>
                    <p className="font-label font-semibold text-foreground mt-0.5">
                      {policy.type}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-label">
                      Coverage
                    </span>
                    <p className="font-label font-semibold text-foreground mt-0.5">
                      PKR {(policy.coverage / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-label">
                      Annual Premium
                    </span>
                    <p className="font-label font-semibold text-foreground mt-0.5">
                      PKR {policy.premium.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-label">
                      Expiry
                    </span>
                    <p className="font-label font-semibold text-foreground mt-0.5">
                      {policy.expiryDate}
                    </p>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs font-label mt-3 gap-1"
                >
                  <BookOpen size={11} /> View Details
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Claims History */}
      <div className="animate-fade-up animate-fade-up-2">
        <SectionHeader title="Claims History" />
        <div className="border border-border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs font-label">Date</TableHead>
                <TableHead className="text-xs font-label">
                  Description
                </TableHead>
                <TableHead className="text-xs font-label">Amount</TableHead>
                <TableHead className="text-xs font-label">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {claims.map((claim) => {
                const style = CLAIM_STYLES[claim.status];
                const ClaimIcon =
                  claim.status === "Approved"
                    ? CheckCircle2
                    : claim.status === "Rejected"
                      ? XCircle
                      : Clock;
                return (
                  <TableRow key={claim.id}>
                    <TableCell className="text-xs text-muted-foreground font-label">
                      {claim.date}
                    </TableCell>
                    <TableCell className="text-xs font-label">
                      {claim.description}
                    </TableCell>
                    <TableCell className="text-xs font-label font-semibold">
                      PKR {claim.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className="text-[10px] px-1.5 py-0.5 border-0 font-label flex items-center gap-1 w-fit"
                        style={style}
                      >
                        <ClaimIcon size={9} />
                        {claim.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 4: Advisors
// ─────────────────────────────────────────────
function AdvisorsTab() {
  const [specialtyFilter, setSpecialtyFilter] = useState("All");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [profileOpen, setProfileOpen] = useState<Advisor | null>(null);
  const [bookOpen, setBookOpen] = useState<Advisor | null>(null);
  const [bookForm, setBookForm] = useState({ date: "", time: "", reason: "" });

  const specialties = [
    "All",
    "Cardiologist",
    "General Physician",
    "Dermatologist",
    "Nutritionist",
    "Psychologist",
    "Orthopedic Surgeon",
  ];

  const filtered = MOCK_ADVISORS.filter((a) => {
    const sMatch = specialtyFilter === "All" || a.specialty === specialtyFilter;
    const aMatch = !availableOnly || a.availability === "Available";
    return sMatch && aMatch;
  });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Consultation with ${bookOpen?.name} booked!`);
    setBookOpen(null);
    setBookForm({ date: "", time: "", reason: "" });
  };

  return (
    <div className="space-y-5">
      {/* Header + Filters */}
      <div className="animate-fade-up">
        <div className="mb-4">
          <h3 className="text-lg font-display font-bold text-foreground">
            Find Health Advisors & Doctors
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {filtered.length} doctors available near you
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
            <SelectTrigger className="h-8 text-xs w-44">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map((s) => (
                <SelectItem key={s} value={s} className="text-xs">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <button
              type="button"
              role="switch"
              aria-checked={availableOnly}
              onClick={() => setAvailableOnly((v) => !v)}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${availableOnly ? "bg-primary" : "bg-muted"}`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${availableOnly ? "translate-x-4" : "translate-x-1"}`}
              />
            </button>
            <span className="text-xs font-label text-muted-foreground">
              Available only
            </span>
          </div>
        </div>
      </div>

      {/* Advisor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-up animate-fade-up-1">
        {filtered.map((advisor) => {
          const specColor =
            SPECIALTY_COLORS[advisor.specialty] || "oklch(0.55 0.22 280)";
          const isAvail = advisor.availability === "Available";
          const initials = advisor.name
            .split(" ")
            .filter((_, i) => i > 0)
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

          return (
            <div
              key={advisor.id}
              className="bg-card border border-border rounded-2xl p-4 flex flex-col gap-3 shadow-card hover:shadow-card-hover transition-all animate-fade-up"
            >
              {/* Top row */}
              <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12 shrink-0">
                  <AvatarFallback
                    className="text-sm font-label font-bold"
                    style={{ background: `${specColor}18`, color: specColor }}
                  >
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-label font-bold text-foreground leading-tight truncate">
                    {advisor.name}
                  </p>
                  <Badge
                    className="text-[10px] px-1.5 py-0 border-0 font-label mt-0.5"
                    style={{ background: `${specColor}15`, color: specColor }}
                  >
                    {advisor.specialty}
                  </Badge>
                </div>
                {/* Availability dot */}
                <div className="flex items-center gap-1 shrink-0">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: isAvail
                        ? "oklch(0.52 0.14 155)"
                        : "oklch(0.65 0.14 50)",
                    }}
                  />
                  <span
                    className="text-[10px] font-label"
                    style={{
                      color: isAvail
                        ? "oklch(0.52 0.14 155)"
                        : "oklch(0.65 0.14 50)",
                    }}
                  >
                    {advisor.availability}
                  </span>
                </div>
              </div>

              {/* Info row */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin size={9} />
                  {advisor.hospital}
                </span>
                <span className="flex items-center gap-1">
                  <Star
                    size={9}
                    style={{
                      color: "oklch(0.72 0.19 85)",
                      fill: "oklch(0.72 0.19 85)",
                    }}
                  />
                  {advisor.rating} · {advisor.experience} yrs
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto pt-1">
                <Button
                  size="sm"
                  className="flex-1 h-7 text-xs font-label"
                  disabled={!isAvail}
                  onClick={() => setBookOpen(advisor)}
                >
                  Book Consultation
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs font-label px-3"
                  onClick={() => setProfileOpen(advisor)}
                >
                  View Profile
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Book Consultation Dialog */}
      {bookOpen && (
        <Dialog open={!!bookOpen} onOpenChange={(v) => !v && setBookOpen(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-display">
                Book with {bookOpen.name}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleBook} className="space-y-4 mt-2">
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
                <Avatar className="h-10 w-10">
                  <AvatarFallback
                    className="text-xs font-label font-bold"
                    style={{
                      background: `${SPECIALTY_COLORS[bookOpen.specialty] || "oklch(0.55 0.22 280)"}15`,
                      color:
                        SPECIALTY_COLORS[bookOpen.specialty] ||
                        "oklch(0.55 0.22 280)",
                    }}
                  >
                    {bookOpen.name
                      .split(" ")
                      .filter((_, i) => i > 0)
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-label font-semibold">
                    {bookOpen.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {bookOpen.specialty} · PKR{" "}
                    {bookOpen.consultationFee.toLocaleString()}/consultation
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs">Date *</Label>
                  <Input
                    type="date"
                    className="h-8 text-sm"
                    value={bookForm.date}
                    onChange={(e) =>
                      setBookForm((p) => ({ ...p, date: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Time</Label>
                  <Input
                    type="time"
                    className="h-8 text-sm"
                    value={bookForm.time}
                    onChange={(e) =>
                      setBookForm((p) => ({ ...p, time: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Reason / Symptoms</Label>
                <Textarea
                  className="text-sm resize-none"
                  rows={3}
                  placeholder="Describe your concern..."
                  value={bookForm.reason}
                  onChange={(e) =>
                    setBookForm((p) => ({ ...p, reason: e.target.value }))
                  }
                />
              </div>
              <Button type="submit" className="w-full font-label">
                Confirm Booking
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* Advisor Profile Sheet */}
      {profileOpen && (
        <Sheet
          open={!!profileOpen}
          onOpenChange={(v) => !v && setProfileOpen(null)}
        >
          <SheetContent
            side="right"
            className="w-full sm:w-[480px] p-0 flex flex-col overflow-hidden"
          >
            <SheetHeader className="p-5 border-b border-border shrink-0">
              <div className="flex items-center gap-3">
                <Avatar className="h-14 w-14">
                  <AvatarFallback
                    className="text-base font-label font-bold"
                    style={{
                      background: `${SPECIALTY_COLORS[profileOpen.specialty] || "oklch(0.55 0.22 280)"}18`,
                      color:
                        SPECIALTY_COLORS[profileOpen.specialty] ||
                        "oklch(0.55 0.22 280)",
                    }}
                  >
                    {profileOpen.name
                      .split(" ")
                      .filter((_, i) => i > 0)
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <SheetTitle className="font-display text-base">
                    {profileOpen.name}
                  </SheetTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {profileOpen.specialty} · {profileOpen.experience} years
                    experience
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star
                      size={12}
                      style={{
                        color: "oklch(0.72 0.19 85)",
                        fill: "oklch(0.72 0.19 85)",
                      }}
                    />
                    <span className="text-xs font-label font-bold">
                      {profileOpen.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      rating
                    </span>
                  </div>
                </div>
              </div>
            </SheetHeader>

            <ScrollArea className="flex-1">
              <div className="p-5 space-y-5">
                {/* Bio */}
                <div>
                  <h4 className="text-xs font-label font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    About
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {profileOpen.bio}
                  </p>
                </div>

                {/* Qualifications */}
                <div>
                  <h4 className="text-xs font-label font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1.5">
                    <GraduationCap size={12} /> Qualifications
                  </h4>
                  <div className="space-y-1.5">
                    {profileOpen.qualifications.map((q) => (
                      <div key={q} className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          size={13}
                          style={{ color: "oklch(0.52 0.14 155)" }}
                        />
                        <span className="font-label">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-secondary/50 rounded-xl p-3">
                    <p className="text-xs text-muted-foreground font-label">
                      Consultation Fee
                    </p>
                    <p className="text-sm font-label font-bold text-foreground mt-1">
                      PKR {profileOpen.consultationFee.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-3">
                    <p className="text-xs text-muted-foreground font-label">
                      Working Hours
                    </p>
                    <p className="text-sm font-label font-bold text-foreground mt-1">
                      {profileOpen.workingHours}
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-3 col-span-2">
                    <p className="text-xs text-muted-foreground font-label flex items-center gap-1">
                      <MapPin size={10} /> Hospital / Clinic
                    </p>
                    <p className="text-sm font-label font-bold text-foreground mt-1">
                      {profileOpen.hospital}
                    </p>
                  </div>
                </div>

                {/* Reviews */}
                <div>
                  <h4 className="text-xs font-label font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Patient Reviews
                  </h4>
                  <div className="space-y-3">
                    {profileOpen.reviews.map((r) => (
                      <div
                        key={r.author}
                        className="bg-card border border-border rounded-xl p-3"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-label font-semibold">
                            {r.author}
                          </span>
                          <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((si) => (
                              <Star
                                key={si}
                                size={10}
                                style={{
                                  color: "oklch(0.72 0.19 85)",
                                  fill:
                                    si <= r.rating
                                      ? "oklch(0.72 0.19 85)"
                                      : "transparent",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {r.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full font-label"
                  disabled={profileOpen.availability !== "Available"}
                  onClick={() => {
                    setBookOpen(profileOpen);
                    setProfileOpen(null);
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 5: Family Health
// ─────────────────────────────────────────────
function FamilyHealthTab() {
  const [members, setMembers] =
    useState<FamilyHealthMember[]>(MOCK_FAMILY_HEALTH);
  const [editOpen, setEditOpen] = useState<FamilyHealthMember | null>(null);
  const [conditionInput, setConditionInput] = useState("");

  const handleSave = () => {
    if (!editOpen) return;
    setMembers((p) => p.map((m) => (m.id === editOpen.id ? editOpen : m)));
    setEditOpen(null);
    toast.success("Health records updated.");
  };

  const addConditionToEdit = () => {
    if (!conditionInput.trim() || !editOpen) return;
    setEditOpen((p) =>
      p
        ? {
            ...p,
            medicalConditions: [...p.medicalConditions, conditionInput.trim()],
          }
        : p,
    );
    setConditionInput("");
  };

  return (
    <div className="space-y-5">
      <div className="animate-fade-up">
        <h3 className="text-lg font-display font-bold text-foreground">
          Family Health Overview
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {members.length} family members · Private records
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-up animate-fade-up-1">
        {members.map((member) => {
          const btColor =
            BLOOD_TYPE_COLORS[member.bloodType] || "oklch(0.55 0.22 280)";
          const relColors: Record<string, string> = {
            Father: "oklch(0.55 0.22 280)",
            Mother: "oklch(0.65 0.25 335)",
            Son: "oklch(0.52 0.14 155)",
            Daughter: "oklch(0.60 0.20 85)",
            Brother: "oklch(0.48 0.12 260)",
            Sister: "oklch(0.55 0.22 25)",
          };
          const relColor =
            relColors[member.relationship] || "oklch(0.55 0.22 280)";
          const initials = member.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();

          return (
            <div
              key={member.id}
              className="bg-card border border-border rounded-2xl p-4 flex flex-col gap-3 shadow-card hover:shadow-card-hover transition-all animate-fade-up"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-11 w-11">
                  <AvatarFallback
                    className="text-sm font-label font-bold"
                    style={{ background: `${relColor}18`, color: relColor }}
                  >
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-label font-bold text-foreground truncate">
                    {member.name}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Badge
                      className="text-[10px] px-1.5 py-0 border-0 font-label"
                      style={{ background: `${relColor}15`, color: relColor }}
                    >
                      {member.relationship}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {member.age} yrs
                    </span>
                  </div>
                </div>
              </div>

              {/* Blood type */}
              <div className="flex items-center gap-2">
                <span
                  className="flex items-center gap-1 text-xs font-label font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${btColor}15`, color: btColor }}
                >
                  <Droplets size={11} />
                  {member.bloodType}
                </span>
              </div>

              {/* Conditions */}
              <div className="flex-1">
                {member.medicalConditions.length === 0 ? (
                  <p className="text-xs text-muted-foreground font-label flex items-center gap-1">
                    <CheckCircle2
                      size={11}
                      style={{ color: "oklch(0.52 0.14 155)" }}
                    />{" "}
                    No conditions recorded
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-1">
                    {member.medicalConditions.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] font-label px-2 py-0.5 rounded-full"
                        style={{
                          background: "oklch(0.55 0.22 25 / 0.1)",
                          color: "oklch(0.55 0.22 25)",
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Update button */}
              <Dialog
                open={editOpen?.id === member.id}
                onOpenChange={(v) => {
                  if (!v) setEditOpen(null);
                  else {
                    setEditOpen(member);
                    setConditionInput("");
                  }
                }}
              >
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs font-label w-full gap-1"
                  >
                    <Edit3 size={11} /> Update Records
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle className="font-display">
                      Update Records — {member.name}
                    </DialogTitle>
                  </DialogHeader>
                  {editOpen && editOpen.id === member.id && (
                    <div className="space-y-4 mt-2">
                      <div>
                        <Label className="text-xs mb-2 block">
                          Medical Conditions
                        </Label>
                        <div className="flex flex-wrap gap-1.5 mb-3 min-h-[32px]">
                          {editOpen.medicalConditions.map((c) => (
                            <span
                              key={c}
                              className="inline-flex items-center gap-1 text-xs font-label px-2.5 py-1 rounded-full"
                              style={{
                                background: "oklch(0.55 0.22 25 / 0.1)",
                                color: "oklch(0.55 0.22 25)",
                              }}
                            >
                              {c}
                              <button
                                type="button"
                                onClick={() =>
                                  setEditOpen((p) =>
                                    p
                                      ? {
                                          ...p,
                                          medicalConditions:
                                            p.medicalConditions.filter(
                                              (x) => x !== c,
                                            ),
                                        }
                                      : p,
                                  )
                                }
                              >
                                <X size={11} />
                              </button>
                            </span>
                          ))}
                          {editOpen.medicalConditions.length === 0 && (
                            <p className="text-xs text-muted-foreground font-label">
                              No conditions
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Input
                            className="h-8 text-xs flex-1"
                            placeholder="Add condition..."
                            value={conditionInput}
                            onChange={(e) => setConditionInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                addConditionToEdit();
                              }
                            }}
                          />
                          <Button
                            size="sm"
                            className="h-8 px-3"
                            onClick={addConditionToEdit}
                          >
                            <Plus size={12} />
                          </Button>
                        </div>
                      </div>
                      <Button
                        className="w-full font-label"
                        onClick={handleSave}
                      >
                        Save Changes
                      </Button>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main HealthcarePage
// ─────────────────────────────────────────────
interface Props {
  userProfile?: UserProfile | null;
}

export default function HealthcarePage({ userProfile }: Props) {
  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6 animate-fade-up">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Healthcare
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Your personal health records, appointments, insurance &amp; advisors
          </p>
        </div>
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.2), oklch(0.65 0.25 335 / 0.2))",
          }}
        >
          <Activity size={22} style={{ color: "oklch(0.55 0.22 280)" }} />
        </div>
      </div>

      {/* Jobs banner */}
      <div
        className="flex items-center justify-between gap-3 mb-5 px-4 py-2.5 rounded-xl border animate-fade-up"
        style={{
          background: "oklch(0.58 0.22 25 / 0.06)",
          borderColor: "oklch(0.58 0.22 25 / 0.2)",
        }}
      >
        <div className="flex items-center gap-2">
          <Briefcase size={14} style={{ color: "oklch(0.58 0.22 25)" }} />
          <span className="text-xs font-label text-foreground font-medium">
            Healthcare Jobs Available
          </span>
          <span className="text-xs text-muted-foreground hidden sm:inline">
            — Physicians, nurses, admin &amp; more
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

      <QuickAddBar moduleName="Healthcare" />

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 animate-fade-up animate-fade-up-1">
        {[
          {
            label: "Active Prescriptions",
            value: "3",
            icon: Pill,
            color: "oklch(0.55 0.22 280)",
          },
          {
            label: "Upcoming Appointments",
            value: "3",
            icon: CalendarDays,
            color: "oklch(0.52 0.14 155)",
          },
          {
            label: "Active Policies",
            value: "1",
            icon: ShieldCheck,
            color: "oklch(0.60 0.20 85)",
          },
          {
            label: "Family Members",
            value: "5",
            icon: Users,
            color: "oklch(0.65 0.25 335)",
          },
        ].map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-xl p-4 flex items-center gap-3 shadow-card"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${color.replace(")", " / 0.15)")}` }}
            >
              <Icon size={17} style={{ color }} />
            </div>
            <div>
              <p className="text-xl font-display font-bold text-foreground">
                {value}
              </p>
              <p className="text-[11px] text-muted-foreground font-label leading-tight">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <Tabs
        defaultValue="records"
        className="animate-fade-up animate-fade-up-2"
      >
        <TabsList className="w-full sm:w-auto mb-6 flex flex-wrap sm:flex-nowrap h-auto gap-1 bg-secondary/60 p-1">
          {[
            { value: "records", label: "Medical Records", icon: Pill },
            {
              value: "appointments",
              label: "Appointments",
              icon: CalendarDays,
            },
            { value: "insurance", label: "Insurance", icon: ShieldCheck },
            { value: "advisors", label: "Advisors", icon: Stethoscope },
            { value: "family", label: "Family Health", icon: Users },
            { value: "events", label: "Events", icon: CalendarDays },
          ].map(({ value, label, icon: Icon }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex items-center gap-1.5 text-xs font-label font-medium px-3 py-2 data-[state=active]:bg-card data-[state=active]:shadow-sm flex-shrink-0"
            >
              <Icon size={13} />
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">{label.split(" ")[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="records">
          <MedicalRecordsTab userProfile={userProfile} />
        </TabsContent>
        <TabsContent value="appointments">
          <AppointmentsTab />
        </TabsContent>
        <TabsContent value="insurance">
          <InsuranceTab />
        </TabsContent>
        <TabsContent value="advisors">
          <AdvisorsTab />
        </TabsContent>
        <TabsContent value="family">
          <FamilyHealthTab />
        </TabsContent>
        <TabsContent value="events">
          <EventsTab
            moduleName="Healthcare"
            moduleColor="oklch(0.58 0.22 25)"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
