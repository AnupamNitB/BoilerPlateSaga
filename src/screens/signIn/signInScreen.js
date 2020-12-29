import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
// import Header from '../../components/appHeader';

const signInScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Header title="Login" /> */}
      <View style={styles.container}>
        <Text>signInScreen@@12</Text>
        <TouchableOpacity onPress={() => navigation.navigate('rootHome')}>
          <Text>Go Home Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default signInScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
