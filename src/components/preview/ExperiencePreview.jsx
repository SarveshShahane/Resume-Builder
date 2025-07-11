import React from 'react';
import { formatDescription } from '../../utils/formatDescription';

const ExperiencePreview = ({ experienceList = [] }) => {
  if (!experienceList.length) return null;
  
  return (
    <section className="mb-6">
      <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-1">
        Experience
      </h2>
      {experienceList.map((exp, index) => (
        <div key={index} className="mb-3">
          <div className="flex justify-between">
            <h3 className="font-semibold">{exp.jobTitle}</h3>
            <div className="text-sm text-gray-600">
              {exp.startDate} - {exp.endDate || "Present"}
            </div>
          </div>
          <p className="text-sm my-1">{exp.company}{exp.location ? `, ${exp.location}` : ""}</p>
          {exp.description && (
            <div className="text-sm mt-1 ml-2">
              {formatDescription(exp.description)}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ExperiencePreview;