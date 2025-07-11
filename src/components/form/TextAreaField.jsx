import React from 'react'
import { useState } from 'react'
const TextAreaField = ({ label, name, placeholder, register, error, validation ,maxCount,rows}) => {
    const [length,setLength]=useState(0);
    const handleChange=(e)=>{
        setLength(e.target.value.length)
    }
    return (
        <div className='flex flex-col gap-1 w-full relative mr-2 my-6'>
            {label && <label htmlFor={label} className='block mx-[2px] absolute bg-white left-5 top-[-2px]  text-xs font-medium text-gray-700 '>{label}</label>}
            <textarea
            name={name}
            id={name}
            rows={rows}
            placeholder={placeholder}
            {...register(name,validation)}
          className={`border  px-3 my-2 mx-3 py-2 w- rounded-md focus:outline-none 
                ${error ?"border-red-500":"border-black-300"}
                focus:ring-2 focus:ring-blue-500 
                resize-none
                `}
            onChange={handleChange}
            /> 
            {maxCount&&<p className='block absolute bottom-[-6px] right-4 text-xs'>{length}/{maxCount}</p>}
            {error&& <p className='block absolute text-xs bottom-[-6px] left-5 text-red-500 '>{error.message}</p>}
        </div>
    )
}

export default TextAreaField