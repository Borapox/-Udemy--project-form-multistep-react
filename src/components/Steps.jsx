import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import React from 'react'

import './styles/steps.css'



// Lógica dos passos. Conforme avança, altera a estilização 

const Steps = ({currentStep}) => {
  return (
    <div className='step flex justify-center items-center gap-16 max-w-[400px] relative mb-8'>
       
        <div className='z-10'>
            <p className='flex items-center flex-col bg-white text-zinc-500 active w-[94px]'>
                <AiOutlineUser />
                Identificação
            </p>
        </div>

        <div className={`${currentStep >= 1 ? "active" : ""} z-10`}>
            <p className='flex items-center flex-col z-10 text-zinc-500 bg-white w-[94px]'>
                <AiOutlineStar />
                Avaliação
            </p>
        </div>

        <div className={`${currentStep >= 2 ? "active" : ""} z-10`}>
            <p className='flex items-center flex-col z-10 text-zinc-500 bg-white w-[94px]'>
                <FiSend />
                Envio
            </p>
        </div>

    </div>
  )
}

export default Steps