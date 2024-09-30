import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useContext } from 'react';
import TestContext from '../../store/testContext';

const Cart = () => {
    const { cart, setCart } = useContext(TestContext);

    // دالة لإزالة المنتج من السلة
    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1); // إزالة المنتج بناءً على الفهرس
        setCart(newCart); // تحديث حالة السلة
    };

    // دالة لعرض العناصر في السلة باستخدام FlatList
    const renderItem = ({ item, index }) => (
        <View style={styles.cartItem} key={index}>
            <Image
                style={styles.image}
                source={{ uri: item.img }}
            />
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity onPress={() => removeFromCart(index)}>
                    <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.screen}>
            {cart.length === 0 ? (
                <Text style={styles.emptyCart}>Your cart is empty.</Text>
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.list}
                />
            )}
            {cart.length > 0 && (
                <TouchableOpacity style={styles.checkoutBtn}>
                    <Text style={styles.checkoutText}>Checkout</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
    },
    emptyCart: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    list: {
        paddingBottom: 20,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        color: '#fff',
    },
    price: {
        fontSize: 16,
        color: '#fff',
        marginVertical: 5,
    },
    remove: {
        color: 'red',
        fontSize: 14,
    },
    checkoutBtn: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    checkoutText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
