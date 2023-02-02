import React from 'react'
import { useQuery } from 'graphql-hooks'
import { PARTNERS } from '../graphql/queries'
import { useTitle } from '../hooks'
import { DisplayPartner } from '../components'

const title = process.env.NODE_ENV === 'production' ? 'Find A Neighbor | Partners' : 'Local | Find A Neighbor | Partners'

export const Partners = ({ className = '', style = {} }) => {
  const { data: { partner: partners = [] } = {}, error } = useQuery(PARTNERS)

  useTitle(title)

  return <div className='py-12 px-2 sm:px-4 w-full max-w-2xl mx-auto'>
    <h2 className='text-primary-500 text-center text-xl md:text-2xl font-semibold mb-8'>
      Local Resources
    </h2>
    <ul>
      {partners.map((partner, i) => <li key={partner.id}>
        {i !== 0 && <hr className='my-12' />}
        <DisplayPartner partner={partner} />
      </li>)}
    </ul>
  </div>
}
