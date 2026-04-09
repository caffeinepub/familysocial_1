import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface UserProfile {
    bio: string;
    occupation: string;
    bloodType: string;
    dateOfBirth: string;
    name: string;
    photoUrl: string;
    isPrivate: boolean;
}
export interface TransformArg {
    context: Uint8Array;
    response: HttpResponse;
}
export interface HttpResponse {
    status: bigint;
    body: Uint8Array;
    headers: Array<HttpHeader>;
}
export interface DiscoveredProduct {
    categories: string;
    brands: string;
    productName: string;
    imageUrl: string;
}
export interface FamilyMember {
    id: bigint;
    occupation: string;
    bloodType: string;
    relationship: Relationship;
    name: string;
    medicalConditions: Array<string>;
    isPublic: boolean;
}
export interface DiscoveredBusiness {
    name: string;
    website: string;
    address: string;
    category: string;
    rating: string;
    phone: string;
}
export interface HttpHeader {
    value: string;
    name: string;
}
export interface PersonProfile {
    bio: string;
    name: string;
    htmlUrl: string;
    login: string;
    avatarUrl: string;
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
    searchBusinesses(city: string, category: string): Promise<{
        __kind__: "ok";
        ok: Array<DiscoveredBusiness>;
    } | {
        __kind__: "err";
        err: string;
    }>;
    searchPeople(keyword: string): Promise<{
        __kind__: "ok";
        ok: Array<PersonProfile>;
    } | {
        __kind__: "err";
        err: string;
    }>;
    searchProducts(keyword: string): Promise<{
        __kind__: "ok";
        ok: Array<DiscoveredProduct>;
    } | {
        __kind__: "err";
        err: string;
    }>;
    transformHttpResponse(raw: TransformArg): Promise<HttpResponse>;
    unfollowUser(user: Principal): Promise<void>;
}
