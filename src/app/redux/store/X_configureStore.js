//configureStore.js

import { createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'

export const configureStore = (preloadedState) => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];


  // this requires -- npm install -dev redux-devtools-extension
  const composedEnhancer  = composeWithDevTools(...storeEnhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancer
  )

  // this is for hot module reloading -- all changes in redux store occur without screen refresh

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers/rootReducer', () => {
        const newRootReducer = require('../reducers/rootReducer').default;
        store.replaceReducer(newRootReducer)
      })
    }
  }

  return store;
}