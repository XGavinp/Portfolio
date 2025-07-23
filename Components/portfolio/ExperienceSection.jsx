import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/entities/Experience';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building } from 'lucide-react';
import { format } from 'date-fns';

export default function ExperienceSection({ theme }) {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        loadExperiences();
    }, []);

    const loadExperiences = async () => {
        const experienceData = await Experience.list('-start_date');
        setExperiences(experienceData);
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Present';
        return format(new Date(dateString), 'MMM yyyy');
    };

    return (
        <section id="experience" className={`py-20 ${
            theme === 'dark' ? 'bg-[#0a0a14]' : 'bg-gradient-to-br from-gray-50 to-blue-50'
        }`}>
            <div className="max-w-6xl mx-auto px-6">
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
                        Work <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                            theme === 'dark' 
                                ? 'from-blue-400 to-indigo-500' 
                                : 'from-blue-600 to-indigo-600'
                        }`}>Experience</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        My professional journey and the valuable experiences that have shaped my career
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                                theme === 'dark' 
                                    ? 'border-gray-700 bg-[#141624]/60' 
                                    : 'border-gray-200 bg-white/80'
                            } backdrop-blur-sm`}>
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="space-y-2">
                                            <h3 className={`text-2xl font-bold ${
                                                theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                                            }`}>
                                                {experience.title}
                                            </h3>
                                            <div className="flex items-center gap-4 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Building className={`w-4 h-4 ${
                                                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                                    }`} />
                                                    <span className={`font-medium ${
                                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                                    }`}>
                                                        {experience.company}
                                                    </span>
                                                </div>
                                                {experience.location && (
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className={`w-4 h-4 ${
                                                            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                        }`} />
                                                        <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                                            {experience.location}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <CalendarDays className={`w-4 h-4 ${
                                                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                            }`} />
                                            <span className={`font-medium ${
                                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                                {formatDate(experience.start_date)} - {formatDate(experience.end_date)}
                                            </span>
                                            {experience.current && (
                                                <Badge className="bg-green-500/20 text-green-600 border-green-500/30">
                                                    Current
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className={`mb-6 leading-relaxed ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {experience.description}
                                    </p>
                                    {experience.skills && experience.skills.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {experience.skills.map((skill, skillIndex) => (
                                                <Badge
                                                    key={skillIndex}
                                                    variant="secondary"
                                                    className={`${
                                                        theme === 'dark'
                                                            ? 'bg-blue-900/50 text-blue-300 border-blue-800/50'
                                                            : 'bg-blue-100 text-blue-800 border-blue-200'
                                                    }`}
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {experiences.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                            theme === 'dark' 
                                ? 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20' 
                                : 'bg-gradient-to-br from-blue-100 to-indigo-100'
                        }`}>
                            <Building className={`w-12 h-12 ${
                                theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                            }`} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-4 ${
                            theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                        }`}>No Experience Added Yet</h3>
                        <p className={`text-xl max-w-md mx-auto ${
                            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                        }`}>
                            Work experience will be displayed here once added to the portfolio.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}