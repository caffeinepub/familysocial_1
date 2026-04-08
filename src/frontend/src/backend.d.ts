import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface FamilyMember {
    id: bigint;
    occupation: string;
    bloodType: string;
    relationship: Relationship;
    name: string;
    medicalConditions: Array<string>;
    isPublic: boolean;
}
export interface UserProfile {
    bio: string;
    occupation: string;
    bloodType: string;
    dateOfBirth: string;
    name: string;
    photoUrl: string;
    isPrivate: boolean;
}
export enum Relationship {
    grandchild = "grandchild",
    grandparent = "grandparent",
    other = "other",
    child = "child",
    sibling = "sibling",
    spouse = "spouse",
    parent = "parent"
}
export interface backendInterface {
    addFamilyMember(member: FamilyMember): Promise<void>;
    addMarriage(spouse1: Principal, spouse2: Principal, marriageDate: string): Promise<void>;
    claimAdmin(): Promise<boolean>;
    followUser(user: Principal): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getFamilyTree(): Promise<Array<FamilyMember>>;
    getFamilyTreeForUser(user: Principal): Promise<Array<FamilyMember>>;
    getFollowers(user: Principal): Promise<Array<Principal>>;
    getPublicProfiles(): Promise<Array<UserProfile>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    isFollowing(follower: Principal, followee: Principal): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    unfollowUser(user: Principal): Promise<void>;
}
