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

    const contactInfo = [
        {
            icon: "📧",
            label: "Email",
            value: "azizul@example.com",
            link: "mailto:azizul@example.com"
        },
        {
            icon: "📱",
            label: "Phone",
            value: "+880 123 456 789",
            link: "tel:+880123456789"
        },
        {
            icon: "📍",
            label: "Location",
            value: "Dhaka, Bangladesh",
            link: "#"
        }
    ];

    const socialLinks = [
        { icon: "fa-brands fa-github", link: "https://github.com/Azizul-haque1", color: "hover:text-gray-400" },
        { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/azizul-haque1/", color: "hover:text-blue-400" },
        { icon: "fa-brands fa-facebook", link: "https://web.facebook.com/Ah324242", color: "hover:text-blue-500" },
        { icon: "fa-brands fa-twitter", link: "#", color: "hover:text-sky-400" }
    ];

    return (
        <section
            id="contact"
            className="py-20 px-6 md:px-16 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-info/10 to-success/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="glass-card p-8 rounded-3xl max-w-3xl mx-auto">
                        <h2 className="text-6xl font-bold text-gradient mb-6">
                            💬 Let's Connect
                        </h2>
                        <p className="text-gray-300 text-xl leading-relaxed">
                            Ready to bring your ideas to life? Let's collaborate and create something 
                            <span className="text-primary font-semibold"> extraordinary</span> together.
                        </p>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-3xl">
                            <h3 className="text-3xl font-bold text-gradient mb-6">
                                🚀 Ready to Start?
                            </h3>

                            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                                I'm a passionate MERN Stack Developer specializing in creating 
                                <span className="text-primary font-semibold"> fast, scalable, and modern</span> web applications. 
                                Whether you have a startup idea or need to enhance your existing platform, 
                                I'm here to help transform your vision into reality.
                            </p>

                            {/* CONTACT INFO */}
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        className="glass p-4 rounded-xl flex items-center gap-4 hover:glass-button transition-all duration-300 group"
                                    >
                                        <div className="text-2xl group-hover:animate-bounce">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">{item.label}</div>
                                            <div className="text-secondary font-semibold">{item.value}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* SOCIAL MEDIA */}
                            <div className="mt-8">
                                <h4 className="text-xl font-semibold text-secondary mb-4">🌐 Follow Me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`glass p-4 rounded-full text-2xl text-secondary ${social.color} 
                                                     hover:glass-button transition-all duration-300`}
                                        >
                                            <i className={social.icon}></i>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card p-6 rounded-2xl text-center">
                                <div className="text-3xl mb-2">⚡</div>
                                <div className="text-2xl font-bold text-primary">24h</div>
                                <div className="text-sm text-gray-400">Response Time</div>
                            </div>
                            <div className="glass-card p-6 rounded-2xl text-center">
                                <div className="text-3xl mb-2">🎯</div>
                                <div className="text-2xl font-bold text-accent">100%</div>
                                <div className="text-sm text-gray-400">Client Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-card rounded-3xl p-8 md:p-10"
                    >
                        <h3 className="text-3xl font-bold text-gradient mb-8 flex items-center gap-3">
                            ✉️ Send Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* NAME */}
                            <div>
                                <label className="block text-secondary mb-3 font-semibold">
                                    👤 Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full glass p-4 rounded-xl border border-white/10 focus:border-primary/50 
                                             focus:glass-button transition-all duration-300 text-secondary placeholder-gray-400"
                                />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="block text-secondary mb-3 font-semibold">
                                    📧 Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className="w-full glass p-4 rounded-xl border border-white/10 focus:border-primary/50 
                                             focus:glass-button transition-all duration-300 text-secondary placeholder-gray-400"
                                />
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label className="block text-secondary mb-3 font-semibold">
                                    💭 Your Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Tell me about your project, ideas, or how we can work together..."
                                    className="w-full glass p-4 rounded-xl border border-white/10 focus:border-primary/50 
                                             focus:glass-button transition-all duration-300 text-secondary placeholder-gray-400 resize-none"
                                ></textarea>
                            </div>

                            {/* SUBMIT */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full btn btn-primary btn-glow glass-button p-4 rounded-xl text-lg font-semibold 
                                         flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300"
                            >
                                <span>🚀</span>
                                Send Message
                                <span>✨</span>
                            </motion.button>
                        </form>

                        {/* Additional Info */}
                        <div className="mt-8 p-4 glass rounded-xl">
                            <p className="text-sm text-gray-400 text-center">
                                🔒 Your information is secure and will never be shared with third parties.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}