import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useGetInputValues from "../hooks/useGetInputValues";

const CreateContact = ({ setContacts }) => {
    const navigate = useNavigate();
    const { values, handleChange, resetHandler } = useGetInputValues({
        name: "",
        phone: "",
    });
    let idd = 1;
    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            console.log("event", event);

            setContacts((prev) => [
                ...prev,
                { id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1, name: values.name, phone: values.phone },
            ]);
            resetHandler();
            navigate("/");
        },
        [values, resetHandler, setContacts, navigate]
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Create Contact</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={values.name}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={values.phone}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Save
                </button>
            </form>
        </div>
    );
};

export default CreateContact;