import React from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../components/form/InputField'
const HeaderSection = ({register,errors}) => {
   
    return (
        <div >
            <div className='flex flex-col  w-full max-w-full mx-auto p-4 bg-white  rounded-lg   '>

         <div className="grid  gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                   <InputField 
                   name={'header.fullName'}
                   label={'Full Name'}
                   placeholder={'Write your name'}
                   type={'text'}
                   register={register}
                   error={errors.fullName}
                   validation={{
                    required: "Name is required",
                }} />
                <InputField 
                label={"Email"}
                name={"header.email"}
                placeholder={"Enter your email..."}
                type={"email"}
                register={register}
                error={errors.email}
                validation={{
                    required:"Email is required!",
                    pattern:{
                        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,
                        message:"Invalid email address..."
                    },
                }}/>
                <InputField
                label={"Contact"}
                name={"header.phone"}
                placeholder={"Write your contact number..."}
                type={"text"}
                register={register}
                error={errors.phone}
                validation={
                    {
                        required:"Phone is required!",
                        pattern:{
                            value:/^[0-9]{10}$/,
                            message:"Phone number must be 10 digits"
                        }
                    }
                }
                />
                    <InputField 
                label={"Location"}
                name={"header.location"}
                placeholder={"eg. Delhi, India"}
                register={register}
                error={errors.location}
                validation={{
                    required: "Location is required",
                }}
                />
                <InputField 
                label={"LinkedIn"}
                name={"header.linkedIn"}
                placeholder={"Enter your Linked In url"}
                type={"url"}
                register={register}
                error={errors.linkedIn}
       
                />
                    <InputField
                label={"GitHub"}
                name={"header.github"}
                placeholder={"Enter your GitHub url"}
                type={"url"}
                register={register}
                error={errors.github}
     
                />
         </div>
         </div>
        </div>
    )
}

export default HeaderSection