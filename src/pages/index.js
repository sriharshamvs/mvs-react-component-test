import HelloWorld from "../lib/components/HelloWorld"
import Calculation from "../lib/components/Calculation"

const Index = () => {
  return (
    <div>
      <HelloWorld />
      <Calculation number1={3} number2={5}/>
    </div>
  )
}

export default Index
