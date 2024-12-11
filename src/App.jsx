import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreateContact from "./components/createContact";
import EditContact from "./components/editContact";
import ContactList from "./components/contactList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} setContacts={setContacts} />} />
        <Route path="/create-contact" element={<CreateContact setContacts={setContacts} />} />
        <Route path="/edit-contact/:id" element={<EditContact contacts={contacts} setContacts={setContacts} />} />
      </Routes>
    </>
  );
};

export default App;
