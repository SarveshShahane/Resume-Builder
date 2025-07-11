import React from 'react';

const ObjectivePreview = ({ objective }) => {
  if (!objective) return null;
  
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
        Objective
      </h2>
      <p className="text-sm">{objective}</p>
    </section>
  );
};

export default ObjectivePreview;