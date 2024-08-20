import React from "react";
import { useForm } from "react-hook-form";
import "./contact.css";
import LocMaps from "./Maps/maps";

export default function Contact() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();  // Reset the form after submission if desired
    };

    return (
        <div className="contact p-4 sm:p-8 lg:p-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-orange-500 mb-8">
                Contact
            </h1>

            <div className="box mx-auto px-6 sm:px-10 py-8 bg-slate-500 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center justify-center md:box-content rounded-lg shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-left mb-6">
                    Let's talk
                </h2>
                <p className="text-base sm:text-lg text-white text-left mb-6">
                    If you have any queries or want to know more about me, feel free to contact me.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="formdiv mb-4">
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-100">
                            Full Name
                        </label>
                        <input {...register('name', { required: true, maxLength: 30 })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message || "Full Name is required"}</p>}
                    </div>

                    <div className="formdiv mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100">
                            Email
                        </label>
                        <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message || "Invalid email address"}</p>}
                    </div>

                    <div className="formdiv mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-100">
                            Message
                        </label>
                        <input {...register("message", { required: true, maxLength: 100 })} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message || "Message is required"}</p>}
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

           
        </div>
    );
}
