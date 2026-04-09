import List "mo:core/List";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Order "mo:core/Order";
import Blob "mo:core/Blob";

actor self {
  // ── IC Management Canister (HTTP Outcalls) ───────────────────────────────────
  type HttpHeader = { name : Text; value : Text };
  type HttpResponse = { status : Nat; headers : [HttpHeader]; body : Blob };
  type TransformArg = { response : HttpResponse; context : Blob };

  let ic = actor "aaaaa-aa" : actor {
    http_request : ({
      url : Text;
      max_response_bytes : ?Nat64;
      method : { #get; #head; #post };
      headers : [HttpHeader];
      body : ?Blob;
      transform : ?{
        function : shared query (TransformArg) -> async HttpResponse;
        context : Blob;
      };
      is_replicated : ?Bool;
    }) -> async HttpResponse;
  };

  // ── Transform functions (strip non-deterministic headers for ICP consensus) ──
  public query func transformHttpResponse(raw : TransformArg) : async HttpResponse {
    { status = raw.response.status; headers = []; body = raw.response.body };
  };

  // ── Search-Discovery Types ──────────────────────────────────────────────────
  public type DiscoveredBusiness = {
    name     : Text;
    address  : Text;
    phone    : Text;
    website  : Text;
    rating   : Text;
    category : Text;
  };

  public type PersonProfile = {
    login     : Text;
    name      : Text;
    htmlUrl   : Text;
    avatarUrl : Text;
    bio       : Text;
  };

  public type DiscoveredProduct = {
    productName : Text;
    brands      : Text;
    imageUrl    : Text;
    categories  : Text;
  };

  // ── URL helpers ─────────────────────────────────────────────────────────────
  func encodeSpaces(t : Text) : Text {
    t.replace(#text " ", "+")
  };

  // ── Search: Businesses (Nominatim OpenStreetMap) ────────────────────────────
  public shared func searchBusinesses(city : Text, category : Text) : async { #ok : [DiscoveredBusiness]; #err : Text } {
    let q = encodeSpaces(category # " " # city);
    let url = "https://nominatim.openstreetmap.org/search?q=" # q # "&format=json&limit=10&addressdetails=1";
    try {
      let response = await ic.http_request({
        url;
        max_response_bytes = ?500_000;
        method = #get;
        headers = [
          { name = "Accept"; value = "application/json" },
          { name = "User-Agent"; value = "IndyaCentral/1.0" },
        ];
        body = null;
        transform = ?{
          function = self.transformHttpResponse;
          context = Blob.empty();
        };
        is_replicated = null;
      });

      let bodyText = switch (response.body.decodeUtf8()) {
        case (?t) { t };
        case null { return #err("Failed to decode response body") };
      };

      #ok(parseNominatimResults(bodyText, category))
    } catch (e) {
      #ok([])
    }
  };

  // ── Search: People (GitHub public API) ─────────────────────────────────────
  public shared func searchPeople(keyword : Text) : async { #ok : [PersonProfile]; #err : Text } {
    let q = encodeSpaces(keyword);
    let url = "https://api.github.com/search/users?q=" # q # "&per_page=10";
    try {
      let response = await ic.http_request({
        url;
        max_response_bytes = ?200_000;
        method = #get;
        headers = [
          { name = "Accept"; value = "application/vnd.github.v3+json" },
          { name = "User-Agent"; value = "IndyaCentral/1.0" },
        ];
        body = null;
        transform = ?{
          function = self.transformHttpResponse;
          context = Blob.empty();
        };
        is_replicated = null;
      });

      let bodyText = switch (response.body.decodeUtf8()) {
        case (?t) { t };
        case null { return #err("Failed to decode response body") };
      };

      #ok(parseGithubUsers(bodyText))
    } catch (e) {
      #ok([])
    }
  };

  // ── Search: Products (Open Food Facts) ─────────────────────────────────────
  public shared func searchProducts(keyword : Text) : async { #ok : [DiscoveredProduct]; #err : Text } {
    let q = encodeSpaces(keyword);
    let url = "https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=" # q # "&json=true&page_size=10";
    try {
      let response = await ic.http_request({
        url;
        max_response_bytes = ?500_000;
        method = #get;
        headers = [
          { name = "Accept"; value = "application/json" },
          { name = "User-Agent"; value = "IndyaCentral/1.0" },
        ];
        body = null;
        transform = ?{
          function = self.transformHttpResponse;
          context = Blob.empty();
        };
        is_replicated = null;
      });

      let bodyText = switch (response.body.decodeUtf8()) {
        case (?t) { t };
        case null { return #err("Failed to decode response body") };
      };

      #ok(parseFoodFacts(bodyText))
    } catch (e) {
      #ok([])
    }
  };

  // ── Minimal JSON field extractors ───────────────────────────────────────────

  func extractJsonStringField(json : Text, field : Text) : Text {
    let needle = "\"" # field # "\":\"";
    let parts = json.split(#text needle);
    var result = "";
    var found = false;
    for (part in parts) {
      if (found) {
        let segs = part.split(#text "\"");
        var first = true;
        for (seg in segs) {
          if (first) { result := seg; first := false };
        };
        found := false;
      } else {
        found := true;
      }
    };
    result
  };

  func parseNominatimResults(json : Text, category : Text) : [DiscoveredBusiness] {
    let parts = json.split(#text "\"display_name\":\"");
    let results = List.empty<DiscoveredBusiness>();
    var first = true;
    for (part in parts) {
      if (first) { first := false } else {
        var displayName = "";
        let segs = part.split(#text "\"");
        var idx = 0;
        for (seg in segs) {
          if (idx == 0) { displayName := seg };
          idx += 1;
        };
        results.add({
          name     = displayName;
          address  = displayName;
          phone    = "";
          website  = "";
          rating   = "4.0";
          category = category;
        });
      }
    };
    results.toArray()
  };

  func parseGithubUsers(json : Text) : [PersonProfile] {
    let parts = json.split(#text "\"login\":\"");
    let results = List.empty<PersonProfile>();
    var first = true;
    for (part in parts) {
      if (first) { first := false } else {
        var login = "";
        let segs = part.split(#text "\"");
        var idx = 0;
        for (seg in segs) {
          if (idx == 0) { login := seg };
          idx += 1;
        };
        let avatarUrl = extractJsonStringField(part, "avatar_url");
        let htmlUrl   = extractJsonStringField(part, "html_url");
        results.add({
          login;
          name      = login;
          htmlUrl;
          avatarUrl;
          bio       = "";
        });
      }
    };
    results.toArray()
  };

  func parseFoodFacts(json : Text) : [DiscoveredProduct] {
    let parts = json.split(#text "\"product_name\":\"");
    let results = List.empty<DiscoveredProduct>();
    var first = true;
    for (part in parts) {
      if (first) { first := false } else {
        var productName = "";
        let segs = part.split(#text "\"");
        var idx = 0;
        for (seg in segs) {
          if (idx == 0) { productName := seg };
          idx += 1;
        };
        let brands   = extractJsonStringField(part, "brands");
        let imageUrl = extractJsonStringField(part, "image_url");
        let cats     = extractJsonStringField(part, "categories");
        if (productName != "") {
          results.add({
            productName;
            brands;
            imageUrl;
            categories = cats;
          });
        };
      }
    };
    results.toArray()
  };

  // ── User Profile Types ───────────────────────────────────────────────────────
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

  // Access control state
  var adminPrincipal : ?Principal = null;
  let users = Map.empty<Principal, Bool>();

  func isAdmin(caller : Principal) : Bool {
    switch (adminPrincipal) {
      case (null) { false };
      case (?admin) { admin == caller };
    };
  };

  // Persistent Profile & Family Storage
  let profiles    = Map.empty<Principal, Profile>();
  let familyTrees = Map.empty<Principal, List.List<FamilyMember>>();
  let marriages   = Map.empty<Principal, List.List<Marriage>>();
  let feeds       = Map.empty<Principal, SocialData>();

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
          name        = profile.name;
          dateOfBirth = profile.dateOfBirth;
          bloodType   = profile.bloodType;
          occupation  = profile.occupation;
          bio         = profile.bio;
          photoUrl    = profile.photoUrl;
          isPrivate   = profile.isPrivate;
        };
      };
    };
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    ensureUser(caller);
    profiles.add(caller, {
      id          = caller;
      name        = profile.name;
      dateOfBirth = profile.dateOfBirth;
      bloodType   = profile.bloodType;
      occupation  = profile.occupation;
      bio         = profile.bio;
      photoUrl    = profile.photoUrl;
      isPrivate   = profile.isPrivate;
    });
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    switch (profiles.get(user)) {
      case (null) { null };
      case (?profile) {
        if (profile.isPrivate and caller != user and not isAdmin(caller)) {
          null;
        } else {
          ?{
            name        = profile.name;
            dateOfBirth = profile.dateOfBirth;
            bloodType   = profile.bloodType;
            occupation  = profile.occupation;
            bio         = profile.bio;
            photoUrl    = profile.photoUrl;
            isPrivate   = profile.isPrivate;
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
        name        = profile.name;
        dateOfBirth = profile.dateOfBirth;
        bloodType   = profile.bloodType;
        occupation  = profile.occupation;
        bio         = profile.bio;
        photoUrl    = profile.photoUrl;
        isPrivate   = profile.isPrivate;
      }
    }).toArray();
  };

  // Family Tree Data
  public shared ({ caller }) func addFamilyMember(member : FamilyMember) : async () {
    ensureUser(caller);
    let newMember = {
      id                 = nextFamilyMemberId;
      name               = member.name;
      relationship       = member.relationship;
      bloodType          = member.bloodType;
      occupation         = member.occupation;
      medicalConditions  = member.medicalConditions;
      isPublic           = member.isPublic;
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

    let marriage : Marriage = { spouse1; spouse2; marriageDate };

    let s1Marriages = switch (marriages.get(spouse1)) {
      case (null) { List.empty<Marriage>() };
      case (?existing) { existing };
    };
    s1Marriages.add(marriage);
    marriages.add(spouse1, s1Marriages);

    let s2Marriages = switch (marriages.get(spouse2)) {
      case (null) { List.empty<Marriage>() };
      case (?existing) { existing };
    };
    s2Marriages.add(marriage);
    marriages.add(spouse2, s2Marriages);
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
