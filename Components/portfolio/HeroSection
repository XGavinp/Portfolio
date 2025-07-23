
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import ThreeDBackground from './ThreeDBackground';

export default function HeroSection({ theme }) {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
            theme === 'dark' ? 'bg-transparent' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
        }`}>
            <ThreeDBackground theme={theme} />
            
            {/* Background Pattern for light theme */}
            {theme === 'light' && (
                <>
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                </>
            )}
            
            <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Flying GP Initials - Smaller Size */}
                    <motion.div
                        initial={{ opacity: 0, x: -200, y: -100, scale: 0.3, rotate: -45 }}
                        animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
                        transition={{ 
                            duration: 1.5, 
                            delay: 0.3,
                            type: "spring", 
                            bounce: 0.4,
                            ease: "easeOut"
                        }}
                        className="flex justify-center"
                    >
                        <div 
                            className="relative" 
                            style={{ 
                                perspective: '1000px',
                                transformStyle: 'preserve-3d' 
                            }}
                        >
                            <motion.h1
                                whileHover={{ scale: 1.1, rotateX: 10, rotateY: -10, z: 50 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="text-[120px] md:text-[160px] font-black tracking-widest cursor-pointer relative"
                                style={{
                                    background: 'linear-gradient(45deg, #A8B2E4, #D8B9E8, #FFFFFF, #B4D4F1, #E4BFE1)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                <motion.span
                                    className="relative block"
                                    style={{ transformStyle: 'preserve-3d' }}
                                    animate={{
                                        textShadow: [
                                            '5px 5px 0px rgba(0,0,0,0.2), 10px 10px 0px rgba(0,0,0,0.15), 15px 15px 0px rgba(0,0,0,0.1), 20px 20px 30px rgba(0,0,0,0.1)',
                                            '5px 5px 0px rgba(0,0,0,0.2), 10px 10px 0px rgba(0,0,0,0.15), 15px 15px 20px rgba(89,122,231,0.2), 20px 20px 30px rgba(188,142,226,0.2)',
                                            '5px 5px 0px rgba(0,0,0,0.2), 10px 10px 10px rgba(0,0,0,0.15), 15px 15px 0px rgba(0,0,0,0.1), 20px 20px 30px rgba(0,0,0,0.1)',
                                        ],
                                        filter: [
                                            'drop-shadow(0 0 10px rgba(255,255,255,0.7))',
                                            'drop-shadow(0 0 25px rgba(168, 85, 247, 0.6))',
                                            'drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))',
                                            'drop-shadow(0 0 10px rgba(255,255,255,0.7))',
                                        ]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    GP
                                </motion.span>
                                {/* Inner 3D layer for more depth */}
                                <span 
                                    className="absolute inset-0 block"
                                    style={{
                                        transform: 'translateZ(-20px)',
                                        background: 'linear-gradient(45deg, #7e8ac7, #b192c4, #d4d4d4, #8fb8d8, #c7a1be)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        opacity: 0.5,
                                    }}
                                >
                                    GP
                                </span>
                            </motion.h1>
                        </div>
                    </motion.div>

                    {/* Main Text */}
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className={`text-5xl md:text-7xl font-bold leading-tight ${
                                theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                            }`}
                        >
                            Computer Science
                            <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${
                                theme === 'dark' 
                                    ? 'from-blue-400 to-indigo-500' 
                                    : 'from-blue-600 to-indigo-600'
                            }`}>
                                Student
                            </span>
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}
                        >
                            Passionate about creating innovative solutions through code.
                            Exploring the intersection of technology and creativity.
                        </motion.p>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            onClick={() => scrollToSection('projects')}
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            View My Work
                        </Button>
                        
                        <Button
                            size="lg"
                            variant="outline"
                            className={`relative px-8 py-6 text-lg transition-all duration-300 overflow-hidden ${
                                theme === 'dark'
                                    ? 'border-2 border-gray-700 text-gray-300 hover:border-blue-400 hover:text-blue-300 group'
                                    : 'border-2 border-gray-300 text-gray-800 hover:bg-black/5 hover:border-blue-500'
                            }`}
                        >
                            {/* Glowing effect for dark theme */}
                            {theme === 'dark' && (
                                <span className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
                            )}
                            <span className="relative flex items-center">
                                <Download className="w-5 h-5 mr-2" />
                                Download Resume
                            </span>
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="flex justify-center space-x-6 pt-8"
                    >
                        <a href="#" className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                            theme === 'dark' 
                                ? 'bg-white/10 hover:bg-white/20' 
                                : 'bg-white hover:bg-gray-50'
                        }`}>
                            <Github className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`} />
                        </a>
                        <a href="#" className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                            theme === 'dark' 
                                ? 'bg-white/10 hover:bg-white/20' 
                                : 'bg-white hover:bg-gray-50'
                        }`}>
                            <Linkedin className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                        </a>
                        <a href="#" className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                            theme === 'dark' 
                                ? 'bg-white/10 hover:bg-white/20' 
                                : 'bg-white hover:bg-gray-50'
                        }`}>
                            <Mail className={`w-6 h-6 ${theme === 'dark' ? 'text-red-400' : 'text-red-500'}`} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <button
                        onClick={() => scrollToSection('about')}
                        className={`p-2 rounded-full transition-all duration-300 ${
                            theme === 'dark' 
                                ? 'hover:bg-white/10' 
                                : 'hover:bg-black/5'
                        }`}
                    >
                        <ArrowDown className={`w-6 h-6 animate-bounce ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
