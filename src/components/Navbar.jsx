import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menu = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Services", link: "#services" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'glass-nav py-3 shadow-lg' 
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <motion.a
                        href="#home"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-2xl lg:text-3xl font-bold text-gradient hover:opacity-80 transition-opacity duration-300"
                    >
                        AZIZUL<span className="text-primary">.</span>
                    </motion.a>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {menu.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-4 py-2 text-gray-300 hover:text-white font-medium 
                                         transition-colors duration-300 group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r 
                                               from-primary to-accent group-hover:w-full group-hover:left-0 
                                               transition-all duration-300"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* DESKTOP CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 text-gray-300 hover:text-primary font-medium 
                                     transition-colors duration-300"
                        >
                            Let's Talk
                        </motion.a>
                        
                        <motion.a
                            href="/Azizul_Haque_CV.pdf"
                            download
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary btn-glow px-6 py-2.5 rounded-full font-semibold 
                                     flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <i className="fa-solid fa-download text-sm"></i>
                            Download CV
                        </motion.a>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <motion.button
                        onClick={() => setOpen(!open)}
                        whileTap={{ scale: 0.9 }}
                        className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white 
                                 hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                                open ? 'rotate-45 translate-y-1' : '-translate-y-1'
                            }`}></span>
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                                open ? 'opacity-0' : 'opacity-100'
                            }`}></span>
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                                open ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                            }`}></span>
                        </div>
                    </motion.button>
                </div>

                {/* MOBILE MENU */}
                <motion.div
                    initial={false}
                    animate={{ 
                        height: open ? "auto" : 0,
                        opacity: open ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="lg:hidden overflow-hidden"
                >
                    <div className="py-4 space-y-2">
                        {menu.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ 
                                    opacity: open ? 1 : 0, 
                                    x: open ? 0 : -20 
                                }}
                                transition={{ 
                                    delay: open ? index * 0.1 : 0,
                                    duration: 0.3 
                                }}
                                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 
                                         rounded-lg transition-all duration-300 font-medium"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        
                        <div className="pt-4 space-y-3 border-t border-white/10">
                            <motion.a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ 
                                    opacity: open ? 1 : 0, 
                                    y: open ? 0 : 20 
                                }}
                                transition={{ delay: open ? 0.4 : 0 }}
                                className="block px-4 py-3 text-center text-gray-300 hover:text-primary 
                                         font-medium transition-colors duration-300"
                            >
                                Let's Talk
                            </motion.a>
                            
                            <motion.a
                                href="/Azizul_Haque_CV.pdf"
                                download
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ 
                                    opacity: open ? 1 : 0, 
                                    y: open ? 0 : 20 
                                }}
                                transition={{ delay: open ? 0.5 : 0 }}
                                className="btn btn-primary btn-glow w-full py-3 rounded-full font-semibold 
                                         flex items-center justify-center gap-2"
                            >
                                <i className="fa-solid fa-download text-sm"></i>
                                Download CV
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}