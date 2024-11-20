import { useState } from 'react';
import { z } from 'zod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';

import contactSchema from '../schemas/contactSchema';
import Button from '../components/Button';

export default function Contact() {
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target));

    try {
      contactSchema.parse(formData);
      setFormErrors({});
      console.log('Form is valid: ', formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorObj = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});
        setFormErrors(errorObj);
        console.error('Validation errors:', error.errors);
      }
    }
  };

  return (
    <div id="product-wrapper" className="w-full">
      <section
        id="contact-form"
        className="mx-auto flex w-full max-w-screen-lg flex-col px-4 pb-12 pt-6"
      >
        {/* Title */}
        <div className="flex w-full flex-col gap-4 text-center">
          <p className="font-semibold text-navy">Get in Touch</p>
          <h1 className="text-5xl font-semibold text-navy">Contact Us</h1>
          <p>We'd love to hear from you. Reach out today!</p>
        </div>
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto my-16 w-full max-w-[50ch]"
        >
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className={`rounded border p-2 ${formErrors.name ? 'border-error bg-error-light' : 'border-navy'}`}
              />
              {formErrors.name && (
                <p className="text-error">{formErrors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@email.com"
                className={`rounded border p-2 ${formErrors.email ? 'border-error bg-error-light' : 'border-navy'}`}
              />
              {formErrors.email && (
                <p className="text-error">{formErrors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Concerning order #12345"
                className={`rounded border p-2 ${formErrors.subject ? 'border-error bg-error-light' : 'border-navy'}`}
              />
              {formErrors.subject && (
                <p className="text-error">{formErrors.subject}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                className={`h-28 rounded border p-2 ${formErrors.message ? 'border-error bg-error-light' : 'border-navy'}`}
              ></textarea>
              {formErrors.message && (
                <p className="text-error">{formErrors.message}</p>
              )}
            </div>
            <Button type="submit" style="primary">
              Send Message
            </Button>
          </div>
        </form>
      </section>
      {/* Contact details */}
      <section id="contact-details" className="bg-cat">
        <div className="mx-auto w-full max-w-screen-lg px-4 py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <FontAwesomeIcon
                icon={byPrefixAndName.fas['envelope']}
                className="text-3xl"
              />
              <h2 className="text-2xl font-bold">Email</h2>
              <p>We're here to assist you with any inquiries.</p>
              <a className="mt-2 text-sm underline hover:no-underline" href="#">
                support@shoplyst.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 md:items-start">
              <FontAwesomeIcon
                icon={byPrefixAndName.fas['phone']}
                className="text-3xl"
              />
              <h2 className="text-2xl font-bold">Phone</h2>
              <p>Reach us for immediate assistance or questions.</p>
              <a className="mt-2 text-sm underline hover:no-underline" href="#">
                +1 (800) 123-4567
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 md:items-start">
              <FontAwesomeIcon
                icon={byPrefixAndName.fas['location-dot']}
                className="text-3xl"
              />
              <h2 className="text-2xl font-bold">Office</h2>
              <p>Visit us at our headquarters for support.</p>
              <a className="mt-2 text-sm underline hover:no-underline" href="#">
                456 Market St, San Francisco CA 94105 USA
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section id="continue-shopping" className="bg-navy">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col px-4 py-24 sm:flex-row">
          <h2 className="my-4 w-full py-0 text-4xl font-semibold text-cat sm:w-1/2">
            We're Here to Help You
          </h2>
          <p className="mb-12 w-full text-white sm:w-1/2">
            Have questions or need assistance? Reach out to us anytime, and our
            dedicated team will be happy to assist you with any inquiries or
            feedback.
          </p>
        </div>
      </section>
    </div>
  );
}
