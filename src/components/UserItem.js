import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../res/Colors';
import ScreenNames from '../../route/ScreenNames';
import { useNavigation } from '@react-navigation/native';

const UserItem = (props) => {
  const navigation = useNavigation();

  const { name, price, Size, img } = props;

  const goTo = () => {
    navigation.navigate(ScreenNames.ProductScreen, {
      name,
      price,
      Size,
      img,
    });
  };

  return (
      // <ScrollView 
      // horizontal={true} 
      // contentContainerStyle={styles.scrollContainer}
      //  showsHorizontalScrollIndicator={false}
      // >
      
    <TouchableOpacity onPress={goTo} style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: img }}
        resizeMode="cover"
        />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{`Price: $${price}`}</Text>
      </View>
    </TouchableOpacity>
        // </ScrollView>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row', 
    marginVertical:3, 
    marginHorizontal: 12, 
    
  },
  container: {
    width: "%100",
    height: 150,    
    flexDirection: 'row', 
    borderWidth: 1,
    borderColor: Colors.black,
    backgroundColor: Colors.white2,
    borderRadius: 14,
    overflow: 'visible',
    shadowColor: Colors.blue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    marginRight:15,
    marginVertical:9,
    marginHorizontal: 10,
  },
  image: {
    width: 150, 
    height: 150,
  },
  textContainer: {
    flex: 1,
    padding:30,
    justifyContent: 'center',
    backgroundColor: Colors.Silver,
    borderRadius:14,

  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.green,
  },
});
