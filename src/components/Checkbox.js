import React from 'react'

export const Checkbox = ({ className = '', style = {}, label, value, onChange }) => {
  return <label className={`flex items-center ${className}`}>
    <input id={label} className='form-checkbox' type='checkbox' value={value} checked={value} onChange={e => {
      const checked = e.target.checked

      onChange(checked)
    }} />
    <span className='ml-2 text-lg text-primary-500'>{label}</span>
  </label>
}
