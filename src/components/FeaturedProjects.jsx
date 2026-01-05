import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FeaturedProjects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: "E-Commerce Platform",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            category: "Full Stack",
            status: "Live",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
            description: "A comprehensive e-commerce platform with user authentication, product management, shopping cart functionality, and secure payment processing. Features include user profiles, order tracking, admin dashboard, and responsive design.",
            liveLink: "https://ecommerce-demo.vercel.app",
            githubLink: "https://github.com/username/ecommerce-client",
            challenges: [
                "Implementing secure payment processing with Stripe integration",
                "Managing complex state for shopping cart across multiple components",
                "Optimizing database queries for product search and filtering",
                "Handling real-time inventory updates to prevent overselling"
            ],
            improvements: [
                "Add advanced product recommendation system using machine learning",
                "Implement real-time chat support for customer service",
                "Add multi-vendor marketplace functionality",
                "Integrate with multiple payment gateways for global reach",
                "Implement progressive web app (PWA) features for mobile users"
            ]
        },
        {
            id: 2,
            name: "Task Management App",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            category: "Web App",
            status: "In Progress",
            techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Material-UI"],
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and project tracking. Includes kanban boards, time tracking, and team communication tools.",
            liveLink: "https://taskmanager-demo.netlify.app",
            githubLink: "https://github.com/username/taskmanager-client",
            challenges: [
                "Implementing real-time collaboration with Socket.io across multiple users",
                "Creating smooth drag-and-drop functionality with proper state management",
                "Designing an intuitive UI/UX for complex project management features",
                "Handling offline functionality and data synchronization"
            ],
            improvements: [
                "Add advanced analytics and reporting dashboard",
                "Implement AI-powered task prioritization and scheduling",
                "Add integration with popular tools like Slack, Google Calendar",
                "Create mobile app version using React Native",
                "Add advanced permission system for enterprise users"
            ]
        },
        {
            id: 3,
            name: "Social Media Dashboard",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            category: "Dashboard",
            status: "Live",
            techStack: ["React", "D3.js", "Node.js", "Express", "PostgreSQL", "Chart.js"],
            description: "An analytics dashboard for social media management with real-time data visualization, automated reporting, and multi-platform integration. Features interactive charts, performance metrics, and content scheduling.",
            liveLink: "https://socialdash-demo.vercel.app",
            githubLink: "https://github.com/username/socialdash-client",
            challenges: [
                "Integrating multiple social media APIs with different rate limits",
                "Creating responsive and interactive data visualizations",
                "Handling large datasets efficiently for real-time updates",
                "Implementing secure OAuth authentication for multiple platforms"
            ],
            improvements: [
                "Add AI-powered content suggestion and optimization",
                "Implement advanced sentiment analysis for social mentions",
                "Add automated posting and scheduling features",
                "Create white-label solution for agencies",
                "Add competitor analysis and benchmarking tools"
            ]
        },
        {
            id: 4,
            name: "Weather Forecast App",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
            category: "Web App",
            status: "Live",
            techStack: ["React", "OpenWeather API", "Geolocation API", "Chart.js", "Tailwind CSS"],
            description: "A modern weather application with location-based forecasts, interactive maps, weather alerts, and detailed meteorological data. Features include 7-day forecasts, hourly updates, and weather pattern visualization.",
            liveLink: "https://weather-app-demo.netlify.app",
            githubLink: "https://github.com/username/weather-app-client",
            challenges: [
                "Handling geolocation permissions and fallback options",
                "Creating accurate weather data visualization with charts",
                "Implementing efficient caching for API calls to reduce costs",
                "Designing responsive layouts for various weather data types"
            ],
            improvements: [
                "Add severe weather alerts and notifications",
                "Implement weather-based activity recommendations",
                "Add historical weather data and trends analysis",
                "Create weather widgets for embedding in other websites",
                "Add offline functionality with cached weather data"
            ]
        }
    ];

    const openProjectModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    // Handle escape key and cleanup
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && selectedProject) {
                closeProjectModal();
            }
        };

        if (selectedProject) {
            document.addEventListener('keydown', handleEscape);
            return () => {
                document.removeEventListener('keydown', handleEscape);
                document.body.style.overflow = 'unset';
            };
        }
    }, [selectedProject]);

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
                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
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
                                        src={project.image}
                                        alt={project.name}
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
                                        {project.name}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 
                                             transition-colors duration-300 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.slice(0, 4).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 
                                                         text-gray-300 hover:bg-primary/10 hover:border-primary/20 
                                                         hover:text-primary transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="px-3 py-1 rounded-full text-sm bg-primary/10 border border-primary/20 
                                                           text-primary font-medium">
                                                +{project.techStack.length - 4} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => openProjectModal(project)}
                                            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent 
                                                     text-white font-semibold hover:shadow-lg hover:shadow-primary/25 
                                                     transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <i className="fa-solid fa-eye text-sm"></i>
                                            View Details
                                        </motion.button>
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                                                     text-gray-300 font-semibold hover:bg-white/10 hover:border-primary/20 
                                                     hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <i className="fa-solid fa-external-link text-sm"></i>
                                            Live Demo
                                        </motion.a>
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
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeProjectModal}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-neutral/95 backdrop-blur-xl border border-white/10 rounded-3xl max-w-4xl w-full 
                                 max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="relative p-8 border-b border-white/10">
                            <button
                                onClick={closeProjectModal}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 
                                         flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300
                                         z-10 cursor-pointer"
                                type="button"
                                aria-label="Close modal"
                            >
                                <i className="fa-solid fa-xmark text-lg"></i>
                            </button>
                            
                            <div className="flex items-start gap-6">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    className="w-24 h-24 rounded-2xl object-cover"
                                />
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold text-gradient mb-2">
                                        {selectedProject.name}
                                    </h2>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary border border-primary/30">
                                            {selectedProject.category}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-sm border
                                            ${selectedProject.status === 'Live' ? 'bg-green-500/20 border-green-500/30 text-green-400' : 
                                              selectedProject.status === 'Beta' ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' : 
                                              'bg-blue-500/20 border-blue-500/30 text-blue-400'}`}>
                                            {selectedProject.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 space-y-8">
                            {/* Description */}
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-info-circle text-primary"></i>
                                    Project Description
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Technology Stack */}
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-code text-primary"></i>
                                    Technology Stack
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 
                                                     text-gray-300 hover:bg-primary/10 hover:border-primary/20 
                                                     hover:text-primary transition-all duration-300 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Challenges */}
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-mountain text-accent"></i>
                                    Challenges Faced
                                </h3>
                                <ul className="space-y-3">
                                    {selectedProject.challenges.map((challenge, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                            <i className="fa-solid fa-circle-dot text-accent text-sm mt-2 flex-shrink-0"></i>
                                            <span className="leading-relaxed">{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Future Improvements */}
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-lightbulb text-success"></i>
                                    Future Improvements
                                </h3>
                                <ul className="space-y-3">
                                    {selectedProject.improvements.map((improvement, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                            <i className="fa-solid fa-arrow-trend-up text-success text-sm mt-2 flex-shrink-0"></i>
                                            <span className="leading-relaxed">{improvement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Links */}
                            <div className="flex gap-4 pt-6 border-t border-white/10">
                                <motion.a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent 
                                             text-white font-semibold hover:shadow-lg hover:shadow-primary/25 
                                             transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <i className="fa-solid fa-external-link"></i>
                                    View Live Project
                                </motion.a>
                                <motion.a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                                             text-gray-300 font-semibold hover:bg-white/10 hover:border-primary/20 
                                             hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <i className="fa-brands fa-github"></i>
                                    View Source Code
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}