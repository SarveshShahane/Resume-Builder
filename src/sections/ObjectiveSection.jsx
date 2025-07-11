import React from 'react'
import { useForm } from 'react-hook-form';
import TextAreaField from '../components/form/TextAreaField'
const ObjectiveSection = ({ register, errors }) => {


    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='p-4 space-y-4'>
            <h2 className='text-lg font-semibold text-gray-800'>Career Objective</h2>
            <TextAreaField
                label={"Objective"}
                name={"objective"}
                placeholder={"Write about your career goals."}
                type={"text"}
                register={register}
                error={errors.objective}
                validation={{
                    required: "Objective is required",
                    minLength: {
                        value: 10,
                        message: "Objective must me 8 letters long",
                    },
                    maxLength: {
                        value: 500,
                        message: "Objective is too long"
                    },
                }}
                maxCount={500}
                rows={4}
            />
        </div>
    )
}

export default ObjectiveSection