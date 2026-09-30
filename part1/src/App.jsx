import { useState } from 'react'


// TODO: continue from part 1d rules of hooks
//https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#complex-state

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        this app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  )
}

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const App = () => {
  const [left, setLeft] = useState(0) //cannot be used in conditionals, loops, etc
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const [value, setValue] = useState(10)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const resetAll = () => {
    setLeft(0)
    setRight(0)
    setAll([])
    setTotal(0)
  }

  const setToValue = (newValue) => () => {
    console.log('value now', newValue) //print new value to console
    setValue(newValue)
  }

  // debugger

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left'/>
      <Button onClick={handleRightClick} text='right'/>
      {right}

      <Button onClick={resetAll} text='reset all'/>
      
      <History allClicks={allClicks} />
      <p>total {total}</p>

      <Button onClick={setToValue(1000)} text='thousand'/>
      <Button onClick={setToValue(0)} text='reset'/>
      <Button onClick={setToValue(value + 1)} text='increment'/>
    </div>
  )
}

export default App