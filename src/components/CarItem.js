// import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
// import React, {useState} from 'react';
// import Images from '../assets/images/images';
// import {useNavigation} from '@react-navigation/native';
// import ScreenNames from '../../route/ScreenNames';

// /**
//  * 1- component will amount
//  *    ** componentWillUpdate
//  * 2- render ( loading the component )
//  *    ** componentDidUpdate
//  * 3- componentDidLoad
//  * 4- compomemtWillUnMount
//  */

// const CarItem = props => {
//   const {brand, year, km , hideImage , id} = props;
//   const navigation = useNavigation();

  
//   const onCardPress = () => {

//     const car = {
//       brand: props.brand,
//       year: props.year,
//       km: props.km,
//       img: props.img,
//       id: id,
//     };
//     navigation.navigate(ScreenNames.Screen3 , )
//   }

//   return (
//     <TouchableOpacity onPress={onCardPress}>
//       <View style={styles.container}>
//         <View style={styles.txtContainer}>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default CarItem;

// const styles = StyleSheet.create({
//   txt: {
//     fontSize: 35,
//   },
//   container: {
//     borderWidth: 1,
//     paddingLeft: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   plus: {
//     fontSize: 45,
//     textAlign: 'center',
//   },
//   plusContainer: {
//     borderWidth: 1,
//     flex: 1,
//   },
//   txtContainer: {
//     width: 180,
//     backgroundColor:"red",
//     height: 180,
//     resizeMode: 'contain',
//     flex: 1,
//   },
  
// });