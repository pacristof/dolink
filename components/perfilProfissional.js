import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PerfilProfissionalIcon({ size, color }) {
  return (
    <View style={styles.container} >
      <img src="https://media.discordapp.net/attachments/840004581992038400/859550816557858857/unknown.png" height={"100%"} width={"100%"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
