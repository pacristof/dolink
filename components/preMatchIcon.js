import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import preMatch from '../assets/preMatch.png';

export default function PreMatchIcon({ size, color }) {
  return (
    <View style={styles.container} >
      <Image 
        style={styles.image}
        source={preMatch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  },
  container: {
    width: 70,
    height: 70,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
