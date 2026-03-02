import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useAdminStatus() {
  const { actor, isFetching: actorFetching } = useActor();

  const { data: isAdmin = false, isLoading } = useQuery({
    queryKey: ["isCallerAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !actorFetching,
    staleTime: 60_000,
  });

  return { isAdmin, isLoading: isLoading || actorFetching };
}
