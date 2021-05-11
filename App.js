import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import  Navbar from './src/componentes/Navbar';
import  Header from './src/componentes/Header';

export default function App() {
  return (
    <View style={styles.container}>

      <Header />
      <Navbar />
   


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
