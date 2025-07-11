import {React,forwardRef} from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, 
  FaGithub, FaGraduationCap, FaBriefcase, FaCode, FaTrophy 
} from 'react-icons/fa';


const ResumePreview = forwardRef(({ formData }, ref)=> {
  if (!formData) return <div>Loading preview...</div>;
  
  const { header, objective, education, experience, projects, skills, achievements } = formData;

  return (
    <div className="resume-preview font-sans leading-relaxed text-gray-800">
      {/* Header */}
      {header && (
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-blue-800 mb-1">
            {header.fullName || "Your Name"}
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {header.email && (
              <div className="flex items-center">
                <FaEnvelope className="mr-1 text-gray-600" size={12} />
                <span>{header.email}</span>
              </div>
            )}
            {header.phone && (
              <div className="flex items-center">
                <FaPhone className="mr-1 text-gray-600" size={12} />
                <span>{header.phone}</span>
              </div>
            )}
            {header.location && (
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1 text-gray-600" size={12} />
                <span>{header.location}</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
            {header.linkedIn && (
              <div className="flex items-center text-blue-600">
                <FaLinkedin className="mr-1" size={14} />
                <a href={header.linkedIn} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            )}
            {header.github && (
              <div className="flex items-center text-gray-700">
                <FaGithub className="mr-1" size={14} />
                <a href={header.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            )}
          </div>
        </header>
      )}

      {/* Objective */}
      {objective && (
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-sm">{objective}</p>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2 flex items-center">
            <FaGraduationCap className="mr-1" /> Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{edu.degree || "Degree"}</h3>
                  <p className="text-sm">{edu.institute || "Institute"}</p>
                </div>
                <div className="text-sm text-gray-600">
                  {edu.startYear || "Start"} - {edu.endYear || "End"}
                </div>
              </div>
              {edu.grade && (
                <div className="text-sm italic">Grade: {edu.grade}</div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2 flex items-center">
            <FaBriefcase className="mr-1" /> Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{exp.jobTitle || "Position"}</h3>
                  <p className="text-sm">{exp.company || "Company"}{exp.location ? `, ${exp.location}` : ""}</p>
                </div>
                <div className="text-sm text-gray-600">
                  {exp.startDate || "Start"} - {exp.endDate || "Present"}
                </div>
              </div>
              {exp.description && (
                <p className="text-sm mt-1">{exp.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2 flex items-center">
            <FaCode className="mr-1" /> Projects
          </h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{project.title || "Project Title"}</h3>
                  {project.techStack && (
                    <p className="text-sm italic">Technologies: {project.techStack}</p>
                  )}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600"
                  >
                    View Project
                  </a>
                )}
              </div>
              {project.description && (
                <p className="text-sm mt-1">{project.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {skills.map((skillCategory, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-semibold text-sm">{skillCategory.category || "Category"}:</h3>
                <p className="text-sm">{skillCategory.skills || "Skills"}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Achievements */}
      {achievements && (
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2 flex items-center">
            <FaTrophy className="mr-1" /> Achievements
          </h2>
          {achievements.split('\n').filter(line => line.trim()).map((achievement, index) => (
            <div key={index} className="mb-1 text-sm flex items-start">
              <span className="mr-2">•</span>
              <span>{achievement}</span>
            </div>
          ))}
        </section>
      )}
    </div>
  );
});
ResumePreview.displayName = 'ResumePreview';


export default ResumePreview;