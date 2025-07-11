import React from 'react'
import InputField from '../components/form/InputField'

const EducationSection = ({ register, errors, educationFields, addEducation, removeEducation }) => {
  return (
    <div className='p-4 space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold text-gray-800'>Education</h2>
        <button
          type='button'
          onClick={() => addEducation({})}
          className='px-3 py-1 bg-blue-500 text-white rounded text-sm'>+ Add Education</button>
      </div>
      {educationFields.map((field, index) => {
        return (
          <div
            key={field.id}
          >
            <button
              type='button'
              onClick={() => removeEducation(index)}
              className=' bg-red-500 text-white px-3 py-1 rounded   text-sm'>- Remove Education</button>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
              <InputField
                label={"Degree"}
                name={`education[${index}].degree`}
                placeholder={"eg. BTech in ECE"}
                register={register}
                error={errors?.education?.[index]?.degree}
                validation={{
                  required: "Degree is reduired"
                }}
              />
              <InputField
                label={"Institute"}
                name={`education[${index}].institute`}
                placeholder={"eg. IIT Delhi"}
                register={register}
                error={errors?.education?.[index]?.institute}
                validation={{
                  required: "Institute name is required"
                }}
              />
              <InputField
                label={"Start year"}
                name={`education[${index}].startYear`}
                placeholder={"eg.2023"}
                register={register}
                error={errors?.education?.[index]?.startYear}
                validation={{
                  required: "Start year is required",
                  pattern: {
                    value: /^\d{4}$/,
                    message: "Enter a valid 4-digit year"
                  }
                }}
              />
              <InputField
                label={"End year"}
                name={`education[${index}].endYear`}
                placeholder={"eg.2027"}
                register={register}
                error={errors?.education?.[index]?.endYear}
                validation={{
                  required: "End year is required",
                  pattern: {
                    value: /^\d{4}$/,
                    message: "Enter a valid 4-digit year"
                  }
                }}
              />
              <InputField
                label={"CGPA / Grade"}
                name={`education[${index}].grade`}
                placeholder={"eg.9.27/10 CGPA"}
                register={register}
                error={errors?.education?.[index]?.grade}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EducationSection