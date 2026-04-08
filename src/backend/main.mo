import List "mo:core/List";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Order "mo:core/Order";



actor {
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
    #grandparent;
    #grandchild;
    #other;
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

  // Access control state (local, no mixin dependency)
  var adminPrincipal : ?Principal = null;
  let users = Map.empty<Principal, Bool>();

  func isAdmin(caller : Principal) : Bool {
    switch (adminPrincipal) {
      case (null) { false };
      case (?admin) { admin == caller };
    };
  };

  // Persistent Profile & Family Storage
  let profiles = Map.empty<Principal, Profile>();
  let familyTrees = Map.empty<Principal, List.List<FamilyMember>>();
  let marriages = Map.empty<Principal, List.List<Marriage>>();
  let feeds = Map.empty<Principal, SocialData>();

  var nextFamilyMemberId = 0;

  // Admin management
  public shared ({ caller }) func claimAdmin() : async Bool {
    switch (adminPrincipal) {
      case (null) {
        adminPrincipal := ?caller;
        users.add(caller, true);
        true;
      };
      case (?_) { false };
    };
  };

  public query ({ caller = _ }) func isCallerAdmin() : async Bool {
    false // local admin is tracked via localStorage; backend admin state is separate
  };

  // User registration (auto-register on profile save)
  func ensureUser(caller : Principal) {
    if (not users.containsKey(caller)) {
      users.add(caller, true);
    };
  };

  // Profile Data
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
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
    ensureUser(caller);
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
    switch (profiles.get(user)) {
      case (null) { null };
      case (?profile) {
        if (profile.isPrivate and caller != user and not isAdmin(caller)) {
          null;
        } else {
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
  };

  public query (_ : { caller : Principal }) func getPublicProfiles() : async [UserProfile] {
    let allProfiles = profiles.values().toArray().sort(
      func(a : Profile, b : Profile) : Order.Order { Text.compare(a.name, b.name) }
    );
    let filtered = allProfiles.values().filter(func(profile : Profile) : Bool { not profile.isPrivate });
    filtered.map(func(profile : Profile) : UserProfile {
      {
        name = profile.name;
        dateOfBirth = profile.dateOfBirth;
        bloodType = profile.bloodType;
        occupation = profile.occupation;
        bio = profile.bio;
        photoUrl = profile.photoUrl;
        isPrivate = profile.isPrivate;
      }
    }).toArray();
  };

  // Family Tree Data
  public shared ({ caller }) func addFamilyMember(member : FamilyMember) : async () {
    ensureUser(caller);
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
    let tree = switch (familyTrees.get(caller)) {
      case (null) { List.empty<FamilyMember>() };
      case (?existingTree) { existingTree };
    };
    tree.toArray();
  };

  public query ({ caller }) func getFamilyTreeForUser(user : Principal) : async [FamilyMember] {
    if (not isAdmin(caller)) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    let tree = switch (familyTrees.get(user)) {
      case (null) { List.empty<FamilyMember>() };
      case (?existingTree) { existingTree };
    };
    tree.toArray();
  };

  public shared ({ caller }) func addMarriage(spouse1 : Principal, spouse2 : Principal, marriageDate : Text) : async () {
    if (not isAdmin(caller)) {
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
    ensureUser(caller);
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
    switch (feeds.get(caller)) {
      case (null) { () };
      case (?state) {
        state.followers.remove(user);
        feeds.add(caller, state);
      };
    };
  };

  public query ({ caller }) func isFollowing(follower : Principal, followee : Principal) : async Bool {
    switch (feeds.get(follower)) {
      case (null) { false };
      case (?state) { state.followers.containsKey(followee) };
    };
  };

  public query ({ caller }) func getFollowers(user : Principal) : async [Principal] {
    switch (feeds.get(user)) {
      case (null) { [] };
      case (?state) { state.followers.keys().toArray() };
    };
  };
};
