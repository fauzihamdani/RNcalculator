import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './screens/Calculator';
import Crud from './screens/Crud';
import { Ionicons, Entypo } from '@expo/vector-icons';

// Initializing Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Tab.Navigator
            screenOptions={({ route }) => ({
               tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === 'Calculator') {
                     iconName = 'calculator-outline';
                  } else if (route.name === 'Crud') {
                     iconName = 'pencil';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
               },
            })}
            tabBarOptions={{
               activeTintColor: 'white',
               inactiveTintColor: '#FFA0A0',
               style: {
                  backgroundColor: '#aa5566',
                  height: 70,
                  position: 'absolute',
                  left: 20,
                  right: 20,
                  bottom: 15,
                  borderRadius: 15,
               },
            }}
         >
            <Tab.Screen name="Calculator" component={Calculator} />
            <Tab.Screen name="Crud" component={Crud} />
         </Tab.Navigator>
      </NavigationContainer>

      // <View style={styles.container}>
      //    {/* <StatusBar style="auto" /> */}
      //    <Calculator />
      // </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFA0A0',
      // alignItems: 'center',
      // justifyContent: 'center',
   },
});
