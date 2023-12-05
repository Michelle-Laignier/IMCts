import { useState } from "react"
import "./styles.scss"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Home() {
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [imc, setImc] = useState("")
  const [classification, setClassification] = useState("")
  const [values, setValues] = useState("")
  
  class Person {
    constructor(public weight:number, public height:number) {}

    calculateImc():number {
      return this.weight / (this.height * this.height)
    }
  }

  function showIMC() {
    if(weight === undefined || height === undefined) {
      return
    } else if(weight <= 0 || height <= 0) {
      return
    }

    const person = new Person(weight, height)
    const result = person.calculateImc().toFixed(1);
    setImc(`= ${result}`)
    referenceValues(result)
  }
    
  function referenceValues(result:string) {
    if(Number(result) < 18.5) {
      setClassification("Magreza")
      setValues("Normal a partir de 18.5")
    } else if(Number(result) >= 18.5 && Number(result) <= 24.9) {
      setClassification("Normal")
      setValues("De 18.5 até 24.9")
    } else if(Number(result) >= 25 && Number(result) <= 29.9) {
      setClassification("Sobrepeso")
      setValues("De 25 até 29.9")
    } else if(Number(result) >= 30 && Number(result) <= 34.9) {
      setClassification("Obesidade grau 1")
      setValues("De 30 até 34.9")
    } else if(Number(result) >= 35 && Number(result) <= 39.9) {
      setClassification("Obesidade grau 2")
      setValues("De 35 até 39.9")
    } else if(Number(result) >= 40) {
      setClassification("Obesidade grau 3")
      setValues("A partir de 40")
    } 
  }

  return(
    <div className="container">
      <h1>Calculadora de IMC</h1>

      <div className="content">
        <div>
          <p>Peso (Kg)</p>
          <Input value={weight} onChange={setWeight}/>
        </div>

        <div>
          <p>Altura (m)</p>
          <Input value={height} onChange={setHeight}/>
        </div>
        
        <Button title="Calcular" onClick={showIMC}/>
      </div>

      <div className="result">
        <div>
          <p>IMC</p>
          <p>{imc}</p>
        </div>

        <div>
          <p>Classificação</p>
          <p>{classification}</p>
          <p>{values}</p>
        </div>
          
      </div>
    </div>
  )
}