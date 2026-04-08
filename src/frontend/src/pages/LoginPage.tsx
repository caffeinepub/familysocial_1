import { Button } from "@/components/ui/button";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Globe, Heart, Loader2, TreePine, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { EmailUser } from "../App";

interface Props {
  onEmailLogin: (user: EmailUser) => void;
}

interface StoredUser {
  name: string;
  email: string;
  passwordHash: string;
}

function getStoredUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem("indyacentral-users");
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function saveStoredUsers(users: StoredUser[]) {
  localStorage.setItem("indyacentral-users", JSON.stringify(users));
}

export default function LoginPage({ onEmailLogin }: Props) {
  const { login, isLoggingIn } = useInternetIdentity();
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  // Sign In form state
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInError, setSignInError] = useState("");

  // Sign Up form state
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirm, setSignUpConfirm] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setSignInError("");
    if (!signInEmail || !signInPassword) {
      setSignInError("Please enter your email and password.");
      return;
    }
    const users = getStoredUsers();
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === signInEmail.toLowerCase() &&
        u.passwordHash === btoa(signInPassword),
    );
    if (!found) {
      setSignInError("Incorrect email or password.");
      return;
    }
    toast.success(`Welcome back, ${found.name}!`);
    onEmailLogin({ name: found.name, email: found.email });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setSignUpError("");
    if (!signUpName || !signUpEmail || !signUpPassword || !signUpConfirm) {
      setSignUpError("All fields are required.");
      return;
    }
    if (signUpPassword !== signUpConfirm) {
      setSignUpError("Passwords do not match.");
      return;
    }
    if (signUpPassword.length < 6) {
      setSignUpError("Password must be at least 6 characters.");
      return;
    }
    const users = getStoredUsers();
    if (
      users.some((u) => u.email.toLowerCase() === signUpEmail.toLowerCase())
    ) {
      setSignUpError("An account with this email already exists.");
      return;
    }
    const newUser: StoredUser = {
      name: signUpName,
      email: signUpEmail,
      passwordHash: btoa(signUpPassword),
    };
    saveStoredUsers([...users, newUser]);
    toast.success(`Account created! Welcome, ${signUpName}!`);
    onEmailLogin({ name: signUpName, email: signUpEmail });
  };

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
              IndyaCentral
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
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16 overflow-y-auto">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.32 0.085 155)" }}
            >
              <TreePine size={20} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-display font-semibold">
              IndyaCentral
            </span>
          </div>

          {/* Welcome headline */}
          <div className="space-y-1 mb-8">
            <p className="text-base font-label text-muted-foreground font-medium">
              Welcome to
            </p>
            <h2 className="text-4xl font-display font-bold text-foreground leading-none">
              IndyaCentral
            </h2>
            <p className="text-sm text-muted-foreground pt-1">
              Sign in to access your family's digital ecosystem
            </p>
          </div>

          <div className="space-y-4">
            {/* Internet Identity button */}
            <Button
              data-ocid="login.primary_button"
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

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground font-label tracking-wider">
                  or continue with email
                </span>
              </div>
            </div>

            {/* Email/Password form */}
            {mode === "signin" ? (
              <form
                onSubmit={handleSignIn}
                className="space-y-3"
                data-ocid="login.modal"
              >
                <div>
                  <label
                    htmlFor="signin-email"
                    className="text-xs font-label font-medium text-foreground mb-1 block"
                  >
                    Email
                  </label>
                  <input
                    id="signin-email"
                    data-ocid="login.input"
                    type="email"
                    autoComplete="email"
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="signin-password"
                    className="text-xs font-label font-medium text-foreground mb-1 block"
                  >
                    Password
                  </label>
                  <input
                    id="signin-password"
                    data-ocid="login.input"
                    type="password"
                    autoComplete="current-password"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
                {signInError && (
                  <p
                    data-ocid="login.error_state"
                    className="text-xs text-destructive font-label"
                  >
                    {signInError}
                  </p>
                )}
                <Button
                  type="submit"
                  data-ocid="login.submit_button"
                  className="w-full h-10 font-label font-semibold"
                >
                  Sign In
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    data-ocid="login.toggle"
                    onClick={() => {
                      setMode("signup");
                      setSignInError("");
                    }}
                    className="text-primary font-semibold hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </form>
            ) : (
              <form
                onSubmit={handleSignUp}
                className="space-y-3"
                data-ocid="signup.modal"
              >
                <div>
                  <label
                    htmlFor="signup-name"
                    className="text-xs font-label font-medium text-foreground mb-1 block"
                  >
                    Full Name
                  </label>
                  <input
                    id="signup-name"
                    data-ocid="signup.input"
                    type="text"
                    autoComplete="name"
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="signup-email"
                    className="text-xs font-label font-medium text-foreground mb-1 block"
                  >
                    Email
                  </label>
                  <input
                    id="signup-email"
                    data-ocid="signup.input"
                    type="email"
                    autoComplete="email"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="signup-password"
                    className="text-xs font-label font-medium text-foreground mb-1 block"
                  >
                    Password
                  </label>
                  <input
                    id="signup-password"
                    data-ocid="signup.input"
                    type="password"
                    autoComplete="new-password"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="signup-confirm"
                    className="text-xs font-label font-medium text-foreground mb-1 block"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="signup-confirm"
                    data-ocid="signup.input"
                    type="password"
                    autoComplete="new-password"
                    value={signUpConfirm}
                    onChange={(e) => setSignUpConfirm(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
                {signUpError && (
                  <p
                    data-ocid="signup.error_state"
                    className="text-xs text-destructive font-label"
                  >
                    {signUpError}
                  </p>
                )}
                <Button
                  type="submit"
                  data-ocid="signup.submit_button"
                  className="w-full h-10 font-label font-semibold"
                >
                  Create Account
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    type="button"
                    data-ocid="signup.toggle"
                    onClick={() => {
                      setMode("signin");
                      setSignUpError("");
                    }}
                    className="text-primary font-semibold hover:underline"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            )}

            {/* What is Internet Identity */}
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
            © {new Date().getFullYear()} IndyaCentral.{" "}
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
