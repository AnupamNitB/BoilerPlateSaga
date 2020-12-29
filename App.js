/*
|-----------------------------------------------------------------------------------------|
|                     Changes history table                                               |
|-----------------------------------------------------------------------------------------|
|   Date         |      Changes By       |   Changes Description                          |
|-----------------------------------------------------------------------------------------|
|   01-JAN-2020  |      Anupam Gupta     |  Newly created file.                           |
|-----------------------------------------------------------------------------------------|
*/
import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/sagaProvider/store';
import {PersistGate} from 'redux-persist/integration/react';

import AppRoot from './src';

const RNRedux = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoot />
      </PersistGate>
    </Provider>
  );
};

export default RNRedux;
