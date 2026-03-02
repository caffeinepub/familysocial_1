import List "mo:core/List";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Order "mo:core/Order";
import MixinStorage "blob-storage/Mixin";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  include MixinStorage();

  module Profile {
    public func compare(profile1 : Profile, profile2 : Profile) : Order.Order {
      Text.compare(profile1.name, profile2.name);
    };
  };
  public type UserProfile = {
    name : Text;
    dateOfBirth : Text;
    bloodType : Text;
    occupation : Text;
    bio : Text;
    photoUrl : Text;
    isPrivate : Bool;
  };

  type Profile = {
    id : Principal;
    name : Text;
    dateOfBirth : Text;
    bloodType : Text;
    occupation : Text;
    bio : Text;
    photoUrl : Text;
    isPrivate : Bool;
  };

  type Relationship = {
    #parent;
    #sibling;
    #child;
    #spouse;
    #other : Text;
  };

  type FamilyMember = {
    id : Nat;
    name : Text;
    relationship : Relationship;
    bloodType : Text;
    occupation : Text;
    medicalConditions : [Text];
    isPublic : Bool;
  };

  type Marriage = {
    spouse1 : Principal;
    spouse2 : Principal;
    marriageDate : Text;
  };

  type SocialData = {
    followers : Map.Map<Principal, Bool>;
  };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Persistent Profile & Family Storage
  let profiles = Map.empty<Principal, Profile>();
  let familyTrees = Map.empty<Principal, List.List<FamilyMember>>();
  let marriages = Map.empty<Principal, List.List<Marriage>>();
  let feeds = Map.empty<Principal, SocialData>();

  var nextFamilyMemberId = 0;
  var nextMediaItemId = 0;

  // Profile Data
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    switch (profiles.get(caller)) {
      case (null) { null };
      case (?profile) {
        ?{
          name = profile.name;
          dateOfBirth = profile.dateOfBirth;
          bloodType = profile.bloodType;
          occupation = profile.occupation;
          bio = profile.bio;
          photoUrl = profile.photoUrl;
          isPrivate = profile.isPrivate;
        };
      };
    };
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    let newProfile = {
      id = caller;
      name = profile.name;
      dateOfBirth = profile.dateOfBirth;
      bloodType = profile.bloodType;
      occupation = profile.occupation;
      bio = profile.bio;
      photoUrl = profile.photoUrl;
      isPrivate = profile.isPrivate;
    };
    profiles.add(caller, newProfile);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    switch (profiles.get(user)) {
      case (null) { null };
      case (?profile) {
        ?{
          name = profile.name;
          dateOfBirth = profile.dateOfBirth;
          bloodType = profile.bloodType;
          occupation = profile.occupation;
          bio = profile.bio;
          photoUrl = profile.photoUrl;
          isPrivate = profile.isPrivate;
        };
      };
    };
  };

  public query ({ caller }) func getProfile(user : Principal) : async Profile {
    switch (profiles.get(user)) {
      case (null) { Runtime.trap("Profile not found") };
      case (?profile) {
        if (profile.isPrivate and caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Private profile: User does not exist");
        };
        profile;
      };
    };
  };

  public query ({ caller }) func getPublicProfiles() : async [Profile] {
    let allProfiles = profiles.values().toArray().sort();

    let iter = allProfiles.values();
    let publicProfiles = iter.filter(
      func(profile) { not profile.isPrivate }
    );
    publicProfiles.toArray();
  };

  // Family Tree Data
  public shared ({ caller }) func addFamilyMember(member : FamilyMember) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add family members");
    };

    let newMember = {
      id = nextFamilyMemberId;
      name = member.name;
      relationship = member.relationship;
      bloodType = member.bloodType;
      occupation = member.occupation;
      medicalConditions = member.medicalConditions;
      isPublic = member.isPublic;
    };
    nextFamilyMemberId += 1;

    let tree = switch (familyTrees.get(caller)) {
      case (null) { List.empty<FamilyMember>() };
      case (?existingTree) { existingTree };
    };
    tree.add(newMember);
    familyTrees.add(caller, tree);
  };

  public query ({ caller }) func getFamilyTree() : async [FamilyMember] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view family trees");
    };
    let tree = switch (familyTrees.get(caller)) {
      case (null) { List.empty<FamilyMember>() };
      case (?existingTree) { existingTree };
    };
    tree.toArray();
  };

  public query ({ caller }) func getFamilyTreeForUser(user : Principal) : async [FamilyMember] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    let tree = switch (familyTrees.get(user)) {
      case (null) { List.empty<FamilyMember>() };
      case (?existingTree) { existingTree };
    };
    tree.toArray();
  };

  public shared ({ caller }) func addMarriage(spouse1 : Principal, spouse2 : Principal, marriageDate : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };

    let marriage : Marriage = {
      spouse1;
      spouse2;
      marriageDate;
    };

    let spouse1Marriages = switch (marriages.get(spouse1)) {
      case (null) { List.empty<Marriage>() };
      case (?existing) { existing };
    };
    spouse1Marriages.add(marriage);
    marriages.add(spouse1, spouse1Marriages);

    let spouse2Marriages = switch (marriages.get(spouse2)) {
      case (null) { List.empty<Marriage>() };
      case (?existing) { existing };
    };
    spouse2Marriages.add(marriage);
    marriages.add(spouse2, spouse2Marriages);
  };

  // Follows/Followers Data
  public shared ({ caller }) func followUser(user : Principal) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can perform this action");
    };

    let socialState = switch (feeds.get(caller)) {
      case (null) { { followers = Map.empty<Principal, Bool>() } };
      case (?state) { state };
    };

    if (not socialState.followers.containsKey(user)) {
      socialState.followers.add(user, true);
    };

    feeds.add(caller, socialState);
  };

  public shared ({ caller }) func unfollowUser(user : Principal) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can perform this action");
    };

    switch (feeds.get(caller)) {
      case (null) { () };
      case (?state) {
        state.followers.remove(user);
        feeds.add(caller, state);
      };
    };
  };

  public query ({ caller }) func isFollowing(follower : Principal, followee : Principal) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can perform this action");
    };
    switch (feeds.get(follower)) {
      case (null) { false };
      case (?state) { state.followers.containsKey(followee) };
    };
  };

  public query ({ caller }) func getFollowers(user : Principal) : async [Principal] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view followers");
    };
    switch (feeds.get(user)) {
      case (null) { [] };
      case (?state) { state.followers.keys().toArray() };
    };
  };
};
