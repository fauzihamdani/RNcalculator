import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Value1Form from '../components/Calculator/value1Form';
import Value2Form from '../components/Calculator/value2Form';

const Calculator = () => {
   const [value1, onChangeValue] = useState('');
   const [value2, onChangeValue2] = useState('');
   const [result, setResult] = useState(null);

   const AddOperation = (value1, value2) => {
      if (value1 === '' && value2 === '') {
         return alert('please fill out the form input');
      }
      setResult(Number(value1) + Number(value2));
      onChangeValue('');
      onChangeValue2('');
   };
   const substractOperation = (value1, value2) => {
      if (value1 === '' && value2 === '') {
         return alert('please fill out the form input');
      }
      setResult(Number(value1) - Number(value2));
      onChangeValue('');
      onChangeValue2('');
   };
   const multiplyOperation = (value1, value2) => {
      if (value1 === '' && value2 === '') {
         return alert('please fill out the form input');
      }
      setResult(Number(value1) * Number(value2));
      onChangeValue('');
      onChangeValue2('');
   };
   const divideOperation = (value1, value2) => {
      if (value1 === '' && value2 === '') {
         return alert('please fill out the form input');
      }
      setResult(Number(value1) / Number(value2));
      onChangeValue('');
      onChangeValue2('');
   };
   const moduloOperation = (value1, value2) => {
      if (value1 === '' && value2 === '') {
         return alert('please fill out the form input');
      }
      setResult(Number(value1) % Number(value2));
      onChangeValue('');
      onChangeValue2('');
   };

   return (
      <View style={styles.formContainer}>
         <View style={styles.containerBoundary}>
            <Value1Form value1={value1} onChangeValue={onChangeValue} />

            <Value2Form value2={value2} onChangeValue={onChangeValue2} />

            <View style={styles.signContainer}>
               <TouchableOpacity
                  style={styles.box}
                  onPress={() => {
                     AddOperation(value1, value2);
                  }}
               >
                  <Text style={styles.textBox}>+</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.box}
                  onPress={() => {
                     substractOperation(value1, value2);
                  }}
               >
                  <Text style={styles.textBox}>-</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.box}
                  onPress={() => {
                     multiplyOperation(value1, value2);
                  }}
               >
                  <Text style={styles.textBox}>*</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.box}
                  onPress={() => {
                     divideOperation(value1, value2);
                  }}
               >
                  <Text style={styles.textBox}>/</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.box}
                  onPress={() => {
                     moduloOperation(value1, value2);
                  }}
               >
                  <Text style={styles.textBox}>%</Text>
               </TouchableOpacity>
            </View>
            {result && (
               <View style style={styles.resultBox}>
                  <Text style={styles.textBox}>{result}</Text>
               </View>
            )}
         </View>
      </View>
   );
};

export default Calculator;

const styles = StyleSheet.create({
   formContainer: {
      width: '100%',
      alignItems: 'center',
      // justifyContent: 'center',
      padding: 20,
      flex: 1,
      backgroundColor: '#FFA0A0',
   },
   containerBoundary: {
      width: '80%',
   },
   signContainer: {
      marginTop: 80,
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
   },
   box: {
      backgroundColor: '#aa5566',
      height: 70,
      width: 70,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      margin: 5,
      borderRadius: 10,
   },
   textBox: {
      fontSize: 50,
      color: 'white',
   },
   resultBox: {
      color: 'red',
      width: '50',
      height: '50',
   },
});

//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= onchange value input controller=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
// const [formValue, setFormValue] = useState({
//    value1: '',
//    value2: '',
// });
// const { value1, value2 } = formValue;

// const onChangeValue = (e) => {
//    const updateForm = { ...formValue };
//    updateForm[e.target.name] = e.target.value;
//    setFormLogin(updateForm);
// };
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
