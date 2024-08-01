import { GrFormNext, GrFormPrevious } from "react-icons/gr"

export default function App() {
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

    <form>
      <div></div>
      <div>
        <button type="button" className="border border-zinc-900">
          <GrFormPrevious />
          <span>Voltar</span>
        </button>

        <button type="submit" className="border border-zinc-900">
          <GrFormNext />
          Avançar
        </button>
      </div>
    </form>
  </div>

 </div>
  )
}