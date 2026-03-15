import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import type { UserProfile } from "./backend.d";
import AppShell from "./components/AppShell";
import OnboardingModal from "./components/OnboardingModal";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import { UserLevelProvider } from "./contexts/UserLevelContext";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import { useGetCallerUserProfile } from "./hooks/useQueries";
import LoginPage from "./pages/LoginPage";

export interface EmailUser {
  name: string;
  email: string;
}

// Apply a stored theme from localStorage on startup
function applyStoredTheme() {
  try {
    const stored = localStorage.getItem("indyacentral-theme");
    if (stored) {
      const theme = JSON.parse(stored) as Record<string, string>;
      for (const [key, value] of Object.entries(theme)) {
        document.documentElement.style.setProperty(key, value);
      }
    }
  } catch {
    // ignore parse errors
  }
}

applyStoredTheme();

export default function App() {
  const { identity, isInitializing } = useInternetIdentity();
  const [emailUser, setEmailUser] = useState<EmailUser | null>(() => {
    try {
      const session = localStorage.getItem("indyacentral-email-session");
      return session ? (JSON.parse(session) as EmailUser) : null;
    } catch {
      return null;
    }
  });

  const isAuthenticated = !!identity || !!emailUser;

  const {
    data: userProfile,
    isLoading: profileLoading,
    isFetched,
  } = useGetCallerUserProfile();
  const [currentPage, setCurrentPage] = useState("social-feed");
  const [skippedOnboarding, setSkippedOnboarding] = useState(false);

  // Only show onboarding for Internet Identity users who have no backend profile yet
  const showProfileSetup =
    !!identity &&
    !emailUser &&
    isAuthenticated &&
    !profileLoading &&
    isFetched &&
    userProfile === null &&
    !skippedOnboarding;

  const handleEmailLogin = (user: EmailUser) => {
    setEmailUser(user);
    localStorage.setItem("indyacentral-email-session", JSON.stringify(user));
  };

  // Build a synthetic userProfile for email-only users
  const emailProfile = emailUser
    ? {
        name: emailUser.name,
        occupation: "",
        bio: "",
        bloodType: "",
        dateOfBirth: "",
        photoUrl: "",
        isPrivate: false,
      }
    : null;

  const effectiveProfile = userProfile ?? emailProfile;

  useEffect(() => {
    if (identity && emailUser) {
      setEmailUser(null);
      localStorage.removeItem("indyacentral-email-session");
    }
  }, [identity, emailUser]);

  if (isInitializing || (!!identity && profileLoading && !isFetched)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto animate-pulse">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Loading IndyaCentral"
            >
              <title>Loading IndyaCentral</title>
              <circle cx="14" cy="8" r="4" fill="oklch(var(--primary))" />
              <circle cx="6" cy="20" r="3" fill="oklch(var(--primary) / 0.7)" />
              <circle
                cx="22"
                cy="20"
                r="3"
                fill="oklch(var(--primary) / 0.7)"
              />
              <line
                x1="14"
                y1="12"
                x2="6"
                y2="17"
                stroke="oklch(var(--primary))"
                strokeWidth="1.5"
              />
              <line
                x1="14"
                y1="12"
                x2="22"
                y2="17"
                stroke="oklch(var(--primary))"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-2 w-32 mx-auto" />
            <Skeleton className="h-2 w-24 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <CurrencyProvider>
      <UserLevelProvider>
        <>
          {showProfileSetup && (
            <OnboardingModal onSkip={() => setSkippedOnboarding(true)} />
          )}
          <AppShell
            currentPage={currentPage}
            onNavigate={setCurrentPage}
            userProfile={effectiveProfile as UserProfile | null}
            isAuthenticated={isAuthenticated}
            onEmailLogin={handleEmailLogin}
          />
          <Toaster position="top-right" />
        </>
      </UserLevelProvider>
    </CurrencyProvider>
  );
}
