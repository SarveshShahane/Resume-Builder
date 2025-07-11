import React from 'react'
import { useState } from 'react'
import TextAreaField from '../components/form/TextAreaField'
const AchievementsSection = ({register,errors}) => {
  return (
    <div className='p-4 space--y-4 '>
        <div >
            <h2 className='text-gray-800 text-lg font-semibold'>Achievements</h2>
        </div>
      <TextAreaField 
      label={"Achievements"}
      name={"achievements"}
      placeholder={"Use new line for each achievement \neg. Won gold medal in IMO \nTop 10 in coding contest"}
    register={register}
    error={errors.achievements}
    rows={7}
      />
    </div>
  )
}

export default AchievementsSection