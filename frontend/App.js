import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Import Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers';

import Constants from 'expo-constants';

// Initialise firebase project
import firebase from 'firebase/app';
import AuthScreen from './src/screens/auth';

// Initialising the store 
const store = createStore(rootReducer, applyMiddleware(thunk))


// Using firebase
if (firebase.apps.length == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}
export default function App() {
  return (

    <Provider store={store}>
      <AuthScreen/>
      <View style={styles.container}>
        <Text> Please work bruh nonsense :(</Text>
        <StatusBar style="auto"></StatusBar>
      </View>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
