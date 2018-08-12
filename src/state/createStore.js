import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

export default () => {
  const middleware = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const devtools =
  //   process.env.NODE_ENV === 'development' && window.devToolsExtension
  //     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //       window.__REDUX_DEVTOOLS_EXTENSION__()
  //     : f => f;
  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
};