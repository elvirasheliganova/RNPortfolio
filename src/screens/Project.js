import React from 'react'
import { useRoute } from '@react-navigation/native'; 
import { View, Text, Dimensions, ImageBackground } from 'react-native'
import { useFonts,  AbrilFatface_400Regular  } from '@expo-google-fonts/abril-fatface';
import { useMediaQuery } from "react-responsive";

import AppLoading from 'expo-app-loading';
import images from '../../assets/data/images'

const { width, height } = Dimensions.get('window')
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height



const Project = () => {

  const laptop = useMediaQuery({
    maxDeviceWidth: 1224,
    query: "(max-device-width: 1224px)"
  })
  const tablet = useMediaQuery({
    maxDeviceWidth: 992,
    query: "(max-device-width: 992px)"
  })
  const bigMobile = useMediaQuery({
    maxDeviceWidth: 768,
    query: "(max-device-width: 768px)"
  })
  const mobile = useMediaQuery({
    maxDeviceWidth: 600,
    query: "(max-device-width: 600px)"
  })

  const route = useRoute()

  console.log(route.params.id)
  const item = images.find(item => item.id === route.params.id)
  console.log(item.text)

  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    
  return (
    <View style={{flex: 1 , width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{width: tablet ? width * 0.8 : width * 0.7, height: height * 0.80, backgroundColor: ' #FBFBF2', justifyContent: 'space-between',  
      }}>
        <View style={{ flexDirection: mobile || tablet ? 'column' : 'row', height: '75%', width: '100%', paddingHorizontal: windowWidth / 15, backgroundColor: 'lightblue'  }}>
          <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', paddingRight: windowWidth / 40 }}>
            <Text style={{fontSize: 30, fontWeight: 'bold',fontFamily: 'AbrilFatface_400Regular',  color: '#847577', paddingBottom: 20}}>{item.text}</Text>
            <Text style={{fontFamily: 'AbrilFatface_400Regular',  color: '#847577', textAlign: 'justify'}}>{item.desc}</Text>

          </View>
          <ImageBackground 
          source={{uri: 'https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'}}
          style={{ height: '80%', width: '50%',  justifyContent: 'center', alignItems: 'center', alignSelf: 'center' 
        }}
          imageStyle={{ height: '100%', width: '100%', opacity: 0.3, justifyContent: 'center', alignItems: 'center',   }}
          >
            <View style={{paddingHorizontal: 20, paddingVertical: 50,  backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'AbrilFatface_400Regular',  color: '#645355', fontSize: 26}}> {item.text} </Text>
              <Text style={{fontFamily: 'AbrilFatface_400Regular',  color: '#645355', fontSize: 26}}> Video</Text>
            </View>
          </ImageBackground>

        </View>
        
      </View>
      
    </View>
  )
}}

export default Project
