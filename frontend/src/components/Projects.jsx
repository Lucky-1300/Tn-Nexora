import React, { useEffect, useRef, useState } from 'react';
import ProjectSlider from './ProjectSlider';
import { useTheme } from './ThemeWrapper';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [expandedAll, setExpandedAll] = useState(false);
  const cardRefs = useRef({});
  const isReloadRef = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    async function loadManifest() {
      try {
        const res = await fetch('/projects/projects.json');
        if (!res.ok) throw new Error('Manifest not found');
        const data = await res.json();
        if (!cancelled) setProjects(data);
      } catch (e) {
        // fallback: empty
        if (!cancelled) setProjects([]);
      }
    }

    loadManifest();
    return () => {
      cancelled = true;
    };
  }, []);

  const { isDark } = useTheme();
  const isProjectsPage = location.pathname === '/projects';

  useEffect(() => {
    const navEntry = window.performance?.getEntriesByType?.('navigation')?.[0];
    if (navEntry) {
      isReloadRef.current = navEntry.type === 'reload';
      return;
    }

    if (window.performance?.navigation) {
      isReloadRef.current = window.performance.navigation.type === 1;
    }
  }, []);

  useEffect(() => {
    if (!isProjectsPage) {
      setExpandedAll(false);
      return;
    }

    if (isReloadRef.current) {
      setExpandedAll(false);
      return;
    }

    const targetId = location.state?.expandedProjectId;
    if (!targetId) {
      setExpandedAll(false);
      return;
    }

    setExpandedAll(true);

    const timer = window.setTimeout(() => {
      cardRefs.current[targetId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [isProjectsPage, location.state]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className={`text-3xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Projects</h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.length === 0 && (
          <p className={`text-center col-span-full ${isDark ? 'text-white/60' : 'text-gray-500'}`}>No projects found — ensure <strong>/public/projects/projects.json</strong> exists.</p>
        )}

        {projects.map((p) => {
          const expanded = isProjectsPage && expandedAll;
          return (
            <article
              key={p.id}
              ref={(el) => {
                if (el) {
                  cardRefs.current[p.id] = el;
                }
              }}
              className={`group rounded-2xl overflow-hidden border backdrop-blur-lg transition duration-300 py-4 px-6
                ${expanded ? 'lg:col-span-2 scale-100' : ''}
                ${isDark
                  ? 'bg-white/5 border-white/10 hover:border-white/20 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)]'
                  : 'bg-orange-50/40 border-orange-200/40 hover:border-orange-300/60 hover:shadow-[0_0_12px_rgba(249,115,22,0.2)]'
                }`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{p.title}</h3>

              <ProjectSlider
                images={p.images}
                altPrefix={p.title}
                initialIndex={p.homeIndex ?? 0}
                maxHeight={expanded ? '36rem' : undefined}
              />

              {p.description && (
                <div className="mt-4">
                  {expanded ? (
                    // When expanded show paragraphs as supplied
                    p.description.split(/\n\s*\n/).map((para, i) => (
                      <p
                        key={i}
                        className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}
                        style={{ marginTop: i === 0 ? 0 : '0.75rem' }}
                      >
                        {para}
                      </p>
                    ))
                  ) : (
                    // Not expanded: clamp to 4 lines
                    <p
                      className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {p.description}
                    </p>
                  )}
                </div>
              )}

              {p.websiteUrl && (
                <div className="mt-4 text-center">
                  <a
                    href={p.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg ${
                      isDark
                        ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-white text-[#FF8C00]'
                    }`}
                  >
                    Visit HundredTools
                  </a>
                </div>
              )}

              {p.statusLabel && (
                <div className="mt-4 text-center">
                  <span
                    className={`inline-flex items-center justify-center gap-2 font-semibold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent`}
                  >
                    <span aria-hidden="true">🚀</span>
                    {p.statusLabel}
                  </span>
                </div>
              )}

              <div className="mt-4 text-center">
                <button
                  onClick={() => {
                    if (!isProjectsPage) {
                      navigate('/projects', { state: { expandedProjectId: p.id } });
                      return;
                    }

                    setExpandedAll((prev) => !prev);
                  }}
                  className={`text-sm font-medium underline ${isDark ? 'text-white/80' : 'text-orange-600'}`}
                  aria-expanded={expanded}
                >
                  {isProjectsPage && expanded ? 'Show less' : 'Show more'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
