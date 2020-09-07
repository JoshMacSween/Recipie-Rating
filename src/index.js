import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import colorData from './color-data.json'
import ColorList from './ColorList.js'

export default function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <ColorList
      colors={colors}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => color.id !== id)
        setColors(newColors)
      }}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
