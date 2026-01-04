import { motion } from "framer-motion";

const services = [
    {
        title: "Frontend Development",
        desc: "Building responsive, modern and fast user interfaces using React, Next.js, and Tailwind CSS.",
        number: "01"
    },
    {
        title: "Backend Development", 
        desc: "Developing secure REST APIs using Node.js and Express for scalable server-side applications.",
        number: "02"
    },
    {
        title: "Database Design",
        desc: "Designing optimized databases with MongoDB and PostgreSQL for high performance applications.",
        number: "03"
    },
    {
        title: "Full Stack Solutions",
        desc: "Complete MERN stack web applications from concept to deployment with modern best practices.",
        number: "04"
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-info/5 to-success/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                        What I Do
                    </h2>
                    <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        I provide comprehensive web development services, crafting 
                        <span className="text-primary font-semibold"> modern digital solutions</span> from 
                        frontend interfaces to backend architecture.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="flex items-start gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm 
                                          border border-white/10 hover:bg-white/10 transition-all duration-300">
                                
                                {/* Number */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent 
                                                  flex items-center justify-center text-white font-bold text-xl">
                                        {service.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-gradient 
                                                 transition-all duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 
                                             transition-colors duration-300">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <i className="fa-solid fa-arrow-right text-primary text-sm"></i>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mb-20"
                >
                    <h3 className="text-3xl font-bold text-gradient mb-8">
                        Technologies I Use
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {[
                            "React", "Next.js", "Node.js", "Express", "MongoDB", 
                            "PostgreSQL", "TypeScript", "Tailwind CSS", "AWS", "Docker"
                        ].map((tech, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 
                                         rounded-full text-gray-300 hover:text-primary hover:bg-primary/10 
                                         hover:border-primary/30 transition-all duration-300 font-medium"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                >
                    <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 className="text-3xl font-bold text-gradient mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                            Let's collaborate and bring your ideas to life with modern web technologies 
                            and clean, maintainable code.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary btn-glow px-8 py-3 rounded-full font-semibold 
                                         flex items-center justify-center gap-2"
                            >
                                <i className="fa-solid fa-message"></i>
                                Let's Talk
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-outline px-8 py-3 rounded-full font-semibold 
                                         flex items-center justify-center gap-2 hover:bg-white/10"
                            >
                                <i className="fa-solid fa-eye"></i>
                                View Projects
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
