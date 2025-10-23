import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white px-6 py-24 text-neutral-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <h2 className="font-manrope text-3xl font-semibold sm:text-4xl">About</h2>
          <p className="mt-2 text-neutral-600">Principal Architect</p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-neutral-700">
              I’m an architect focused on modern, contextual design. My practice brings together clarity of form,
              honest materials, and thoughtful details to create spaces that feel calm and purposeful. I work across
              residential, commercial, and cultural projects—always with an emphasis on daylight, proportion, and
              craft.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              With over a decade of experience, I collaborate closely with clients and consultants to deliver refined,
              enduring architecture—from concept to completion. Sustainability and adaptability are central to every
              project.
            </p>
          </div>
          <div className="flex items-start justify-center">
            <img
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="h-72 w-56 rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
