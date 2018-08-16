import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/state/createStore'
import Layout from './src/components/layout'

const store = createStore()

export const wrapRootComponent = ({ Root }) => {
  const ConnectedRootComponent = () => (
    <Provider store={store}>
    <Layout>
      <Root />
      </Layout>
    </Provider>
  )

  return ConnectedRootComponent
}