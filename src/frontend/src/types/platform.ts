// ─── Platform types shared across the app ─────────────────────────────────────
// These mirror the backend interface but are defined here since backend.d.ts
// is auto-generated and may not contain all app-level types.

export interface UserProfile {
  name: string;
  bio: string;
  occupation: string;
  bloodType: string;
  dateOfBirth: string;
  photoUrl: string;
  isPrivate: boolean;
}

export type Relationship =
  | { __kind__: "parent" }
  | { __kind__: "child" }
  | { __kind__: "sibling" }
  | { __kind__: "spouse" }
  | { __kind__: "grandparent" }
  | { __kind__: "grandchild" }
  | { __kind__: "other" };

export interface FamilyMember {
  id: bigint;
  name: string;
  occupation: string;
  bloodType: string;
  relationship: Relationship;
  medicalConditions: Array<string>;
  isPublic: boolean;
}
