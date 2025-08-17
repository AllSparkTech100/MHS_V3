import { LuSend } from "react-icons/lu";
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function FormData() {
    const [formSet, setFormSet] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const form = useRef();

    const formChange = (e) => {
        setFormSet({ ...formSet, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_REACT_APP_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_REACT_APP_EMAIL_JS_TEMPLATE_ID, form.current,
                import.meta.env.VITE_REACT_APP_EMAIL_JS_PUBLIC_KEY,
            )
            .then(
                () => {
                    alert('SUCCESS!');
                    setFormSet({ name: "", email: "", number: "", message: "" });
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    }

    return (
        <>

            <form ref={form} onSubmit={handleSubmit} >
                {/* FullName */}
                <div className="mb-3 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="name">Full Name</label>
                    <input type="text" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="name"
                        value={formSet.name}
                        onChange={formChange} id="" placeholder="e.g James Richard" required />

                </div>
                {/* Email Address */}
                <div className="mb-3 cols-span-1 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="email">Email </label>
                    <input type="email" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="email"
                        value={formSet.email}
                        onChange={formChange}
                        id="" placeholder="e.g jamesrichard@hotmail.com" required />
                </div>
                {/* Mobile Number */}
                <div className="mb-3 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="number">Mobile Number </label>
                    <input type="phone" className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="number"
                        value={formSet.number}
                        onChange={formChange}
                        id="" placeholder="e.g +234123456788" required />
                </div>
                {/* Category */}

                {/* Textarea for message */}
                <div className="mb-3 flex gap-3 flex-col mt-3">
                    <label className="font-semibold" htmlFor="message">Message </label>
                    <textarea className="p-3 placeholder:text-black/40 outline border-gray-700 outline-1 bg-white focus:outline-orange-500 w-full rounded-md" name="message"
                        value={formSet.message}
                        onChange={formChange}

                        id="" cols="30" rows="10" ></textarea>
                </div>

                <button className="w-full flex items-center justify-center lg:mt-4 mt-7 rounded-md p-2 bg-slate-800 text-white text-center cursor:pointer" >
                    <span className="text-white mr-2"><LuSend size={25} /></span> Submit
                </button >
            </form >
        </>
    );
}

export default FormData;