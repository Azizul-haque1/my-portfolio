import { motion } from "framer-motion";
import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const services = [
    {
        title: "Frontend Development",
        desc: "Building responsive, modern and fast user interfaces using React, Tailwind CSS and modern JavaScript.",
        icon: <FaReact className="text-4xl text-primary" />,
    },
    {
        title: "Backend Development",
        desc: "Developing secure REST APIs using Node.js and Express for scalable server-side applications.",
        icon: <FaNodeJs className="text-4xl text-primary" />,
    },
    {
        title: "Database Management",
        desc: "Designing optimized NoSQL databases with MongoDB for high performance applications.",
        icon: <SiMongodb className="text-4xl text-primary" />,
    },
    {
        title: "Full Stack Solutions",
        desc: "Complete MERN stack web applications from concept to deployment with best practices.",
        icon: <SiExpress className="text-4xl text-primary" />,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-base-100">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <h2 className="text-4xl font-bold text-secondary">
                        Services
                    </h2>

                    <p className="text-gray-500 mt-4">
                        I provide full MERN stack development services including frontend,
                        backend, database, and complete web solutions.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, scale: 1.03 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition"
                        >
                            <div className="mb-4">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-secondary mb-2">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
