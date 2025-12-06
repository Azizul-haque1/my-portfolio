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
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen w-full flex items-center justify-center bg-base-100 px-6 md:px-16"
        >
            <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* TEXT */}
                <div
                    ref={textRef}
                    className="opacity-0 translate-x-[-60px] flex-1 text-center md:text-left"
                >
                    <p className="text-lg text-secondary mb-1">
                        Hi, I am
                    </p>

                    <h1 className="text-2xl font-semibold text-primary">
                        Azizul Haque
                    </h1>

                    <h2 className="text-5xl md:text-6xl font-extrabold text-secondary mt-2 leading-tight">
                        MERN Stack <br /> Developer
                    </h2>

                    <p className="text-gray-500 mt-6 max-w-lg mx-auto md:mx-0">
                        I am a MERN Stack Developer skilled in building full-stack web
                        applications using MongoDB, Express, React and Node.js.
                    </p>

                    <button className="btn btn-primary mt-8">
                        Hire Me
                    </button>

                    <div className="flex gap-6 text-2xl mt-8 text-secondary justify-center md:justify-start">
                        <i className="fa-brands fa-facebook hover:text-primary transition cursor-pointer"></i>
                        <i className="fa-brands fa-twitter hover:text-primary transition cursor-pointer"></i>
                        <i className="fa-brands fa-github hover:text-primary transition cursor-pointer"></i>
                        <i className="fa-brands fa-linkedin hover:text-primary transition cursor-pointer"></i>
                    </div>
                </div>

                {/* IMAGE */}
                <motion.div
                    ref={imageRef}
                    initial={{ scale: 0.6, opacity: 0 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full 
        border-[10px] border-primary/30 overflow-hidden shadow-xl"
                    >
                        <img
                            src={ahPHoto}
                            alt="Azizul Haque"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>

    );
}
