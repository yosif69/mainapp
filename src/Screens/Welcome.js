import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, Image } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../res/Colors';
import Images from '../assets/images/images';

const Welcome = ({ navigation }) => {
  useEffect(() => {
    
    setTimeout(() => {
      navigation.replace('LogIn'); 
    }, 3000); 
  }, [navigation]);
  return (

    // <ImageBackground source={Images.loadingSc()} resizeMode="center" style={styles.image}>
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={Colors.red} />
      <Text style={styles.loadingText}>Loading...</Text>
      {/* <View style={styles.container}> */}
      <Image source={Images.loadingSc()} style={styles.image}/>
        <Text style={styles.title}>Welcome</Text>
      {/* </View> */}
    </View>
    // </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor:Colors.Silver,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:60,

  },
  loadingText: {
    // marginTop: 20,
    fontSize: 20,
    color: Colors.lightBlue,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.lightBlue,
    textShadowColor: Colors.red,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  
  image:{
    width:350,
    height:300,
    margin:20,
    // marginHorizonta:10,
    // marginVertical:20,
    resizeMode:'cover',
    borderRadius:1000,

  },
});
