import React from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
 

  return (
    <View>
      <Button title="add Color" />
      <View style ={{ height: 100, width: 100, backgroundColor: 'rgb(200, 255, 20)'}} />
    </View>
  );
};


const styles = StyleSheet.create({});

export default ColorScreen;