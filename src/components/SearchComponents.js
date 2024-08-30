import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { color } from "@rneui/base";
import Colors from "../res/Colors";



export default function SearchComponents(){
  const navigation = useNavigation();

  React.useLayoutEffect(()=> {
    navigation.setOptions({
      headersLargeTitle: true,
      headerSearchBarOptions:{
        placeHolder:"Search" ,
        barTintColor:"rgba(255, 255, 255, 0.808)" ,
        textColor:"#111",
        headerIconColor:"blue",
        onChangeText : (event) => console.log("search: " , event.nativeEvent.text)
      }
    });
  }, [navigation]);
  return(
    <ScrollView  contentContainerStyle={styles.container}>
      <Text style={styles.text1}></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:"center",
    // alignItems:"center",
    
  },
  text1:{
    fontSize:100,
    fontWeight:"bold",

  },
});