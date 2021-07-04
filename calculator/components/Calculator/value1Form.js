import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const value1Form = ({ onChangeValue, value1 }) => {
   return (
      <View style={styles.formWrap}>
         <Text style={styles.valueFont}>Value 1</Text>
         <TextInput
            style={styles.formWidth}
            onChangeText={onChangeValue}
            value={value1}
            placeholder="Input your First value"
            keyboardType="numeric"
         />
      </View>
   );
};

export default value1Form;

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
   formWrap: {
      width: '100%',
      marginBottom: 40,
   },
});
