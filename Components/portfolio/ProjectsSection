import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/entities/Project';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectCard = ({ project, theme, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        const centerX = width / 2;
        const centerY = height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(50px)
            scale3d(1.05, 1.05, 1.05)
        `;

        // Dynamic lighting effect
        const gradient = `radial-gradient(circle at ${x}px ${y}px, 
            ${theme === 'dark' 
                ? 'rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%'
                : 'rgba(59, 130, 246, 0.1) 0%, rgba(29, 78, 216, 0.05) 50%, transparent 100%'
            })`;
        
        card.style.background = theme === 'dark' 
            ? `linear-gradient(135deg, #141624 0%, #1e293b 100%), ${gradient}`
            : `linear-gradient(135deg, #ffffff 0%, #f8fafc 100%), ${gradient}`;
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        const card = cardRef.current;
        if (card) {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale3d(1, 1, 1)';
            card.style.background = '';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
            }}
            viewport={{ once: true }}
            className="relative group"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Floating Shadow */}
            <div className={`absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20' 
                    : 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10'
            } transform translate-y-8 scale-105`}></div>
            
            <Card
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`h-full transition-all duration-300 overflow-hidden relative ${
                    theme === 'dark' 
                        ? 'border-gray-700/50 bg-[#141624]/80' 
                        : 'border-gray-200/50 bg-white/90'
                } backdrop-blur-sm cursor-pointer`}
                style={{
                    transition: 'transform 0.1s ease-out, background 0.3s ease',
                    transformStyle: 'preserve-3d'
                }}
            >
                {/* Holographic Border Effect */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    theme === 'dark'
                        ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20'
                        : 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10'
                } p-[1px]`}>
                    <div className={`w-full h-full rounded-xl ${
                        theme === 'dark' ? 'bg-[#141624]' : 'bg-white'
                    }`}></div>
                </div>
                
                {/* Glowing Particles */}
                {isHovered && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute w-1 h-1 rounded-full ${
                                    theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
                } opacity-70 animate-ping`}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: '2s'
                                }}
                            />
                        ))}
                    </div>
                )}

                <div className="relative z-10">
                    {project.image_url && (
                        <div className="relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                            <img
                                src={project.image_url}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                                style={{ filter: 'contrast(1.1) saturate(1.2)' }}
                            />
                            {project.featured && (
                                <Badge className="absolute top-3 right-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                </Badge>
                            )}
                        </div>
                    )}
                    
                    <CardHeader className="pb-4 relative">
                        <div className="flex items-start justify-between">
                            <h3 className={`text-xl font-bold transition-all duration-300 ${
                                theme === 'dark' 
                                    ? 'text-gray-50 group-hover:text-blue-400 group-hover:drop-shadow-lg' 
                                    : 'text-gray-900 group-hover:text-blue-600 group-hover:drop-shadow-md'
                            }`}>
                                {project.title}
                            </h3>
                            {project.featured && !project.image_url && (
                                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                </Badge>
                            )}
                        </div>
                    </CardHeader>

                    <CardContent className="pt-0 flex flex-col h-full relative">
                        <p className={`mb-6 flex-grow leading-relaxed transition-colors duration-300 ${
                            theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
                        }`}>
                            {project.description}
                        </p>

                        {/* Technologies */}
                        {project.technologies && project.technologies.length > 0 && (
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            variant="secondary"
                                            className={`border-0 transition-all duration-300 hover:scale-110 ${
                                                theme === 'dark'
                                                    ? 'bg-blue-900/50 text-blue-300 hover:bg-blue-800/60'
                                                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                                            }`}
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-auto">
                            {project.github_url && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className={`flex-1 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                                        theme === 'dark'
                                            ? 'border-gray-600 text-gray-300 hover:bg-white/10 hover:border-blue-400 hover:text-blue-300'
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900'
                                    }`}
                                >
                                    <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </a>
                                </Button>
                            )}
                            {project.live_url && (
                                <Button
                                    size="sm"
                                    asChild
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </div>
            </Card>
        </motion.div>
    );
};

export default function ProjectsSection({ theme }) {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        const projectsData = await Project.list('-created_date');
        setProjects(projectsData);
    };

    const filteredProjects = filter === 'all' 
        ? projects 
        : filter === 'featured'
        ? projects.filter(project => project.featured)
        : projects;

    return (
        <section id="projects" className={`py-20 relative overflow-hidden ${
            theme === 'dark' ? 'bg-[#0f111e]' : 'bg-white'
        }`}>
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-5">
                <div className={`w-full h-full ${
                    theme === 'dark' 
                        ? 'bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)]'
                        : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
                } bg-[size:50px_50px] animate-pulse`}></div>
            </div>
            
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
                        Featured <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                            theme === 'dark' 
                                ? 'from-blue-400 to-indigo-500' 
                                : 'from-blue-600 to-indigo-600'
                        }`}>Projects</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        A showcase of my best work, demonstrating various technologies and problem-solving approaches
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-4 mb-12"
                >
                    <Button
                        variant={filter === 'all' ? 'default' : 'outline'}
                        onClick={() => setFilter('all')}
                        className={`transition-all duration-300 hover:scale-105 ${
                            filter === 'all' 
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                                : theme === 'dark'
                                ? 'text-gray-300 border-gray-600 hover:bg-white/10 hover:border-blue-400'
                                : 'text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                        }`}
                    >
                        All Projects
                    </Button>
                    <Button
                        variant={filter === 'featured' ? 'default' : 'outline'}
                        onClick={() => setFilter('featured')}
                        className={`transition-all duration-300 hover:scale-105 ${
                            filter === 'featured' 
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                                : theme === 'dark'
                                ? 'text-gray-300 border-gray-600 hover:bg-white/10 hover:border-blue-400'
                                : 'text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                        }`}
                    >
                        <Star className="w-4 h-4 mr-2" />
                        Featured
                    </Button>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            theme={theme}
                            index={index}
                        />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
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
                            <Star className={`w-12 h-12 ${
                                theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                            }`} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-4 ${
                            theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                        }`}>No Projects Yet</h3>
                        <p className={`text-xl max-w-md mx-auto ${
                            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                        }`}>
                            Projects will be displayed here once added to the portfolio.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}