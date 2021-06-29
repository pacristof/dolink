import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PreMatchIcon({ size, color }) {
  return (
    <View style={styles.container} >
      <img src="https://media.discordapp.net/attachments/840004581992038400/859536397551271966/unknown.png" height={"100%"} width={"100%"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
