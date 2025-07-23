import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Publication } from '@/entities/Publication';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Calendar } from 'lucide-react';
import { format } from 'date-fns';

export default function PublicationsSection({ theme }) {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        loadPublications();
    }, []);

    const loadPublications = async () => {
        const publicationData = await Publication.list('-publication_date');
        setPublications(publicationData);
    };

    const getStatusColor = (status) => {
        const colors = {
            published: theme === 'dark' ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800',
            accepted: theme === 'dark' ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800',
            under_review: theme === 'dark' ? 'bg-yellow-900/50 text-yellow-300' : 'bg-yellow-100 text-yellow-800',
            in_preparation: theme === 'dark' ? 'bg-gray-900/50 text-gray-300' : 'bg-gray-100 text-gray-800'
        };
        return colors[status] || colors.published;
    };

    return (
        <section id="publications" className={`py-20 ${
            theme === 'dark' ? 'bg-[#0f111e]' : 'bg-white'
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
                        Research <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                            theme === 'dark' 
                                ? 'from-blue-400 to-indigo-500' 
                                : 'from-blue-600 to-indigo-600'
                        }`}>Publications</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        My contributions to the academic and research community
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {publications.map((publication, index) => (
                        <motion.div
                            key={publication.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                                theme === 'dark' 
                                    ? 'border-gray-700 bg-[#141624]/60' 
                                    : 'border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50'
                            } backdrop-blur-sm`}>
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                        <div className="space-y-3">
                                            <h3 className={`text-2xl font-bold leading-tight ${
                                                theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                                            }`}>
                                                {publication.title}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <FileText className={`w-4 h-4 ${
                                                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                                    }`} />
                                                    <span className={`font-medium ${
                                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                                    }`}>
                                                        {publication.publication}
                                                    </span>
                                                </div>
                                                {publication.publication_date && (
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className={`w-4 h-4 ${
                                                            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                        }`} />
                                                        <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                                            {format(new Date(publication.publication_date), 'MMM yyyy')}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <Badge className={getStatusColor(publication.status)}>
                                                    {publication.status.replace('_', ' ').toUpperCase()}
                                                </Badge>
                                            </div>
                                        </div>
                                        {publication.url && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                asChild
                                                className={`shrink-0 ${
                                                    theme === 'dark'
                                                        ? 'border-gray-600 text-gray-300 hover:bg-white/10'
                                                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                                <a href={publication.url} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    View Paper
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    {publication.authors && publication.authors.length > 0 && (
                                        <div className="mb-4">
                                            <span className={`text-sm font-medium ${
                                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                                Authors: {publication.authors.join(', ')}
                                            </span>
                                        </div>
                                    )}
                                    {publication.abstract && (
                                        <p className={`leading-relaxed ${
                                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {publication.abstract}
                                        </p>
                                    )}
                                    {publication.doi && (
                                        <div className="mt-4 text-sm">
                                            <span className={`font-medium ${
                                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                                DOI: {publication.doi}
                                            </span>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {publications.length === 0 && (
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
                            <FileText className={`w-12 h-12 ${
                                theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                            }`} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-4 ${
                            theme === 'dark' ? 'text-gray-50' : 'text-gray-900'
                        }`}>No Publications Yet</h3>
                        <p className={`text-xl max-w-md mx-auto ${
                            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                        }`}>
                            Research publications will be displayed here once added to the portfolio.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}