import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  fab: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function FloatingActionButton({onClickFabButton}) {
  return (
    <View style={styles.fabContainer}>
      <TouchableOpacity style={styles.fab} onPress = {onClickFabButton}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default FloatingActionButton;
