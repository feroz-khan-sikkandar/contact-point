import React, { useState } from 'react'
import MultiSelect from './MultiSelect';
import MultiSelectItem from './MultiSelectItem';

function MultiSelectDropDown(props) {

  // Initializing state
  const [state, setState] = useState({
    filter: '',
    selectedValues: [],
    isFilterVisible: true,
    isSubmitClearVisible: true
  });


  const filterChoices = (choices, filter) =>
    Object.keys(choices).reduce((memo, value) => {
      const name = choices[value]

      if (name.toLowerCase().includes(filter.toLowerCase()))
        memo[value] = name

      return memo
    }, {})


  const selectValues = (selectedValues) => {
    console.log("selected values: " + selectedValues);
    setState({ ...state, selectedValues: selectedValues });
  }

  const choices = state.filter
    ? filterChoices(props.choices, state.filter)
    : props.choices

  const values = Object.keys(choices)

  return (
    <div>

      <p>
        <button onClick={() => selectValues(values)}>Select all</button> {' '}
        <button onClick={() => selectValues([])}>Select none</button> {' '}
      </p>

      {state.isSubmitClearVisible &&
        <input
          placeholder="Filter the list..."
          onChange={event => setState({ ...state, filter: event.target.value })}
        />
      }


      <MultiSelect
        values={state.selectedValues}
        onChange={values => selectValues(values)}
      >
        <div>
          {values.map(value => (
            <MultiSelectItem key={value} value={value}>{choices[value]}</MultiSelectItem>
          ))}
        </div>
      </MultiSelect>

      {state.isFilterVisible && <p>
        <button onClick={() => selectValues(values)}>Submit</button> {' '}
        <button onClick={() => selectValues([])}>Clear</button> {' '}
      </p>}

    </div>
  )
}

export default MultiSelectDropDown