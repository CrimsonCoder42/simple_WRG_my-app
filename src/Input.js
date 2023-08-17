import React from 'react'

const Input = (props) => {
  return (
    <div className='mb-3'>
      <label htmlFor={props.name} className='form-label'>{props.title}</label>
      <input
        type={props.type}
        className={props.className}
        id={props.name}
        autoComplete={props.autoComplete}
        // name={props.name}
        // value={props.value}
        onChange={props.onChange}
        // placeholder={props.placeholder}
        // {...props}
      />
    </div>
  )
}

export default Input