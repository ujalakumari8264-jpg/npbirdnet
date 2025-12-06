import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../utils/seoConfig';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  image,
  type = 'website',
  schema,
  noindex = false
}) => {
  const fullTitle = title || siteConfig.defaultTitle;
  const fullDescription = description || siteConfig.defaultDescription;
  const fullKeywords = keywords || siteConfig.defaultKeywords;
  const canonicalUrl = canonical ? `${siteConfig.siteUrl}${canonical}` : siteConfig.siteUrl;
  const ogImage = image || `${siteConfig.siteUrl}${siteConfig.image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={siteConfig.author} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Surat" />
      <meta name="geo.position" content="21.1702;72.8311" />
      <meta name="ICBM" content="21.1702, 72.8311" />

      {/* Schema.org JSON-LD */}
      {schema && schema.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
