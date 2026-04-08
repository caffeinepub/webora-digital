import Types "../types/leads";
import List "mo:core/List";
import Time "mo:core/Time";
import Int "mo:core/Int";

module {
  public type Lead = Types.Lead;

  public func addLead(
    leads : List.List<Lead>,
    nextId : Nat,
    name : Text,
    email : Text,
    phone : Text,
    service : Text,
    message : Text,
  ) : Nat {
    let lead : Lead = {
      id = nextId;
      name;
      email;
      phone;
      service;
      message;
      timestamp = Time.now();
    };
    leads.add(lead);
    nextId + 1;
  };

  public func getLeads(leads : List.List<Lead>) : [Lead] {
    let arr = leads.toArray();
    arr.sort(func(a, b) = Int.compare(b.timestamp, a.timestamp));
  };
};
