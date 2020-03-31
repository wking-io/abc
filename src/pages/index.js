import React from 'react';
import Link from '../components/link';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { LogoIcon } from '../components/icons';
import { Image } from '../components/images';
import { ContactForm } from '../components/form';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 w-full h-full">
          <Image image="hero" className="object-cover w-full h-full" />
          <div className="absolute inset-0 w-full h-full bg-dark-o" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto w-5/6 pt-24">
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
      <section id="about" className="relative px-6 md:px-16 max-w-5xl mx-auto py-16 md:py-24 lg:py-32 flex justify-end">
        <svg
          className="mx-16 lg:mx-0 hidden md:block graphic-one left-0 w-1/3 lg:w-5/12 text-primary absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 195"
        >
          <circle cx="6" cy="6" r="6" className="fill-current" />
          <circle cx="70" cy="90" r="10" className="fill-current" />
          <circle cx="25" cy="189" r="6" className="fill-current" />
          <polyline points="6,6 70,90 25,189" fill="none" stroke="#d13a27" />
        </svg>
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
      <section id="mission" className="bg-black text-white py-16 md:py-32 lg:py-40">
        <div className="px-6 md:px-16 max-w-6xl mx-auto flex flex-col items-center">
          <LogoIcon className="h-auto w-16 md:w-24 lg:w-32 mr-4 text-primary" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl flex flex-col leading-tight text-center mt-8 md:mt-12">
            <span>Our threefold mission at AB Consulting:</span>
            <span className="text-primary mt-2">Support businesses. Simplify finances. Strengthen families.</span>
          </h2>
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-32 relative">
        <svg
          className="-mt-20 px-16 hidden lg:block top-0 right-0 w-1/2 text-primary absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 120"
        >
          <circle cx="192" cy="8" r="8" className="fill-current" />
          <circle cx="12" cy="108" r="12" className="fill-current" />
          <polyline points="192,8 12,108" fill="none" stroke="#d13a27" />
        </svg>
        <div className="flex flex-col lg:flex-row-reverse py-8 md:py-12 xl:py-16">
          <div className="w-full lg:w-1/2 flex-shrink-0 relative overflow-hidden" />
          <h2 className="uppercase text-3xl md:text-4xl xl:text-5xl font-bold leading-tight px-6 md:pr-0 lg:pl-16 xl:pl-24 max-w-2xl mx-auto">
            our mission is as easy as <span className="text-primary">one, two, three.</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center py-8 md:py-12 xl:py-16">
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
            <p className="md:text-xl font-serif text-primary mt-4 font-bold">Initiative Strategies</p>
            <ul className="color-list mt-4">
              <li>Procurement process development</li>
              <li>Payment and financial structure</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center py-8 md:py-12 xl:py-16">
          <div className="w-full lg:w-1/2 flex-shrink-0 relative overflow-hidden">
            <p className="feature-number feature-number--reverse">2</p>
            <Image image="featureTwo" />
          </div>
          <div className="flex-1 px-6 lg:px-16 xl:px-24 max-w-2xl mx-auto mt-6 md:mt-12 lg:mt-0">
            <h3 className="text-3xl tracking-tighter leading-tight">We simplify your business’s financial plan.</h3>
            <p className="md:text-lg font-serif mt-6">
              Once you have the equipment you need, we then streamline and simplify every unique and complex financial
              scenario and setup of your business so that you can focus on your business.
            </p>
            <p className="md:text-xl font-serif text-primary mt-4 font-bold">Initiative Strategies</p>
            <ul className="color-list mt-4">
              <li>Custom reporting & data analytics</li>
              <li>Minority spending</li>
              <li>Credit card processing</li>
              <li>Receivables financing</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center py-8 md:py-12 xl:py-16">
          <div className="w-full lg:w-1/2 flex-shrink-0 relative overflow-hidden">
            <p className="feature-number">3</p>
            <Image image="featureThree" />
          </div>
          <div className="flex-1 px-6 lg:px-16 xl:px-24 max-w-2xl mx-auto mt-6 md:mt-12 lg:mt-0">
            <h3 className="text-3xl tracking-tighter leading-tight">
              We strengthen the families in our sphere of influence.
            </h3>
            <p className="md:text-lg font-serif mt-6">
              Our ultimate vision is to impact people by serving them. Our end goal is to strengthen the families of
              every individual connected to our organization by investing time and resources into the ABC community.
            </p>
            <p className="md:text-xl font-serif text-primary mt-4 font-bold">Initiative Strategies</p>
            <ul className="color-list mt-4">
              <li>Relationship building</li>
              <li>Financial and philanthropic contributions to local family-strengthening organizations</li>
              <li>Stakeholder incentives</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="connect" className="bg-primary text-white py-16 md:py-24 lg:py-32">
        <div className="px-6 md:px-16 max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl uppercase leading-tight text-center">
            We are ready to serve you.
          </h2>
          <p className="md:text-lg lg:text-xl max-w-2xl mx-auto font-serif mt-2 text-center">
            We would be honored to connect with you and tailor a plan for your business's financial and procurement
            needs.
          </p>
          <div className="w-full max-w-3xl mx-auto mt-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
