import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './Menu'
import { data } from './db'
export default function App() {}

ReactDOM.render(
  <Menu recipes={data} title='Delicious Recipes' />,
  document.getElementById('root')
)
