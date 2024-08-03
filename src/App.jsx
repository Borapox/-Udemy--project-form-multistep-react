//  Importações
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm  from "./components/UserForm";
import ReviewForm  from "./components/ReviewForm"
import Thanks from "./components/Thanks"



//  Sessão de Hooks
import useForm from "./hooks/useForm"
import { FiSend } from "react-icons/fi";


function App() { 
  const formComponents = [<UserForm />, <ReviewForm></ReviewForm>,<Thanks></Thanks>];
  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)
  
  return (
 <div>
      {/* Header */}
      <div>
        <h2 className="mb-8 text-3xl font-bold text-center">
          Deixe sua avaliação
        </h2>
        <p className="text-zinc-500">
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.
        </p>
      </div>


      {/* Formulário */}
      <div
        className="max-w-[600px] bg-white p-6 shadow-customShadow"
      >
        
          <p>Etapas</p>

          <form 
            onSubmit={(e) => changeStep(currentStep + 1, e)}
            className="w-full flex justify-center flex-col"
          >
            <div>
            {currentComponent}
            </div>

          <div className="flex justify-end gap-2">
              {!isFirstStep &&
              (
                <button
                type="button" 
                onClick={() => changeStep(currentStep - 1)}
                className="cursor-pointer px-2 py-4 border border-zinc-500 rounded-sm w-[120px] h-[30px] flex justify-center items-center bg-slate-200 transition duration-300 ease-in-out hover:bg-slate-400">
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              )

              }
              {!isLastStep ? 
              (           
                  <button 
                    type="submit" 
                    className="cursor-pointer px-2 py-4 border border-zinc-500 rounded-sm w-[120px] h-[30px] flex justify-center items-center bg-slate-200 transition duration-300 hover:bg-slate-400">
                    <span>Avançar</span>
                    <GrFormNext />
                  </button>
                    ) : 
                    (
                                      
                  <button 
                    type="button" 
                    className="cursor-pointer px-2 py-4 border border-zinc-500 rounded-sm w-[120px] h-[30px] flex justify-center items-center bg-slate-200 transition duration-300 hover:bg-slate-400">
                    <span>Enviar</span>
                    <FiSend />
                  </button>
                )

              }
          </div>
          </form>

      </div>

 </div>
  )
}

export default App