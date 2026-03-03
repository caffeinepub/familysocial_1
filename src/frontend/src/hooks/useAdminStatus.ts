import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserRole } from "../backend.d";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

export function useAdminStatus() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  const assignAdmin = useMutation({
    mutationFn: async () => {
      if (!actor || !identity) throw new Error("Not available");
      const principal = identity.getPrincipal();
      await actor.assignCallerUserRole(principal, UserRole.admin);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["isCallerAdmin"] });
    },
  });

  const { data: isAdmin = false, isLoading } = useQuery({
    queryKey: ["isCallerAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      const adminResult = await actor.isCallerAdmin();
      if (!adminResult && identity) {
        // Check if there's an existing role — if guest/none, this is first login
        try {
          const role = await actor.getCallerUserRole();
          // If the role is guest (default), this is the first user — assign admin
          if (role === UserRole.guest || role === null || role === undefined) {
            const principal = identity.getPrincipal();
            await actor.assignCallerUserRole(principal, UserRole.admin);
            return true;
          }
        } catch {
          // If getCallerUserRole fails, attempt to assign admin (first login)
          try {
            const principal = identity.getPrincipal();
            await actor.assignCallerUserRole(principal, UserRole.admin);
            return true;
          } catch {
            // Not first user, proceed as regular user
          }
        }
      }
      return adminResult;
    },
    enabled: !!actor && !actorFetching && !!identity,
    staleTime: 60_000,
  });

  return { isAdmin, isLoading: isLoading || actorFetching, assignAdmin };
}
