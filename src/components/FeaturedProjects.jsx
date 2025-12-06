import { motion } from "framer-motion";

export default function FeaturedProjects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            desc: "A full-stack e-commerce solution with authentication, product management, and payment integration.",
            img: "/images/ecommerce.jpg",
            tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
        },
        {
            title: "Task Management App",
            desc: "A collaborative tool with real-time updates, drag-and-drop, and team features.",
            img: "/images/taskapp.jpg",
            tech: ["React", "Node.js", "Socket.io", "MongoDB"],
        },
    ];

    return (
        <section id="projects" className="py-20  bg-base-100">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <h2 className="text-4xl font-bold text-secondary">
                        Featured Projects
                    </h2>

                    <p className="text-gray-600 mt-4">
                        Here are some of my recent projects showcasing my skills and passion for development.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="grid gap-10 lg:grid-cols-2">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, scale: 1.02 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="
                                bg-white 
                                rounded-xl 
                                shadow-lg 
                                border 
                                border-gray-100 
                                hover:shadow-xl 
                                transition 
                                overflow-hidden
                            "
                        >
                            {/* Image */}
                            <div className="h-56 w-full overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-secondary">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mt-2 leading-relaxed">
                                    {project.desc}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="badge bg-primary/10 text-primary border-primary/20"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
