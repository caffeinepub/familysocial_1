import { s as createLucideIcon, j as jsxRuntimeExports, k as Briefcase, a as Button, u as ue, v as ShieldCheck, U as Users, r as reactExports, H as Heart, n as User, X, I as Input, D as Dialog, b as DialogTrigger, c as DialogContent, d as DialogHeader, e as DialogTitle, L as Label, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, T as Textarea, B as Badge, E as Clock, M as MapPin, C as CircleCheck, K as BookOpen, A as Avatar, o as AvatarFallback, a0 as ScrollArea, _ as GraduationCap } from "./index-DVrwA8ch.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-CA98azmN.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle } from "./sheet-Bep8cTUd.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-Cax2rkMR.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNwE7U1q.js";
import { E as EventsTab } from "./EventsTab-Ctgcdlip.js";
import { Q as QuickAddBar } from "./QuickAddBar-R1_H5drF.js";
import { A as Activity } from "./activity-CIW0qfuf.js";
import { C as CalendarDays } from "./calendar-days-BbXYNbCi.js";
import { S as Stethoscope, D as Droplets } from "./stethoscope-CBKtB-Yo.js";
import { C as CircleAlert } from "./circle-alert-BeiiJcIC.js";
import { P as Plus } from "./plus-BY35EerL.js";
import { S as Shield } from "./shield-BBAkeCA2.js";
import { T as Trash2 } from "./trash-2-FPmpcA-s.js";
import { C as CircleX } from "./circle-x-CgmaryAp.js";
import { S as Star } from "./star-NNf8t7tv.js";
import { P as PenLine } from "./pen-line-Dt8SXYBZ.js";
import "./external-link-CaxibzPS.js";
import "./share-2-uix-I0rV.js";
import "./lock-Nk96dSfG.js";
import "./globe-CMOOhR4e.js";
import "./calendar-CCHsOCAR.js";
import "./checkbox-DFutZuV-.js";
import "./package-D6joeCYp.js";
import "./settings-2-Bk6JBBFJ.js";
import "./upload-C3rON3-C.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
];
const Pill = createLucideIcon("pill", __iconNode);
const MOCK_PRESCRIPTIONS = [
  {
    id: 1,
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    prescribedBy: "Dr. Ayesha Siddiqui",
    expiry: "Dec 2026"
  },
  {
    id: 2,
    medication: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    prescribedBy: "Dr. Usman Tariq",
    expiry: "Mar 2026"
  },
  {
    id: 3,
    medication: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once at night",
    prescribedBy: "Dr. Ayesha Siddiqui",
    expiry: "Jun 2026"
  }
];
const MOCK_VITALS = [
  {
    id: 1,
    date: "Mar 01, 2026",
    bp: "128/82",
    pulse: 74,
    glucose: 112,
    weight: 78
  },
  {
    id: 2,
    date: "Feb 22, 2026",
    bp: "130/85",
    pulse: 78,
    glucose: 118,
    weight: 78.5
  },
  {
    id: 3,
    date: "Feb 15, 2026",
    bp: "125/80",
    pulse: 72,
    glucose: 105,
    weight: 79
  },
  {
    id: 4,
    date: "Feb 08, 2026",
    bp: "132/88",
    pulse: 80,
    glucose: 124,
    weight: 79.2
  },
  {
    id: 5,
    date: "Feb 01, 2026",
    bp: "127/83",
    pulse: 76,
    glucose: 115,
    weight: 79.5
  }
];
const MOCK_UPCOMING_APPOINTMENTS = [
  {
    id: 1,
    doctor: "Dr. Ayesha Siddiqui",
    specialty: "Cardiologist",
    date: "Mar 10, 2026",
    time: "11:00 AM",
    clinic: "AKUH Cardiology Clinic",
    status: "Confirmed",
    notes: "Follow-up for blood pressure management. Please bring your last 3 BP readings. Medication review planned."
  },
  {
    id: 2,
    doctor: "Dr. Bilal Ahmed",
    specialty: "Nutritionist",
    date: "Mar 18, 2026",
    time: "3:30 PM",
    clinic: "Online Consultation",
    status: "Pending",
    notes: "Initial diet consultation for diabetes management."
  },
  {
    id: 3,
    doctor: "Dr. Fatima Khan",
    specialty: "Dermatologist",
    date: "Mar 25, 2026",
    time: "2:00 PM",
    clinic: "CMH Lahore",
    status: "Confirmed",
    notes: "Annual skin checkup."
  }
];
const MOCK_PAST_APPOINTMENTS = [
  {
    id: 4,
    doctor: "Dr. Usman Tariq",
    specialty: "General Physician",
    date: "Feb 12, 2026",
    time: "10:00 AM",
    clinic: "Shaukat Khanum",
    status: "Confirmed",
    notes: "Routine checkup completed. Blood tests ordered — HbA1c, lipid panel, CBC. Results normal except slightly elevated LDL. Advised dietary changes and follow-up in 6 weeks."
  },
  {
    id: 5,
    doctor: "Dr. Ayesha Siddiqui",
    specialty: "Cardiologist",
    date: "Jan 20, 2026",
    time: "9:30 AM",
    clinic: "AKUH Cardiology Clinic",
    status: "Confirmed",
    notes: "ECG performed — normal sinus rhythm. BP was 134/88, slightly high. Lisinopril dose adjusted from 5mg to 10mg. Lifestyle modification counseling provided. Next appointment in 6 weeks."
  },
  {
    id: 6,
    doctor: "Dr. Sara Malik",
    specialty: "Psychologist",
    date: "Jan 05, 2026",
    time: "5:00 PM",
    clinic: "Online Consultation",
    status: "Confirmed",
    notes: "Session focused on stress management techniques. Patient reported improved sleep. CBT exercises assigned. Follow-up in one month."
  }
];
const MOCK_POLICIES = [
  {
    id: 1,
    provider: "Jubilee Health Insurance",
    policyNumber: "JHL-2024-88231",
    type: "Individual + Family",
    premium: 45e3,
    coverage: 5e6,
    startDate: "Jan 2024",
    expiryDate: "Dec 2025",
    status: "Active"
  },
  {
    id: 2,
    provider: "State Life",
    policyNumber: "SLI-2023-55109",
    type: "Individual",
    premium: 18e3,
    coverage: 15e5,
    startDate: "Apr 2023",
    expiryDate: "Mar 2024",
    status: "Expired"
  }
];
const MOCK_CLAIMS = [
  {
    id: 1,
    date: "Feb 14, 2026",
    amount: 18500,
    status: "Approved",
    description: "Lab tests & cardiac consultation at AKUH"
  },
  {
    id: 2,
    date: "Jan 22, 2026",
    amount: 35e3,
    status: "Pending",
    description: "Specialist consultation and diagnostics"
  },
  {
    id: 3,
    date: "Nov 10, 2025",
    amount: 72e3,
    status: "Approved",
    description: "Minor surgical procedure – day care"
  },
  {
    id: 4,
    date: "Sep 03, 2025",
    amount: 8200,
    status: "Rejected",
    description: "Dental scaling (not covered under policy)"
  }
];
const MOCK_ADVISORS = [
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
      "Fellow of American College of Cardiology"
    ],
    consultationFee: 3500,
    workingHours: "Mon–Fri: 9am–5pm",
    reviews: [
      {
        author: "Kamran M.",
        rating: 5,
        comment: "Exceptionally thorough. Took time to explain everything. Highly recommend."
      },
      {
        author: "Sana R.",
        rating: 5,
        comment: "Very professional and caring. Best cardiologist in Karachi."
      }
    ]
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
      "Diploma in Diabetes Management"
    ],
    consultationFee: 2e3,
    workingHours: "Mon–Sat: 10am–6pm",
    reviews: [
      {
        author: "Ali H.",
        rating: 4,
        comment: "Very knowledgeable doctor. Quick diagnosis and practical advice."
      },
      {
        author: "Fatima K.",
        rating: 5,
        comment: "Excellent doctor, always available for follow-up questions."
      }
    ]
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
      "DAAA Certification"
    ],
    consultationFee: 2500,
    workingHours: "Tue, Thu, Sat: 2pm–8pm",
    reviews: [
      {
        author: "Maira S.",
        rating: 5,
        comment: "Amazing results after just 4 sessions. Very thorough diagnosis."
      },
      {
        author: "Hassan B.",
        rating: 4,
        comment: "Professional and knowledgeable. Wait times can be long."
      }
    ]
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
      "Certified Diabetes Educator"
    ],
    consultationFee: 1500,
    workingHours: "Mon–Sun: 9am–9pm (Online)",
    reviews: [
      {
        author: "Zara T.",
        rating: 5,
        comment: "Life-changing diet plan. Lost 8kg in 3 months following his guidance."
      },
      {
        author: "Omar F.",
        rating: 4,
        comment: "Very responsive and supportive. Great meal plans."
      }
    ]
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
      "Certified CBT Practitioner"
    ],
    consultationFee: 3e3,
    workingHours: "Mon–Fri: 5pm–9pm (Online)",
    reviews: [
      {
        author: "Nadia A.",
        rating: 5,
        comment: "Dr. Sara changed my life. She is compassionate and incredibly insightful."
      },
      {
        author: "Imran Q.",
        rating: 5,
        comment: "Best therapist I've ever seen. Very professional and empathetic."
      }
    ]
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
      "Member Pakistan Orthopedic Association"
    ],
    consultationFee: 4e3,
    workingHours: "Mon, Wed, Fri: 10am–2pm",
    reviews: [
      {
        author: "Rehman G.",
        rating: 4,
        comment: "Very experienced surgeon. My knee replacement was very successful."
      },
      {
        author: "Asma N.",
        rating: 5,
        comment: "Highly skilled. Explained the surgery procedure thoroughly."
      }
    ]
  }
];
const MOCK_FAMILY_HEALTH = [
  {
    id: 1,
    name: "Amjad Ali",
    relationship: "Father",
    bloodType: "O+",
    age: 65,
    medicalConditions: ["Type 2 Diabetes", "Hypertension"]
  },
  {
    id: 2,
    name: "Shahida Bibi",
    relationship: "Mother",
    bloodType: "A+",
    age: 60,
    medicalConditions: ["Arthritis", "Thyroid Disorder"]
  },
  {
    id: 3,
    name: "Saad Ali",
    relationship: "Son",
    bloodType: "B+",
    age: 18,
    medicalConditions: []
  },
  {
    id: 4,
    name: "Hira Ali",
    relationship: "Daughter",
    bloodType: "A-",
    age: 14,
    medicalConditions: ["Asthma"]
  },
  {
    id: 5,
    name: "Tariq Ali",
    relationship: "Brother",
    bloodType: "AB+",
    age: 38,
    medicalConditions: ["High Cholesterol"]
  }
];
const STATUS_STYLES = {
  Confirmed: {
    bg: "oklch(0.52 0.14 155 / 0.15)",
    color: "oklch(0.52 0.14 155)"
  },
  Pending: { bg: "oklch(0.65 0.14 50 / 0.15)", color: "oklch(0.65 0.14 50)" },
  Cancelled: { bg: "oklch(0.55 0.22 25 / 0.15)", color: "oklch(0.55 0.22 25)" }
};
const CLAIM_STYLES = {
  Approved: {
    bg: "oklch(0.52 0.14 155 / 0.15)",
    color: "oklch(0.52 0.14 155)"
  },
  Pending: { bg: "oklch(0.65 0.14 50 / 0.15)", color: "oklch(0.65 0.14 50)" },
  Rejected: { bg: "oklch(0.55 0.22 25 / 0.15)", color: "oklch(0.55 0.22 25)" }
};
const BLOOD_TYPE_COLORS = {
  "A+": "oklch(0.55 0.22 280)",
  "A-": "oklch(0.55 0.22 280)",
  "B+": "oklch(0.65 0.25 335)",
  "B-": "oklch(0.65 0.25 335)",
  "AB+": "oklch(0.55 0.22 25)",
  "AB-": "oklch(0.55 0.22 25)",
  "O+": "oklch(0.52 0.14 155)",
  "O-": "oklch(0.52 0.14 155)"
};
const SPECIALTY_COLORS = {
  Cardiologist: "oklch(0.55 0.22 25)",
  "General Physician": "oklch(0.52 0.14 155)",
  Dermatologist: "oklch(0.65 0.25 335)",
  Nutritionist: "oklch(0.60 0.20 85)",
  Psychologist: "oklch(0.55 0.22 280)",
  "Orthopedic Surgeon": "oklch(0.55 0.12 200)"
};
function SectionHeader({
  title,
  action
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: title }),
    action
  ] });
}
function MedicalRecordsTab({
  userProfile
}) {
  const [conditions, setConditions] = reactExports.useState([
    "Hypertension",
    "Type 2 Diabetes"
  ]);
  const [allergies, setAllergies] = reactExports.useState(["Penicillin", "Dust"]);
  const [prescriptions, setPrescriptions] = reactExports.useState(MOCK_PRESCRIPTIONS);
  const [vitals, setVitals] = reactExports.useState(MOCK_VITALS);
  const [conditionInput, setConditionInput] = reactExports.useState("");
  const [allergyInput, setAllergyInput] = reactExports.useState("");
  const [rxOpen, setRxOpen] = reactExports.useState(false);
  const [vitalOpen, setVitalOpen] = reactExports.useState(false);
  const [rxForm, setRxForm] = reactExports.useState({
    medication: "",
    dosage: "",
    frequency: "",
    prescribedBy: "",
    expiry: ""
  });
  const [vitalForm, setVitalForm] = reactExports.useState({
    bp: "",
    pulse: "",
    glucose: "",
    weight: ""
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
  const addPrescription = (e) => {
    e.preventDefault();
    if (!rxForm.medication.trim()) return;
    setPrescriptions((p) => [{ id: Date.now(), ...rxForm }, ...p]);
    setRxForm({
      medication: "",
      dosage: "",
      frequency: "",
      prescribedBy: "",
      expiry: ""
    });
    setRxOpen(false);
    ue.success("Prescription added.");
  };
  const addVital = (e) => {
    e.preventDefault();
    const now = (/* @__PURE__ */ new Date()).toLocaleDateString("en-PK", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
    setVitals(
      (p) => [
        {
          id: Date.now(),
          date: now,
          bp: vitalForm.bp,
          pulse: Number(vitalForm.pulse),
          glucose: Number(vitalForm.glucose),
          weight: Number(vitalForm.weight)
        },
        ...p
      ].slice(0, 10)
    );
    setVitalForm({ bp: "", pulse: "", glucose: "", weight: "" });
    setVitalOpen(false);
    ue.success("Vital reading logged.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-5 animate-fade-up",
        style: {
          background: "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.12), oklch(0.65 0.25 335 / 0.10))",
          border: "1px solid oklch(0.55 0.22 280 / 0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center",
                style: { background: "oklch(0.55 0.22 280 / 0.15)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 20, style: { color: "oklch(0.55 0.22 280)" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: "Health Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: (userProfile == null ? void 0 : userProfile.name) || "Your Profile" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
            {
              label: "Blood Type",
              value: (userProfile == null ? void 0 : userProfile.bloodType) || "A+",
              icon: Droplets,
              color: "oklch(0.55 0.22 280)"
            },
            {
              label: "Age",
              value: (userProfile == null ? void 0 : userProfile.dateOfBirth) ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(userProfile.dateOfBirth).getFullYear()} yrs` : "35 yrs",
              icon: User,
              color: "oklch(0.65 0.25 335)"
            },
            {
              label: "Last Checkup",
              value: "Feb 12, 2026",
              icon: CalendarDays,
              color: "oklch(0.52 0.14 155)"
            },
            {
              label: "Active Rx",
              value: prescriptions.length,
              icon: Pill,
              color: "oklch(0.60 0.20 85)"
            }
          ].map(({ label, value, icon: Icon, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card/80 rounded-xl p-3 flex items-center gap-2.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16, style: { color } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-bold text-foreground", children: value })
                ] })
              ]
            },
            label
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up animate-fade-up-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 15, style: { color: "oklch(0.55 0.22 25)" } }),
          "Medical Conditions"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 min-h-[36px]", children: [
            conditions.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1 text-xs font-label px-2.5 py-1 rounded-full",
                style: {
                  background: "oklch(0.55 0.22 25 / 0.12)",
                  color: "oklch(0.55 0.22 25)"
                },
                children: [
                  c,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setConditions((p) => p.filter((x) => x !== c)),
                      className: "ml-0.5 hover:opacity-70",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11 })
                    }
                  )
                ]
              },
              c
            )),
            conditions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: "No conditions recorded" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Add condition...",
                value: conditionInput,
                onChange: (e) => setConditionInput(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addCondition();
                  }
                },
                className: "h-8 text-xs flex-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-8 px-3", onClick: addCondition, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, style: { color: "oklch(0.65 0.25 335)" } }),
          "Allergies"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 min-h-[36px]", children: [
            allergies.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1 text-xs font-label px-2.5 py-1 rounded-full",
                style: {
                  background: "oklch(0.65 0.25 335 / 0.12)",
                  color: "oklch(0.65 0.25 335)"
                },
                children: [
                  a,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setAllergies((p) => p.filter((x) => x !== a)),
                      className: "ml-0.5 hover:opacity-70",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11 })
                    }
                  )
                ]
              },
              a
            )),
            allergies.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: "No allergies recorded" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Add allergy...",
                value: allergyInput,
                onChange: (e) => setAllergyInput(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addAllergy();
                  }
                },
                className: "h-8 text-xs flex-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-8 px-3", onClick: addAllergy, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up animate-fade-up-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          title: "Prescriptions",
          action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: rxOpen, onOpenChange: setRxOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-xs font-label gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
              " Add Rx"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Add Prescription" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: addPrescription, className: "space-y-4 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Medication *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        className: "h-8 text-sm",
                        value: rxForm.medication,
                        onChange: (e) => setRxForm((p) => ({
                          ...p,
                          medication: e.target.value
                        })),
                        required: true
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Dosage" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        className: "h-8 text-sm",
                        placeholder: "e.g. 10mg",
                        value: rxForm.dosage,
                        onChange: (e) => setRxForm((p) => ({ ...p, dosage: e.target.value }))
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Frequency" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        className: "h-8 text-sm",
                        placeholder: "e.g. Twice daily",
                        value: rxForm.frequency,
                        onChange: (e) => setRxForm((p) => ({
                          ...p,
                          frequency: e.target.value
                        }))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Expiry" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        className: "h-8 text-sm",
                        placeholder: "e.g. Dec 2026",
                        value: rxForm.expiry,
                        onChange: (e) => setRxForm((p) => ({ ...p, expiry: e.target.value }))
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Prescribed By" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-8 text-sm",
                      placeholder: "Doctor name",
                      value: rxForm.prescribedBy,
                      onChange: (e) => setRxForm((p) => ({
                        ...p,
                        prescribedBy: e.target.value
                      }))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full font-label", children: "Save Prescription" })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Medication" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Dosage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label hidden sm:table-cell", children: "Frequency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label hidden md:table-cell", children: "Prescribed By" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Expiry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-8" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: prescriptions.map((rx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-label font-semibold", children: rx.medication }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: rx.dosage }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground hidden sm:table-cell", children: rx.frequency }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground hidden md:table-cell", children: rx.prescribedBy }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-label", children: rx.expiry }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPrescriptions((p) => p.filter((x) => x.id !== rx.id)),
              className: "text-muted-foreground hover:text-destructive transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
            }
          ) })
        ] }, rx.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up animate-fade-up-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          title: "Vitals Log",
          action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: vitalOpen, onOpenChange: setVitalOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-xs font-label gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
              " Add Reading"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Log Vitals" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: addVital, className: "space-y-3 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Blood Pressure" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        className: "h-8 text-sm",
                        placeholder: "e.g. 120/80",
                        value: vitalForm.bp,
                        onChange: (e) => setVitalForm((p) => ({ ...p, bp: e.target.value }))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Pulse (bpm)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        className: "h-8 text-sm",
                        placeholder: "72",
                        value: vitalForm.pulse,
                        onChange: (e) => setVitalForm((p) => ({ ...p, pulse: e.target.value }))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Glucose (mg/dL)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        className: "h-8 text-sm",
                        placeholder: "95",
                        value: vitalForm.glucose,
                        onChange: (e) => setVitalForm((p) => ({
                          ...p,
                          glucose: e.target.value
                        }))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Weight (kg)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        className: "h-8 text-sm",
                        placeholder: "70",
                        value: vitalForm.weight,
                        onChange: (e) => setVitalForm((p) => ({
                          ...p,
                          weight: e.target.value
                        }))
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full font-label", children: "Log Reading" })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "BP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label hidden sm:table-cell", children: "Glucose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label hidden sm:table-cell", children: "Weight" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: vitals.slice(0, 5).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground font-label", children: v.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs font-label font-semibold",
              style: { color: "oklch(0.55 0.22 25)" },
              children: v.bp
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs font-label", children: [
            v.pulse,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "bpm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs font-label hidden sm:table-cell", children: [
            v.glucose,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "mg/dL" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs font-label hidden sm:table-cell", children: [
            v.weight,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "kg" })
          ] })
        ] }, v.id)) })
      ] }) })
    ] })
  ] });
}
function AppointmentsTab() {
  const [upcoming, setUpcoming] = reactExports.useState(
    MOCK_UPCOMING_APPOINTMENTS
  );
  const [past] = reactExports.useState(MOCK_PAST_APPOINTMENTS);
  const [notesOpen, setNotesOpen] = reactExports.useState(null);
  const [bookOpen, setBookOpen] = reactExports.useState(false);
  const [bookForm, setBookForm] = reactExports.useState({
    doctor: "",
    date: "",
    time: "",
    reason: ""
  });
  const notesAppt = past.find((a) => a.id === notesOpen);
  const handleBook = (e) => {
    e.preventDefault();
    if (!bookForm.doctor || !bookForm.date) return;
    const advisor = MOCK_ADVISORS.find((a) => a.name === bookForm.doctor);
    const newAppt = {
      id: Date.now(),
      doctor: bookForm.doctor,
      specialty: (advisor == null ? void 0 : advisor.specialty) || "General",
      date: bookForm.date,
      time: bookForm.time || "10:00 AM",
      clinic: (advisor == null ? void 0 : advisor.hospital) || "TBD",
      status: "Pending",
      notes: bookForm.reason
    };
    setUpcoming((p) => [...p, newAppt]);
    setBookForm({ doctor: "", date: "", time: "", reason: "" });
    setBookOpen(false);
    ue.success("Appointment booked successfully!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          title: "Upcoming Appointments",
          action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: bookOpen, onOpenChange: setBookOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-xs font-label gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
              " Book Appointment"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Book Appointment" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleBook, className: "space-y-4 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Select Doctor *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: bookForm.doctor,
                      onValueChange: (v) => setBookForm((p) => ({ ...p, doctor: v })),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose a doctor" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: MOCK_ADVISORS.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: a.name, children: [
                          a.name,
                          " — ",
                          a.specialty
                        ] }, a.id)) })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Date *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "date",
                        className: "h-8 text-sm",
                        value: bookForm.date,
                        onChange: (e) => setBookForm((p) => ({ ...p, date: e.target.value })),
                        required: true
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Time" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "time",
                        className: "h-8 text-sm",
                        value: bookForm.time,
                        onChange: (e) => setBookForm((p) => ({ ...p, time: e.target.value }))
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Reason / Notes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      className: "text-sm resize-none",
                      rows: 3,
                      placeholder: "Describe your concern...",
                      value: bookForm.reason,
                      onChange: (e) => setBookForm((p) => ({ ...p, reason: e.target.value }))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full font-label", children: "Confirm Booking" })
              ] })
            ] })
          ] })
        }
      ),
      upcoming.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10 bg-secondary/30 rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CalendarDays,
          {
            size: 28,
            className: "mx-auto text-muted-foreground/30 mb-2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-label", children: "No upcoming appointments" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: upcoming.map((appt) => {
        const style = STATUS_STYLES[appt.status];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 animate-fade-up shadow-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                  style: { background: "oklch(0.55 0.22 280 / 0.12)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Stethoscope,
                    {
                      size: 20,
                      style: { color: "oklch(0.55 0.22 280)" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: appt.doctor }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "text-[10px] px-1.5 py-0 border-0 font-label",
                      style: {
                        background: "oklch(0.55 0.22 280 / 0.12)",
                        color: "oklch(0.55 0.22 280)"
                      },
                      children: appt.specialty
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "text-[10px] px-1.5 py-0 border-0 font-label",
                      style,
                      children: appt.status
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 10 }),
                    appt.date
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
                    appt.time
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 hidden sm:flex", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 10 }),
                    appt.clinic
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs font-label shrink-0",
                  onClick: () => setUpcoming((p) => p.filter((a) => a.id !== appt.id)),
                  children: "Cancel"
                }
              )
            ]
          },
          appt.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up animate-fade-up-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Past Appointments" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: past.map((appt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                style: { background: "oklch(0.52 0.14 155 / 0.12)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheck,
                  {
                    size: 20,
                    style: { color: "oklch(0.52 0.14 155)" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: appt.doctor }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "text-[10px] px-1.5 py-0 border-0 font-label",
                    style: {
                      background: "oklch(0.52 0.14 155 / 0.12)",
                      color: "oklch(0.52 0.14 155)"
                    },
                    children: appt.specialty
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 10 }),
                  appt.date
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 10 }),
                  appt.clinic
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Dialog,
              {
                open: notesOpen === appt.id,
                onOpenChange: (v) => setNotesOpen(v ? appt.id : null),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-7 text-xs font-label shrink-0 gap-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 11 }),
                        " View Notes"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Doctor's Notes" }) }),
                    notesAppt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-label", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: notesAppt.doctor }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: notesAppt.date })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary/50 rounded-xl p-4 text-sm text-foreground leading-relaxed", children: notesAppt.notes || "No notes recorded." })
                    ] })
                  ] })
                ]
              }
            )
          ]
        },
        appt.id
      )) })
    ] })
  ] });
}
function InsuranceTab() {
  const [policies, setPolicies] = reactExports.useState(MOCK_POLICIES);
  const [claims] = reactExports.useState(MOCK_CLAIMS);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    provider: "",
    policyNumber: "",
    type: "Individual",
    coverage: "",
    premium: "",
    startDate: "",
    endDate: ""
  });
  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.provider.trim() || !form.policyNumber.trim()) return;
    const today = /* @__PURE__ */ new Date();
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
        status: isActive ? "Active" : "Expired"
      },
      ...p
    ]);
    setForm({
      provider: "",
      policyNumber: "",
      type: "Individual",
      coverage: "",
      premium: "",
      startDate: "",
      endDate: ""
    });
    setAddOpen(false);
    ue.success("Insurance policy added!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Insurance Policies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          policies.filter((p) => p.status === "Active").length,
          " active,",
          " ",
          policies.filter((p) => p.status === "Expired").length,
          " expired"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-xs font-label gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
          " Add Policy"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Add Insurance Policy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAdd, className: "space-y-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Provider *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    className: "h-8 text-sm",
                    placeholder: "e.g. Jubilee Health Insurance",
                    value: form.provider,
                    onChange: (e) => setForm((p) => ({ ...p, provider: e.target.value })),
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Policy Number *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    className: "h-8 text-sm",
                    placeholder: "JHL-2024-XXXXX",
                    value: form.policyNumber,
                    onChange: (e) => setForm((p) => ({ ...p, policyNumber: e.target.value })),
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.type,
                    onValueChange: (v) => setForm((p) => ({
                      ...p,
                      type: v
                    })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Individual", children: "Individual" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Individual + Family", children: "Individual + Family" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Corporate", children: "Corporate" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Coverage (PKR)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    className: "h-8 text-sm",
                    placeholder: "5000000",
                    value: form.coverage,
                    onChange: (e) => setForm((p) => ({ ...p, coverage: e.target.value }))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Annual Premium (PKR)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    className: "h-8 text-sm",
                    placeholder: "45000",
                    value: form.premium,
                    onChange: (e) => setForm((p) => ({ ...p, premium: e.target.value }))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Start Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    className: "h-8 text-sm",
                    value: form.startDate,
                    onChange: (e) => setForm((p) => ({ ...p, startDate: e.target.value }))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "End Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    className: "h-8 text-sm",
                    value: form.endDate,
                    onChange: (e) => setForm((p) => ({ ...p, endDate: e.target.value }))
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full font-label", children: "Save Policy" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up animate-fade-up-1", children: policies.map((policy) => {
      const isActive = policy.status === "Active";
      const borderColor = isActive ? "oklch(0.52 0.14 155)" : "oklch(0.55 0.22 25)";
      const bgGradient = isActive ? "linear-gradient(135deg, oklch(0.52 0.14 155 / 0.06), oklch(0.55 0.22 280 / 0.04))" : "linear-gradient(135deg, oklch(0.55 0.22 25 / 0.06), oklch(0.65 0.14 50 / 0.04))";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-5 relative overflow-hidden",
          style: {
            background: bgGradient,
            border: `1px solid ${borderColor}30`
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute left-0 top-4 bottom-4 w-1 rounded-r-full",
                style: { background: borderColor }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-9 h-9 rounded-xl flex items-center justify-center",
                      style: { background: `${borderColor}18` },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 17, style: { color: borderColor } })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-bold text-foreground", children: policy.provider }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: policy.policyNumber })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "text-[10px] px-2 py-0.5 border-0 font-label shrink-0",
                    style: {
                      background: `${borderColor}18`,
                      color: borderColor
                    },
                    children: policy.status
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-2 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-label", children: "Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground mt-0.5", children: policy.type })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-label", children: "Coverage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-label font-semibold text-foreground mt-0.5", children: [
                    "PKR ",
                    (policy.coverage / 1e6).toFixed(1),
                    "M"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-label", children: "Annual Premium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-label font-semibold text-foreground mt-0.5", children: [
                    "PKR ",
                    policy.premium.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-label", children: "Expiry" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground mt-0.5", children: policy.expiryDate })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs font-label mt-3 gap-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 11 }),
                    " View Details"
                  ]
                }
              )
            ] })
          ]
        },
        policy.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up animate-fade-up-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Claims History" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: claims.map((claim) => {
          const style = CLAIM_STYLES[claim.status];
          const ClaimIcon = claim.status === "Approved" ? CircleCheck : claim.status === "Rejected" ? CircleX : Clock;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground font-label", children: claim.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-label", children: claim.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs font-label font-semibold", children: [
              "PKR ",
              claim.amount.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: "text-[10px] px-1.5 py-0.5 border-0 font-label flex items-center gap-1 w-fit",
                style,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ClaimIcon, { size: 9 }),
                  claim.status
                ]
              }
            ) })
          ] }, claim.id);
        }) })
      ] }) })
    ] })
  ] });
}
function AdvisorsTab() {
  const [specialtyFilter, setSpecialtyFilter] = reactExports.useState("All");
  const [availableOnly, setAvailableOnly] = reactExports.useState(false);
  const [profileOpen, setProfileOpen] = reactExports.useState(null);
  const [bookOpen, setBookOpen] = reactExports.useState(null);
  const [bookForm, setBookForm] = reactExports.useState({ date: "", time: "", reason: "" });
  const specialties = [
    "All",
    "Cardiologist",
    "General Physician",
    "Dermatologist",
    "Nutritionist",
    "Psychologist",
    "Orthopedic Surgeon"
  ];
  const filtered = MOCK_ADVISORS.filter((a) => {
    const sMatch = specialtyFilter === "All" || a.specialty === specialtyFilter;
    const aMatch = !availableOnly || a.availability === "Available";
    return sMatch && aMatch;
  });
  const handleBook = (e) => {
    e.preventDefault();
    ue.success(`Consultation with ${bookOpen == null ? void 0 : bookOpen.name} booked!`);
    setBookOpen(null);
    setBookForm({ date: "", time: "", reason: "" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-display font-bold text-foreground", children: "Find Health Advisors & Doctors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          filtered.length,
          " doctors available near you"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: specialtyFilter, onValueChange: setSpecialtyFilter, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs w-44", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Specialty" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: specialties.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "text-xs", children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              role: "switch",
              "aria-checked": availableOnly,
              onClick: () => setAvailableOnly((v) => !v),
              className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${availableOnly ? "bg-primary" : "bg-muted"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${availableOnly ? "translate-x-4" : "translate-x-1"}`
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-muted-foreground", children: "Available only" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-up animate-fade-up-1", children: filtered.map((advisor) => {
      const specColor = SPECIALTY_COLORS[advisor.specialty] || "oklch(0.55 0.22 280)";
      const isAvail = advisor.availability === "Available";
      const initials = advisor.name.split(" ").filter((_, i) => i > 0).map((n) => n[0]).join("").slice(0, 2).toUpperCase();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-2xl p-4 flex flex-col gap-3 shadow-card hover:shadow-card-hover transition-all animate-fade-up",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-12 w-12 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                AvatarFallback,
                {
                  className: "text-sm font-label font-bold",
                  style: { background: `${specColor}18`, color: specColor },
                  children: initials
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-bold text-foreground leading-tight truncate", children: advisor.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "text-[10px] px-1.5 py-0 border-0 font-label mt-0.5",
                    style: { background: `${specColor}15`, color: specColor },
                    children: advisor.specialty
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full",
                    style: {
                      background: isAvail ? "oklch(0.52 0.14 155)" : "oklch(0.65 0.14 50)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] font-label",
                    style: {
                      color: isAvail ? "oklch(0.52 0.14 155)" : "oklch(0.65 0.14 50)"
                    },
                    children: advisor.availability
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 9 }),
                advisor.hospital
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    size: 9,
                    style: {
                      color: "oklch(0.72 0.19 85)",
                      fill: "oklch(0.72 0.19 85)"
                    }
                  }
                ),
                advisor.rating,
                " · ",
                advisor.experience,
                " yrs"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-auto pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "flex-1 h-7 text-xs font-label",
                  disabled: !isAvail,
                  onClick: () => setBookOpen(advisor),
                  children: "Book Consultation"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs font-label px-3",
                  onClick: () => setProfileOpen(advisor),
                  children: "View Profile"
                }
              )
            ] })
          ]
        },
        advisor.id
      );
    }) }),
    bookOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!bookOpen, onOpenChange: (v) => !v && setBookOpen(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display", children: [
        "Book with ",
        bookOpen.name
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleBook, className: "space-y-4 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-secondary/50 rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-10 w-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AvatarFallback,
            {
              className: "text-xs font-label font-bold",
              style: {
                background: `${SPECIALTY_COLORS[bookOpen.specialty] || "oklch(0.55 0.22 280)"}15`,
                color: SPECIALTY_COLORS[bookOpen.specialty] || "oklch(0.55 0.22 280)"
              },
              children: bookOpen.name.split(" ").filter((_, i) => i > 0).map((n) => n[0]).join("").slice(0, 2).toUpperCase()
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold", children: bookOpen.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              bookOpen.specialty,
              " · PKR",
              " ",
              bookOpen.consultationFee.toLocaleString(),
              "/consultation"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Date *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                className: "h-8 text-sm",
                value: bookForm.date,
                onChange: (e) => setBookForm((p) => ({ ...p, date: e.target.value })),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "time",
                className: "h-8 text-sm",
                value: bookForm.time,
                onChange: (e) => setBookForm((p) => ({ ...p, time: e.target.value }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Reason / Symptoms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              className: "text-sm resize-none",
              rows: 3,
              placeholder: "Describe your concern...",
              value: bookForm.reason,
              onChange: (e) => setBookForm((p) => ({ ...p, reason: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full font-label", children: "Confirm Booking" })
      ] })
    ] }) }),
    profileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sheet,
      {
        open: !!profileOpen,
        onOpenChange: (v) => !v && setProfileOpen(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          SheetContent,
          {
            side: "right",
            className: "w-full sm:w-[480px] p-0 flex flex-col overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "p-5 border-b border-border shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-14 w-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AvatarFallback,
                  {
                    className: "text-base font-label font-bold",
                    style: {
                      background: `${SPECIALTY_COLORS[profileOpen.specialty] || "oklch(0.55 0.22 280)"}18`,
                      color: SPECIALTY_COLORS[profileOpen.specialty] || "oklch(0.55 0.22 280)"
                    },
                    children: profileOpen.name.split(" ").filter((_, i) => i > 0).map((n) => n[0]).join("").slice(0, 2).toUpperCase()
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-display text-base", children: profileOpen.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                    profileOpen.specialty,
                    " · ",
                    profileOpen.experience,
                    " years experience"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Star,
                      {
                        size: 12,
                        style: {
                          color: "oklch(0.72 0.19 85)",
                          fill: "oklch(0.72 0.19 85)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-bold", children: profileOpen.rating }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "rating" })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-label font-semibold uppercase tracking-wide text-muted-foreground mb-2", children: "About" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: profileOpen.bio })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-label font-semibold uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 12 }),
                    " Qualifications"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: profileOpen.qualifications.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheck,
                      {
                        size: 13,
                        style: { color: "oklch(0.52 0.14 155)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-label", children: q })
                  ] }, q)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/50 rounded-xl p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: "Consultation Fee" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-label font-bold text-foreground mt-1", children: [
                      "PKR ",
                      profileOpen.consultationFee.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/50 rounded-xl p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: "Working Hours" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-bold text-foreground mt-1", children: profileOpen.workingHours })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/50 rounded-xl p-3 col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-label flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 10 }),
                      " Hospital / Clinic"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-bold text-foreground mt-1", children: profileOpen.hospital })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-label font-semibold uppercase tracking-wide text-muted-foreground mb-2", children: "Patient Reviews" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: profileOpen.reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "bg-card border border-border rounded-xl p-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-label font-semibold", children: r.author }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((si) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Star,
                            {
                              size: 10,
                              style: {
                                color: "oklch(0.72 0.19 85)",
                                fill: si <= r.rating ? "oklch(0.72 0.19 85)" : "transparent"
                              }
                            },
                            si
                          )) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: r.comment })
                      ]
                    },
                    r.author
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    className: "w-full font-label",
                    disabled: profileOpen.availability !== "Available",
                    onClick: () => {
                      setBookOpen(profileOpen);
                      setProfileOpen(null);
                    },
                    children: "Book Consultation"
                  }
                )
              ] }) })
            ]
          }
        )
      }
    )
  ] });
}
function FamilyHealthTab() {
  const [members, setMembers] = reactExports.useState(MOCK_FAMILY_HEALTH);
  const [editOpen, setEditOpen] = reactExports.useState(null);
  const [conditionInput, setConditionInput] = reactExports.useState("");
  const handleSave = () => {
    if (!editOpen) return;
    setMembers((p) => p.map((m) => m.id === editOpen.id ? editOpen : m));
    setEditOpen(null);
    ue.success("Health records updated.");
  };
  const addConditionToEdit = () => {
    if (!conditionInput.trim() || !editOpen) return;
    setEditOpen(
      (p) => p ? {
        ...p,
        medicalConditions: [...p.medicalConditions, conditionInput.trim()]
      } : p
    );
    setConditionInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-display font-bold text-foreground", children: "Family Health Overview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
        members.length,
        " family members · Private records"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-up animate-fade-up-1", children: members.map((member) => {
      const btColor = BLOOD_TYPE_COLORS[member.bloodType] || "oklch(0.55 0.22 280)";
      const relColors = {
        Father: "oklch(0.55 0.22 280)",
        Mother: "oklch(0.65 0.25 335)",
        Son: "oklch(0.52 0.14 155)",
        Daughter: "oklch(0.60 0.20 85)",
        Brother: "oklch(0.48 0.12 260)",
        Sister: "oklch(0.55 0.22 25)"
      };
      const relColor = relColors[member.relationship] || "oklch(0.55 0.22 280)";
      const initials = member.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-2xl p-4 flex flex-col gap-3 shadow-card hover:shadow-card-hover transition-all animate-fade-up",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-11 w-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                AvatarFallback,
                {
                  className: "text-sm font-label font-bold",
                  style: { background: `${relColor}18`, color: relColor },
                  children: initials
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-bold text-foreground truncate", children: member.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "text-[10px] px-1.5 py-0 border-0 font-label",
                      style: { background: `${relColor}15`, color: relColor },
                      children: member.relationship
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    member.age,
                    " yrs"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "flex items-center gap-1 text-xs font-label font-bold px-2.5 py-1 rounded-full",
                style: { background: `${btColor}15`, color: btColor },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { size: 11 }),
                  member.bloodType
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: member.medicalConditions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-label flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CircleCheck,
                {
                  size: 11,
                  style: { color: "oklch(0.52 0.14 155)" }
                }
              ),
              " ",
              "No conditions recorded"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: member.medicalConditions.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[10px] font-label px-2 py-0.5 rounded-full",
                style: {
                  background: "oklch(0.55 0.22 25 / 0.1)",
                  color: "oklch(0.55 0.22 25)"
                },
                children: c
              },
              c
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Dialog,
              {
                open: (editOpen == null ? void 0 : editOpen.id) === member.id,
                onOpenChange: (v) => {
                  if (!v) setEditOpen(null);
                  else {
                    setEditOpen(member);
                    setConditionInput("");
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-7 text-xs font-label w-full gap-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 11 }),
                        " Update Records"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display", children: [
                      "Update Records — ",
                      member.name
                    ] }) }),
                    editOpen && editOpen.id === member.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Medical Conditions" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 mb-3 min-h-[32px]", children: [
                          editOpen.medicalConditions.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: "inline-flex items-center gap-1 text-xs font-label px-2.5 py-1 rounded-full",
                              style: {
                                background: "oklch(0.55 0.22 25 / 0.1)",
                                color: "oklch(0.55 0.22 25)"
                              },
                              children: [
                                c,
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => setEditOpen(
                                      (p) => p ? {
                                        ...p,
                                        medicalConditions: p.medicalConditions.filter(
                                          (x) => x !== c
                                        )
                                      } : p
                                    ),
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11 })
                                  }
                                )
                              ]
                            },
                            c
                          )),
                          editOpen.medicalConditions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: "No conditions" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              className: "h-8 text-xs flex-1",
                              placeholder: "Add condition...",
                              value: conditionInput,
                              onChange: (e) => setConditionInput(e.target.value),
                              onKeyDown: (e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  addConditionToEdit();
                                }
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "sm",
                              className: "h-8 px-3",
                              onClick: addConditionToEdit,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 })
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          className: "w-full font-label",
                          onClick: handleSave,
                          children: "Save Changes"
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          ]
        },
        member.id
      );
    }) })
  ] });
}
function HealthcarePage({ userProfile }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6 animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: "Healthcare" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Your personal health records, appointments, insurance & advisors" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-11 h-11 rounded-xl flex items-center justify-center",
          style: {
            background: "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.2), oklch(0.65 0.25 335 / 0.2))"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { size: 22, style: { color: "oklch(0.55 0.22 280)" } })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between gap-3 mb-5 px-4 py-2.5 rounded-xl border animate-fade-up",
        style: {
          background: "oklch(0.58 0.22 25 / 0.06)",
          borderColor: "oklch(0.58 0.22 25 / 0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 14, style: { color: "oklch(0.58 0.22 25)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground font-medium", children: "Healthcare Jobs Available" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden sm:inline", children: "— Physicians, nurses, admin & more" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs font-label shrink-0",
              onClick: () => ue.info("Navigating to Jobs..."),
              children: "View Jobs"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAddBar, { moduleName: "Healthcare" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 animate-fade-up animate-fade-up-1", children: [
      {
        label: "Active Prescriptions",
        value: "3",
        icon: Pill,
        color: "oklch(0.55 0.22 280)"
      },
      {
        label: "Upcoming Appointments",
        value: "3",
        icon: CalendarDays,
        color: "oklch(0.52 0.14 155)"
      },
      {
        label: "Active Policies",
        value: "1",
        icon: ShieldCheck,
        color: "oklch(0.60 0.20 85)"
      },
      {
        label: "Family Members",
        value: "5",
        icon: Users,
        color: "oklch(0.65 0.25 335)"
      }
    ].map(({ label, value, icon: Icon, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-4 flex items-center gap-3 shadow-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
              style: { background: `${color.replace(")", " / 0.15)")}` },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, style: { color } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-foreground", children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground font-label leading-tight", children: label })
          ] })
        ]
      },
      label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Tabs,
      {
        defaultValue: "records",
        className: "animate-fade-up animate-fade-up-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "w-full sm:w-auto mb-6 flex flex-wrap sm:flex-nowrap h-auto gap-1 bg-secondary/60 p-1", children: [
            { value: "records", label: "Medical Records", icon: Pill },
            {
              value: "appointments",
              label: "Appointments",
              icon: CalendarDays
            },
            { value: "insurance", label: "Insurance", icon: ShieldCheck },
            { value: "advisors", label: "Advisors", icon: Stethoscope },
            { value: "family", label: "Family Health", icon: Users },
            { value: "events", label: "Events", icon: CalendarDays }
          ].map(({ value, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TabsTrigger,
            {
              value,
              className: "flex items-center gap-1.5 text-xs font-label font-medium px-3 py-2 data-[state=active]:bg-card data-[state=active]:shadow-sm flex-shrink-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: label.split(" ")[0] })
              ]
            },
            value
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "records", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MedicalRecordsTab, { userProfile }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "appointments", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentsTab, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "insurance", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InsuranceTab, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "advisors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdvisorsTab, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "family", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FamilyHealthTab, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "events", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EventsTab,
            {
              moduleName: "Healthcare",
              moduleColor: "oklch(0.58 0.22 25)"
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  HealthcarePage as default
};
