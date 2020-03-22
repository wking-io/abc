import React from 'react';
import Link from '../components/link';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { LogoIcon } from '../components/icons';
import { Image } from '../components/images';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 w-full h-full">
          <Image image="hero" className="object-cover w-full h-full" />
          <div className="absolute inset-0 w-full h-full bg-dark-o" />
        </div>
        <div className="relative text-center max-w-3xl mx-auto w-5/6 pt-24">
          <h2 className="hero-heading uppercase font-bold">Our Aim Is Your Ease.</h2>
          <p className="hero-description font-serif lg:w-9/12 mx-auto mt-6 lg:mt-2">
            We provide hassle-free, turnkey financial services to support, simplify and streamline your business.
          </p>
          <Link
            to="#contact"
            className="bg-primary hover:bg-primary-dark rounded-lg py-3 px-6 font-bold mt-12 inline-block"
          >
            Start Simplifying
          </Link>
        </div>
      </section>
      <section className="relative px-6 md:px-16 max-w-5xl mx-auto py-16 md:py-24 lg:py-32 flex justify-end">
        <div className="md:w-7/12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl uppercase leading-tight">
            Easy With <span className="text-primary">ABC.</span>
          </h2>
          <p class="text-grey lg:text-lg leading-relaxed mt-2 font-serif">
            AB Consulting is a financial services organization focused on making things easy. We are obsessed with
            simplifying and streamlining⁠—for our customers, financial partners, employees, and community advocates. We
            believe the most effective way to support someone is to create ease and cultivate health.
          </p>
          <Link
            to="#contact"
            className="border border-solid border-primary text-primary hover:text-white hover:bg-primary rounded-lg py-3 px-6 font-bold mt-6 inline-block"
          >
            Chat With Us
          </Link>
        </div>
      </section>
      <section className="bg-black text-white py-16 md:py-24 lg:py-32">
        <div className="px-6 md:px-16 max-w-6xl mx-auto flex flex-col items-center">
          <LogoIcon className="h-auto w-16 md:w-24 lg:w-32 mr-4 text-primary" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl flex flex-col leading-tight text-center mt-8 md:mt-12">
            <span>Our threefold mission at AB Consulting:</span>
            <span className="text-primary mt-2">Support businesses. Simplify finances. Strengthen families.</span>
          </h2>
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-32">
        <div class="flex flex-col lg:flex-row-reverse py-8 md:py-12 xl:py-16">
          <div className="w-full lg:w-1/2 flex-shrink-0 relative overflow-hidden" />
          <h2 className="uppercase text-3xl md:text-4xl xl:text-5xl font-bold leading-tight px-6 md:pr-0 lg:pl-16 xl:pl-24 max-w-2xl mx-auto">
            our mission is as easy as <span className="text-primary">one, two, three.</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row-reverse py-8 md:py-12 xl:py-16">
          <div className="w-full lg:w-1/2 flex-shrink-0 relative overflow-hidden">
            <p className="feature-number">1</p>
            <Image image="featureOne" />
          </div>
          <div className="flex-1 px-6 lg:px-16 xl:px-24 max-w-2xl mx-auto mt-6 md:mt-12 lg:mt-0">
            <h3 className="text-3xl tracking-tighter leading-tight">We support your business’s financial needs.</h3>
            <p className="md:text-lg font-serif mt-6">
              Our first focus is supporting your business. AB Consulting comes alongside your organization as an
              experienced partner focused on meeting your financial and procurement needs. Whether a single asset or
              portfolio, we will strategize to ensure a successful acquisition.
            </p>
            <p className="md:text-lg font-serif text-primary mt-4">Initiative Strategies</p>
            <ul className="color-list mt-4">
              <li>Procurement process development</li>
              <li>Payment and financial structure</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
