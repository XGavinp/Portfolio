import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer({ theme }) {
    const socialLinks = [
        {
            icon: Github,
            href: 'https://github.com/username',
            label: 'GitHub'
        },
        {
            icon: Linkedin,
            href: 'https://linkedin.com/in/username',
            label: 'LinkedIn'
        },
        {
            icon: Mail,
            href: 'mailto:student@university.edu',
            label: 'Email'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`py-12 border-t ${
            theme === 'dark' 
                ? 'bg-[#0a0a14] border-gray-800' 
                : 'bg-gradient-to-br from-slate-50 to-blue-50 border-gray-200'
        }`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo and Description */}
                    <div className="text-center md:text-left">
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`text-3xl font-bold bg-gradient-to-r ${
                                theme === 'dark' 
                                    ? 'from-blue-400 to-indigo-500' 
                                    : 'from-blue-600 to-indigo-600'
                            } bg-clip-text text-transparent mb-2 block`}
                        >
                            GP
                        </motion.button>
                        <p className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            Computer Science Student & Developer
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className={`p-3 rounded-full transition-all duration-300 ${
                                    theme === 'dark' 
                                        ? 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white' 
                                        : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-md hover:shadow-lg'
                                }`}
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className={`my-8 h-px ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                }`}></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <div className={`flex items-center gap-2 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        <span>© {new Date().getFullYear()} GP Portfolio. Made with</span>
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        <span>and lots of coffee</span>
                    </div>
                    <div className={`text-xs ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                        Built with React & Tailwind CSS
                    </div>
                </div>
            </div>
        </footer>
    );
}