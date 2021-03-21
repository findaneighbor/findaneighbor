import React from 'react'
import { externalHref } from '../utilities'

export const DisplayPartner = ({ className = '', style = {}, partner = {} }) => {
  const hasAddress = partner.address || partner.city || partner.state || partner.zip
  const hasContact = partner.contact_name || partner.contact_email || partner.contact_phone
  const hasNeeds = partner?.partner_needs?.length || false

  return <div>
    <h3 className='text-2xl text-primary-500'>{partner.name}</h3>
    {partner.website && <p className='mb-2 text-secondary-400 hover:text-secondary-500'>
      <a href={externalHref(partner.website)} target='_blank'>{partner.website}</a>
    </p>}
    {partner.mission_statement && <p className='mb-4'>{partner.mission_statement}</p>}
    <div className='flex flex-col sm:flex-row mb-4'>
      {hasContact && <div className='w-full sm:w-1/2 sm:pr-2'>
        <h4 className='text-lg font-medium'>Contact</h4>
        <strong>{partner.contact_name}</strong>
        <p>{partner.contact_email}</p>
        <p>{partner.contact_phone}</p>
      </div>}
      {hasAddress && <div className={`w-full sm:w-1/2 ${hasContact ? 'sm:pl-2' : ''}`}>
        <h4 className='text-lg font-medium'>Location</h4>
        <p>{partner.address}</p>
        <p>
          {partner.city}{partner.city && partner.state && ', '}{partner.state}{(partner.city || partner.state) && ' '}{partner.zip}
        </p>
        {partner.hours && <p>Hours: {partner.hours}</p>}
      </div>}
    </div>
    {hasNeeds && <div>
      <h4 className='text-lg font-medium mb-2'>Opportunities</h4>
      {partner.partner_needs.map(need => <div key={need.id} className='mb-4'>
        <h5 className='font-semibold mb-2'>{need.name}</h5>
        <p>{need.description}</p>
      </div>)}
    </div>}
  </div>
}
