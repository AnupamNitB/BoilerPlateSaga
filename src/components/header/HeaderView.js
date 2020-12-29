import React from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

const HeaderView = ({isHome, title}) => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <StatusBar backgroundColor="blue" />
      <View style={{flex: 1, justifyContent: 'center'}}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{width: 30, height: 30, marginLeft: 8}}
              source={require('../../assets/icons/ic_menu.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <Image
              resizeMode="contain"
              style={{width: 30, height: 30}}
              source={require('../../assets/icons/ic_left.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
};
export default HeaderView;
