import React from 'react'

export default function PostWithLink({...props}) {
  return (
    <div className="education__type">
        <div className="education__years">{props.date}</div>
        <div className="education__called">{props.post}  
            <a className="IT_link" href="https://www.it-academy.by/course/front-end-developer/">IT-Academy</a>
        </div>
    </div>
  )
}
