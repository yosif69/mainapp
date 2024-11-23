// components/ProductScreen.js
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Colors from '../res/Colors';
import TestContext from '../../store/testContext';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = (props) => {
    // استلام المنتج من المكونات السابقة
    const product = props.route.params;

    // استخدام السياق لإدارة السلة
    const { cart, setCart } = useContext(TestContext);
    const [selectedSize, setSelectedSize] = useState('')
    console.log(cart)

    // استخدام التنقل للانتقال بين الشاشات
    const navigation = useNavigation();

    // دالة لإضافة المنتج إلى السلة
    const addToCart = () => {
        const prod = {...product}
        prod.Size=selectedSize
        setCart((prevCart) => [...prevCart, prod ]); // إضافة المنتج إلى السلة
        // يمكن إضافة إشعار أو رسالة تأكيد هنا إذا رغبت
        alert('Product added to cart!');
    };

    const selectSize=(size)=>{
        setSelectedSize(size)
    }

    const renderSize = () => {
        return (
            <View style={styles.row}>
                <Text style={styles.size}> </Text>
                {
                    product?.Size?.map((item, key) =>
                       <TouchableOpacity style={[styles.btnSize, selectedSize === item && styles.selectedSizeBtn]} onPress={() => selectSize(item)} key={key}>
                         <Text style={styles.btnSizeText}>{item}</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: product?.img }}
                />
                <Text style={styles.name}>{product?.name}</Text>
                <Text style={styles.price}>${product?.price}</Text>
                {renderSize()}
                <Text style={styles.SelectedSizeText}> Size: {selectedSize}</Text>
            </View>

            <View style={styles.center}>
                <TouchableOpacity style={styles.btn} onPress={addToCart}>
                    <Text style={styles.btnText}>Add to Cart</Text>
                </TouchableOpacity>
                {/* Button to view the cart */}
                <TouchableOpacity
                    style={styles.viewCartBtn}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Text style={styles.viewCartText}>View Cart ({cart.length})</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.white2,
        padding: 10,
    },
    container: {
        borderWidth: 4,
        borderColor: Colors.lightGray,
        backgroundColor: Colors.lightGray,
        padding: 20,
        borderRadius: 26,
        margin:8,
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: 200,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 25,
        fontWeight: '600',
        color: "#fff",
        marginBottom: 10,
        textAlign: 'center',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:20,
        color: "#fff",
    },
    size: {
        fontSize: 20,
        color: "#fff",
        marginBottom: 10,
    },
    btn: {
        backgroundColor: '#4CAF50', // 
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width:5, height: 9 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        // elevation: 5,
        alignSelf: 'center',
        width: '50%',
        marginTop: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewCartBtn: {
        backgroundColor: '#FFA500',  
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width:5, height: 9 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        // elevation: 5,
        alignSelf: 'center',
        width: '50%',
        marginTop: 20,

    },
    viewCartText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },
      btnSize: {
        backgroundColor: '#f0f0f0', 
         paddingVertical: 10, 
         paddingHorizontal: 10,
        borderRadius: 24, 
        borderWidth: 1, 
        borderColor: '#d3d3d3', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 5, 
        elevation: 5, 
        transition: 'all 0.3s ease', 
     },    
     
     selectedSizeBtn: {
        backgroundColor: 'rgba(38, 255, 4, 0.765)', 
        borderColor: '#FF4500', 
      },

      btnSizeText: {
        fontSize: 18, 
        color: '#333',
        fontWeight: '600',
      },
    
    SelectedSizeText: {
        fontSize: 22, 
        fontWeight: 'bold', 
        color:Colors.white2, 
        letterSpacing:3, 
        textShadowColor: 'rgba(4, 37, 255, 0.861)', 
        textShadowOffset: { width: 2, height: 4 }, 
        textShadowRadius: 3, 
        marginVertical: 30, 
        textAlign: 'center', 
        backgroundColor: 'rgba(28, 26, 26, 0.664)',
        padding: 8,
        borderRadius: 10, 
      },
});
