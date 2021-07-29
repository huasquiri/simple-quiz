import React, {useState} from 'react'

function CheckBoxChoice({handleMultipleChoice, options}) {
  const [selected, setSelected] = useState(false)

  function handleSelected(evt) {
    console.log(evt.target.checked)
    if (evt.target.checked) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }
  return (
    <React.Fragment>
      <input
        type="checkbox"
        value={options.profile}
        onChange={(evt) => {
          handleMultipleChoice(evt, options)
          handleSelected(evt)
        }}
        checked={selected}
      />
      <pre>{JSON.stringify(selected)}</pre>
    </React.Fragment>
  )
}

export default CheckBoxChoice
