import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThemeSwitcher({ theme, toggleTheme }) {
    return (
        <div className="fixed top-6 right-6 z-50">
            <div className="relative">
                {/* Glowing Ring Effect */}
                <div className={`absolute inset-0 rounded-full animate-pulse ${
                    theme === 'dark' 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 opacity-75' 
                        : 'bg-gradient-to-r from-yellow-400 to-orange-500 opacity-75'
                } blur-lg scale-110`}></div>
                
                {/* Continuous Glow */}
                <div className={`absolute inset-0 rounded-full ${
                    theme === 'dark' 
                        ? 'bg-blue-400 shadow-[0_0_20px_#60a5fa,0_0_40px_#3b82f6,0_0_60px_#1d4ed8]' 
                        : 'bg-yellow-400 shadow-[0_0_20px_#facc15,0_0_40px_#eab308,0_0_60px_#ca8a04]'
                } opacity-60 animate-pulse`}></div>
                
                {/* Main Button */}
                <Button
                    onClick={toggleTheme}
                    variant="ghost"
                    size="icon"
                    className={`relative w-12 h-12 rounded-full backdrop-blur-sm border-2 transition-all duration-300 hover:scale-110 ${
                        theme === 'dark'
                            ? 'bg-slate-800/80 border-blue-400/50 text-blue-300 hover:bg-slate-700/80 hover:border-blue-300'
                            : 'bg-white/80 border-yellow-400/50 text-yellow-600 hover:bg-yellow-50/80 hover:border-yellow-300'
                    }`}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={theme}
                            initial={{ y: -20, opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ y: 20, opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-6 h-6 drop-shadow-lg" />
                            ) : (
                                <Moon className="w-6 h-6 drop-shadow-lg" />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </Button>
                
                {/* Orbiting Light Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className={`absolute w-1 h-1 rounded-full ${
                                theme === 'dark' ? 'bg-blue-300' : 'bg-yellow-400'
                            } opacity-80`}
                            style={{
                                animation: `orbit 3s linear infinite`,
                                animationDelay: `${i * 1}s`,
                                transformOrigin: '24px 24px'
                            }}
                        />
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                @keyframes orbit {
                    from {
                        transform: rotate(0deg) translateX(30px) rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg) translateX(30px) rotate(-360deg);
                    }
                }
            `}</style>
        </div>
    );
}