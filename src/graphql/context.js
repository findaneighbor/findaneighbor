import React from 'react'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'
import { NEED_TYPES } from './queries'

export const client = new GraphQLClient({
  url: 'https://find-a-neighbor.herokuapp.com/v1/graphql',
  cache: memCache()
})

client.request({ query: NEED_TYPES }) // wake up server before user gets to the forms

export const GraphQLProvider = ({ children }) => {
  return <ClientContext.Provider value={client}>
    {children}
  </ClientContext.Provider>
}