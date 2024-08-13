import React from "react";
import { useForm } from "react-hook-form";
import "./contact.css";

export default function Contact() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();  // Reset the form after submission if desired
    };

    return (
        <div className="contact">
            <h1 style={{
                color: '#ffa726',
                textAlign: "center",
                fontSize: "50px",
                marginBottom: "30px",
                fontWeight: 'bold'
            }}>Contact</h1>

            <div className='box mx-auto px-10 py-8 bg-slate-500 w-96 flex flex-col items-center justify-center md:box-content'>
                <h2 style={{
                    color: 'white',
                    fontSize: '25px',
                    textAlign: 'start',
                    marginBottom: '20px',
                    alignSelf: "start"
                }}>Let's talk</h2>
                <p style={{
                    color: 'white',
                    fontSize: '15px',
                    textAlign: 'start',
                    marginBottom: '20px'
                }}>
                    If you have any queries or want to know more about me, feel free to contact me.
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formdiv">
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <input {...register('name', { required: true, maxLength: 30 })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message || "Full Name is required"}</p>}
                    </div>

                    <div className="formdiv">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message || "Invalid email address"}</p>}
                    </div>

                    <div className="formdiv">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                        <input {...register("message", { required: true, maxLength: 100 })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message || "Message is required"}</p>}
                    </div>

                    <div style={{  display: "flex", justifyContent: "center", marginTop: "20px" }}>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
