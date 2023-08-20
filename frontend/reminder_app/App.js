import { Text } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store
import AppContainer from './AppContainer'; // Import your app's main container

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
