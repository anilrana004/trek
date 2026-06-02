module {
  // Cross-cutting scalar aliases
  public type TrekSlug      = Text; // URL slug
  public type UserId        = Principal;
  public type SubmissionId  = Nat;
  public type Timestamp     = Int; // nanoseconds since epoch (Time.now())
};
