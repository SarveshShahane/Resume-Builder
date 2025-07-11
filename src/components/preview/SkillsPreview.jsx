import React from 'react';

const SkillsPreview = ({ skillsList = [] }) => {
  if (!skillsList?.length) return null;
  
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
        Skills
      </h2>
      <div className="grid grid-cols-1 gap-y-3">
        {skillsList.map((skillCategory, index) => (
          <div key={index} className="mb-2">
            <div className="font-semibold text-sm">
              {skillCategory?.category || "New Category"}:
            </div>
            <div className="flex flex-wrap gap-x-1 gap-y-1 text-sm ml-4 mt-1">
              {skillCategory?.skills ? 
                skillCategory.skills.split(',').map((skill, i) => (
                  <span key={i} className="inline-flex items-center">
                    <span className="mr-1">•</span>
                    <span>
                      {skill.split(/\*([^*]+)\*/g).map((part, j) => 
                        j % 2 === 0 ? part.trim() : <strong key={j}>{part.trim()}</strong>
                      )}
                    </span>
                    {i < skillCategory.skills.split(',').length - 1 && <span className="mx-1"></span>}
                  </span>
                ))
              : <span className="text-gray-400 italic">Add skills (comma separated)</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPreview;