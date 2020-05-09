import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
      { name: 'Friend #1', gender: 'Male', age: 21 },
      { name: 'Friend #2', gender: 'Female', age: 21 },
      { name: 'Friend #3', gender: 'Male', age: 22 },
      { name: 'Friend #4', gender: 'Male', age: 23 },
      { name: 'Friend #5', gender: 'Female', age: 24 },
      { name: 'Friend #6', gender: 'Female', age: 25 },
      { name: 'Friend #7', gender: 'Male', age: 26 },
      { name: 'Friend #8', gender: 'Female', age: 27 },
      { name: 'Friend #9', gender: 'Male', age: 28 }
    ];
  

    return (
        <FlatList
          vertical
          showsHorizontalScrollIndicator={false}
          keyExtractor={friend => friend.name}
          data={friends}
          renderItem={({ item }) => {
            return (
              <Text style={styles.textStyle}>
                {item.name} - {item.gender} - age {item.age}
              </Text>
            );
          }}
        />
      );
    };

    const styles = StyleSheet.create({
        textStyle: {
          marginVertical: 10,
          marginLeft: 0,
          fontWeight: 'bold',
          fontSize: 18,
          color: 'green',
          borderColor: 'black',
          borderWidth: 2          
        }
      });
      

export default ListScreen;