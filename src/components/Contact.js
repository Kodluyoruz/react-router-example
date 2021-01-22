import React from "react";
import contacts from "../contacts";

const Contact = ({ match }) => {
  console.log(match);
  const contact = contacts.find((contact) => contact.id == match.params.id);
  return (
    <div>
      <h2>Contacts</h2>
      <div>
        <p>{`${contact.name} is ${contact.age} years old.`}</p>
      </div>
    </div>
  );
};

export default Contact;
