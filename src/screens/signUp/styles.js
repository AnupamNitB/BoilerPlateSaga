import {StyleSheet} from 'react-native';
import {w, h, totalSize} from '../../utils/Dimensions';
import {UiColor, TextColor, TextSize} from '../../theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  textContainer: {
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: TextSize.h2,
  },
  inputContainer: {
    marginTop: 15,
    backgroundColor: UiColor.WHITE,
    borderRadius: 10,
    width: w(90),
    height: h(7),
    marginBottom: w(0.1),
    flexDirection: 'row',
    elevation: 5,
    borderWidth: w(0.3),
  },
  row: {
    marginTop: 15,
    backgroundColor: UiColor.WHITE,
    borderRadius: 10,
    width: w(74),
    height: h(7.5),
    marginBottom: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: w(0.3),
    elevation: 5,
  },

  inputs: {
    marginLeft: w(8),
    borderLeftWidth: w(0.4),
    flex: 5,
  },
  buttonContainer: {
    height: h(7),
    width: w(55),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signupButton: {
    marginTop: w(5),
    backgroundColor: UiColor.SKY_BLUE,
    marginBottom: 15,
  },
  signInText: {
    color: UiColor.WHITE,
    fontSize: TextSize.h1,
    fontWeight: 'bold',
  },
  attchContainer: {
    marginHorizontal: 6,
    borderRadius: 10,
    borderWidth: 1,
    width: w(14),
    height: h(6.5),
    marginTop: 12,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  icon_right: {
    width: w(8),
    height: w(8),
    alignSelf: 'center',
    borderColor: UiColor.BLACK,
    alignSelf: 'center',
  },
  icon_right_attch: {
    width: w(8),
    height: w(8),
    flex: 1,
    borderColor: UiColor.BLACK,
    alignSelf: 'center',
  },
});
