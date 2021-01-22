import React from "react";
import contacts from "../contacts";
import { Link } from "react-router-dom";

const AllContacts = () => {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.map((contact) => {
        return (
          <div>
            <Link to={`/contact/${contact.id}`}>
              {contact.name} {contact.lastname}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllContacts;
