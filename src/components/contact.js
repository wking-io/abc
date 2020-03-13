import React, { useState } from 'react';
import { validate } from 'email-validator';
import VisuallyHidden from '@reach/visually-hidden';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Field, Textarea } from '../components/form';

const verify = ({ name, phone, email, message }) =>
  validate(email) && [ message, name, phone ].every((field) => field.length > 0);

const ContactForm = () => {
  const [ name, updateName ] = useState('');
  const [ phone, updatePhone ] = useState('');
  const [ email, updateEmail ] = useState('');
  const [ message, updateMessage ] = useState('');
  const isValid = verify({ email, message, name, phone });

  return (
    <Layout theme="light" label="Contact">
      <SEO title="Contact Us" />
      <form
        name="contact"
        method="POST"
        action="/contact-thank-you"
        netlify-honeypot="bot-field"
        data-netlify="true"
        data-track
        data-event-category="Contact"
        data-event-action="Submitted Message"
        data-event-label="Contact Form"
        className="flex flex-col lg:flex-row contact py-16 lg:pb-0"
      >
        <input type="hidden" name="form-name" value="contact" />
        <VisuallyHidden>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </VisuallyHidden>
        <div className="w-full lg:w-1/2 xl:w-2/5 px-16 lg:p-16">
          <h2 className=" text-3xl md:text-4xl font-sans tracking-tight font-bold leading-tight">
            Do you have questions for us? Send us a message.
          </h2>
          <div className="h-1 bg-primary w-24 mt-8 mb-12" />
          <Field name="name" label="Full Name" placeholder="Write name here..." value={name} update={updateName} dark />
          <Field
            name="phone-number"
            label="Phone Number"
            placeholder="Write phone number here..."
            value={phone}
            update={updatePhone}
            dark
          />
          <Field
            name="email"
            label="Email Address"
            placeholder="Write email address here..."
            value={email}
            update={updateEmail}
            dark
          />
        </div>
        <div className="flex flex-col flex-1 px-16 lg:p-0">
          <Textarea name="message" label="Message" value={message} update={updateMessage} dark />
          <input type="submit" className=" py-4 btn btn--primary w-full" value="Send Message" disabled={!isValid} />
        </div>
      </form>
    </Layout>
  );
};

export default ContactForm;
