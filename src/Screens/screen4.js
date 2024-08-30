// import { StyleSheet, Text, View, ScrollView, Button, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { getAllpordact } from '../res/api';
// import UserItem from '../components/UserItem';
// import ScreenNames from '../../route/ScreenNames';

// const Screen4 = (props) => {
//   const [loading, setLoading] = useState(false);
//   const [pordac, setpordac] = useState([]);

//   const renderpordac = () => {
//     return pordac.map(pordac => <UserItem key={pordac.id} {...pordac} />);
//   };

//   const onPayPress = () => {
//     props.navigation.navigate(ScreenNames.PageHome);
//   };

//   const getAllpordactFromApi = () => {
//     setLoading(true);
//     getAllpordact().then(res => {
//       console.log('res:', res);
//       setpordac(res.users);
//       setLoading(false);
//     });
//   };

//   useEffect(() => {
//     getAllpordactFromApi();
//   }, []);

//   if (loading) {
//     return <ActivityIndicator style={styles.loader} />;
//   }

//   return (
//     <View style={styles.container}>
//       <ScrollView>{renderpordac()}</ScrollView>
//       <Button title="PAY" onPress={onPayPress} />
//     </View>
//   );
// };

// export default Screen4;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   loader: {
//     flex: 1,
//   },
// });
