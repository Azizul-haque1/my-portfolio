import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    const socialLinks = [
        { 
            icon: "fa-brands fa-github", 
            href: "https://github.com/Azizul-haque1", 
            color: "hover:text-gray-300", 
            label: "GitHub"
        },
        { 
            icon: "fa-brands fa-linkedin", 
            href: "https://www.linkedin.com/in/azizul-haque1/", 
            color: "hover:text-blue-400", 
            label: "LinkedIn"
        },
        { 
            icon: "fa-brands fa-facebook", 
            href: "https://web.facebook.com/Ah324242", 
            color: "hover:text-blue-500", 
            label: "Facebook"
        },
        { 
            icon: "fa-brands fa-twitter", 
            href: "#", 
            color: "hover:text-sky-400", 
            label: "Twitter"
        }
    ];

    const services = [
        "Web Development",
        "Mobile Apps", 
        "UI/UX Design",
        "API Development"
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-info/5 to-success/5 rounded-full blur-3xl"></div>
            </div>

            <div className="glass-nav pt-16 pb-8 px-6 md:px-16 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Main Footer Content */}
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">

                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2"
                        >
                            {/* Logo */}
                            <motion.h2 
                                whileHover={{ scale: 1.05 }}
                                className="text-4xl font-extrabold text-gradient mb-4 cursor-pointer"
                            >
                                AZIZUL<span className="text-primary animate-pulse">.</span>
                            </motion.h2>

                            {/* Description */}
                            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                                Passionate MERN Stack Developer crafting exceptional digital experiences with 
                                <span className="text-primary font-semibold"> modern technologies</span> and 
                                <span className="text-accent font-semibold"> innovative solutions</span>.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <span className="text-primary">📧</span>
                                    <a href="mailto:azizul.pea@gmail.com" className="hover:text-primary transition-colors">
                                        azizul.pea@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <span className="text-primary">📱</span>
                                    <a href="tel:+8801886290214" className="hover:text-primary transition-colors">
                                        +880 886 290 214
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <span className="text-primary">📍</span>
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`glass p-3 rounded-full text-xl text-secondary ${social.color} 
                                                 hover:glass-button transition-all duration-300`}
                                        title={social.label}
                                    >
                                        <i className={social.icon}></i>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-gradient mb-6">
                                Quick Links
                            </h3>

                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <motion.li 
                                        key={index} 
                                        whileHover={{ x: 5 }}
                                    >
                                        <a 
                                            href={link.href} 
                                            className="text-gray-300 hover:text-primary transition-all duration-300 
                                                     flex items-center gap-2 group"
                                        >
                                            <i className="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300"></i>
                                            <span>{link.name}</span>
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-bold text-gradient mb-6">
                                Services
                            </h3>

                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <motion.li 
                                        key={index}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-gray-300 hover:text-primary transition-colors duration-300 
                                                       flex items-center gap-2 group cursor-pointer">
                                            <i className="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300"></i>
                                            {service}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.div className="mt-8">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary btn-glow glass-button px-6 py-3 rounded-full font-semibold 
                                             flex items-center gap-2"
                                >
                                    <span>💼</span>
                                    Hire Me
                                </motion.button>
                            </motion.div>

                            {/* Availability Status */}
                            <div className="mt-6 flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm text-green-400 font-medium">Available for Projects</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
                    >
                        {/* Copyright */}
                        <div className="text-gray-300 text-center md:text-left">
                            <p className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                                <span>© {new Date().getFullYear()}</span>
                                <span className="text-primary font-semibold">Azizul Haque</span>
                                <span>•</span>
                                <span>All Rights Reserved</span>
                                <span className="text-red-400 animate-pulse">❤️</span>
                            </p>
                        </div>

                        {/* Built With */}
                        <div className="text-gray-400 text-sm">
                            <p className="flex items-center gap-2 flex-wrap justify-center">
                                <span>Built with</span>
                                <span className="text-cyan-400 font-medium">React</span>
                                <span>+</span>
                                <span className="text-primary font-medium">Tailwind</span>
                                <span>+</span>
                                <span className="text-accent font-medium">Framer Motion</span>
                                <span className="animate-bounce">✨</span>
                            </p>
                        </div>

                        {/* Back to Top */}
                        <motion.a
                            href="#home"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className="glass-button p-3 rounded-full text-primary hover:shadow-lg transition-all duration-300"
                            title="Back to Top"
                        >
                            <i className="fa-solid fa-arrow-up"></i>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}