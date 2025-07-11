import React from 'react'
import InputField from '../components/form/InputField'
import TextAreaField from '../components/form/TextAreaField'
const ExperienceSection = ({ register, errors, experienceFields, addExperience, removeExperience }) => {
    return (
        <div className='p-4 space-y-4'>
            <div className='flex justify-between items-center'>
                <h2 className='text-gray-800 font-semibold text-lg'>Experience</h2>
                <button
                    type='button'
                    onClick={() => {
                        addExperience({})
                    }}
                    className='bg-blue-500 text-white px-3 text-sm py-1 border rounded'
                >+ Add Experience</button>
            </div>
            {experienceFields.map((field, index) => {
                return (
                    <div
                        key={field.id}>
                        <button
                            type='button'
                            onClick={() => { removeExperience(index) }}
                            className='bg-red-500 text-white text-sm px-3 py-1 rounded'>Remove Experience</button>
                        <h3 className='text-lg font-semibold test-gray-800 mt-3'>{`Experience ${index + 1}`}</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <InputField
                                label={"Job Title"}
                                name={`experience.${index}.jobTitle`}
                                placeholder={"eg. Software Intern"}
                                register={register}
                                error={errors?.experience?.[index]?.jobTitle}
                                validation={{
                                    required: "Job title required"
                                }}
                            />
                            <InputField
                                label={"Company"}
                                name={`experience.${index}.company`}
                                placeholder={"eg. Google"}
                                register={register}
                                error={errors?.experience?.[index]?.company}
                                validation={{
                                    required: "Company required"
                                }}
                            />
                            <InputField
                                label={"Location"}
                                name={`experience.${index}.location`}
                                placeholder={"eg. Delhi, India"}
                                register={register}
                                error={errors?.experience?.[index]?.location}
                                validation={{
                                    required: "Location required"
                                }}
                            />
                            <InputField
                                label={"Start Date"}
                                name={`experience.${index}.startDate`}
                                placeholder={"eg. Mar 2025"}
                                register={register}
                                error={errors?.experience?.[index]?.startDate}
                                validation={{
                                    required: "Start date required"
                                }}
                            />
                            <InputField
                                label={"End Date"}
                                name={`experience.${index}.endDate`}
                                placeholder={"eg. Jun 2025 or Present"}
                                register={register}
                                error={errors?.experience?.[index]?.endDate}
                            />
                        </div>
                        <div>
                            <TextAreaField
                                label={"Description"}
                                name={`experience.${index}.description`}
                                placeholder={"Describe your responsibilities..."}
                                type={"text"}
                                register={register}
                                error={errors?.experience?.[index]?.description}
                                validation={{
                                    required: "This is a required field...",
                                    validate: (value) =>
                                        value.trim().length >= 15 || "Description is too short"
                                }}
                                rows={7}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ExperienceSection