import './styles/review.css'
import { 
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill,  
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill 
} from 'react-icons/bs'

import React from 'react'



// FALTA CRIAR FUNÇÃO DE MARCAR A COR NOS ÍCONES


const ReviewForm = () => {
  return (
    <div className='flex justify-center flex-col'>
      {/* Form Control */}

      <div className='flex justify-center items-center gap-8 text-center'>
         
          <div className='flex flex-col icon_reaction text-center'>
            <label className=' icon_reaction flex flex-row justify-center gap-4 icon_unsatisfied'>
              <input 
                type="radio"
                className='opacity-0 absolute' 
                name="review" 
                value="unsatisfied" 
                required
              />
              <BsFillEmojiFrownFill className="size-6 cursor-pointer transition hover:text-red-500"/> 
            </label>  
            <p className='font-bold text-zinc-500 text-center relative'>
              Insatisfeito
            </p>
          </div>
          
          <div className='flex flex-col'>
            <label className='flex flex-row justify-center gap-4 icon_neutral'>
              <input 
                type="radio"
                className='opacity-0 absolute' 
                name="review" 
                value="neutral" 
                required
              />
              <BsFillEmojiNeutralFill className="size-6 cursor-pointer transition hover:text-yellow-500"/> 
            </label>  
            <p className='font-bold text-zinc-500 relative'>
              Poderia
              Ser Melhor</p>
          </div>

          <div className='flex flex-col'>
            <label className='flex flex-row justify-center gap-4 icon_satisfied'>
            <input 
                type="radio"
                className='opacity-0 absolute' 
                name="review" 
                value="satisfied" 
                required
              />
              <BsFillEmojiSmileFill className="size-6 cursor-pointer transition hover:text-green-500 form-check"/> 
            </label>
            <p className='font-bold text-zinc-500 relative'>
              Satisfeito
            </p>
          </div>

          <div className='flex flex-col'>
            <label className='flex flex-row justify-center gap-4 icon_verySatisfied'>
            <input 
                type="radio"
                className='opacity-0 text-[50px]' 
                name="review" 
                value="very_satisfied" 
                required
              />
              <BsFillEmojiHeartEyesFill className="size-6 cursor-pointer transition hover:text-purple-500"/> 
            </label>   
            <p className='font-bold text-zinc-500 relative'>
              Muito Satisfeito</p>
          </div>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='comment'>Comentário</label>
          <textarea 
            name="textarea"
            placeholder='Conte como foi sua experiência com o produto...'
            required
            className='border border- [#b8b8ff] shadow-borderNoneShadow outline-none rounded-md p-2 h-40'
          >

          </textarea>
      </div>
    </div>
  )
}

export default ReviewForm