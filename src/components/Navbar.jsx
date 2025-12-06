import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const menu = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Services", link: "#services" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <div className="w-full bg-base-100/90 backdrop-blur-lg sticky top-0 z-50  border-b border-secondary/10 ">
            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="navbar w-10/12 mx-auto   px-6 md:px-16 py-4"
            >

                {/* LOGO */}
                <div className="flex-1">
                    <a
                        href="#home"
                        className="text-2xl font-extrabold tracking-wide text-secondary"
                    >
                        AZIZUL<span className="text-primary">.</span>
                    </a>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-10 text-secondary font-medium">
                    {menu.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="relative hover:text-primary transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* BUTTON */}
                <div className="hidden md:block ml-6">
                    <a
                        href="/Azizul_Haque_CV.pdf"
                        download
                        className="btn btn-primary btn-sm rounded-full"
                    >
                        Download CV
                    </a>
                </div>

                {/* MOBILE MENU ICON */}
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        className="btn btn-ghost text-secondary"
                    >
                        {open ? (
                            <i className="fa-solid fa-xmark text-2xl"></i>
                        ) : (
                            <i className="fa-solid fa-bars text-2xl"></i>
                        )}
                    </button>
                </div>

                {/* ✅ MOBILE MENU */}
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="absolute top-full left-0 w-full bg-base-100 shadow-lg md:hidden"
                    >
                        <div className="flex flex-col gap-6 p-6 text-secondary text-lg">
                            {menu.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    onClick={() => setOpen(false)}
                                    className="hover:text-primary transition"
                                >
                                    {item.name}
                                </a>
                            ))}

                            <a
                                href="/Azizul_Haque_CV.pdf"
                                download
                                className="btn btn-primary w-full mt-4"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}



            </motion.div>

        </div>
    );
}
