import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // connect to backend later

        alert("Message sent successfully 🚀");

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section
            id="contact"
            className="bg-base-100 py-20 px-6 md:px-16"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-primary font-medium mb-2">Contact Me</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
                        Let’s Work Together
                    </h2>

                    <p className="text-gray-500 mb-8 max-w-md">
                        I’m a MERN Stack Developer ready to build fast, scalable, and
                        modern web applications. If you have a project in mind,
                        feel free to reach out.
                    </p>

                    {/* CONTACT INFO */}
                    <div className="space-y-4 text-secondary text-lg">
                        <p>
                            <i className="fa-solid fa-envelope text-primary mr-3"></i>
                            azizul@example.com
                        </p>
                        <p>
                            <i className="fa-solid fa-location-dot text-primary mr-3"></i>
                            Bangladesh
                        </p>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className="flex gap-6 mt-8 text-2xl text-secondary">
                        <a
                            href="#"
                            className="hover:text-primary transition"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition"
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT FORM */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-secondary/10"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-secondary mb-6">
                        Send me a message
                    </h3>

                    {/* NAME */}
                    <div className="mb-5">
                        <label className="block text-secondary mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="mb-5">
                        <label className="block text-secondary mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* MESSAGE */}
                    <div className="mb-6">
                        <label className="block text-secondary mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Tell me about your project..."
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    {/* SUBMIT */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        type="submit"
                        className="btn btn-primary w-full text-lg"
                    >
                        Send Message 🚀
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
