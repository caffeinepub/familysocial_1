import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Heart } from "lucide-react";
import { useState } from "react";

const POLICY_CONTENT: Record<string, { title: string; content: string }> = {
  about: {
    title: "About Us",
    content:
      "IndyaCentral is a privacy-first digital super-platform for South Asia, integrating social networking, commerce, community management, education, healthcare, travel, and more. Our mission is to empower every individual and community with tools to connect, grow, and thrive in a digital world that respects privacy and celebrates culture.\n\nFounded with a vision to bridge communities across South Asia, IndyaCentral brings together families, businesses, and professionals on a single, secure platform.\n\nContact: hello@indyacentral.com",
  },
  privacy: {
    title: "Privacy Policy",
    content:
      "Your privacy is our priority. IndyaCentral collects only the data necessary to provide its services. All sensitive personal data is private by default, with granular per-section privacy controls.\n\nWe do not sell your data to third parties. Data is stored securely on the Internet Computer blockchain infrastructure.\n\nYou have the right to request a full export of your data or request deletion at any time from your Settings > Data Requests page.\n\nLast updated: March 2026",
  },
  shipping: {
    title: "Shipping Policy",
    content:
      "Orders placed through IndyaCentral Shop are fulfilled by individual merchants and delivery partners registered on the platform.\n\nDelivery timelines vary by seller and location. Estimated delivery times are shown at checkout. IndyaCentral is not responsible for delays caused by third-party delivery partners or force majeure events.\n\nFor any shipping-related queries, contact the seller directly through the platform messaging system.\n\nLast updated: March 2026",
  },
  returns: {
    title: "Return & Exchange Policy",
    content:
      "Return and exchange policies are set individually by each merchant on the platform. Please review the seller's return policy before placing an order.\n\nGeneral guidelines:\n• Digital services and bookings are non-refundable once rendered\n• Physical products may be returned within 7 days if unopened and undamaged\n• Perishable goods, custom orders, and intimate items are non-returnable\n\nTo initiate a return, contact the seller via the Order Details page in My Account.\n\nLast updated: March 2026",
  },
  contact: {
    title: "Contact Us",
    content:
      "We're here to help! Reach out to us through any of the following channels:\n\n📧 Email: support@indyacentral.com\n📞 Phone: +91 1800-123-4567 (Mon-Sat, 9 AM - 6 PM IST)\n💬 Live Chat: Available via the Support widget at the bottom right\n\nFor business inquiries: business@indyacentral.com\nFor press & media: press@indyacentral.com\n\nAddress: IndyaCentral Technologies Pvt. Ltd., Level 12, Cyber Hub, Gurugram, Haryana 122002, India",
  },
};

interface PolicyModalProps {
  policyKey: string;
  label: string;
}

function PolicyModal({ policyKey, label }: PolicyModalProps) {
  const [open, setOpen] = useState(false);
  const policy = POLICY_CONTENT[policyKey];
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline"
          data-ocid={`footer.${policyKey}.open_modal_button`}
        >
          {label}
        </button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-lg"
        data-ocid={`footer.${policyKey}.dialog`}
      >
        <DialogHeader>
          <DialogTitle className="font-display">{policy.title}</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed mt-2 max-h-96 overflow-y-auto">
          {policy.content}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(false)}
          data-ocid={`footer.${policyKey}.close_button`}
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="shrink-0 border-t border-border"
      style={{ background: "oklch(var(--card))" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
          <PolicyModal policyKey="about" label="About Us" />
          <Separator orientation="vertical" className="h-3 hidden sm:block" />
          <PolicyModal policyKey="privacy" label="Privacy Policy" />
          <Separator orientation="vertical" className="h-3 hidden sm:block" />
          <PolicyModal policyKey="shipping" label="Shipping Policy" />
          <Separator orientation="vertical" className="h-3 hidden sm:block" />
          <PolicyModal policyKey="returns" label="Return & Exchange Policy" />
          <Separator orientation="vertical" className="h-3 hidden sm:block" />
          <PolicyModal policyKey="contact" label="Contact Us" />
        </div>
        <Separator className="my-3" />
        <p className="text-center text-[11px] text-muted-foreground">
          © {year} IndyaCentral. Built with{" "}
          <Heart
            size={10}
            className="inline-block"
            style={{ color: "oklch(0.65 0.25 335)" }}
          />{" "}
          using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors inline-flex items-center gap-0.5"
          >
            caffeine.ai <ExternalLink size={10} className="inline" />
          </a>
        </p>
      </div>
    </footer>
  );
}
