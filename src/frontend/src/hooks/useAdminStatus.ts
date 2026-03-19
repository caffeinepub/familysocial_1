import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserRole } from "../backend.d";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

export function useAdminStatus() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  const noAdminYet = localStorage.getItem("ic-admin-claimed") !== "true";

  const assignAdmin = useMutation({
    mutationFn: async () => {
      if (!actor || !identity) throw new Error("Not available");
      const principal = identity.getPrincipal();
      await actor.assignCallerUserRole(principal, UserRole.admin);
    },
    onSuccess: () => {
      localStorage.setItem("ic-admin-claimed", "true");
      queryClient.invalidateQueries({ queryKey: ["isCallerAdmin"] });
    },
  });

  const { data: isAdmin = false, isLoading } = useQuery({
    queryKey: ["isCallerAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      const adminResult = await actor.isCallerAdmin();
      if (adminResult) {
        localStorage.setItem("ic-admin-claimed", "true");
        return true;
      }
      // Do not auto-assign admin; only explicit claim via assignAdmin mutation
      return adminResult;
    },
    enabled: !!actor && !actorFetching && !!identity,
    staleTime: 60_000,
  });

  return {
    isAdmin,
    isLoading: isLoading || actorFetching,
    assignAdmin,
    noAdminYet,
  };
}
