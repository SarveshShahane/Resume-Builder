import React from 'react';

const HeaderPreview = ({ header }) => {
  if (!header) return null;
  
  return (
    <header className="mb-6 text-center">
      <h1 className="text-2xl font-bold mb-2">{header.fullName || "Your Name"}</h1>
      <div className="flex flex-wrap justify-center gap-3 text-sm">
        {header.email && <div>{header.email}</div>}
        {header.phone && <div>{header.phone}</div>}
        {header.location && <div>{header.location}</div>}
      </div>
      <div className="flex flex-wrap justify-center gap-3 text-sm mt-2">
        {header.linkedIn && (
          <a href={header.linkedIn} className="text-blue-600">LinkedIn</a>
        )}
        {header.github && (
          <a href={header.github} className="text-blue-600">GitHub</a>
        )}
      </div>
    </header>
  );
};

export default HeaderPreview;