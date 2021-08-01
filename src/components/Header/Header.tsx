import React from 'react';
import {View} from 'react-native';
import Styles from './Header.styles';
export type Props = {
  component: string;
};
const Header: React.FC<Props> = ({component}) => {
  return <View style={Styles.container}>Header {component}</View>;
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
