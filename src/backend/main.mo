import Types "types/leads";
import LeadsMixin "mixins/leads-api";
import List "mo:core/List";

actor {
  let leads = List.empty<Types.Lead>();

  include LeadsMixin(leads);
};
