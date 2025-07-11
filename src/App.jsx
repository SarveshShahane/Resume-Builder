import { React, useState, useRef } from 'react';
import './App.css';
import { useForm, useFieldArray } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaDownload } from 'react-icons/fa';

import HeaderSection from './sections/HeaderSection';
import ObjectiveSection from './sections/ObjectiveSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectSection from './sections/ProjectSection';
import SkillsSection from './sections/SkillSection';
import AchievementsSection from './sections/AchievementsSection';

import ResumePreview from './components/preview/ResumePreview';
import { usePrintResume } from './hooks/Print';

const App = () => {
  const [showPreview, setShowPreview] = useState(false);

  const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
    defaultValues: {
      header: {},
      objective: "",
      education: [],
      experience: [],
      projects: [],
      skills: []
    }
  });
  
  const {
    fields: educationFields,
    append: addEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education"
  });
  
  const {
    fields: experienceFields,
    append: addExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experience"
  });
  
  const {
    fields: projectFields,
    append: addProject,
    remove: removeProject,
  } = useFieldArray({
    control,
    name: "projects"
  });
  
  const {
    fields: skillFields,
    append: addSkillCategory,
    remove: removeSkillCategory,
  } = useFieldArray({
    control,
    name: "skills"
  });
  
  const formData = watch();
  
  const componentRef = useRef();
  
  const { 
    isPrinting,
    printInstructions,
    handlePrint,
    printWithInstructions 
  } = usePrintResume(componentRef, formData);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Resume Builder</h1>
      
      {printInstructions && (
        <div className="fixed top-0 left-0 right-0 bg-blue-500 text-white p-4 text-center z-50">
          <p>To save as PDF: Choose "Save as PDF" in the destination/printer dropdown of the print dialog</p>
        </div>
      )}
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className={showPreview ? "lg:w-1/2" : "w-full"}>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <HeaderSection register={register} errors={errors} />
              <hr className="my-4" />
              <ObjectiveSection register={register} errors={errors} />
              <hr className="my-4" />
              <EducationSection 
                register={register} 
                errors={errors} 
                educationFields={educationFields} 
                addEducation={addEducation} 
                removeEducation={removeEducation} 
              />
              <hr className="my-4" />
              <ExperienceSection 
                register={register} 
                errors={errors} 
                experienceFields={experienceFields} 
                addExperience={addExperience} 
                removeExperience={removeExperience} 
              />
              <hr className="my-4" />
              <ProjectSection 
                register={register} 
                errors={errors} 
                projectFields={projectFields} 
                addProject={addProject} 
                removeProject={removeProject} 
              />
              <hr className="my-4" />
              <SkillsSection
                register={register}
                errors={errors}
                skillFields={skillFields}
                addSkillCategory={addSkillCategory}
                removeSkillCategory={removeSkillCategory}
              />
              <hr className="my-4" />
              <AchievementsSection register={register} errors={errors} />
              
              <div className="mt-6 flex justify-between">
                <button 
                  type="submit" 
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Save Resume
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  {showPreview ? <><FaEyeSlash size={14} /> Hide Preview</> : <><FaEye size={14} /> Show Preview</>}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {showPreview && (
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="bg-blue-500 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
                <h2 className="font-semibold">Resume Preview</h2>
          
              </div>
              <div className="bg-white p-6 rounded-b-lg">
                <ResumePreview ref={componentRef} formData={formData}  />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;