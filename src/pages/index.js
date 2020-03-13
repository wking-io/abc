import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Image } from '../components/images';

const IndexPage = () => {
  return (
    <Layout label="Home">
      <SEO title="Easy online tax returns without leaving your home" />
      {isMobile ? (
        <Image image="heroMobile" className="hero-img object-cover top-0 w-full h-screen fixed" />
      ) : (
        <Video
          className="object-cover top-0 w-full h-screen fixed"
          style={{ zIndex: '-1' }}
          cloudName="taxx-wiz"
          publicId="hero"
          loop="true"
          autoplay="true"
          muted="true"
          secure="true"
        />
      )}
      <section className="flex hero">
        <div className="flex-1 lg:aspect-16:9">
          <div className="video-overlay-dark h-full lg:aspect-content flex flex-col justify-end lg:flex-row lg:items-end lg:justify-between p-8 lg:py-0 lg:pl-24 lg:pr-16">
            <div className="flex flex-col justify-end lg:justify-start w-full lg:w-5/6 flex-1 pb-16 lg:pb-48">
              <h2 className="text-white text-3xl md:text-4xl xl:text-6xl font-bold tracking-tight leading-none">
                <span className="text-primary">Get more money</span> on your taxes this year without ever leaving your
                house.
              </h2>
              <div className="mt-16 flex flex-col md:flex-row items-start md:items-center">
                <a
                  className="px-8 py-3 md:py-4 bg-primary hover:bg-primary-dark text-base md:text-lg font-bold uppercase text-white tracking-tight"
                  href="http://app.mytaxxwiz.com"
                >
                  Start Now
                </a>
                <Link
                  className="mt-8 md:ml-8 md:mt-0 underline hover:no-underline text-base md:text-lg font-bold text-white tracking-tight"
                  to="/contact"
                >
                  Want to learn more? Contact us now
                </Link>
              </div>
            </div>
            <ul className="flex flex-row lg:flex-col items-center justify-start lg:justify-end pb-6 lg:pb-16">
              <li className="h-4">
                <a className="text-white hover:text-instagram" href="https://www.instagram.com/taxxwiz/?hl=en">
                  <InstagramIcon className="h-full w-auto" />
                </a>
              </li>
              <li className="ml-8 lg:ml-0 lg:mt-8 h-4">
                <a className="text-white hover:text-facebook" href="https://www.facebook.com/taxxwiz/">
                  <FacebookIcon className="h-full w-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block w-16 bg-white" />
      </section>
      <section className="py-32 bg-white">
        <div className="w-5/6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <Image
              image="easy"
              className="w-full md:w-2/5 h-auto flex-shrink-0 md:mr-16"
              imgStyle={{ width: '100%', height: 'auto' }}
            />
            <div className="flex-1 mt-8 md:mt-0">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Easy and Simple</h3>
              <p className="text-grey-500 leading-relaxed">
                With our mobile app it has never been easier to do your taxes. You submit your documents and information
                from the comfort of your couch. You can chat with our tax professionals while drinking your morning
                coffee. Have the peace of mind that our team has your back while you enjoy your day.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-between md:items-center mt-12">
            <Image
              image="fast"
              className="w-full md:w-2/5 h-auto flex-shrink-0 md:ml-16"
              imgStyle={{ width: '100%', height: 'auto' }}
            />
            <div className="flex-1 mt-8 md:mt-0">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Fast and Secure</h3>
              <p className="text-grey-500 leading-relaxed">
                Protecting your information is our priority. That is why we offer our secure portal to keep your
                documents safe, and delivered directly to our Preparers who can prepare your return in real time.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center mt-12">
            <Image
              image="refund"
              className="w-full md:w-2/5 h-auto flex-shrink-0 md:mr-16"
              imgStyle={{ width: '100%', height: 'auto' }}
            />
            <div className="flex-1 mt-8 md:mt-0">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get your biggest refund</h3>
              <p className="text-grey-500 leading-relaxed">
                Our licensed preparers and CPAs are committed to getting you the biggest and most accurate return for
                this tax season. Once they maximize your return just approve it, sit back, relax, and get your biggest
                refund.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-32">
          <a
            href="http://app.mytaxxwiz.com"
            className="inline-block px-16 py-4 bg-primary hover:bg-primary-dark text-lg font-bold uppercase text-white tracking-tight"
          >
            Start Your Return
          </a>
        </div>
      </section>
      <section className="bg-white pb-48">
        <div className="w-5/6 max-w-4xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="mt-8 md:mt-0 md:mr-8">
              <h3 className="text-4xl font-bold tracking-tight mb-4">About us</h3>
              <p className="text-grey-500 leading-relaxed">
                Taxx Wiz is a company that partners with individuals and small businesses alike to offer strong tax
                preparation services, book-keeping, financial, and accounting services. We are a strong company that has
                seen tremendous growth over the past years since we started in a small back office in 2015. Now we have
                grown to have team members located nationwide, and have built a strong platform for our clients to
                connect with us anywhere.
              </p>
            </div>
            <Image
              image="feature"
              className="w-full md:w-1/2 h-auto flex-shrink-0 md:ml-8"
              imgStyle={{ width: '100%', height: 'auto' }}
            />
          </div>
          <ul className="flex flex-col md:flex-row md:-mx-4 mt-12">
            <li className="product-detail">
              <h4 className="uppercase font-bold text-lg">Our Philosophy</h4>
              <p className="text-grey-500 leading-relaxed mt-4">
                Our philosophy is simple. Be fast, accurate, honest, fun, innovative, and always work in the best
                interest of our customers. We see ourselves as an affordable solution for individuals and business
                owners to have a reliable resource for financial needs and services.
              </p>
            </li>
            <li className="product-detail mt-8 md:mt-0">
              <h4 className="uppercase font-bold text-lg">Be Apart Of Our Family</h4>
              <p className="text-grey-500 leading-relaxed mt-4">
                Our team prides itself in its family atmosphere, which helps us take pride in our work and our clients.
                Respect and relationships are of upmost importance to us we look to continue to build our family of
                Wizards.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white pb-32">
        <div className="w-5/6 max-w-6xl mx-auto relative testimonial">
          <h3 className="relative z-10 flex flex-col items-start text-2xl sm:text-3xl md:text-5xl tracking-tight leading-none font-bold md:-ml-12 -mt-12 w-11/12 sm:w-full">
            <span className="bg-white p-4 pb-1 md:py-1 md:px-2">Don't take our word.</span>
            <span className="bg-white p-4 pt-0 md:py-1 md:px-2">
              Hear from <span className="text-primary">happy customers</span>.
            </span>
          </h3>
          <ul className="relative z-20 flex flex-wrap -mt-8 pb-8 md:pb-12 px-8 md:px-24 grid">
            <li className="grid-item">
              <blockquote class="flex flex-col items-start h-full">
                <QuoteIcon className="text-grey-300 h-12 pb-1 w-auto" />
                <p className="text-grey-700 leading-relaxed mt-6 flex-1">
                  Filing my taxes in the past has always been long and stressful, after working with Justin it turned
                  out to be a breeze!
                </p>
                <div className="h-px bg-grey-300 w-24 mt-4" />
                <p class="flex items-center justify-between mt-4 w-full">
                  <cite className="not-italic text-lg font-bold block">Justin Keys</cite>
                  <button className="underline hover:no-underline" onClick={() => handleTestimonialOpen('justin')}>
                    Hear More
                  </button>
                </p>
              </blockquote>
            </li>
            <li className="grid-item">
              <blockquote class="flex flex-col items-start h-full">
                <QuoteIcon className="text-grey-300 h-12 pb-1 w-auto" />
                <p className="text-grey-700 leading-relaxed mt-6 flex-1">
                  So for the first time I decided to let someone else do my taxes, and I chose Taxx Wiz and oh my god I
                  don't regret it one bit. The process was easy, I got the max refund, and it was just less stressful on
                  my end.”
                </p>
                <div className="h-px bg-grey-300 w-24 mt-4" />
                <p class="flex items-center justify-between mt-4 w-full">
                  <cite className="not-italic text-lg font-bold block">Nisha Morrison</cite>
                  <button className="underline hover:no-underline" onClick={() => handleTestimonialOpen('nisha')}>
                    Hear More
                  </button>
                </p>
              </blockquote>
            </li>
            <li className="grid-item">
              <blockquote class="flex flex-col items-start h-full">
                <QuoteIcon className="text-grey-300 h-12 pb-1 w-auto" />
                <p className="text-grey-700 leading-relaxed mt-6 flex-1">
                  This was the easiest tax process I’ve ever experienced. I am never going to anyone else for my taxes.
                </p>
                <div className="h-px bg-grey-300 w-24 mt-4" />
                <p class="flex items-center justify-between mt-4 w-full">
                  <cite className="not-italic text-lg font-bold block">Alicia</cite>
                </p>
              </blockquote>
            </li>
          </ul>
          <DialogOverlay
            className="fixed inset-0 flex items-center justify-center z-50 bg-dark-o"
            isOpen={isOpen}
            onDismiss={() => setOpen(false)}
          >
            <DialogContent className="video-wrapper">
              {videos.map((videoID) => (
                <Video
                  className={`w-full h-full object-cover ${testimonialID === videoID ? 'relative' : 'hidden'}`}
                  cloudName="taxx-wiz"
                  publicId={videoID}
                  secure="true"
                  controls="true"
                />
              ))}
            </DialogContent>
          </DialogOverlay>
        </div>
        {/* <div className="flex items-center justify-center mt-32">
          <Link
            to="/hiring"
            className="inline-block px-16 py-4 bg-primary hover:bg-primary-dark text-lg font-bold uppercase text-white tracking-tight"
          >
            Read More Testimonials
          </Link>
        </div> */}
      </section>
      <section className="final">
        <div className="w-5/6 pt-40 pb-8 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold tracking-tight leading-none">
            Now that you know what we are about. Let us help you save more money this year.
          </h3>
          <a
            className="inline-block px-16 py-4 bg-grey-900 hover:bg-black text-base lg:text-lg font-bold uppercase text-white tracking-tight mt-12"
            href="http://app.mytaxxwiz.com"
          >
            Start Now
          </a>
          <Link
            className="inline-block px-8 py-4 underline hover:no-underline text-white tracking-tight mt-20"
            to="/contact"
          >
            Reach Out With Questions
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
