import React, {useEffect, useState} from 'react'

function CheckBoxChoice({handleMultipleChoice, options}) {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    console.log('mount checkbox component')

    return () => {
      console.log('unmount checkbox componet')
    }
  }, [])

  function handleSelected(evt) {
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
      {/* <pre>{JSON.stringify(selected)}</pre> */}
    </React.Fragment>
  )
}

export default CheckBoxChoice
