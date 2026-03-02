import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import AppShell from "./components/AppShell";
import OnboardingModal from "./components/OnboardingModal";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import { useGetCallerUserProfile } from "./hooks/useQueries";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const { identity, isInitializing } = useInternetIdentity();
  const isAuthenticated = !!identity;

  const {
    data: userProfile,
    isLoading: profileLoading,
    isFetched,
  } = useGetCallerUserProfile();
  const [currentPage, setCurrentPage] = useState("family-tree");

  const showProfileSetup =
    isAuthenticated && !profileLoading && isFetched && userProfile === null;

  if (isInitializing || (isAuthenticated && profileLoading && !isFetched)) {
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
              aria-label="Loading FamilySocial"
            >
              <title>Loading FamilySocial</title>
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

  if (!isAuthenticated) {
    return (
      <>
        <LoginPage />
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <>
      {showProfileSetup && <OnboardingModal />}
      <AppShell
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        userProfile={userProfile}
      />
      <Toaster position="top-right" />
    </>
  );
}
