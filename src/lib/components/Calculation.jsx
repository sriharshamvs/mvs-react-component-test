import { addition, subtraction, multiplication, division } from "../utils"
import PropTypes from "prop-types"

const Calculations = ({ number1, number2 }) => {
  return (
    <div>
      <p>Addition: {addition(number1, number2)}</p>
      <p>Subtraction: {subtraction(number1, number2)}</p>
      <p>Multiplication: {multiplication(number1, number2)}</p>
      <p>Division: {division(number1, number2)}</p>
    </div>
  )
}

Calculations.propTypes = {
  number1: PropTypes.number,
  number2: PropTypes.number
}

export default Calculations
