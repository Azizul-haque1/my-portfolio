import React from "react";
import { motion } from "framer-motion";

const skills = [
    {
        title: "MERN Stack Development",
        text: "Expert in MongoDB, Express.js, React & Node.js. Able to build full-stack, scalable and secure applications.",
        icon: "🍃",
    },
    {
        title: "Frontend Excellence",
        text: "Strong in React, Tailwind CSS & DaisyUI. I build modern, responsive, clean & animated interfaces.",
        icon: "💻",
    },
    {
        title: "Backend & APIs",
        text: "Skilled in REST APIs, Authentication, Authorization & Server-side Logic using Node.js & Express.",
        icon: "⚙️",
    },
    {
        title: "Performance & Optimization",
        text: "Focused on fast-loading apps, optimized code and smooth user experiences.",
        icon: "🚀",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-base-100 py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <div className="text-center mb-16">
                    <motion.p
                        className="text-lg text-primary font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        My Strengths
                    </motion.p>

                    <motion.h2
                        className="text-4xl md:text-5xl font-extrabold text-secondary mt-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        What I Bring To The Table
                    </motion.h2>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-md border border-secondary/10 p-6 text-center hover:shadow-xl transition-all"
                        >
                            <div className="text-5xl mb-4">{skill.icon}</div>

                            <h3 className="text-xl font-bold text-secondary mb-3">
                                {skill.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {skill.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
