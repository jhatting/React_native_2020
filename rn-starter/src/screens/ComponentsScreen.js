import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const yourname = 'Jarrod Hatting';
  
    return (
      <View>
        <Text style={styles.textStyle}>Getting started with React Native</Text>
        <Text style={styles.SectextStyle}>{yourname}</Text>

      
      </View>
    );
  };

  const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  SectextStyle: {
    fontSize: 20
  }


});

export default ComponentsScreen;