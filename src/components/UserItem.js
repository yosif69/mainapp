import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../res/Colors';

const UserItem = (props) => {
  const { name, phone, points, userName, price, Size, pass, age, img } = props;
  // console.log(props);
  
  return (
    <View style={styles.container}>
    <Image 
      style={styles.image} 
      source={{ uri: img }} 
      resizeMode="cover"
    />

    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.size}>{`Size: ${Size}`}</Text>
      <Text style={styles.price}>{`Price: $${price}`}</Text>
    </View>
  </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 40,
    borderRadius: 50, 
    borderColor: Colors.lightGray,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: 220,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  textContainer: {
    padding: 15,
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 25,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 8,
  },
  size: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },

});
