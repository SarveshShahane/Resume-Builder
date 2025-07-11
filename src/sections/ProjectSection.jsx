import React from 'react'
import InputField from '../components/form/InputField'
import TextAreaField from '../components/form/TextAreaField'

const ProjectSection = ({ register, errors, projectFields, addProject, removeProject }) => {
  return (
    <div className='p-4 space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold text-gray-800'>Projects</h2>
        <button
          type='button'
          onClick={() => addProject({})}
          className='px-3 py-1 bg-blue-500 text-white rounded text-sm'>+ Add Project</button>
      </div>
      {projectFields.map((field, index) => {
        return (
          <div
            key={field.id}
          >
            <button
              type='button'
              onClick={() => removeProject(index)}
              className='bg-red-500 text-white px-3 py-1 rounded text-sm'>- Remove Project</button>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <InputField
                label={"Project Title"}
                name={`projects[${index}].title`}
                placeholder={"e.g. Resume Builder App"}
                register={register}
                error={errors?.projects?.[index]?.title}
                validation={{
                  required: "Project title is required"
                }}
              />
              <InputField
                label={"Live Link/GitHub"}
                name={`projects[${index}].link`}
                placeholder={"e.g. https://github.com/username/project"}
                register={register}
                error={errors?.projects?.[index]?.link}
              />
            </div>
            
            <div className='mt-3'>
              <InputField
                label={"Tech Stack"}
                name={`projects[${index}].techStack`}
                placeholder={"e.g. React, TailwindCSS, Firebase"}
                register={register}
                error={errors?.projects?.[index]?.techStack}
                validation={{
                  required: "Tech stack is required"
                }}
              />
            </div>

            <div className='mt-3'>
              <TextAreaField
                label={"Description"}
                name={`projects[${index}].description`}
                placeholder={"Describe your project, features, and your role"}
                register={register}
                error={errors?.projects?.[index]?.description}
                validation={{
                  required: "Project description is required"
                }}
                rows={3}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectSection