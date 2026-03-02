import { AlertTriangle, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function AgentConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show banner ~30% of the time on mount
    if (Math.random() < 0.3) {
      setVisible(true);
    }
  }, []);

  if (!visible || dismissed) return null;

  if (accepted) {
    return (
      <div
        className="mx-4 mt-3 mb-0 px-4 py-2.5 rounded-lg flex items-center gap-2 text-xs font-label"
        style={{
          background: "oklch(0.52 0.14 155 / 0.12)",
          color: "oklch(0.35 0.10 155)",
        }}
      >
        ✓ Data update applied successfully. Your profile has been updated.
      </div>
    );
  }

  return (
    <div
      className="mx-4 mt-3 mb-0 px-4 py-3 rounded-lg flex items-start gap-3"
      style={{
        background: "oklch(0.72 0.17 85 / 0.12)",
        border: "1px solid oklch(0.72 0.17 85 / 0.3)",
      }}
    >
      <AlertTriangle
        size={16}
        className="shrink-0 mt-0.5"
        style={{ color: "oklch(0.50 0.14 65)" }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-xs font-label text-foreground">
          <span
            className="font-semibold"
            style={{ color: "oklch(0.50 0.14 65)" }}
          >
            Agent 3 found a potential update to your data:
          </span>{" "}
          occupation may be updated from{" "}
          <span
            className="font-mono text-[11px] px-1 py-0.5 rounded"
            style={{ background: "oklch(0.72 0.17 85 / 0.2)" }}
          >
            &apos;Engineer&apos;
          </span>{" "}
          to{" "}
          <span
            className="font-mono text-[11px] px-1 py-0.5 rounded"
            style={{ background: "oklch(0.52 0.14 155 / 0.15)" }}
          >
            &apos;Senior Software Engineer&apos;
          </span>{" "}
          based on LinkedIn data sync.{" "}
          <span className="text-muted-foreground">Review this change?</span>
        </p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          onClick={() => setAccepted(true)}
          className="text-[11px] font-label font-semibold px-3 py-1.5 rounded-lg text-white transition-opacity hover:opacity-90"
          style={{ background: "oklch(0.52 0.14 155)" }}
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="p-1.5 rounded-lg hover:bg-black/5 transition-colors text-muted-foreground hover:text-foreground"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
