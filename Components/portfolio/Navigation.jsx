import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation({ theme }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Set initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'publications', label: 'Publications' },
        { id: 'contact', label: 'Contact' }
    ];

    const navContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 25 }
        }
    };

    return (
        <>
            <div className={`fixed top-0 w-full z-40 transition-all duration-300 p-4 ${isMobileMenuOpen ? 'pointer-events-none' : ''}`}>
                <motion.nav
                    initial={{ y: -120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.3 }}
                    className={`max-w-6xl mx-auto rounded-full transition-all duration-300 overflow-hidden ${
                        isScrolled 
                            ? theme === 'dark'
                                ? 'bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl'
                                : 'bg-white/40 backdrop-blur-xl border border-black/10 shadow-2xl'
                            : 'bg-transparent border border-transparent'
                    }`}
                >
                    <div className="px-8 md:pr-24 py-3">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <motion.button
                                onClick={() => scrollToSection('home')}
                                whileHover={{ scale: 1.05, textShadow: `0 0 8px ${theme === 'dark' ? '#60a5fa' : '#2563eb'}` }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-2xl font-bold bg-gradient-to-r ${
                                    theme === 'dark' 
                                        ? 'from-blue-400 to-indigo-500' 
                                        : 'from-blue-600 to-indigo-600'
                                } bg-clip-text text-transparent transition-all duration-300`}
                            >
                                GP
                            </motion.button>

                            {/* Desktop Navigation */}
                            <motion.div 
                                className="hidden md:flex space-x-8"
                                variants={navContainerVariants}
                                initial="hidden"
                                animate="visible"
                                style={{ perspective: '500px' }}
                            >
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.id}
                                        variants={navItemVariants}
                                        whileHover={{ scale: 1.1, y: -3, rotateX: 15, z: 20 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-sm font-medium transition-colors duration-300 ${
                                            theme === 'dark'
                                                ? 'text-gray-300 hover:text-blue-400'
                                                : 'text-gray-700 hover:text-blue-600'
                                        }`}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </motion.div>

                            {/* Mobile Menu Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
                                ) : (
                                    <Menu className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
                                )}
                            </Button>
                        </div>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-24 left-4 right-4 z-30 rounded-2xl overflow-hidden shadow-2xl border ${
                        theme === 'dark' 
                            ? 'bg-[#0a0a14]/95 backdrop-blur-md border-gray-800/50' 
                            : 'bg-white/95 backdrop-blur-md border-gray-200/50'
                    }`}
                >
                    <div className="p-6 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left py-2 text-lg font-medium transition-colors duration-300 rounded-md px-4 ${
                                    theme === 'dark'
                                        ? 'text-gray-300 hover:bg-white/10 hover:text-blue-400'
                                        : 'text-gray-700 hover:bg-black/5 hover:text-blue-600'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
}