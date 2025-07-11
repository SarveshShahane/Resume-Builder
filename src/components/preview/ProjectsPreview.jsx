import React from 'react';
import { formatDescription } from '../../utils/formatDescription';

const ProjectsPreview = ({ projectsList = [] }) => {
  if (!projectsList?.length) return null;
  
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
        Projects
      </h2>
      {projectsList.map((project, index) => (
        <div key={index} className="mb-3">
          <div className="flex justify-between">
            <h3 className="font-semibold">{project.title}</h3>
            {project.link && (
              <a href={project.link} className="text-sm text-blue-600">
                View Project
              </a>
            )}
          </div>
          {project.techStack && <p className="text-sm italic">Tech: {project.techStack}</p>}
          {project.description && (
            <div className="text-sm mt-1 ml-2">
              {formatDescription(project.description)}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProjectsPreview;