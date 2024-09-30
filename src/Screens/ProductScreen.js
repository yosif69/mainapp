// components/ProductScreen.js
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Colors from '../res/Colors';
import TestContext from '../../store/testContext';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = (props) => {
    // استلام المنتج من المكونات السابقة
    const product = props.route.params;

    // استخدام السياق لإدارة السلة
    const { cart, setCart } = useContext(TestContext);
    console.log(cart)

    // استخدام التنقل للانتقال بين الشاشات
    const navigation = useNavigation();

    // دالة لإضافة المنتج إلى السلة
    const addToCart = () => {
        setCart((prevCart) => [...prevCart, product]); // إضافة المنتج إلى السلة
        // يمكن إضافة إشعار أو رسالة تأكيد هنا إذا رغبت
        alert('Product added to cart!');
    };

    return (
        <View style={styles.screen}>
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product?.img }}
            />
            <Text style={styles.name}>{product?.name}</Text>
            <Text style={styles.price}>${product?.price}</Text>
            <Text style={styles.size}>Size: {product?.Size}</Text>
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
        backgroundColor: Colors.black,
        padding: 10,
    },
    container: {
        borderWidth: 1,
        borderColor: Colors.lightGray,
        backgroundColor: Colors.lightGray,
        padding: 10,
        borderRadius: 20,
        margin: 10,
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: 300,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 25,
        fontWeight: '600',
        color: "#fff",
        marginBottom: 8,
        textAlign: 'center',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
    },
    size: {
        fontSize: 18,
        color: "#fff",
        marginBottom: 7,
    },
    btn: {
        backgroundColor: '#4CAF50', // لون الزر
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, 
        alignSelf: 'center',
        width: '50%',
        marginTop: 20,
    },
    btnText: {
        color: '#fff', 
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewCartBtn: {
        backgroundColor: '#FFA500', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignSelf: 'center',
        width: '50%',
        marginTop: 10,
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
});
