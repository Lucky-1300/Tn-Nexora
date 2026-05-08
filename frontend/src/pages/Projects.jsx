import React, { useEffect } from 'react';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <main className="py-8">
        <Projects />
      </main>
    </div>
  );
}
