import React from 'react';
// import Link from '../components/link';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import { Image } from '../components/images';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <section className="relative min-h-screen">
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-dark-o" />
        </div>
        <h2 className="uppercase">Our Aim Is Your Ease.</h2>
      </section>
      <section className="relative min-h-screen">
        <h2 className="uppercase">Our Aim Is Your Ease.</h2>
      </section>
    </Layout>
  );
};

export default IndexPage;
