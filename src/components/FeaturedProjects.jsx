import { motion } from "framer-motion";

export default function FeaturedProjects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            desc: "A full-stack e-commerce solution with authentication, product management, and payment integration using modern technologies.",
            img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            category: "Full Stack",
            status: "Live"
        },
        {
            title: "Task Management App",
            desc: "A collaborative productivity tool with real-time updates, drag-and-drop functionality, and advanced team features.",
            img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            tech: ["React", "Node.js", "Socket.io", "MongoDB"],
            category: "Web App",
            status: "In Progress"
        },
        {
            title: "Social Media Dashboard",
            desc: "Analytics dashboard for social media management with real-time data visualization and automated reporting.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tech: ["React", "D3.js", "Express", "Redis"],
            category: "Dashboard",
            status: "Live"
        },
        {
            title: "AI Chat Application",
            desc: "Intelligent chat application with AI integration, real-time messaging, and advanced natural language processing.",
            img: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
            tech: ["React", "OpenAI", "WebSocket", "Python"],
            category: "AI/ML",
            status: "Beta"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 md:px-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-info/10 to-success/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                        Explore my latest work showcasing 
                        <span className="text-primary font-semibold"> innovative solutions</span> and 
                        <span className="text-accent font-semibold"> cutting-edge technologies</span> 
                        in modern web development.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative"
                        >
                            {/* Project Card */}
                            <div className="relative rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 
                                          hover:bg-white/8 hover:border-primary/20 transition-all duration-500 overflow-hidden">
                                
                                {/* Image Section */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    
                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4">
                                        <div className={`px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm border
                                            ${project.status === 'Live' ? 'bg-green-500/20 border-green-500/30 text-green-400' : 
                                              project.status === 'Beta' ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' : 
                                              'bg-blue-500/20 border-blue-500/30 text-blue-400'}`}>
                                            {project.status}
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <div className="px-3 py-1 rounded-full text-sm font-semibold bg-white/10 backdrop-blur-sm 
                                                      border border-white/20 text-white">
                                            {project.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-gradient 
                                                 transition-all duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 
                                             transition-colors duration-300">
                                        {project.desc}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 
                                                         text-gray-300 hover:bg-primary/10 hover:border-primary/20 
                                                         hover:text-primary transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent 
                                                     text-white font-semibold hover:shadow-lg hover:shadow-primary/25 
                                                     transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <i className="fa-solid fa-external-link text-sm"></i>
                                            Live Demo
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                                                     text-gray-300 font-semibold hover:bg-white/10 hover:border-primary/20 
                                                     hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <i className="fa-brands fa-github text-sm"></i>
                                            Source Code
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                                              transition-opacity duration-500 pointer-events-none
                                              bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
                            </div>

                            {/* Shadow Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 
                                          blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <h3 className="text-3xl font-bold text-gradient mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                            Let's collaborate and bring your ideas to life with modern technologies 
                            and innovative solutions.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white 
                                         font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300
                                         flex items-center justify-center gap-2"
                            >
                                <i className="fa-solid fa-message"></i>
                                Let's Talk
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                                         text-gray-300 font-semibold hover:bg-white/10 hover:border-primary/20 
                                         hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <i className="fa-solid fa-folder-open"></i>
                                View All Projects
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}