import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { FamilyMember, UserProfile } from "../types/platform";

export function useGetCallerUserProfile() {
  const { actor: _actor, isFetching: actorFetching } = useActor(createActor);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actor = _actor as any;

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { actor: _actor } = useActor(createActor);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actor = _actor as any;
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
  const { actor: _actor, isFetching: actorFetching } = useActor(createActor);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actor = _actor as any;

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { actor: _actor } = useActor(createActor);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actor = _actor as any;
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
  const { actor: _actor, isFetching: actorFetching } = useActor(createActor);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actor = _actor as any;

  return useQuery({
    queryKey: ["publicProfiles"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPublicProfiles();
    },
    enabled: !!actor && !actorFetching,
  });
}
