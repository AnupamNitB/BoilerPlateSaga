import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import HeaderView from '../../components/header/HeaderView';

const messageScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* <HeaderView /> */}
        <Text>messageScreen@@</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signInScreen')}>
          <Text>Go Login Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default messageScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
