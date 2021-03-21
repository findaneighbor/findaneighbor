import React from 'react'

export const TextInput = ({ innerRef, type = 'text', placeholder, pattern, label, value, onChange, className = '', required, id }) => {
  return <div className={className}>
    <label htmlFor={id || label} className='text-primary-500'>
      {label} {required && <span className='text-secondary-400'>*</span>}
    </label>
    <input
      ref={innerRef}
      id={id || label}
      className='text-input'
      pattern={pattern}
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required} />
  </div>
}
