import React from 'react'
import { useQuery } from 'graphql-hooks'
import { NEED_TYPES } from '../graphql/queries'

export const RequestForm = ({ className = '', style = {} }) => {
  const { data: { need_type: needTypes = [] } = {}, error, loading, } = useQuery(NEED_TYPES)

  if (error) return 'Error retrieving need types'

  return <form>
    {needTypes.map(need => <p>{need.label}</p>)}
  </form>
}
