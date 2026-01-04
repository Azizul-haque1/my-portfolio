import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ahPHoto from "../assets/ahPHoto.jpg";

export default function Hero() {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.to(imageRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out"
        });

        gsap.to(textRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.2,
            ease: "power3.out"
        });

        // Animate floating particles
        gsap.to(".particle", {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.2
        });
    }, []);

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

    const techStack = ["React", "Node.js", "MongoDB", "Express"];

    return (
        <section
            id="home"
            className="min-h-screen w-full flex items-center justify-center px-6 md:px-16 relative overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-info/15 to-success/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-2 h-2 bg-primary/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>
            
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Side - Text Content */}
                <div
                    ref={textRef}
                    className="opacity-0 translate-x-[-60px] space-y-8"
                >
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-12 h-12 glass-button rounded-full flex items-center justify-center animate-bounce">
                            👋
                        </div>
                        <span className="text-xl text-gray-300 font-medium">Hello, I'm</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="text-4xl lg:text-6xl font-bold text-primary mb-4"
                    >
                        Azizul Haque
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8"
                    >
                        <span className="text-gradient">Full Stack</span>
                        <br />
                        <span className="text-gradient-alt">Developer</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
                    >
                        I craft exceptional digital experiences using the 
                        <span className="text-primary font-semibold"> MERN stack</span>, 
                        transforming innovative ideas into powerful, scalable web applications 
                        that drive business growth and user engagement.
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        className="flex flex-wrap gap-4 mb-8"
                    >
                        {techStack.map((tech, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="glass px-4 py-2 rounded-full font-semibold text-primary hover:glass-button transition-all duration-300"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 mb-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary btn-glow glass-button px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 group"
                        >
                            <span className="group-hover:animate-bounce">💼</span>
                            Hire Me Now
                            <span className="group-hover:animate-pulse">✨</span>
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline glass px-8 py-4 rounded-full text-lg font-semibold hover:glass-button flex items-center gap-3 group"
                        >
                            <span className="group-hover:animate-bounce">🚀</span>
                            View Projects
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7, duration: 0.6 }}
                        className="flex gap-4"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`glass p-4 rounded-full text-2xl text-secondary ${social.color} 
                                         hover:glass-button transition-all duration-300 group relative`}
                                title={social.label}
                            >
                                <i className={social.icon}></i>
                                
                                {/* Tooltip */}
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                                              glass px-3 py-1 rounded-lg text-sm font-medium opacity-0 
                                              group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    {social.label}
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.9, duration: 0.6 }}
                        className="flex gap-8 text-center"
                    >
                        <div>
                            <div className="text-3xl font-bold text-primary">50+</div>
                            <div className="text-sm text-gray-400">Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent">3+</div>
                            <div className="text-sm text-gray-400">Years</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-success">100%</div>
                            <div className="text-sm text-gray-400">Success</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Profile Image */}
                <motion.div
                    ref={imageRef}
                    initial={{ scale: 0.6, opacity: 0 }}
                    className="flex justify-center relative"
                >
                    <div className="relative">
                        {/* Animated Background Rings */}
                        <div className="absolute inset-0 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute inset-4 bg-gradient-to-r from-info/15 to-success/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                            <div className="absolute inset-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
                        </div>
                        
                        {/* Main Image Container */}
                        <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] glass-card p-3 rounded-full floating">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary via-accent to-info relative">
                                <img
                                    src={ahPHoto}
                                    alt="Azizul Haque - Full Stack Developer"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-8 -right-8 glass-button p-4 rounded-full"
                        >
                            <span className="text-2xl">💻</span>
                        </motion.div>
                        
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-8 -left-8 glass-button p-4 rounded-full"
                        >
                            <span className="text-2xl">🚀</span>
                        </motion.div>
                        
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 -left-12 glass-button p-3 rounded-full"
                        >
                            <span className="text-xl">⚛️</span>
                        </motion.div>
                        
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-3/4 -right-12 glass-button p-3 rounded-full"
                        >
                            <span className="text-xl">🟢</span>
                        </motion.div>

                        {/* Status Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 glass-button px-4 py-2 rounded-full">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold text-green-400">Available for Work</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="glass p-3 rounded-full cursor-pointer hover:glass-button transition-all duration-300"
                >
                    <i className="fa-solid fa-chevron-down text-primary text-xl"></i>
                </motion.div>
            </motion.div>
        </section>
    );
}
