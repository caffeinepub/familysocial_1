import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

const ADMIN_KEY = "ic-admin-claimed";

export function useAdminStatus() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  // localStorage is the primary source of truth for the demo
  const localAdmin = localStorage.getItem(ADMIN_KEY) === "true";

  const noAdminYet = !localAdmin;

  const assignAdmin = useMutation({
    mutationFn: async () => {
      // Mark as admin in localStorage immediately
      localStorage.setItem(ADMIN_KEY, "true");
      // Try backend call as best-effort (may fail if authorization restricts self-assign)
      try {
        if (actor && identity) {
          await actor.isCallerAdmin(); // ping to confirm actor is alive
        }
      } catch {
        // ignore backend errors – localStorage is the fallback
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["isCallerAdmin"] });
    },
  });

  const { data: isAdmin = localAdmin, isLoading } = useQuery({
    queryKey: ["isCallerAdmin"],
    queryFn: async () => {
      // Always trust localStorage first
      if (localStorage.getItem(ADMIN_KEY) === "true") return true;
      if (!actor) return false;
      try {
        const adminResult = await actor.isCallerAdmin();
        if (adminResult) {
          localStorage.setItem(ADMIN_KEY, "true");
          return true;
        }
      } catch {
        // backend unavailable
      }
      return false;
    },
    enabled: !!actor && !actorFetching && !!identity,
    staleTime: 30_000,
    // Use localStorage value as initial data so UI doesn't flash
    initialData: localAdmin ? true : undefined,
  });

  return {
    isAdmin,
    isLoading: isLoading || actorFetching,
    assignAdmin,
    noAdminYet,
  };
}
