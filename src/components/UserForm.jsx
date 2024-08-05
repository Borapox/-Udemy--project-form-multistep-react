import React from 'react'

const UserForm = ({data,  updateFieldHandler}) => {
  return (
    <div className='flex flex-col gap-2.5 mb-8'>
        
        <label 
          htmlFor="name"
          className='font-bold text-zinc-600'
          >
          Nome:
        </label>
        
        <input 
          type="text" 
          name="text" 
          placeholder='Digite seu nome' 
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          className='border-none  shadow-borderNoneShadow outline-none rounded-md p-2'
        />

        <label 
          htmlFor="email"
          className='font-bold text-zinc-600'
          >
          E-mail:
        </label>

        <input 
          type="email" 
          name="email" 
          placeholder='Digite seu e-mail'
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          className='border-none shadow-borderNoneShadow outline-none rounded-md p-2'
          required 
        />
        
    </div>
  )
}

export default UserForm