import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SendEmail } from '@/integrations/Core';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react';

export default function ContactSection({ theme }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await SendEmail({
                to: 'student@example.com',
                subject: `Portfolio Contact: ${formData.subject}`,
                body: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
                `
            });
            
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'student@university.edu',
            href: 'mailto:student@university.edu'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'University Campus, City',
            href: null
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567'
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            title: 'GitHub',
            href: 'https://github.com/username',
            color: theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-900'
        },
        {
            icon: Linkedin,
            title: 'LinkedIn',
            href: 'https://linkedin.com/in/username',
            color: theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'
        },
        {
            icon: Twitter,
            title: 'Twitter',
            href: 'https://twitter.com/username',
            color: theme === 'dark' ? 'hover:text-blue-300' : 'hover:text-blue-400'
        }
    ];

    return (
        <section id="contact" className={`py-20 ${
            theme === 'dark' ? 'bg-[#0a0a14]' : 'bg-gradient-to-br from-slate-50 to-blue-50'
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
                        Get In <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                            theme === 'dark' 
                                ? 'from-blue-400 to-indigo-500' 
                                : 'from-blue-600 to-indigo-600'
                        }`}>Touch</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        I'm always interested in new opportunities and collaborations. 
                        Let's connect and discuss how we can work together!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className={`shadow-xl backdrop-blur-sm ${
                            theme === 'dark' 
                                ? 'border-gray-700 bg-[#141624]/60' 
                                : 'border-gray-200 bg-white/80'
                        }`}>
                            <CardContent className="p-8">
                                <h3 className={`text-2xl font-bold mb-6 ${
                                    theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                                }`}>Send a Message</h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Input
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className={`h-12 bg-transparent focus:border-blue-500 ${
                                                    theme === 'dark' 
                                                        ? 'border-gray-600 text-white placeholder:text-gray-400' 
                                                        : 'border-gray-300 text-gray-900 placeholder:text-gray-500'
                                                }`}
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={`h-12 bg-transparent focus:border-blue-500 ${
                                                    theme === 'dark' 
                                                        ? 'border-gray-600 text-white placeholder:text-gray-400' 
                                                        : 'border-gray-300 text-gray-900 placeholder:text-gray-500'
                                                }`}
                                            />
                                        </div>
                                    </div>
                                    
                                    <Input
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className={`h-12 bg-transparent focus:border-blue-500 ${
                                            theme === 'dark' 
                                                ? 'border-gray-600 text-white placeholder:text-gray-400' 
                                                : 'border-gray-300 text-gray-900 placeholder:text-gray-500'
                                        }`}
                                    />
                                    
                                    <Textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className={`h-32 resize-none bg-transparent focus:border-blue-500 ${
                                            theme === 'dark' 
                                                ? 'border-gray-600 text-white placeholder:text-gray-400' 
                                                : 'border-gray-300 text-gray-900 placeholder:text-gray-500'
                                        }`}
                                    />
                                    
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg"
                                    >
                                        {isSubmitting ? (
                                            'Sending...'
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={ {once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className={`text-2xl font-bold mb-6 ${
                                theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                            }`}>Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className={`font-semibold ${
                                                theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                                            }`}>{info.title}</h4>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className={`transition-colors duration-300 ${
                                                        theme === 'dark'
                                                            ? 'text-gray-400 hover:text-blue-400'
                                                            : 'text-gray-600 hover:text-blue-600'
                                                    }`}
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className={`text-2xl font-bold mb-6 ${
                                theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                            }`}>Follow Me</h3>
                            <div className="flex space-x-6">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.title}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${social.color} ${
                                            theme === 'dark' 
                                                ? 'bg-white/10 hover:bg-white/20' 
                                                : 'bg-white hover:bg-gray-50'
                                        }`}
                                    >
                                        <social.icon className={`w-6 h-6 ${
                                            theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                                        }`} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}