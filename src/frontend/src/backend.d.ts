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
export interface Profile {
    id: Principal;
    bio: string;
    occupation: string;
    bloodType: string;
    dateOfBirth: string;
    name: string;
    photoUrl: string;
    isPrivate: boolean;
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
export type Relationship = {
    __kind__: "other";
    other: string;
} | {
    __kind__: "child";
    child: null;
} | {
    __kind__: "sibling";
    sibling: null;
} | {
    __kind__: "spouse";
    spouse: null;
} | {
    __kind__: "parent";
    parent: null;
};
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addFamilyMember(member: FamilyMember): Promise<void>;
    addMarriage(spouse1: Principal, spouse2: Principal, marriageDate: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    followUser(user: Principal): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getFamilyTree(): Promise<Array<FamilyMember>>;
    getFamilyTreeForUser(user: Principal): Promise<Array<FamilyMember>>;
    getFollowers(user: Principal): Promise<Array<Principal>>;
    getProfile(user: Principal): Promise<Profile>;
    getPublicProfiles(): Promise<Array<Profile>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    isFollowing(follower: Principal, followee: Principal): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    unfollowUser(user: Principal): Promise<void>;
}
