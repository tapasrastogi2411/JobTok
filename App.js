import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

// Initialise firebase project
import firebase from 'firebase/app';

// Using firebase
if(firebase.apps.length == 0){
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! All I know is pain :')</Text>
      <StatusBar style="auto" />
    </View>
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
