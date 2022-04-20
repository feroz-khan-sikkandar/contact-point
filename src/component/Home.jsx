import React from 'react'
import MultiSelectDropDown from './dropdown/MultiSelectDropDown'

function Home() {


  const colors = ['red', 'yellow', 'green', 'blue'];


  return (
    <MultiSelectDropDown choices={colors} />
  )
}

export default Home