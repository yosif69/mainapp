import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../res/Colors';

const UserItem = props => {
  const { name, phone, points, userName, price, Size, pass, age } = props;
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{`name:${name}`}</Text>
      <Text style={styles.txt}>{`Size:${Size}`}</Text>
      <Text style={styles.txt}>{`price:$${price}`}</Text>

    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.lightGray,
    margin: 15,
    padding: 20,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
    // Adding gradient background
    backgroundImage: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
  },
  
  
  txt: {
    fontSize: 20,
    color: Colors.gray,
    marginVertical: 5,
  },
});
