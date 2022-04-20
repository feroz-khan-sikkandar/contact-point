import React from 'react'

function MultiSelectItem(props) {

  console.log(props);

  const handleChange = (event) => {
    if (event.target.checked) {
      // this.context.multiselect.selectValue(props.value)
    } else {
      // this.context.multiselect.unselectValue(props.value)
    }
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          // checked={this.context.multiselect.getSelected(props.value)}
          onChange={event => handleChange(event)}
        /> {props.children}
      </label>
    </div>
  )
}

export default MultiSelectItem