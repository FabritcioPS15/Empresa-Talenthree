import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = '/src/medios/logo.png',
  url,
  type = 'website',
  author = 'TalentThree',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteUrl = 'https://talenthree.com'; // Cambia por tu dominio real
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="TalentThree" />
      <meta property="og:locale" content="es_PE" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/src/medios/ttlogo.png" />
      <link rel="apple-touch-icon" href="/src/medios/ttlogo.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? "Article" : "Organization",
          "name": "TalentThree",
          "url": siteUrl,
          "logo": `${siteUrl}/src/medios/logo.png`,
          "description": "Centro de formación profesional y consultoría empresarial en Perú",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PE",
            "addressLocality": "Lima"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+51-999-123-456",
            "contactType": "customer service",
            "availableLanguage": "Spanish"
          },
          "sameAs": [
            "https://facebook.com/talenthree",
            "https://linkedin.com/company/talenthree",
            "https://instagram.com/talenthree"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 