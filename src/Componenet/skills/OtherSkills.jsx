import React from 'react'

export default function OtherSkills({children, ...props}) {
  return (
    <li className="skills__type">{children}
        <div>
            <img className="skills__img" src={props.name} alt={props.text}/>
        </div>
    </li>
  )
}
