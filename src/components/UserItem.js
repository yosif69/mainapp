import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../res/Colors';
import ScreenNames from '../../route/ScreenNames';
import { useNavigation } from '@react-navigation/native';

const UserItem = (props) => {
  const navigation=useNavigation()
  const { name,price, Size, img } = props;
  // console.log(props);
  
  const goTo=()=>{
    navigation.navigate(ScreenNames.ProductScreen,{
      name,
      price,
      Size,
      img
    })
  }

  return (
    <TouchableOpacity onPress={goTo} style={styles.container}>
    <Image 
      style={styles.image} 
      source={{ uri: img }} 
      resizeMode="cover"
      />

    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{`Price: $${price}`}</Text>
      <Text style={styles.size}>{`Size: ${Size}`}</Text>
      
    </View>
  </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 50,
    // borderColor: Colors.lightGray,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: 223,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textContainer: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 25,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 8,
  },
  size: {
    fontSize: 18,
    color: Colors.gray,
    marginBottom: 7,
    
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  
});
