import React from 'react';

export default function ModuleCard({ module }) {
  if (!module) return null;
  const { title, description } = module;
  return (
    <article className="module-card" role="article">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}