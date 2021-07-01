import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import userIcon from '../assets/userIcon.png';

export default function PerfilProfissionalIcon({ size, color }) {
  return (
    <View style={styles.container} >
      <Image 
        style={styles.image}
        source={userIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35
  },
  container: {
    width: 45,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
