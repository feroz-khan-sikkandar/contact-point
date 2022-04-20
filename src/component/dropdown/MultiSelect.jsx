import React, { useState } from 'react'

function MultiSelect(props) {

  console.log(props);

  const [values, setValues] = useState(props.values);



  return (
    <div>{props.children}</div>
  )
}

export default MultiSelect