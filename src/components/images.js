import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Image = ({ image, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "images/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      featureOne: file(relativePath: { eq: "images/01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      featureTwo: file(relativePath: { eq: "images/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      featureThree: file(relativePath: { eq: "images/03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Img fluid={data[image].childImageSharp.fluid} className="w-full h-full" {...props} />;
};
