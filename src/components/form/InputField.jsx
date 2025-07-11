import React from 'react'

const InputField = ({ label, name, placeholder, type = 'text', register, error,validation }) => {
    return (
        <div >
          <div className="relative mr-2 my-4">
              {label && <label htmlFor={name}  className='block mx-[2px] absolute bg-white left-5 top-[-2px]  text-xs font-medium text-gray-700 '>{label}</label>}
            <input 
            type={type}
            name={name} 
            placeholder={placeholder} 
            {...(register ? register(name,validation) : {})}
            className={`border  px-3 my-2 mx-3 py-2 w-full rounded-md focus:outline-none 
                ${error ?"border-red-500":"border-black-300"}
                focus:ring-2 focus:ring-blue-500 
                `}
            />
            {error && <p className='block absolute p-[1px] top-[46px] text-xs left-4 text-red-500  '>{error.message}</p>}
          </div>
        </div>
    )
}

export default InputField