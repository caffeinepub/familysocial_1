import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { FamilyMember, UserProfile } from "../backend.d";
import { useActor } from "./useActor";

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ["currentUserProfile"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error("Actor not available");
      await actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUserProfile"] });
    },
  });
}

export function useGetFamilyTree() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<FamilyMember[]>({
    queryKey: ["familyTree"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFamilyTree();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useAddFamilyMember() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (member: FamilyMember) => {
      if (!actor) throw new Error("Actor not available");
      await actor.addFamilyMember(member);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["familyTree"] });
    },
  });
}

export function useGetPublicProfiles() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ["publicProfiles"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPublicProfiles();
    },
    enabled: !!actor && !actorFetching,
  });
}
