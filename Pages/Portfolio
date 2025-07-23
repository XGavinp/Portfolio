import React, { useState } from 'react';
import Navigation from '../components/portfolio/Navigation';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import PublicationsSection from '../components/portfolio/PublicationsSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';
import ThemeSwitcher from '../components/portfolio/ThemeSwitcher';

export default function Portfolio() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className={`min-h-screen transition-colors duration-500 ${
            theme === 'dark' 
                ? 'bg-[#0a0a14] text-gray-200' 
                : 'bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 text-gray-800'
        }`}>
            <Navigation theme={theme} />
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            <HeroSection theme={theme} />
            <AboutSection theme={theme} />
            <SkillsSection theme={theme} />
            <ExperienceSection theme={theme} />
            <ProjectsSection theme={theme} />
            <PublicationsSection theme={theme} />
            <ContactSection theme={theme} />
            <Footer theme={theme} />
        </div>
    );
}