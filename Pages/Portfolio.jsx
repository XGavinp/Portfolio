import React, { useState } from 'react';
import Navigation from '../components/portfolio/Navigation.jsx';
import HeroSection from '../components/portfolio/HeroSection.jsx';
import AboutSection from '../components/portfolio/AboutSection.jsx';
import SkillsSection from '../components/portfolio/SkillsSection.jsx';
import ExperienceSection from '../components/portfolio/ExperienceSection.jsx';
import ProjectsSection from '../components/portfolio/ProjectsSection.jsx';
import PublicationsSection from '../components/portfolio/PublicationsSection.jsx';
import ContactSection from '../components/portfolio/ContactSection.jsx';
import Footer from '../components/portfolio/Footer.jsx';
import ThemeSwitcher from '../components/portfolio/ThemeSwitcher.jsx';

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