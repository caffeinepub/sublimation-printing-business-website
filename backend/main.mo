import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    phoneNumber : Text;
    productInterest : ProductCategory;
    message : Text;
  };

  type ProductCategory = {
    #electronics;
    #furniture;
    #appliances;
    #clothing;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phoneNumber : Text, productInterest : ProductCategory, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      email;
      phoneNumber;
      productInterest;
      message;
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getInquiry(index : Nat) : async Inquiry {
    let size = inquiries.size();
    if (index >= size) {
      Runtime.trap("Inquiry does not exist at this index. There are only " # size.toText() # " inquiries in the system.");
    };
    inquiries.at(index);
  };
};
