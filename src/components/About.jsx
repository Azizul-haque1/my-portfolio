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
        { 
            category: "Frontend Development",
            color: "from-blue-500 to-cyan-500",
            icon: "fa-solid fa-code",
            skills: [
                { name: "React", level: 90, icon: "fa-brands fa-react" },
                { name: "Next.js", level: 85, icon: "fa-solid fa-n" },
                { name: "TypeScript", level: 80, icon: "fa-brands fa-js" },
                { name: "Tailwind CSS", level: 95, icon: "fa-brands fa-css3-alt" },
                { name: "HTML5", level: 95, icon: "fa-brands fa-html5" },
                { name: "JavaScript", level: 90, icon: "fa-brands fa-js-square" }
            ]
        },
        { 
            category: "Backend Development",
            color: "from-green-500 to-emerald-500",
            icon: "fa-solid fa-server",
            skills: [
                { name: "Node.js", level: 85, icon: "fa-brands fa-node-js" },
                { name: "Express.js", level: 80, icon: "fa-solid fa-e" },
                { name: "REST APIs", level: 85, icon: "fa-solid fa-plug" },
                { name: "Authentication", level: 75, icon: "fa-solid fa-shield-halved" },
                { name: "Socket.io", level: 70, icon: "fa-solid fa-comments" }
            ]
        },
        { 
            category: "Database & Cloud",
            color: "from-purple-500 to-pink-500",
            icon: "fa-solid fa-database",
            skills: [
                { name: "MongoDB", level: 85, icon: "fa-solid fa-leaf" },
                { name: "PostgreSQL", level: 75, icon: "fa-solid fa-elephant" },
                { name: "MySQL", level: 70, icon: "fa-solid fa-database" },
                { name: "Firebase", level: 65, icon: "fa-solid fa-fire" }
            ]
        },
        { 
            category: "Tools & Workflow",
            color: "from-orange-500 to-red-500",
            icon: "fa-solid fa-tools",
            skills: [
                { name: "Git & GitHub", level: 90, icon: "fa-brands fa-github" },
                { name: "VS Code", level: 95, icon: "fa-solid fa-code" },
                { name: "Postman", level: 85, icon: "fa-solid fa-paper-plane" },
                { name: "Chrome DevTools", level: 90, icon: "fa-brands fa-chrome" },
                { name: "NPM/Yarn", level: 85, icon: "fa-brands fa-npm" }
            ]
        }
    ];

    return (
        <section id="about" className="py-20 px-6 md:px-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-info/5 to-success/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                        About Me
                    </h2>
                    <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                        Passionate about creating digital experiences and 
                        <span className="text-primary font-semibold"> learning new technologies</span> every day.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary 
                                          rounded-full text-sm font-medium mb-6">
                                <i className="fa-solid fa-hand-wave"></i>
                                Nice to meet you
                            </div>
                            
                            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-secondary">
                                I'm <span className="text-gradient">Azizul Haque</span>, 
                                <br />a passionate Full Stack Developer
                            </h3>
                            
                            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                                        <i className="fa-solid fa-code"></i>
                                        My Programming Journey
                                    </h4>
                                    <p>
                                        My coding adventure began during my university days when I first encountered HTML and CSS. 
                                        What started as curiosity quickly turned into passion when I built my first interactive website. 
                                        The moment I saw my code come to life in the browser, I knew I had found my calling. 
                                        Since then, I've been on an exciting journey of continuous learning, diving deep into 
                                        JavaScript, React, Node.js, and the entire MERN stack ecosystem.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-accent mb-3 flex items-center gap-2">
                                        <i className="fa-solid fa-heart"></i>
                                        What I Love Doing
                                    </h4>
                                    <p>
                                        I'm passionate about building user-centric web applications that solve real problems. 
                                        There's something magical about transforming an idea into a functional, beautiful application 
                                        that people can actually use. I particularly enjoy working on full-stack projects where 
                                        I can handle everything from database design to responsive frontend interfaces. 
                                        The challenge of optimizing performance and creating seamless user experiences keeps me motivated every day.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-info mb-3 flex items-center gap-2">
                                        <i className="fa-solid fa-gamepad2"></i>
                                        Beyond the Code
                                    </h4>
                                    <p>
                                        When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, 
                                        or playing cricket with friends. I'm also an avid reader of tech blogs and enjoy watching sci-fi movies 
                                        that inspire new ideas for my projects. Photography is another hobby of mine - I love capturing moments 
                                        and applying the same attention to detail I use in coding to create compelling visual stories.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-success mb-3 flex items-center gap-2">
                                        <i className="fa-solid fa-lightbulb"></i>
                                        My Approach
                                    </h4>
                                    <p>
                                        I believe in writing clean, maintainable code and always staying curious about new technologies. 
                                        Every project is an opportunity to learn something new and push my boundaries. I'm a firm believer 
                                        in the power of collaboration and enjoy working with teams where we can learn from each other 
                                        and create something amazing together.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                                <div className="text-gray-400 text-sm">Projects</div>
                            </div>
                            <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-2xl font-bold text-accent mb-1">2+</div>
                                <div className="text-gray-400 text-sm">Years Learning</div>
                            </div>
                            <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-2xl font-bold text-success mb-1">100%</div>
                                <div className="text-gray-400 text-sm">Dedication</div>
                            </div>
                        </div>

                        {/* Interests */}
                        <div>
                            <h4 className="text-xl font-semibold text-secondary mb-4">What I'm Passionate About</h4>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { name: "Web Development", icon: "fa-solid fa-globe" },
                                    { name: "Open Source", icon: "fa-brands fa-github" },
                                    { name: "Cricket", icon: "fa-solid fa-baseball" },
                                    { name: "Photography", icon: "fa-solid fa-camera" },
                                    { name: "Sci-Fi Movies", icon: "fa-solid fa-film" },
                                    { name: "Tech Blogs", icon: "fa-solid fa-blog" }
                                ].map((interest, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 
                                                 backdrop-blur-sm border border-white/10 hover:bg-white/10 
                                                 hover:border-primary/20 transition-all duration-300"
                                    >
                                        <i className={`${interest.icon} text-primary text-sm`}></i>
                                        <span className="text-gray-300 text-sm font-medium">{interest.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
                            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 
                                          shadow-2xl group">
                                <img
                                    src={ahPHoto}
                                    alt="Profile"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-3xl font-bold text-gradient mb-4">
                            Skills & Technologies
                        </h3>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            My technical expertise across different areas of web development
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                className="group"
                            >
                                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 
                                              hover:bg-white/8 hover:border-primary/20 transition-all duration-500 h-full">
                                    
                                    {/* Category Header */}
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} 
                                                      flex items-center justify-center text-white text-2xl
                                                      group-hover:scale-110 transition-transform duration-300`}>
                                            <i className={category.icon}></i>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-secondary group-hover:text-gradient 
                                                         transition-all duration-300">
                                                {category.category}
                                            </h4>
                                            <p className="text-gray-400 text-sm">
                                                {category.skills.length} Technologies
                                            </p>
                                        </div>
                                    </div>

                                    {/* Skills List with Progress Bars */}
                                    <div className="space-y-6">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                                className="group/skill"
                                            >
                                                {/* Skill Name and Percentage */}
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-3">
                                                        <i className={`${skill.icon} text-primary text-lg`}></i>
                                                        <span className="text-gray-300 font-medium group-hover/skill:text-secondary 
                                                                       transition-colors duration-300">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <span className="text-primary font-bold text-sm">
                                                        {skill.level}%
                                                    </span>
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="relative">
                                                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1), ease: "easeOut" }}
                                                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                                                        >
                                                            {/* Glow Effect */}
                                                            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                                                        </motion.div>
                                                    </div>
                                                    
                                                    {/* Skill Level Indicator */}
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        whileInView={{ scale: 1 }}
                                                        transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 1 }}
                                                        className="absolute -top-1 bg-white/10 backdrop-blur-sm border border-white/20 
                                                                 rounded-full w-4 h-4 flex items-center justify-center"
                                                        style={{ left: `calc(${skill.level}% - 8px)` }}
                                                    >
                                                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Category Stats */}
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">Average Proficiency</span>
                                            <span className="text-primary font-bold">
                                                {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Overall Skills Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <h4 className="text-2xl font-bold text-gradient mb-6">
                                Technical Proficiency Overview
                            </h4>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {skills.map((category, index) => {
                                    const avgLevel = Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length);
                                    return (
                                        <div key={index} className="text-center">
                                            <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-r ${category.color} 
                                                          flex items-center justify-center text-white text-xl`}>
                                                <i className={category.icon}></i>
                                            </div>
                                            <div className="text-2xl font-bold text-primary mb-1">{avgLevel}%</div>
                                            <div className="text-sm text-gray-400">{category.category.split(' ')[0]}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
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
                            Let's Build Something Together
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                            I'm always excited to work on new projects and collaborate with other developers. 
                            Let's create something amazing!
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
                                Get In Touch
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                                         text-gray-300 font-semibold hover:bg-white/10 hover:border-primary/20 
                                         hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <i className="fa-solid fa-folder-open"></i>
                                View My Work
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}