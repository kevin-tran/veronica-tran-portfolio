import React from 'react'
import { Provider } from 'react-redux'
import AppProvider from './src/state/context/provider'

import createStore from './src/state/createStore'
import Layout from './src/components/layout'

const store = createStore()

export const wrapRootComponent = ({ Root }) => {
  const ConnectedRootComponent = () => (
    <AppProvider>
      <Provider store={store}>
        <Layout>
          <Root />
        </Layout>
      </Provider>
    </AppProvider>
  )

  return ConnectedRootComponent
}