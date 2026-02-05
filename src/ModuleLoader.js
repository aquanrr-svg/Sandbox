import React, { useState, useEffect } from 'react';
import ModuleCard from './ModuleCard';

export default function ModuleLoader() {
  const [modules, setModules] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/sample-module.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => setModules([data]))
      .catch((err) => {
        console.error('Failed to load modules', err);
        setError('Failed to load modules');
      });
  }, []);

  if (error) return <div className="loader error">{error}</div>;
  if (!modules.length) return <div className="loader">Loading modules…</div>;

  return (
    <section className="module-list">
      {modules.map((m, i) => (
        <ModuleCard key={i} module={m} />
      ))}
    </section>
  );
}