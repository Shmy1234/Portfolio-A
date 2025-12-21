import { Helmet } from "react-helmet-async";
import { portfolioData } from "@/data/portfolio";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = `${portfolioData.personal.name} | Software Engineer Portfolio`,
  description = portfolioData.personal.statement,
  image = "/og-image.png",
  url = "https://sahilregonda.dev",
}: SEOProps) {
  const fullTitle = title;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content={portfolioData.personal.name} />
      <meta
        name="keywords"
        content="software engineer, portfolio, React, TypeScript, AI, machine learning, web developer, Toronto, University of Toronto"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.ico" />
    </Helmet>
  );
}
