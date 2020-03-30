import React from 'react'

export const SelectNeed = ({ need, updateNeed, needs, request, offer, className = '' }) => {
  const checked = needs[need.id]?.selected || false

  return <div className={className}>
    <label className='flex items-center cursor-pointer'>
      <input id={need.id} className='form-checkbox' type='checkbox' value={checked} checked={checked} onChange={e => {
        const checked = e.target.checked

        updateNeed(ns => ({ ...ns, [need.id]: { ...ns[need.id], selected: checked } }))
      }} />
      <span className='ml-2 text-lg text-primary-500'>{need.label}</span>
      {request && <em className='ml-2'>{need.request_description}</em>}
      {offer && <em className='ml-2'>{need.offer_description}</em>}
    </label>
    {checked && <textarea placeholder={request ? 'Please describe your need in detail.' : 'Please describe in detail how you can help.'} className='form-description' value={needs[need.id]?.description || ''} onChange={e => {
      const description = e.target.value

      updateNeed(ns => ({ ...ns, [need.id]: { ...ns[need.id], description } }))
    }} />}
  </div>
}