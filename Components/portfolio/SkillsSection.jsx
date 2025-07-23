import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/entities/Skill';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const SkillCard = ({ skill, theme }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        const rotateX = (y / height) * -30;
        const rotateY = (x / width) * 30;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (card) {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
    };

    const getCategoryColor = (category) => {
        const colors = {
            dark: {
                programming: 'bg-blue-900/50 text-blue-300',
                web: 'bg-green-900/50 text-green-300',
                database: 'bg-purple-900/50 text-purple-300',
                tools: 'bg-orange-900/50 text-orange-300',
                frameworks: 'bg-pink-900/50 text-pink-300'
            },
            light: {
                programming: 'bg-blue-100 text-blue-800',
                web: 'bg-green-100 text-green-800',
                database: 'bg-purple-100 text-purple-800',
                tools: 'bg-orange-100 text-orange-800',
                frameworks: 'bg-pink-100 text-pink-800'
            }
        };
        return colors[theme][category] || (theme === 'dark' ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-800');
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.1s linear' }}
        >
            <Card className={`h-full transition-shadow duration-300 hover:shadow-blue-500/20 ${
                theme === 'dark' 
                    ? 'border-gray-700 bg-[#141624]/60' 
                    : 'border-gray-200 bg-white/80'
            } backdrop-blur-sm`}>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-lg font-bold ${
                            theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                        }`}>{skill.name}</h3>
                        <Badge className={`${getCategoryColor(skill.category)} border-0`}>
                            {skill.category}
                        </Badge>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Proficiency</span>
                            <span className={`font-semibold ${
                                theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                            }`}>{skill.proficiency}/10</span>
                        </div>
                        <Progress 
                            value={skill.proficiency * 10} 
                            className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-indigo-500" 
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default function SkillsSection({ theme }) {
    const [skills, setSkills] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        loadSkills();
    }, []);

    const loadSkills = async () => {
        const skillsData = await Skill.list();
        setSkills(skillsData);
    };

    const categories = ['all', 'programming', 'web', 'database', 'tools', 'frameworks'];
    
    const filteredSkills = selectedCategory === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === selectedCategory);

    return (
        <section id="skills" className={`py-20 ${
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
                        Technical <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                            theme === 'dark' 
                                ? 'from-blue-400 to-indigo-500' 
                                : 'from-blue-600 to-indigo-600'
                        }`}>Skills</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        A comprehensive overview of my technical abilities and proficiency levels
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <Badge
                            key={category}
                            variant="outline"
                            className={`px-6 py-2 cursor-pointer transition-all duration-300 ${
                                selectedCategory === category 
                                    ? 'bg-blue-500 text-white border-blue-500' 
                                    : theme === 'dark'
                                    ? 'border-gray-600 text-gray-300 hover:bg-white/10 hover:border-blue-400'
                                    : 'border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300'
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category === 'all' ? 'All Skills' : category.charAt(0).toUpperCase() + category.slice(1)}
                        </Badge>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <SkillCard skill={skill} theme={theme} />
                        </motion.div>
                    ))}
                </div>

                {filteredSkills.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className={`text-xl ${
                            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                        }`}>No skills found in this category yet.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}