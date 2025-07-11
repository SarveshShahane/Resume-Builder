import React from 'react';

const EducationPreview = ({ educationList = [] }) => {
  if (!educationList?.length) return null;
  
  return (
    <section className="mb-3">
      <h2 className="text-base font-bold border-b border-gray-300 pb-1 mb-1">
        Education
      </h2>
      {educationList.map((edu, index) => (
        <div key={index} className="mb-1">
          <div className="flex justify-between">
            <h3 className="font-semibold text-sm">{edu.degree}</h3>
            <div className="text-xs text-gray-600">
              {edu.startYear} - {edu.endYear}
            </div>
          </div>
          <p className="text-xs my-0">{edu.institute}</p>
          {edu.grade && <p className="text-xs italic my-0">Grade: {edu.grade}</p>}
        </div>
      ))}
    </section>
  );
};

export default EducationPreview;