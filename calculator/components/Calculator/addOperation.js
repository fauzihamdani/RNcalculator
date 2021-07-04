import React from 'react';
import { View, Text } from 'react-native';

const addOperation = ({ value1, value2 }) => {
   var result = value1 + value2;
   return (
      <View>
         <Text>{result}</Text>
      </View>
   );
};

export default addOperation;
