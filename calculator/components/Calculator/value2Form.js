import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const value2Form = ({ onChangeValue, value2 }) => {
   return (
      <View style={styles.formWrap}>
         <Text style={styles.valueFont}>Value 2</Text>
         <TextInput
            style={styles.formWidth}
            onChangeText={onChangeValue}
            value={value2}
            placeholder="Input your Second value"
            keyboardType="numeric"
         />
      </View>
   );
};

export default value2Form;

const styles = StyleSheet.create({
   formWidth: {
      backgroundColor: 'green',

      backgroundColor: '#fff',
      width: '100%',
      height: 35,
      borderRadius: 10,
      padding: 5,
   },
   valueFont: {
      fontSize: 20,
   },
});
