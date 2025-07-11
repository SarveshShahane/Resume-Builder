import React from 'react';
import { formatDescription } from '../../utils/formatDescription';

const AchievementsPreview = ({ achievements }) => {
  if (!achievements) return null;
  
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
        Achievements
      </h2>
      <div className="text-sm ml-2">
        {formatDescription(achievements)}
      </div>
    </section>
  );
};

export default AchievementsPreview;