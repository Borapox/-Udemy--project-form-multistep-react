import React from 'react'

const UserForm = () => {
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
          className='border-none shadow-borderNoneShadow outline-none rounded-md p-2'
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
          className='border-none shadow-borderNoneShadow outline-none rounded-md p-2'
          required 
        />

        <textarea 
        name="textarea"
        placeholder='Digite sua avaliação'
        className='border-none shadow-borderNoneShadow outline-none rounded-md p-2 h-40'
        >

        </textarea>
    </div>
  )
}

export default UserForm