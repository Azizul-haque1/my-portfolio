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
        { name: "MongoDB", value: 92, icon: "🍃", color: "from-emerald-400 to-green-500" },
        { name: "Express.js", value: 88, icon: "⚡", color: "from-yellow-400 to-orange-500" },
        { name: "React.js", value: 95, icon: "⚛️", color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", value: 90, icon: "🟢", color: "from-green-400 to-emerald-500" },
        { name: "TypeScript", value: 85, icon: "📘", color: "from-blue-400 to-indigo-500" },
        { name: "Next.js", value: 87, icon: "▲", color: "from-gray-400 to-slate-600" },
    ];

    const achievements = [
        { number: "50+", label: "Projects Completed", icon: "🚀" },
        { number: "3+", label: "Years Experience", icon: "⏰" },
        { number: "100%", label: "Client Satisfaction", icon: "⭐" },
        { number: "24/7", label: "Support Available", icon: "🛠️" }
    ];

    const personalInfo = [
        { label: "Location", value: "Dhaka, Bangladesh", icon: "📍" },
        { label: "Languages", value: "English, Bengali", icon: "🌐" },
        { label: "Education", value: "Computer Science", icon: "🎓" },
        { label: "Availability", value: "Open to Work", icon: "💼" }
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-primary/8 to-accent/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-info/8 to-success/8 rounded-full blur-2xl"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="glass-card p-8 rounded-3xl max-w-3xl mx-auto">
                        <h2 className="text-6xl font-bold text-gradient mb-6">
                            👨‍💻 About Me
                        </h2>
                        <p className="text-gray-300 text-xl leading-relaxed">
                            Passionate developer crafting digital experiences with 
                            <span className="text-primary font-semibold"> modern technologies</span> and 
                            <span className="text-accent font-semibold"> creative solutions</span>
                        </p>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

                    {/* Left Side - Image and Personal Info */}
                    <motion.div
                        ref={imageRef}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Profile Image */}
                        <div className="glass-card p-8 rounded-3xl">
                            <div className="relative mx-auto w-fit">
                                {/* Animated rings */}
                                <div className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute inset-4 w-72 h-72 bg-gradient-to-r from-info/15 to-success/15 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
                                
                                <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-accent shadow-2xl">
                                    <img
                                        src={ahPHoto}
                                        alt="Azizul Haque"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                
                                {/* Floating badges */}
                                <div className="absolute -top-4 -right-4 glass-button px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                                    💻 Full Stack
                                </div>
                                <div className="absolute -bottom-4 -left-4 glass-button px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                                    🚀 MERN Expert
                                </div>
                            </div>
                        </div>

                        {/* Personal Information */}
                        <div className="glass-card p-6 rounded-2xl">
                            <h3 className="text-2xl font-bold text-gradient mb-6">📋 Personal Info</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {personalInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="glass p-4 rounded-xl flex items-center gap-4 hover:glass-button transition-all duration-300"
                                    >
                                        <span className="text-2xl">{info.icon}</span>
                                        <div>
                                            <div className="text-sm text-gray-400">{info.label}</div>
                                            <div className="text-secondary font-semibold">{info.value}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - About Text and Skills */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* About Description */}
                        <div className="glass-card p-8 rounded-3xl">
                            <h3 className="text-3xl font-bold text-gradient mb-6">
                                🎯 My Journey
                            </h3>

                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    Hello! I'm <span className="text-primary font-semibold text-gradient">Azizul Haque</span>, 
                                    a passionate Full Stack Developer with over 3 years of experience in creating 
                                    innovative digital solutions. My journey in web development started with a curiosity 
                                    about how websites work, and it has evolved into a deep passion for building 
                                    applications that make a real difference.
                                </p>

                                <p>
                                    I specialize in the <span className="text-accent font-semibold">MERN stack</span> 
                                    (MongoDB, Express.js, React.js, Node.js) and have extensive experience with 
                                    modern technologies like TypeScript, Next.js, and cloud platforms. I believe in 
                                    writing clean, maintainable code and creating user experiences that are both 
                                    beautiful and functional.
                                </p>

                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                                    open-source projects, or sharing knowledge with the developer community. I'm 
                                    always excited to take on new challenges and collaborate on projects that push 
                                    the boundaries of what's possible on the web.
                                </p>
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div className="glass-card p-8 rounded-3xl">
                            <h3 className="text-3xl font-bold text-gradient mb-8">🛠️ Technical Skills</h3>
                            <div className="space-y-6">
                                {skills.map((skill, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="glass p-5 rounded-xl hover:glass-card transition-all duration-300 group"
                                    >
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="font-bold text-secondary flex items-center gap-3 text-lg">
                                                <span className="text-2xl group-hover:animate-bounce">{skill.icon}</span>
                                                {skill.name}
                                            </span>
                                            <span className="text-primary font-bold text-xl">
                                                {skill.value}%
                                            </span>
                                        </div>

                                        <div className="w-full bg-gray-700/30 rounded-full h-4 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.value}%` }}
                                                transition={{ delay: i * 0.1 + 0.3, duration: 1.2, ease: "easeOut" }}
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 rounded-3xl"
                >
                    <h3 className="text-3xl font-bold text-gradient text-center mb-8">🏆 Achievements</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="glass-card p-6 rounded-2xl text-center group"
                            >
                                <div className="text-4xl mb-3 group-hover:animate-bounce">{achievement.icon}</div>
                                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                                <div className="text-sm text-gray-400 font-medium">{achievement.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold text-gradient mb-4">
                            Ready to Work Together?
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg">
                            Let's bring your ideas to life with cutting-edge technology and creative solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary btn-glow glass-button px-8 py-3 rounded-full text-lg font-semibold"
                            >
                                💼 Hire Me
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-outline glass px-8 py-3 rounded-full text-lg font-semibold hover:glass-button"
                            >
                                📄 Download CV
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
