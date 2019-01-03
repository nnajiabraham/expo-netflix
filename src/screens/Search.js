import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

const Search = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <Text style={gStyle.heading}>Search</Text>
    </View>
  );
};

Search.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Search;
