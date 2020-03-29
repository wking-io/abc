import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Link from '../components/link';

const ContactThankYouPage = () => (
  <Layout label="Contact Thank You" light>
    <SEO title="Thank you for reaching out!" />
    <div className="max-w-4xl mx-auto w-4/5 md:w-3/5 py-48 md:pt-56 md:pt-64 text-center">
      <h2 className="tracking-tight font-bold text-3xl md:text-4xl xl:text-5xl leading-tight mb-4">
        Thank you for giving us the opportunity to earn your business.
      </h2>
      <p className="font-serif text-grey md:text-xl mb-6">One of our team members will be in touch with you shortly.</p>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <Link
          to="/"
          className="bg-primary hover:bg-primary-dark text-white rounded-lg py-3 px-6 font-bold inline-block mr-8"
        >
          Go back to the home page
        </Link>
      </div>
    </div>
  </Layout>
);

export default ContactThankYouPage;
