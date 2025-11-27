import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    author?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "Prismha | Agencia de Automatización e IA",
    description = "Impulsa tu empresa con el poder de la Inteligencia Artificial. Optimizamos procesos, mejoramos decisiones y creamos soluciones a medida.",
    keywords = "Inteligencia Artificial, Automatización, Chatbots, IA España, Automatización empresarial, Consultoría IA, Prismha, ROI IA",
    image = "https://prismha.com/logo-google.png",
    url = "https://www.prismha.com",
    type = "website",
    publishedTime,
    author = "Prismha"
}) => {
    const siteTitle = title === "Prismha | Agencia de Automatización e IA" ? title : `${title} | Prismha`;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Prismha" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`${title} - Prismha`} />
            <meta property="og:locale" content="es_ES" />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {author && <meta property="article:author" content={author} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={`${title} - Prismha`} />
            <meta name="twitter:creator" content="@prismha" />
            <meta name="twitter:site" content="@prismha" />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Additional SEO */}
            <meta name="language" content="Spanish" />
            <meta httpEquiv="content-language" content="es" />
        </Helmet>
    );
};

export default SEO;
