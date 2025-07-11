import React, { useState } from 'react'
import InputField from '../components/form/InputField'

const SkillsSection = ({ register, errors, skillFields, addSkillCategory, removeSkillCategory }) => {

  return (
    <div className='p-4 space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold text-gray-800'>Skills</h2>
        <button
          type='button'
          onClick={() => {
            addSkillCategory({})
          }}
          className='bg-blue-500 rounded text-sm px-3 py-1 text-white  '
        >+ Add New Category</button>
      </div>
      {skillFields.map((field, index) => {
        return (
          <div
            key={field.id}>
            <button type='button' onClick={() => removeSkillCategory(index)} className='bg-red-500 rounded text-sm px-3 py-1 text-white'>Remove category</button>
            <InputField
              label={"Category"}
              name={`skills.${index}.category`}
              placeholder={"eg. Frontend , Languages..."}
              register={register}
              error={errors?.skills?.[index]?.category}
            />
            <InputField
              label={"Skills"}
              name={`skills.${index}.skills`}
              placeholder={"Write comma (,) separated eg. React, Java "}
              register={register}
              error={errors?.skills?.[index]?.skills}
            />
          </div>
        )
      })}
    </div>
  );
};

export default SkillsSection