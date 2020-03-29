import React, { useState } from 'react';
import { validate } from 'email-validator';
import VisuallyHidden from '@reach/visually-hidden';

const verify = ({ name, phone, email, message }) =>
  validate(email) && [ message, name, phone ].every((field) => field.length > 0);

const Field = ({ name, label, value, placeholder, update }) => (
  <div className="flex-1 flex flex-col mt-6 md:mt-0 mx-4">
    <label className="text-black" htmlFor={name}>
      {label}
    </label>
    <input
      className="mt-2 rounded border border-primary focus:border-primary-dark p-3"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={({ target }) => update(target.value)}
    />
  </div>
);

const Textarea = ({ name, label, value, update }) => (
  <div className="flex-1 flex flex-col mt-6">
    <label className="text-black" htmlFor={name}>
      {label}
    </label>
    <textarea
      className="mt-2 rounded border border-primary focus:border-primary-dark p-3 h-48"
      name={name}
      value={value}
      placeholder="Write text here..."
      onChange={({ target }) => update(target.value)}
    />
  </div>
);

export const ContactForm = () => {
  const [ name, updateName ] = useState('');
  const [ phone, updatePhone ] = useState('');
  const [ email, updateEmail ] = useState('');
  const [ message, updateMessage ] = useState('');
  const isValid = verify({ email, message, name, phone });

  return (
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
      className="flex flex-col w-full text-black"
    >
      <input type="hidden" name="form-name" value="contact" />
      <VisuallyHidden>
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </VisuallyHidden>
      <div className="flex flex-col md:flex-row md:mt-6 -mx-4">
        <Field name="name" label="Name" placeholder="Write name here..." value={name} update={updateName} />
        <Field
          name="phone-number"
          label="Phone"
          placeholder="Write phone number here..."
          value={phone}
          update={updatePhone}
        />
      </div>
      <div className="flex flex-col md:flex-row md:mt-6 -mx-4">
        <Field
          name="email"
          label="Email Address"
          placeholder="Write email address here..."
          value={email}
          update={updateEmail}
          dark
        />
      </div>
      <Textarea name="message" label="Message" value={message} update={updateMessage} />
      <input
        type="submit"
        className="submit self-end bg-black hover:bg-grey rounded-lg py-3 px-6 font-bold mt-6 md:mt-8 lg:mt-12 inline-block text-white cursor-pointer"
        value="Send Message"
        disabled={!isValid}
      />
    </form>
  );
};
