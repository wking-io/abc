import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || defaultImage,
        url: `${siteUrl}${pathname || "/"}`,
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <link rel="canonical" href={seo.url} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={siteUrl + seo.image.src} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {article ? (
              <meta property="og:type" content="article" />
            ) : (
              <meta property="og:type" content="website" />
            )}
            {seo.title && (
              <meta
                property="og:title"
                content={seo.title}
              />
            )}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            <meta property="og:image" content={siteUrl + seo.image.src} />
            <meta property="og:image:width" content={seo.image.width} />
            <meta property="og:image:height" content={seo.image.height} />
            <meta property="og:image:alt" content={seo.image.alt} />
            <meta name="twitter:card" content="summary" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && (
              <meta
                name="twitter:title"
                content={seo.title}
              />
            )}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            <meta name="twitter:image" content={siteUrl + seo.image.src} />
            <meta name="twitter:image:alt" content={seo.image.alt} />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image {
          src
          alt
          width
          height
        }
        twitterUsername
      }
    }
  }
`
