import {
    createStore
} from 'redux';

import {
    counts
} from './reducers';

import React from 'react';
import Counters from './containers/CountersContainer';
import { Provider } from 'react-redux';

const store = createStore(counts);

export default function CounterApp() {
    return (
        <Provider store={store}>
          <Counters />
        </Provider>
    );
}
