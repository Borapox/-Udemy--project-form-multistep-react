//  Importações
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm  from "./components/UserForm";
import ReviewForm  from "./components/ReviewForm"
import Thanks from "./components/Thanks"



//  Sessão de Hooks
import useForm from "./hooks/useForm"


function App() { 
  const formComponents = [<UserForm />, <ReviewForm></ReviewForm>,<Thanks></Thanks>];
  const {currentStep, currentComponent, changeStep} = useForm(formComponents)
  
  return (
 <div>
      {/* Header */}
      <div>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </div>


      {/* Formulário */}
      <div>
        
          <p>Etapas</p>

          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div>
            {currentComponent}
            </div>

          <div className="flex gap-2">
            <button
              type="button" 
              onClick={() => changeStep(currentStep - 1)}
              className="border border-zinc-500 rounded-sm w-[120px] h-[30px] flex justify-center items-center bg-slate-200 hover:bg-slate-400">
              <GrFormPrevious />
              <span>Voltar</span>
            </button>

            <button 
              type="submit" 
              className="border border-zinc-500 rounded-sm w-[120px] h-[30px] flex justify-center items-center bg-slate-200 hover:bg-slate-400">
              <GrFormNext />
              <span>Avançar</span>
            </button>
          </div>
          </form>

      </div>

 </div>
  )
}

export default App