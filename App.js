import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen2 from './src/screens/HomeScreen2';
import Project from './src/screens/Project';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    
    

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen2} options={{
          headerShown: false
        }}/>
        <Stack.Screen name='Project' component={Project} options={{
          title: ''
        }}/>
       
      </Stack.Navigator>
      </NavigationContainer>
 
      )}

