import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Login from '../screens/Login';
import Quiz1 from '../screens/Quiz1';
import Quiz2 from '../screens/Quiz2';
import Quiz3 from '../screens/Quiz3';
import Quiz4 from '../screens/Quiz4';
import Quiz5 from '../screens/Quiz5';
import Completed from '../screens/Completed';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
        <Stack.Screen name="Quiz1" component={Quiz1}  options={{headerShown:false}} />
        <Stack.Screen name="Quiz2" component={Quiz2}  options={{headerShown:false}} />
        <Stack.Screen name="Quiz3" component={Quiz3}  options={{headerShown:false}} />
        <Stack.Screen name="Quiz4" component={Quiz4}  options={{headerShown:false}} />
        <Stack.Screen name="Quiz5" component={Quiz5}  options={{headerShown:false}} />
        <Stack.Screen name="Completed" component={Completed}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
