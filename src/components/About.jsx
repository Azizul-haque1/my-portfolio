import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ahPHoto from '../assets/ahPHoto.jpg'

export default function About() {
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
        );
    }, []);

    const skills = [
        { name: "MongoDB", value: 90 },
        { name: "Express JS", value: 85 },
        { name: "React JS", value: 95 },
        { name: "Node JS", value: 88 },
    ];

    return (
        <section id="about" className="py-20 bg-base-100">
            <div className="container mx-auto px-6 flex md:justify-between flex-col lg:flex-row items-center gap-12">

                {/* Image */}
                <motion.div
                    ref={imageRef}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-shrink-0"
                >
                    <img
                        src={ahPHoto} // replace with your image
                        alt="Azizul Haque"
                        className="w-72 h-72 object-cover rounded-full border-4 border-primary"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <h2 className="text-4xl font-bold text-secondary mb-4">
                        About Me
                    </h2>

                    <p className="text-gray-600 mb-8">
                        I am <span className="text-primary font-semibold">Azizul Haque</span>, a
                        passionate MERN Stack Developer. I specialize in building fast,
                        scalable and clean web applications using MongoDB, Express, React
                        and Node.js. I love solving problems and transforming ideas into
                        real-life applications.
                    </p>

                    {/* Skills */}
                    <div className="space-y-6">
                        {skills.map((skill, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-1">
                                    <span className="font-semibold text-secondary">
                                        {skill.name}
                                    </span>
                                    <span className="text-primary font-semibold">
                                        {skill.value}%
                                    </span>
                                </div>

                                <progress
                                    className="progress progress-primary w-full"
                                    value={skill.value}
                                    max="100"
                                ></progress>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
