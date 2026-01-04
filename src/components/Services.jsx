import { motion } from "framer-motion";
import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const services = [
    {
        title: "Frontend Development",
        desc: "Building responsive, modern and fast user interfaces using React, Tailwind CSS and modern JavaScript.",
        icon: <FaReact className="text-5xl text-primary" />,
        gradient: "from-blue-400 to-cyan-400",
        emoji: "⚛️"
    },
    {
        title: "Backend Development", 
        desc: "Developing secure REST APIs using Node.js and Express for scalable server-side applications.",
        icon: <FaNodeJs className="text-5xl text-success" />,
        gradient: "from-green-400 to-emerald-400",
        emoji: "🚀"
    },
    {
        title: "Database Management",
        desc: "Designing optimized NoSQL databases with MongoDB for high performance applications.",
        icon: <SiMongodb className="text-5xl text-success" />,
        gradient: "from-green-500 to-teal-400",
        emoji: "🍃"
    },
    {
        title: "Full Stack Solutions",
        desc: "Complete MERN stack web applications from concept to deployment with best practices.",
        icon: <SiExpress className="text-5xl text-warning" />,
        gradient: "from-yellow-400 to-orange-400",
        emoji: "⚡"
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-info/5 to-success/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="glass-card p-8 rounded-3xl">
                        <h2 className="text-6xl font-bold text-gradient mb-6">
                            🛠️ Services
                        </h2>

                        <p className="text-gray-300 text-xl leading-relaxed">
                            I provide comprehensive MERN stack development services, crafting 
                            <span className="text-primary font-semibold"> modern digital solutions</span> from 
                            frontend interfaces to backend architecture and database optimization.
                        </p>
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -15, scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass-card p-8 rounded-2xl group relative overflow-hidden"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                            
                            {/* Icon Container */}
                            <div className="relative mb-6">
                                <div className="glass p-4 rounded-2xl w-fit mx-auto group-hover:glass-button transition-all duration-300">
                                    <div className="relative">
                                        {service.icon}
                                        <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                                            {service.emoji}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-secondary mb-4 text-center group-hover:text-gradient transition-all duration-300">
                                {service.title}
                            </h3>

                            <p className="text-gray-300 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">
                                {service.desc}
                            </p>

                            {/* Hover Effect Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold text-gradient mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg">
                            Let's collaborate and bring your ideas to life with modern web technologies.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary btn-glow glass-button px-8 py-3 rounded-full text-lg font-semibold"
                        >
                            💬 Let's Talk
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
