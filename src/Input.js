import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <div className='mb-3'>
      <label htmlFor={props.name} className='form-label'>{props.title}</label>
      <input
        type={props.type}
        className={props.className}
        id={props.name}
        ref={ref}
        autoComplete={props.autoComplete}
        // name={props.name}
        // value={props.value}
        onChange={props.onChange}
        // placeholder={props.placeholder}
        // {...props}
      />
    </div>
  )
});

export default Input