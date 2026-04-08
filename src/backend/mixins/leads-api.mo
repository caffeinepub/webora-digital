import Types "../types/leads";
import LeadsLib "../lib/leads";
import List "mo:core/List";

mixin (leads : List.List<Types.Lead>) {
  var nextLeadId : Nat = 0;

  public func addLead(
    name : Text,
    email : Text,
    phone : Text,
    service : Text,
    message : Text,
  ) : async () {
    nextLeadId := LeadsLib.addLead(leads, nextLeadId, name, email, phone, service, message);
  };

  public query func getLeads() : async [Types.Lead] {
    LeadsLib.getLeads(leads);
  };
};
