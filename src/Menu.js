import React from 'react'
import Recipe from './Recipe'
import StarRating from './StarRating'

export default function Menu({ title, recipes }) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className='recipes'>
        <StarRating
          style={{ backgroundColor: "lightblue" }}
          onDoubleClick={e => alert("Double Click")}
        />
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  )
}
