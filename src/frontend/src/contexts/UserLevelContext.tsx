import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type UserLevel = "Standard" | "Intermediate" | "Advanced";

interface UserLevelContextType {
  level: UserLevel;
  totalVisits: number;
  moduleVisits: Record<string, number>;
  recordVisit: (module: string) => void;
  getSortedModules: (modules: string[]) => string[];
}

const UserLevelContext = createContext<UserLevelContextType | null>(null);

const STORAGE_KEY = "indyacentral-module-visits";

export function UserLevelProvider({ children }: { children: ReactNode }) {
  const [moduleVisits, setModuleVisits] = useState<Record<string, number>>(
    () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    },
  );

  const totalVisits = Object.values(moduleVisits).reduce((a, b) => a + b, 0);

  const level: UserLevel =
    totalVisits >= 50
      ? "Advanced"
      : totalVisits >= 10
        ? "Intermediate"
        : "Standard";

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(moduleVisits));
    } catch {
      // ignore
    }
  }, [moduleVisits]);

  const recordVisit = (module: string) => {
    setModuleVisits((prev) => ({ ...prev, [module]: (prev[module] || 0) + 1 }));
  };

  const getSortedModules = (modules: string[]) => {
    return [...modules].sort(
      (a, b) => (moduleVisits[b] || 0) - (moduleVisits[a] || 0),
    );
  };

  return (
    <UserLevelContext.Provider
      value={{
        level,
        totalVisits,
        moduleVisits,
        recordVisit,
        getSortedModules,
      }}
    >
      {children}
    </UserLevelContext.Provider>
  );
}

export function useUserLevel() {
  const ctx = useContext(UserLevelContext);
  if (!ctx)
    throw new Error("useUserLevel must be used within UserLevelProvider");
  return ctx;
}
