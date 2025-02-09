import { LuSend } from "react-icons/lu";
import { useState } from "react";
import { db } from "../../firebase"
import { collection, addDoc } from "firebase/firestore";

function FormData() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Use the collection and addDoc functions for Firestore
            await addDoc(collection(db, "FormData"), {
                name: name,
                email: email,
                number: number,
                message: message,
            });
            alert("Message sent");

            // Clear the form fields

        } catch (error) {
            alert(error.message);
        }
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
    }

    return (
        <>

            <form onSubmit={handleSubmit} >
                {/* FullName */}
                <div className="mb-3 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="name">Full Name</label>
                    <input type="text" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="name" value={name} onChange={(e) => setName(e.target.value)} id="" placeholder="e.g James Richard" required />

                </div>
                {/* Email Address */}
                <div className="mb-3 cols-span-1 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="email">Email </label>
                    <input type="email" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="" placeholder="e.g jamesrichard@hotmail.com" required />
                </div>
                {/* Mobile Number */}
                <div className="mb-3 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="number">Mobile Number </label>
                    <input type="phone" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="number" value={number} onChange={(e) => setNumber(e.target.value)} id="" placeholder="e.g +234123456788" required />
                </div>
                {/* Category */}

                {/* Textarea for message */}
                <div className="mb-3 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="message">Message </label>
                    <textarea className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="message" value={message} onChange={(e) => setMessage(e.target.value)} id="" cols="30" rows="10" ></textarea>
                </div>

                <button className="w-full flex items-center justify-center lg:mt-4 mt-7 rounded-md p-2 bg-slate-800 text-white text-center cursor:pointer" >
                    <span className="text-white mr-2"><LuSend size={25} /></span> Submit
                </button >
            </form >
        </>
    );
}

export default FormData