import React from "react"

export default function Workplace({img, title, duration, description}) {

  return(
  <article>
    <figure>
      <div>
        <img loading="lazy" src={img} alt={title} width="100%"/>
        <figcaption>
          {title}
        </figcaption>
      </div>
    </figure>
    <h3>{title}</h3>
    <div>{duration}</div>
    <p>{description}</p>
  </article>
  )
}
