import React from "react"

import Calculation from "../lib/components/Calculation"

export default {
  title: "Calculation",
  component: Calculation
}

const Template = (args) => <Calculation {...args} />

export const Primary = Template.bind({})
Primary.args = {
  number1: 3,
  number2: 5
}
export const Secondary = Template.bind({})
Secondary.args = {
  number1: 100,
  number2: 105
}
export const SomethingElse = Template.bind({})
SomethingElse.args = {
  number1: 300,
  number2: 5555
}
export const OtherStuff = Template.bind({})
OtherStuff.args = {
  number1: 123,
  number2: 543
}