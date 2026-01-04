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
        { name: "Frontend Development", level: "Expert", technologies: ["React", "Next.js", "TypeScript", "Tailwind"] },
        { name: "Backend Development", level: "Advanced", technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
        { name: "DevOps & Cloud", level: "Intermediate", technologies: ["AWS", "Docker", "CI/CD", "Vercel"] },
        { name: "Mobile Development", level: "Intermediate", technologies: ["React Native", "Expo", "Flutter"] }
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-info/5 to-success/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Hero Section */}
                <div className="grid lg:grid-cols-5 gap-16 items-center mb-24">
                    
                    {/* Left Content - 3 columns */}
                    <div className="lg:col-span-3 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                                👋 Nice to meet you
                            </div>
                            
                            <h2 className="text-5xl lg:text-7xl font-bold mb-6">
                                I'm <span className="text-gradient">Azizul</span>
                            </h2>
                            
                            <p className="text-2xl text-gray-400 mb-8 leading-relaxed">
                                A passionate <span className="text-primary font-semibold">Full Stack Developer</span> who 
                                loves creating digital experiences that make a difference.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-3 gap-8"
                        >
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                                <div className="text-gray-400 text-sm">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent mb-2">3+</div>
                                <div className="text-gray-400 text-sm">Years</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-success mb-2">100%</div>
                                <div className="text-gray-400 text-sm">Success</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary px-8 py-3 rounded-full font-semibold"
                            >
                                Let's Work Together
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-outline px-8 py-3 rounded-full font-semibold"
                            >
                                Download CV
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Image - 2 columns */}
                    <div className="lg:col-span-2">
                        <motion.div
                            ref={imageRef}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
                                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={ahPHoto}
                                        alt="Azizul Haque"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* About Story */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <h3 className="text-3xl font-bold text-gradient mb-8">My Story</h3>
                    <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                        <p>
                            My journey into web development began with curiosity and evolved into a passion for creating 
                            digital solutions that solve real-world problems. With a strong foundation in the 
                            MERN stack, I've dedicated myself to mastering modern web technologies.
                        </p>
                        <p>
                            I believe in writing clean, maintainable code and creating user experiences that are not 
                            just functional, but delightful. When I'm not coding, you'll find me exploring new 
                            technologies, contributing to open-source projects, or learning from the developer community.
                        </p>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold text-center text-gradient mb-16"
                    >
                        What I Do Best
                    </motion.h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
                                         hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-xl font-semibold text-secondary">{skill.name}</h4>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                                        skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                                        'bg-yellow-500/20 text-yellow-400'
                                    }`}>
                                        {skill.level}
                                    </span>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                    {skill.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm 
                                                     group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 className="text-3xl font-bold text-gradient mb-4">
                            Ready to Build Something Amazing?
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg">
                            Let's collaborate and bring your ideas to life with modern web technologies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary btn-glow px-8 py-3 rounded-full font-semibold"
                            >
                                Start a Project
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-outline px-8 py-3 rounded-full font-semibold"
                            >
                                View My Work
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
