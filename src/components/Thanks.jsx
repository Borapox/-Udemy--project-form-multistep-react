import { 
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill,  
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill 
} from 'react-icons/bs'

import React from 'react'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
}

const Thanks = ({ data }) => {
  return (
<div>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-2xl mb-6'>
          Falta pouco...
        </h2>

        <div className='mb-4 flex flex-col items-center text-zinc-500'>
            <p className='text-center mb-3'>
              A sua opinião é muito importante, em breve você receberá um cupom
              de 10% de desconto para sua próxima compra.
            </p>

            <p>
              Para concluir sua avaliação clique no botão Enviar abaixo.
            </p>
        </div>
        <h2 className='font-bold text-2xl mb-6'>
          Resumo da sua avaliação <span className='text-purple-500'>{data.name}</span>
        </h2>
      </div>

      <div className='flex flex-col'>
            <p className='text-zinc-500 font-bold mb-3'>
              <span>
                Satisfação com o produto:
              </span>
              
            </p>
            <div className='text-2xl'>
            {emojiData[data.review]}
            </div>
            <p className='text-zinc-500 font-bold mt-3'>
              <span>
                Comentário:
              </span>
            </p>
            <div className='border border-[#b8b8ff] shadow-borderNoneShadow outline-none rounded-[8px] m-5 p-2 pl-6'>
            {data.comment}
            </div>
      </div>

</div>

  )
}

export default Thanks