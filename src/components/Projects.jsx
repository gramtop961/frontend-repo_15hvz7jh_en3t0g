import React, { useEffect, useState } from 'react';

const FALLBACK_PROJECTS = [
  {
    title: 'Courtyard Residence',
    location: 'Lisbon, Portugal',
    image:
      'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Gallery Pavilion',
    location: 'Copenhagen, Denmark',
    image:
      'https://images.unsplash.com/photo-1529429612777-95c0d0f2ad32?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Cliff House',
    location: 'Big Sur, USA',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Cultural Center',
    location: 'Kyoto, Japan',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
];

const getBackendUrl = () => {
  const env = import.meta.env.VITE_BACKEND_URL;
  if (env) return env;
  try {
    const url = new URL(window.location.href);
    url.port = '8000';
    return url.origin;
  } catch {
    return '';
  }
};

const Projects = () => {
  const [items, setItems] = useState(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${getBackendUrl()}/api/projects`);
        if (!res.ok) throw new Error('Failed');
        const data = await res.json();
        if (Array.isArray(data) && data.length) {
          setItems(data);
        }
      } catch (e) {
        // Fallback already set
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="projects" className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-manrope text-3xl font-semibold text-neutral-900 sm:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-xl text-neutral-600">
              A curated collection of recent projects exploring light, proportion, and material honesty.
            </p>
          </div>
          <a href="#contact" className="inline-flex w-fit items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
            Inquire about a project
          </a>
        </div>

        {loading ? (
          <div className="py-10 text-neutral-500">Loading projects…</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <article key={i} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
                  <p className="text-sm text-neutral-600">{p.location}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
