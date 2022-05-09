import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProjectProvider } from './src/components/ProjectContext';
import HomeScreen2 from './src/screens/HomeScreen2';
import Project3 from './src/screens/Project3';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    
    
    <SafeAreaProvider>
      <ProjectProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen2} options={{
              headerShown: false
            }}/>
            <Stack.Screen name='Project' component={Project3} options={{
              headerShown: false,
              title: ''
            }}/>
          
          </Stack.Navigator>
          </NavigationContainer>
        </ProjectProvider>
      </SafeAreaProvider>
 
      )}

