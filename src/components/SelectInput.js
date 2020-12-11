import React from 'react'

export const SelectInput = ({
  className = '',
  style = {},
  options = [],
  label,
  placeholder = '-- Select One --',
  value,
  onChange,
  valueKey = 'id',
  labelKey = 'name',
  id
}) => {
  return <div className={className} style={style}>
    {label && <label htmlFor={id || label} className='text-primary-500'>{label} <span className='text-secondary-400'>*</span></label>}
    <select id={id || label} className='text-input' value={value} onChange={e => onChange(e.target.value)}>
      {placeholder && <option value=''>{placeholder}</option>}
      {options.map(opt => <option key={opt[valueKey]} value={opt[valueKey]}>{opt[labelKey]}</option>)}
    </select>
  </div>
}
