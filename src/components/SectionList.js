import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../res/Colors';
import BtnTouch from './BtnTouch';
import { DataD } from '../res/Data';
import ScreenNames from '../../route/ScreenNames';


const { width, height } = Dimensions.get('screen');

const SectionList = (props) => {
    const onPayPress1 = () => {
        props.navigation.navigate(ScreenNames.LogIn)
      };

    const { clothis, style, name,seeall,color, } = props.item;



    const renderToDos = (props) => {
        return (
            clothis.map((todo,key) =>
                <View key={key} style={styles.itemContainer}>
                    <Text style={styles.title1}>{todo.title}</Text>
                    <Image style={[styles.img, style]} source={todo.img} />
                </View>
            )
        )
    };


    return (

        <View>

            <BtnTouch 
                type={name}    
                data= {clothis}
                seeall={seeall}    
                color={"rgba(0, 0, 0, 0.600);"}
                textColor={"rgba(251, 251, 251, 0.912)"} />
            
                
            <ScrollView horizontal style={[styles.container]}>

                {renderToDos()}
            </ScrollView>
        </View>


    )
}

export default SectionList


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: "rgba(0, 0, 0, 0.466)",
        marginVertical: 10,
        borderRadius:15,

    },


    title1: {
        fontSize: 23,
        fontStyle: 'italic',
        fontWeight: "bold",
        color: Colors.white,
        padding: 3,
        margin: 10,


    },
    img: {
        height: 125,
        width: "100",
        borderRadius: 15,
        // borderColor: '#ffff',


    },

    itemContainer: {
        // width:width,
        width: width * 0.75,
        height: 230,
        marginLeft: 10,

    },
    Touch: {
        marginLeft: 5,
        borderWidth: 5,
    },

    TouchLogin: {
        color: "rgba(255, 247, 0, 0.875)",
        alignSelf: "center",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"

    },

})