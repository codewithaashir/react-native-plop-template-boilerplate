import React from 'react';
import {View} from 'react-native';
import Styles from './Favourites.styles';
export type Props = {
  component: string;
};
const Favourites: React.FC<Props> = ({component}) => {
  return <View style={Styles.container}>Header {component}</View>;
};

Favourites.defaultProps = {};

Favourites.propTypes = {};

export default Favourites;
