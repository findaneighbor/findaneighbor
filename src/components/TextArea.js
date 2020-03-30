import React from 'react'

export const TextArea = ({ innerRef, placeholder, label, value, onChange, className = '', required, id }) => {
  return <div className={className}>
    <label htmlFor={label} className='text-primary-500'>
      {label} {required && <span className='text-secondary-400'>*</span>}
    </label>
    <textarea
      ref={innerRef}
      id={id || label}
      className='form-description'
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required} />
  </div>
}
