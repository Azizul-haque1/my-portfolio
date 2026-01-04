import { motion } from "framer-motion";

export default function FeaturedProjects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            desc: "A full-stack e-commerce solution with authentication, product management, and payment integration using modern technologies.",
            img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            gradient: "from-purple-500 to-pink-500",
            emoji: "🛒",
            status: "Live"
        },
        {
            title: "Task Management App",
            desc: "A collaborative productivity tool with real-time updates, drag-and-drop functionality, and advanced team features.",
            img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            tech: ["React", "Node.js", "Socket.io", "MongoDB"],
            gradient: "from-blue-500 to-cyan-500",
            emoji: "📋",
            status: "In Progress"
        },
        {
            title: "Social Media Dashboard",
            desc: "Analytics dashboard for social media management with real-time data visualization and automated reporting.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tech: ["React", "D3.js", "Express", "Redis"],
            gradient: "from-green-500 to-teal-500",
            emoji: "📊",
            status: "Live"
        },
        {
            title: "AI Chat Application",
            desc: "Intelligent chat application with AI integration, real-time messaging, and advanced natural language processing.",
            img: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
            tech: ["React", "OpenAI", "WebSocket", "Python"],
            gradient: "from-orange-500 to-red-500",
            emoji: "🤖",
            status: "Beta"
        }
    ];

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-info/10 to-success/10 rounded-full blur-3xl"></div>

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
                            🚀 Featured Projects
                        </h2>

                        <p className="text-gray-300 text-xl leading-relaxed">
                            Explore my latest work showcasing 
                            <span className="text-primary font-semibold"> innovative solutions</span> and 
                            <span className="text-accent font-semibold"> cutting-edge technologies</span> 
                            in modern web development.
                        </p>
                    </div>
                </motion.div>

                {/* Project Cards */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -15, scale: 1.03 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="glass-card rounded-3xl overflow-hidden group relative"
                        >
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 z-20">
                                <div className={`glass-button px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2
                                    ${project.status === 'Live' ? 'text-green-400' : 
                                      project.status === 'Beta' ? 'text-yellow-400' : 'text-blue-400'}`}>
                                    <div className={`w-2 h-2 rounded-full animate-pulse
                                        ${project.status === 'Live' ? 'bg-green-400' : 
                                          project.status === 'Beta' ? 'bg-yellow-400' : 'bg-blue-400'}`}></div>
                                    {project.status}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                                
                                {/* Project Emoji */}
                                <div className="absolute top-4 left-4 text-4xl animate-bounce">
                                    {project.emoji}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-3xl font-bold text-gradient mb-4 group-hover:scale-105 transition-transform duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
                                    {project.desc}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {project.tech.map((item, idx) => (
                                        <motion.span
                                            key={idx}
                                            whileHover={{ scale: 1.1 }}
                                            className="glass px-4 py-2 rounded-full text-sm font-semibold text-primary 
                                                     hover:glass-button transition-all duration-300"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn btn-primary btn-glow glass-button flex-1 rounded-xl font-semibold"
                                    >
                                        🔗 Live Demo
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn btn-outline glass flex-1 rounded-xl font-semibold hover:glass-button"
                                    >
                                        📂 Source Code
                                    </motion.button>
                                </div>
                            </div>

                            {/* Hover Effect Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-accent to-info group-hover:w-full transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-outline btn-lg glass px-12 py-4 rounded-full text-xl font-semibold hover:glass-button"
                    >
                        🎯 View All Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
