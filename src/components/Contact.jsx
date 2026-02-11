import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    // EmailJS Configuration
    // Replace these with your actual EmailJS credentials
    const EMAILJS_SERVICE_ID = "your_service_id"; // Replace with your EmailJS service ID
    const EMAILJS_TEMPLATE_ID = "your_template_id"; // Replace with your EmailJS template ID
    const EMAILJS_PUBLIC_KEY = "your_public_key"; // Replace with your EmailJS public key
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        
        // Clear status when user starts typing
        if (status.message) {
            setStatus({ type: '', message: '' });
        }
    };

    const validateForm = () => {
        // Check if all fields are filled
        if (!formData.name.trim()) {
            setStatus({ type: 'error', message: 'Please enter your name.' });
            return false;
        }
        
        if (!formData.email.trim()) {
            setStatus({ type: 'error', message: 'Please enter your email address.' });
            return false;
        }
        
        if (!formData.message.trim()) {
            setStatus({ type: 'error', message: 'Please enter your message.' });
            return false;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form before submitting
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: "Azizul Haque", // Your name
                },
                EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', result);
            
            // Show success message
            setStatus({ 
                type: 'success', 
                message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' 
            });
            
            // Clear form
            setFormData({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {
            console.error('Email sending failed:', error);
            
            // Show error message
            setStatus({ 
                type: 'error', 
                message: 'Sorry, there was an error sending your message. Please try again or contact me directly.' 
            });
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: "fa-solid fa-envelope",
            label: "Email",
            value: "hello@example.com",
            link: "mailto:hello@example.com"
        },
        {
            icon: "fa-solid fa-phone",
            label: "Phone",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567"
        },
        {
            icon: "fa-solid fa-location-dot",
            label: "Location",
            value: "New York, USA",
            link: "#"
        }
    ];

    const socialLinks = [
        { icon: "fa-brands fa-github", link: "https://github.com", color: "hover:text-gray-400" },
        { icon: "fa-brands fa-linkedin", link: "https://linkedin.com", color: "hover:text-blue-400" },
        { icon: "fa-brands fa-twitter", link: "https://twitter.com", color: "hover:text-sky-400" },
        { icon: "fa-brands fa-dribbble", link: "https://dribbble.com", color: "hover:text-pink-400" }
    ];

    return (
        <section
            id="contact"
            className="py-20 px-6 md:px-16 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-info/10 to-success/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                        Ready to bring your ideas to life? Let's collaborate and create something 
                        <span className="text-primary font-semibold"> extraordinary</span> together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Main Info */}
                        <div>
                            <h3 className="text-3xl font-bold text-gradient mb-6">
                                Get In Touch
                            </h3>

                            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                                I'm a passionate Full Stack Developer specializing in creating 
                                <span className="text-primary font-semibold"> fast, scalable, and modern</span> web applications. 
                                Whether you have a startup idea or need to enhance your existing platform, 
                                I'm here to help transform your vision into reality.
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        whileHover={{ x: 8 }}
                                        className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm 
                                                 border border-white/10 hover:bg-white/10 hover:border-primary/20 
                                                 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent 
                                                      flex items-center justify-center text-white group-hover:scale-110 
                                                      transition-transform duration-300">
                                            <i className={`${item.icon} text-lg`}></i>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                                            <div className="text-secondary font-semibold text-lg group-hover:text-primary 
                                                          transition-colors duration-300">{item.value}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-12">
                                <h4 className="text-xl font-semibold text-secondary mb-6">Follow Me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                                                     flex items-center justify-center text-gray-300 ${social.color} 
                                                     hover:bg-white/10 hover:border-primary/20 transition-all duration-300`}
                                        >
                                            <i className={`${social.icon} text-lg`}></i>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent 
                                              flex items-center justify-center text-white mx-auto mb-4">
                                    <i className="fa-solid fa-clock text-lg"></i>
                                </div>
                                <div className="text-2xl font-bold text-primary mb-1">24h</div>
                                <div className="text-sm text-gray-400">Response Time</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-info 
                                              flex items-center justify-center text-white mx-auto mb-4">
                                    <i className="fa-solid fa-star text-lg"></i>
                                </div>
                                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                                <div className="text-sm text-gray-400">Client Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <h3 className="text-3xl font-bold text-gradient mb-8">
                                Send Message
                            </h3>

                            {/* Status Message */}
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mb-6 p-4 rounded-xl border ${
                                        status.type === 'success' 
                                            ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                                            : 'bg-red-500/10 border-red-500/30 text-red-400'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <i className={`fa-solid ${
                                            status.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'
                                        }`}></i>
                                        <span>{status.message}</span>
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-secondary mb-3 font-semibold">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        disabled={isLoading}
                                        className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                                                 focus:border-primary/50 focus:bg-white/10 transition-all duration-300 
                                                 text-secondary placeholder-gray-400 outline-none
                                                 disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-secondary mb-3 font-semibold">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        disabled={isLoading}
                                        className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                                                 focus:border-primary/50 focus:bg-white/10 transition-all duration-300 
                                                 text-secondary placeholder-gray-400 outline-none
                                                 disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label className="block text-secondary mb-3 font-semibold">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        placeholder="Tell me about your project, ideas, or how we can work together..."
                                        disabled={isLoading}
                                        className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                                                 focus:border-primary/50 focus:bg-white/10 transition-all duration-300 
                                                 text-secondary placeholder-gray-400 resize-none outline-none
                                                 disabled:opacity-50 disabled:cursor-not-allowed"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
                                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full p-4 rounded-xl text-white font-semibold text-lg 
                                             transition-all duration-300 flex items-center justify-center gap-3
                                             ${isLoading 
                                                ? 'bg-gray-600 cursor-not-allowed' 
                                                : 'bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25'
                                             }`}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-solid fa-paper-plane"></i>
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>

                            {/* Privacy Note */}
                            <div className="mt-8 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <p className="text-sm text-gray-400 text-center flex items-center justify-center gap-2">
                                    <i className="fa-solid fa-shield-halved text-primary"></i>
                                    Your information is secure and will never be shared with third parties.
                                </p>
                            </div>

                        
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 
                                      rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-info/20 to-success/20 
                                      rounded-full blur-xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}