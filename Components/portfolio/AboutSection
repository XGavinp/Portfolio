
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Brain, Trophy } from 'lucide-react';

export default function AboutSection({ theme }) {
    const highlights = [
        {
            icon: GraduationCap,
            title: "Education",
            description: "Pursuing Computer Science degree with focus on algorithms and software engineering"
        },
        {
            icon: Code,
            title: "Development",
            description: "Full-stack development with modern frameworks and best practices"
        },
        {
            icon: Brain,
            title: "Problem Solving",
            description: "Strong analytical thinking and creative approach to complex challenges"
        },
        {
            icon: Trophy,
            title: "Achievements",
            description: "Hackathon winner and active contributor to open-source projects"
        }
    ];

    const timelineEvents = [
        {
            year: '2022',
            title: 'Started Computer Science',
            description: 'Began my journey into programming and algorithms',
            align: 'left'
        },
        {
            year: '2023',
            title: 'First Major Project',
            description: 'Built my first full-stack web application',
            align: 'right'
        },
        {
            year: '2024',
            title: 'Present Day',
            description: 'Continuing to learn and build amazing projects',
            align: 'left'
        }
    ];

    // New variants for staggered animation
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const motionProps = (align) => ({
        initial: { opacity: 0, x: align === 'left' ? -100 : 100, scale: 0.8 },
        whileInView: { opacity: 1, x: 0, scale: 1 },
        whileHover: { scale: 1.05, z: 20 },
        transition: { duration: 0.8, type: 'spring', bounce: 0.4 },
        viewport: { once: true, amount: 0.5 }
    });

    return (
        <section id="about" className={`py-20 relative ${
            theme === 'dark' ? 'bg-[#0f111e]' : 'bg-white'
        }`}>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                        theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                    }`}>
                        About <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                            theme === 'dark' 
                                ? 'from-blue-400 to-indigo-500' 
                                : 'from-blue-600 to-indigo-600'
                        }`}>Me</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        I'm a passionate computer science student who loves turning complex problems 
                        into elegant solutions. Currently exploring machine learning, web development, 
                        and software architecture while building projects that make a difference.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={highlight.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                                theme === 'dark' 
                                    ? 'border-gray-700 bg-[#141624]/60' 
                                    : 'border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50'
                            } backdrop-blur-sm`}>
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                                        <highlight.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className={`text-xl font-bold mb-4 ${
                                        theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                                    }`}>
                                        {highlight.title}
                                    </h3>
                                    <p className={`leading-relaxed ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {highlight.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className={`text-3xl font-bold text-center mb-12 ${
                        theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                    }`}>
                        My Journey
                    </h3>
                    <div className="relative" style={{ perspective: '1000px' }}>
                        <motion.div 
                            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500"
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            {/* Glowing effect for the line */}
                            <motion.div 
                                className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-400 to-indigo-400 blur-sm"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.7 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                            />
                        </motion.div>
                        
                        <motion.div 
                            className="space-y-12"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {timelineEvents.map((event, index) => (
                                <motion.div 
                                    key={index} 
                                    {...motionProps(event.align)} 
                                    className={`flex items-center relative ${event.align === 'right' ? 'flex-row-reverse' : ''}`}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div className={`flex-1 ${event.align === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                        <motion.h4 variants={itemVariants} className={`text-xl font-bold ${
                                            theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                                        }`}>{event.title}</motion.h4>
                                        <motion.p variants={itemVariants} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                            {event.description}
                                        </motion.p>
                                    </div>
                                    <motion.div 
                                        className={`w-6 h-6 bg-blue-500 rounded-full border-4 shadow-lg z-10 ${
                                            theme === 'dark' ? 'border-[#0f111e]' : 'border-white'
                                        }`}
                                        initial={{ scale: 0 }}
                                        whileInView={{ 
                                            scale: 1, 
                                            boxShadow: theme === 'dark' 
                                                ? '0 0 15px rgba(59, 130, 246, 0.8), 0 0 5px rgba(255,255,255,0.7)'
                                                : '0 0 15px rgba(59, 130, 246, 0.6), 0 0 5px rgba(0,0,0,0.2)'
                                        }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
                                    >
                                    </motion.div>
                                    <div className={`flex-1 ${event.align === 'left' ? 'pl-8' : 'pr-8 text-right'}`}>
                                        <motion.span variants={itemVariants} className={`font-semibold ${
                                            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                        }`}>{event.year}</motion.span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
