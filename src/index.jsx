import React from 'react'
import createApp, { applyMiddleware } from 'mickey'
import { persistStore, autoRehydrate } from 'redux-persist'
import { REHYDRATE } from 'redux-persist/constants'
import createActionBuffer from 'redux-action-buffer'
import Router from './Router'
import './index.html'


// 1. Initialize
const app = createApp({
  historyMode: 'hash',
  hooks: {
    extraEnhancers: [
      // add `autoRehydrate` as an enhancer to your store
      autoRehydrate(),
      // make sure to apply this after autoRehydrate
      applyMiddleware(
        // buffer other reducers before rehydrated
        createActionBuffer(REHYDRATE),
      ),
    ],
  },
})

// 2. Model
app.model(require('./models/todos'))

// 3. View
app.render(<Router />, document.getElementById('app'), {
  beforeRender: ({ store }) => new Promise(((resolve) => {
    // begin periodically persisting the store
    persistStore(store, {
      debounce: 500,
      whitelist: ['todos'],
      keyPrefix: 'todos: ',
    }, () => {
      resolve() // delay render after rehydrated
    })
  })),
})
