import React from 'react'

export default function Post({...props}) {
  return (
    <div className="education__type">
        <div className="education__years">{props.date}</div>
        <div className="education__called">{props.post}</div>
    </div>
  )
}
