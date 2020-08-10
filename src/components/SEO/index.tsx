import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Facebook from './facebook';
import Twitter from './twitter';
import { reviews } from './reviews';

const defaultNode = {
  modifiedTime: '',
  birthTime: ''
}

interface Props {
  title: string;
  desc: string;
  banner: string;
  pathname: string;
  node: {
    modifiedTime: string;
    birthTime: string;
  };
  individual: boolean;
}

const SEO: React.FC<Props> = ({
  title = '',
  desc = '',
  banner = '',
  pathname = '',
  node = defaultNode,
  individual = false
}) => {
  const { site } = useStaticQuery(query)

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      headline,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook,
    },
  } = site

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ''}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'ProfessionalService',
    name: defaultTitle,
    url: siteUrl,
    sameAs: [
      "https://www.facebook.com/LooneyBros/",
      "https://www.facebook.com/LooneyBrosCalgary/",
      "https://www.instagram.com/looney.bros.photography/",
    ],
    logo: "https://www.looneybros.com/logos/logo-black-transparent.png",
    priceRange: "$$",
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${defaultBanner}`,
    },
    headline,
    description: defaultDescription,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    address: {
       "@type": "PostalAddress",
       streetAddress: "69 rue Lorette",
       addressLocality: "Dieppe",
       addressRegion: "NB",
       postalCode: "E1A 2E8",
       addressCountry: "CA"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "46.099718",
      longitude: "-64.683428"
    },
    telephone: "+1 (506) 875-0369",
    author: {
      "@type": 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: '2020',
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: '2020-08-01T00:00:00+00:00',
    dateModified: buildTime,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "29"
    },
    review: reviews,
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/about`,
        name: 'About',
      },
      position: 2,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/projects`,
        name: 'About',
      },
      position: 3,
    }
  ]

  let schemaArticle = null

  if (individual) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author,
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}${defaultBanner}`,
        },
      },
      datePublished: node ? node.birthTime : '2019-03-10T10:30:00+01:00',
      dateModified: node ? node.modifiedTime : '2019-03-10T10:30:00+01:00',
      description: seo.description,
      headline: seo.title,
      inLanguage: 'en',
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 5,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="gatsby-starter" content="Gatsby Starter Portfolio Jodie" />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!individual && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
        {individual && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={individual ? 'article' : 'website'}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter} />
    </>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: titleAlt
        defaultDescription: description
        defaultBanner: logo
        headline
        siteLanguage
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`;
