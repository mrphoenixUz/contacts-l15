import React from "react";
import { Link } from "react-router-dom";

const ContactRow = React.memo(({ contact, handleDelete }) => {
    return (
        <tr className="hover:bg-gray-100">
            <td className="border px-4 py-2">{contact.id}</td>
            <td className="border px-4 py-2">{contact.name}</td>
            <td className="border px-4 py-2">{contact.phone}</td>
            <td className="border px-4 py-2 flex gap-2">
                <Link to={`/edit-contact/${contact.id}`}>
                    <button className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
                </Link>
                <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(contact.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
});

export default ContactRow;