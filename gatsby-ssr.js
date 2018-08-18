import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import AppProvider from './src/state/context/provider'

import Layout from './src/components/layout'
import createStore from './src/state/createStore'

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
    const store = createStore()

    const ConnectedBody = () => (
        <AppProvider>
            <Provider store={store}>
                <Layout>
                    {bodyComponent}
                </Layout>
            </Provider>
        </AppProvider>
    )
    replaceBodyHTMLString(renderToString(<ConnectedBody />))
}