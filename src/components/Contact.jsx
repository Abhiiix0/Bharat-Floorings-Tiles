import { ABOUT_CONTACTS } from "../../utils";
import React from "react";
import ContactDropDown from "./ContactDropDown";

const Contact = () => {
  return (
    <section className="bg-green-500 py-6 px-10 flex">
      <div className="bg-white 2xl:py-16 xl:py-14 xl:px-8 2xl:px-10 lg:py-10 lg:px-6 py-8 px-5 rounded-xl">
        {ABOUT_CONTACTS.map((res) => (
          <ContactDropDown
            key={res.id}
            location={res.location}
            city={res.city}
            address={res.address}
            pincode={res.pincode}
            dealerName={res.dealerName}
            contact={res.contact}
            mailId={res.mailId}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
