import React from 'react';
import {View} from 'react-native';
import Styles from './Home.styles';
export type Props = {
  component: string;
};
const Home: React.FC<Props> = ({component}) => {
  return <View style={Styles.container}>Header {component}</View>;
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
