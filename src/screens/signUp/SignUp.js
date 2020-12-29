import React from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {IconAsset, UiColor} from '../../theme';
import styles from './styles';
import Loader from '../../components/Loader';
// import PickerCheckBox from 'react-native-picker-checkbox';
import AsyncStorage from '@react-native-community/async-storage';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      businessName: '',
      email: '',
      aadharNo: '',
      panNo: '',
      other: '',
      accountNo: '',
      accountHolderName: '',
      bankName: '',
      ifcsCode: '',
      service: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#31AAE1" />

        <ScrollView>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Personal Detailsss :</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="  Full Name"
                autoCapitalize="none"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={fullName => this.setState({fullName: fullName})}
                value={this.state.fullName}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="  Business Name"
                autoCapitalize="none"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={businessName =>
                  this.setState({businessName: businessName})
                }
                value={this.state.businessName}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="  E-mail Address"
                autoCapitalize="none"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={email => this.setState({email: email})}
                value={this.state.email}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.row}>
                <TextInput
                  style={styles.inputs}
                  placeholder=" Aadhar No"
                  autoCapitalize="none"
                  keyboardType="phone-pad"
                  underlineColorAndroid="transparent"
                  onChangeText={aadharNo => this.setState({aadharNo: aadharNo})}
                  value={this.state.aadharNo}
                  maxLength={12}
                />
              </View>

              <TouchableOpacity style={styles.attchContainer}>
                <Image
                  source={IconAsset.ic_attach}
                  style={styles.icon_right}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.row}>
                <TextInput
                  style={styles.inputs}
                  placeholder=" Pan No"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  underlineColorAndroid="transparent"
                  onChangeText={panNo => this.setState({panNo: panNo})}
                  value={this.state.panNo}
                />
              </View>

              <TouchableOpacity style={styles.attchContainer}>
                <Image
                  source={IconAsset.ic_attach}
                  style={styles.icon_right}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder=" Other"
                autoCapitalize="none"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={other => this.setState({other: other})}
                value={this.state.other}
              />

              <Image
                source={IconAsset.ic_attach}
                style={styles.icon_right_attch}
                resizeMode="contain"
              />
            </View>

            <View style={[styles.textContainer, {marginTop: 25}]}>
              <Text style={styles.textStyle}>Bank Details :</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="  Account No"
                autoCapitalize="none"
                keyboardType="phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={accountNo =>
                  this.setState({accountNo: accountNo})
                }
                value={this.state.accountNo}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="  AccountHolderName"
                autoCapitalize="none"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={accountHolderName =>
                  this.setState({accountHolderName: accountHolderName})
                }
                value={this.state.accountHolderName}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="  Bank Name"
                autoCapitalize="none"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={bankName => this.setState({bankName: bankName})}
                value={this.state.bankName}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder=" IFSC code"
                autoCapitalize="none"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={ifcsCode => this.setState({ifcsCode: ifcsCode})}
                value={this.state.ifcsCode}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder=" what youe chosse"
                autoCapitalize="none"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={ifcsCode => this.setState({ifcsCode: ifcsCode})}
                value={this.state.ifcsCode}
              />
              {/* <PickerCheckBox
                data={items}
                headerComponent={<Text style={{fontSize: 25}}>items</Text>}
                OnConfirm={pItems => this.handleConfirm(pItems)}
                ConfirmButtonTitle="OK"
                DescriptionField="itemDescription"
                KeyField="itemKey"
                placeholder="select some items"
                arrowColor="#FFD740"
                arrowSize={10}
                placeholderSelectedItems="$count selected item(s)"
              /> */}
            </View>

            {/**********
              SubmitButton
             ***********/}
            <TouchableOpacity
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={Actions.tabbar}>
              <Text style={styles.signInText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SignUp;
