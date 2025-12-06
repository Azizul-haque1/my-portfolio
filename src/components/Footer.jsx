import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-secondary text-base-100 pt-16 pb-10 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">

                {/* TOP AREA */}
                <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-base-100/20">

                    {/* BRAND */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-3xl font-extrabold">
                            AZIZUL<span className="text-primary">.</span>
                        </h2>

                        <p className="mt-4 text-base-100/70 max-w-sm">
                            MERN Stack Developer building fast, scalable and modern web
                            applications using MongoDB, Express, React and Node.js.
                        </p>
                    </motion.div>

                    {/* QUICK LINKS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-base-100/70">
                            <li>
                                <a href="#home" className="hover:text-primary transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-primary transition">
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-primary transition">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-primary transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* SOCIAL LINKS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Follow Me
                        </h3>

                        <div className="flex gap-5 text-2xl">
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

                </div>

                {/* BOTTOM TEXT */}
                <div className="mt-8 text-center text-base-100/60 text-sm">
                    © {new Date().getFullYear()} Azizul Haque. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}
