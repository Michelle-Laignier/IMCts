import "./styles.scss"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Home() {
  return(
    <div className="container">
      <h1>Calculadora de IMC</h1>

      <div className="content">
        <div>
          <p>Peso</p>
          <Input/>
        </div>

        <div>
          <p>Altura</p>
          <Input/>
        </div>
        
        <Button title="Calcular"/>
      </div>

      <div className="result">
        <div>
          <p>IMC</p>
          <p>20</p>
        </div>

        <div>
          <p>Classificação</p>
          <p>Normal</p>
        </div>
          
      </div>
    </div>
  )
}