import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const FEATURE_PREVIEWS: Record<string, string[]> = {
  Healthcare: [
    "Personal medical history & records",
    "Clinic & appointment management",
    "Prescription tracking",
    "Family health overview",
  ],
  "Real Estate": [
    "Property listings for rent and sale",
    "Pricing & commission tracking",
    "NOC & documentation handling",
    "Parking rental system",
  ],
  Education: [
    "Course & curriculum management",
    "Student & teacher records",
    "Multi-branch support",
    "Library & exam management",
  ],
  Travel: [
    "Travel package creation & booking",
    "Tour operator registration",
    "Hotel & transport management",
    "Group & customized tour planning",
  ],
  "Blog & Affiliate": [
    "Write & publish blog posts",
    "Affiliate product integration",
    "Commission tracking dashboard",
    "Referral & performance analytics",
  ],
};

export default function ComingSoonPage({ title, description, Icon }: Props) {
  const features = FEATURE_PREVIEWS[title] || [];

  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: "oklch(var(--primary) / 0.1)" }}
        >
          <Icon size={36} className="text-primary" />
        </div>

        <Badge className="mb-4 font-label bg-accent/20 text-accent-foreground border-0">
          Coming Soon
        </Badge>

        <h1 className="text-3xl font-display font-bold text-foreground mb-3">
          {title}
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {description}
        </p>

        {features.length > 0 && (
          <div className="bg-card border border-border rounded-xl p-5 text-left mb-8 shadow-card">
            <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Planned Features
            </p>
            <ul className="space-y-2">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-sm text-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button variant="outline" className="font-label">
          Get Notified When Ready
        </Button>

        <p className="mt-6 text-xs text-muted-foreground">
          We're building this module to complete the FamilySocial ecosystem.
        </p>
      </div>
    </div>
  );
}
