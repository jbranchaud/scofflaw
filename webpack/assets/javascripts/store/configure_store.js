import { createStore, compose } from 'redux';

import rootReducer from 'reducers';

export default (initialState) => {
  const finalCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => { return f; }
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
};
