import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FeaturedProjects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
     {
  id: 1,
  name: "ClubSphere – club & Event Management Platform",
  image: "https://i.ibb.co.com/Y783rj2K/Screenshot-2026-01-05-at-8-32-37-AM.png",
  category: "Full Stack (MERN)",
  status: "Live",
  techStack: [
    "React",
      "Node.js",
    "Express.js",
    "MongoDB",
    "Stripe",
    "Firebase Authentication",
    "TanStack Query",
    "Tailwind CSS",
    "DaisyUI",
    "Framer Motion"
  ],
  description:
    "ClubSphere is a full-stack MERN web application designed to help users discover, join, and manage local clubs and events. It features role-based dashboards for Admins, Club Managers, and Members, enabling seamless club creation, membership management, event registration, and secure Stripe payments. The platform focuses on real-world club management scenarios, secure authentication, and a modern recruiter-friendly UI.",
  liveLink: "https://club-sphere.netlify.app",
  githubLink: "https://github.com/Azizul-haque1/club-sphere-client",
    
  features: [
    "Firebase authentication with email/password and Google login",
    "JWT-based secure API access with server-side token verification",
    "Role-based protected routes (Admin, Club Manager, Member)",
    "Browse approved clubs and upcoming events with server-side search and filtering",
    "Member dashboard for club memberships, event registrations, and payment history",
    "Club Manager dashboard for managing clubs, events, members, and payments",
    "Admin dashboard for platform monitoring, role management, and approvals",
    "Secure Stripe payments for memberships and event registrations",
    "Responsive design with smooth animations using Framer Motion"
  ],
  challenges: [
    "Implementing role-based access control across client and server",
    "Securing APIs using Firebase Admin SDK and JWT verification",
    "Handling Stripe payment flows for memberships and events",
    "Designing scalable MongoDB schemas for clubs, events, and payments",
    "Managing complex dashboard states for different user roles"
  ],
  improvements: [
    "Add real-time notifications for event updates and approvals",
    "Implement email notifications for memberships and payments",
    "Add analytics dashboard with advanced charts and insights",
    "Introduce multi-language support",
    "Convert the platform into a Progressive Web App (PWA)"
  ]
    }
    ,
    {
    id: 2,
    name: "PlateShare — Community Food Sharing Platform",
    image: "https://i.ibb.co.com/TZNRKgV/Screenshot-2026-01-05-at-8-43-12-AM.png",
    category: "Full Stack (MERN)",
    status: "Live",
    techStack: [
        "React",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "React Router",
        "Tailwind CSS",
        "MongoDB",
        "Firebase Authentication",
        "SweetAlert2",
        "ImgBB"
    ],
    description:
        "PlateShare is a community-driven food sharing platform built with the MERN stack. It enables users to donate surplus food, browse available donations, and request food from others, helping reduce food waste while supporting the community through a clean and modern web interface.",
    liveLink: "https://plate-share1.netlify.app",
    githubLink: "https://github.com/Azizul-haque1/plate-share-client",
    features: [
        "Donate surplus food with details like quantity, pickup location, expiry date, and images",
        "Firebase authentication with email/password and Google login",
        "Protected private routes with persistent login sessions",
        "Full CRUD functionality for food posts",
        "Food request system with accept/reject flow",
        "Automatic status update when food is donated",
        "Responsive UI for mobile, tablet, and desktop devices",
        "Smooth animations using Framer Motion",
        "Interactive alerts using SweetAlert2"
    ],
    challenges: [
        "Designing a smooth food request and donation workflow",
        "Managing food status transitions across user actions",
        "Ensuring secure access to private routes",
        "Building a responsive layout for multiple screen sizes",
        "Handling image uploads efficiently with ImgBB"
    ],
    improvements: [
        "Add real-time notifications for request updates",
        "Implement location-based food discovery",
        "Add user rating and trust system",
        "Introduce admin moderation dashboard",
        "Add Progressive Web App (PWA) support"
    ]
    },
   {
  id: 3,
  name: "Hero-Apps — Modern App Store Interface",
  image: "https://i.ibb.co.com/JFKSLTcP/Screenshot-2026-01-05-at-8-56-30-AM.png",
  category: "Frontend (React)",
  status: "Live",
  techStack: [
    "React",
    "React Router",
    "Recharts",
    "Tailwind CSS",
    "LocalStorage API",
    "Netlify"
  ],
  description:
    "Hero-Apps is a modern, fully responsive React application that simulates an App Store experience. Users can browse apps, search in real time, view detailed app information, install or uninstall apps using LocalStorage, and visualize reviews through interactive charts.",
  liveLink: "https://b12-a08-hero-apps-ah1.netlify.app/",
  githubLink: "https://github.com/username/hero-apps",
  features: [
    "Fully responsive multi-page layout with smooth loading animations",
    "Home page with banner, statistics, and top apps showcase",
    "All Apps page with live, case-insensitive search and app count indicator",
    "Detailed app pages with ratings, downloads, and descriptions",
    "Install and uninstall apps using LocalStorage with instant UI sync",
    "My Installation page to manage installed apps",
    "Sorting by download count (high to low and low to high)",
    "Interactive review charts built with Recharts",
    "Toast notifications for install and uninstall actions",
    "Custom 404 page and graceful fallback when no apps are found"
  ],
  challenges: [
    "Managing LocalStorage state synchronization with React UI",
    "Implementing fast and responsive real-time search",
    "Designing reusable components for scalable UI",
    "Handling route reloads correctly on Netlify deployment",
    "Creating clear data visualization using Recharts"
  ],
  improvements: [
    "Add user authentication for personalized installations",
    "Introduce app categories and advanced filters",
    "Implement dark mode toggle",
    "Add user reviews and ratings submission",
    "Convert the app into a Progressive Web App (PWA)"
  ]
}
,
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
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto"
                    onClick={closeProjectModal}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        className="bg-neutral/95 backdrop-blur-xl border border-white/10 rounded-3xl w-full max-w-4xl 
                                 my-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header - Fixed */}
                        <div className="sticky top-0 z-10 p-8 border-b border-white/10 bg-neutral/95 backdrop-blur-xl rounded-t-3xl">
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
                            
                            <div className="flex items-start gap-6 pr-16">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-3xl font-bold text-gradient mb-2 truncate">
                                        {selectedProject.name}
                                    </h2>
                                    <div className="flex items-center gap-4 mb-4 flex-wrap">
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

                        {/* Modal Content - Scrollable */}
                        <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
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
                                    <div className="space-y-4">
                                        {selectedProject.challenges.map((challenge, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                                <i className="fa-solid fa-circle-dot text-accent text-sm mt-2 flex-shrink-0"></i>
                                                <span className="text-gray-300 leading-relaxed">{challenge}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Future Improvements */}
                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-lightbulb text-success"></i>
                                        Future Improvements
                                    </h3>
                                    <div className="space-y-4">
                                        {selectedProject.improvements.map((improvement, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                                <i className="fa-solid fa-arrow-trend-up text-success text-sm mt-2 flex-shrink-0"></i>
                                                <span className="text-gray-300 leading-relaxed">{improvement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer - Fixed */}
                        <div className="sticky bottom-0 p-8 border-t border-white/10 bg-neutral/95 backdrop-blur-xl rounded-b-3xl">
                            <div className="flex gap-4">
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