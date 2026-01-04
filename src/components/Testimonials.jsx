import React from "react";
import { motion } from "framer-motion";

const skills = [
    {
        title: "MERN Stack Development",
        text: "Expert in MongoDB, Express.js, React & Node.js. Building full-stack, scalable and secure applications with modern architecture.",
        icon: "🍃",
        gradient: "from-green-400 to-emerald-500",
        stats: "50+ Projects"
    },
    {
        title: "Frontend Excellence",
        text: "Mastery in React, Tailwind CSS & modern frameworks. Creating responsive, clean & animated interfaces that users love.",
        icon: "💻",
        gradient: "from-blue-400 to-cyan-500",
        stats: "3+ Years"
    },
    {
        title: "Backend & APIs",
        text: "Skilled in REST APIs, Authentication, Authorization & Server-side Logic using Node.js, Express & modern databases.",
        icon: "⚙️",
        gradient: "from-purple-400 to-pink-500",
        stats: "100+ APIs"
    },
    {
        title: "Performance & Optimization",
        text: "Focused on lightning-fast apps, optimized code, SEO best practices and smooth user experiences across all devices.",
        icon: "🚀",
        gradient: "from-orange-400 to-red-500",
        stats: "99% Uptime"
    },
];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Product Manager at TechCorp",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        text: "Azizul delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
        rating: 5,
        company: "TechCorp"
    },
    {
        name: "Michael Chen",
        role: "Startup Founder",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        text: "Working with Azizul was a game-changer for our startup. He built our entire platform from scratch and it's been running flawlessly.",
        rating: 5,
        company: "InnovateLab"
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        text: "The dashboard Azizul created for our marketing team is intuitive and powerful. It has significantly improved our workflow efficiency.",
        rating: 5,
        company: "GrowthCo"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 px-6 md:px-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-info/10 to-success/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* SKILLS SECTION */}
                <div className="mb-20">
                    {/* HEADING */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="glass-card p-8 rounded-3xl max-w-3xl mx-auto">
                            <h2 className="text-6xl font-bold text-gradient mb-6">
                                💪 My Strengths
                            </h2>
                            <p className="text-gray-300 text-xl leading-relaxed">
                                Combining technical expertise with creative problem-solving to deliver 
                                <span className="text-primary font-semibold"> exceptional results</span> that drive business growth.
                            </p>
                        </div>
                    </motion.div>

                    {/* SKILLS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="glass-card rounded-3xl p-8 text-center group relative overflow-hidden"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                
                                {/* Stats Badge */}
                                <div className="absolute top-4 right-4 glass-button px-3 py-1 rounded-full text-xs font-semibold text-primary">
                                    {skill.stats}
                                </div>

                                <div className="relative">
                                    <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">
                                        {skill.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-gradient transition-all duration-300">
                                        {skill.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                        {skill.text}
                                    </p>
                                </div>

                                {/* Hover Effect Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* TESTIMONIALS SECTION */}
                <div>
                    {/* TESTIMONIALS HEADING */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="glass-card p-8 rounded-3xl max-w-3xl mx-auto">
                            <h2 className="text-6xl font-bold text-gradient mb-6">
                                💬 Client Testimonials
                            </h2>
                            <p className="text-gray-300 text-xl leading-relaxed">
                                Don't just take my word for it. Here's what 
                                <span className="text-primary font-semibold"> satisfied clients</span> say about working with me.
                            </p>
                        </div>
                    </motion.div>

                    {/* TESTIMONIALS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="glass-card rounded-3xl p-8 group relative overflow-hidden"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-4xl text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                                    "
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                                    "{testimonial.text}"
                                </p>

                                {/* Client Info */}
                                <div className="flex items-center gap-4">
                                    <div className="glass p-1 rounded-full">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-400">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-xs text-primary font-medium">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Effect Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-accent to-info group-hover:w-full transition-all duration-700"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
