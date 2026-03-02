import { Button } from "@/components/ui/button";
import { Globe, Heart, Loader2, TreePine, Users } from "lucide-react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

export default function LoginPage() {
  const { login, isLoggingIn } = useInternetIdentity();

  const features = [
    {
      icon: TreePine,
      label: "Family Tree",
      desc: "Map your ancestry with rich profiles",
    },
    {
      icon: Users,
      label: "Community",
      desc: "Connect with your local neighborhood",
    },
    {
      icon: Heart,
      label: "Social Feed",
      desc: "Share life moments with family",
    },
    {
      icon: Globe,
      label: "Marketplace",
      desc: "Products, services & opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel */}
      <div
        className="hidden lg:flex lg:w-[52%] relative flex-col justify-between p-12 overflow-hidden"
        style={{
          background: "oklch(0.22 0.055 155)",
        }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, oklch(0.78 0.13 65) 0%, transparent 60%), 
                              radial-gradient(circle at 80% 80%, oklch(0.52 0.14 155) 0%, transparent 60%)`,
          }}
        />
        {/* Decorative tree lines */}
        <svg
          className="absolute bottom-0 right-0 opacity-10"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
          role="presentation"
        >
          <title>Decorative family tree</title>
          <circle
            cx="200"
            cy="80"
            r="40"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="2"
          />
          <line
            x1="200"
            y1="120"
            x2="100"
            y2="200"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="1.5"
          />
          <line
            x1="200"
            y1="120"
            x2="300"
            y2="200"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="1.5"
          />
          <circle
            cx="100"
            cy="230"
            r="30"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="2"
          />
          <circle
            cx="300"
            cy="230"
            r="30"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="260"
            x2="50"
            y2="330"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="1.5"
          />
          <line
            x1="100"
            y1="260"
            x2="150"
            y2="330"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="1.5"
          />
          <line
            x1="300"
            y1="260"
            x2="250"
            y2="330"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="1.5"
          />
          <line
            x1="300"
            y1="260"
            x2="350"
            y2="330"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="1.5"
          />
          <circle
            cx="50"
            cy="355"
            r="22"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="1.5"
          />
          <circle
            cx="150"
            cy="355"
            r="22"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="1.5"
          />
          <circle
            cx="250"
            cy="355"
            r="22"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="1.5"
          />
          <circle
            cx="350"
            cy="355"
            r="22"
            stroke="oklch(0.78 0.13 65)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.78 0.13 65)" }}
            >
              <TreePine size={20} style={{ color: "oklch(0.12 0.025 40)" }} />
            </div>
            <span
              className="text-2xl font-display font-semibold"
              style={{ color: "oklch(0.95 0.012 85)" }}
            >
              FamilySocial
            </span>
          </div>
          <p
            className="text-sm font-label"
            style={{ color: "oklch(0.72 0.03 155)" }}
          >
            Your family's digital home
          </p>
        </div>

        {/* Headline */}
        <div className="relative z-10 space-y-6">
          <div>
            <h1
              className="text-5xl font-display font-bold leading-tight"
              style={{ color: "oklch(0.97 0.005 85)" }}
            >
              Every family
              <br />
              <span style={{ color: "oklch(0.78 0.13 65)" }}>has a story.</span>
            </h1>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "oklch(0.75 0.02 155)" }}
            >
              Connect generations, preserve heritage, and build your community —
              all in one place.
            </p>
          </div>

          {/* Feature pills */}
          <div className="grid grid-cols-2 gap-3">
            {features.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-xl p-4"
                style={{ background: "oklch(0.28 0.065 155)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={16} style={{ color: "oklch(0.78 0.13 65)" }} />
                  <span
                    className="text-sm font-label font-semibold"
                    style={{ color: "oklch(0.92 0.015 85)" }}
                  >
                    {label}
                  </span>
                </div>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.65 0.02 155)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom attribution */}
        <div
          className="relative z-10 text-xs"
          style={{ color: "oklch(0.5 0.02 155)" }}
        >
          Built on Internet Computer Protocol • Decentralized & Private
        </div>
      </div>

      {/* Right panel - Login */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.32 0.085 155)" }}
            >
              <TreePine size={20} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-display font-semibold">
              FamilySocial
            </span>
          </div>

          <div className="space-y-2 mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Welcome back
            </h2>
            <p className="text-muted-foreground">
              Sign in to access your family's digital ecosystem
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={login}
              disabled={isLoggingIn}
              className="w-full h-12 text-base font-label font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <title>Internet Identity</title>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Sign in with Internet Identity
                </>
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground font-label tracking-wider">
                  Secure & Decentralized
                </span>
              </div>
            </div>

            <div className="rounded-xl p-4 bg-secondary/80 border border-border space-y-2">
              <p className="text-sm font-label font-semibold text-foreground">
                What is Internet Identity?
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A secure, password-free authentication system built on the
                Internet Computer. Your data stays private and decentralized.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} FamilySocial.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Built with caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
