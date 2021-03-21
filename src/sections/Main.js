import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Home, RequestHelp, OfferHelp, Partners, Successes, Bless } from '.'
import { GraphQLProvider } from '../graphql/context'

export const Main = ({ className = '', style = {} }) => {
  return <main className='main'>
    <GraphQLProvider>
      <Switch>
        <Route path='/request-help'>
          <RequestHelp />
        </Route>
        <Route path='/offer-help'>
          <OfferHelp />
        </Route>
        <Route path='/partners'>
          <Partners />
        </Route>
        <Route path='/success-stories'>
          <Successes />
        </Route>
        <Route path='/bless'>
          <Bless />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Redirect to='/' />
      </Switch>
    </GraphQLProvider>
  </main>
}
