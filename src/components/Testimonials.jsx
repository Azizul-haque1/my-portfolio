import { motion } from "framer-motion";

const skills = [
    {
        title: "MERN Stack Development",
        text: "Expert in MongoDB, Express.js, React & Node.js. Building full-stack, scalable and secure applications with modern architecture.",
        number: "01"
    },
    {
        title: "Frontend Excellence", 
        text: "Mastery in React, Tailwind CSS & modern frameworks. Creating responsive, clean & animated interfaces that users love.",
        number: "02"
    },
    {
        title: "Backend & APIs",
        text: "Skilled in REST APIs, Authentication, Authorization & Server-side Logic using Node.js, Express & modern databases.",
        number: "03"
    },
    {
        title: "Performance & Optimization",
        text: "Focused on lightning-fast apps, optimized code, SEO best practices and smooth user experiences across all devices.",
        number: "04"
    },
];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Product Manager",
        text: "Delivered an exceptional e-commerce platform that exceeded our expectations. Attention to detail and technical expertise is outstanding.",
        company: "TechCorp"
    },
    {
        name: "Michael Chen",
        role: "Startup Founder",
        text: "Working together was a game-changer for our startup. Built our entire platform from scratch and it's been running flawlessly.",
        company: "InnovateLab"
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        text: "The dashboard created for our marketing team is intuitive and powerful. It has significantly improved our workflow efficiency.",
        company: "GrowthCo"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 px-6 md:px-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-info/10 to-success/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* SKILLS SECTION */}
                <div className="mb-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                            My Strengths
                        </h2>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                            Combining technical expertise with creative problem-solving to deliver 
                            <span className="text-primary font-semibold"> exceptional results</span> that drive business growth.
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex items-start gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm 
                                              border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    
                                    {/* Number */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent 
                                                      flex items-center justify-center text-white font-bold text-xl">
                                            {skill.number}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-gradient 
                                                     transition-all duration-300">
                                            {skill.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 
                                                 transition-colors duration-300">
                                            {skill.text}
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
                </div>

                {/* TESTIMONIALS SECTION */}
                <div>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                            What Clients Say
                        </h2>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                            Real feedback from 
                            <span className="text-primary font-semibold"> satisfied clients</span> who trusted me with their projects.
                        </p>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 
                                              hover:bg-white/8 hover:border-primary/20 transition-all duration-500 h-full
                                              overflow-hidden">
                                    
                                    {/* Gradient Accent */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-info"></div>
                                    
                                    {/* Floating Quote Icon */}
                                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 
                                                  rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10
                                                  group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-2xl text-primary">"</div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Testimonial Text */}
                                        <p className="text-gray-300 leading-relaxed text-lg mb-8 group-hover:text-gray-100 
                                                 transition-colors duration-300 italic">
                                            "{testimonial.text}"
                                        </p>

                                        {/* Client Info */}
                                        <div className="flex items-center gap-4">
                                            {/* Avatar Placeholder */}
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent 
                                                          flex items-center justify-center text-white font-bold text-lg
                                                          group-hover:scale-110 transition-transform duration-300">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            
                                            {/* Info */}
                                            <div>
                                                <h4 className="font-bold text-secondary group-hover:text-gradient 
                                                             transition-all duration-300 text-lg">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-gray-400 text-sm mb-1">
                                                    {testimonial.role}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                    <p className="text-primary font-medium text-sm">
                                                        {testimonial.company}
                                                    </p>
                                                </div>
                                            </div>
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

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-16"
                    >
                        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
                                      bg-white/5 backdrop-blur-sm border border-white/10
                                      hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                            <div className="flex -space-x-2">
                                {testimonials.map((_, index) => (
                                    <div key={index} 
                                         className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent 
                                                  border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold">
                                        {testimonials[index].name.charAt(0)}
                                    </div>
                                ))}
                            </div>
                            <span className="text-gray-300 font-medium">
                                Join <span className="text-primary font-bold">50+</span> satisfied clients
                            </span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}