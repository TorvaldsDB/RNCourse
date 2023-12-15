import React from 'react';
import {Text, View} from 'react-native';

const YourApp = ({name}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! {name} 🎉</Text>
    </View>
  );
};

export default YourApp;