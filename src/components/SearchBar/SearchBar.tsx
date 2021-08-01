import React from 'react';
import {View} from 'react-native';
import Styles from './SearchBar.styles';
export type Props = {
  component: string;
};
const SearchBar: React.FC<Props> = ({component}) => {
  return <View style={Styles.container}>Header {component}</View>;
};

SearchBar.defaultProps = {};

SearchBar.propTypes = {};

export default SearchBar;
