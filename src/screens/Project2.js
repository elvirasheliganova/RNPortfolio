import React, { useState, useContext } from 'react'
import { useRoute } from '@react-navigation/native'; 
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import FontAwesome from '@expo/vector-icons/fontAwesome'

import { ProjectContext } from '../components/ProjectContext';
import { Video, AVPlaybackStatus } from 'expo-av';
import AppLoading from 'expo-app-loading';
import images from '../../assets/data/images'
import ProjectVideo from '../components/Video';
//import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const { width, height } = Dimensions.get('window')

const Project2 = () => {

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
   
  const [videoPressed, setVideoPressed] =  useContext(ProjectContext)
  const route = useRoute()

  const item = images.find(item => item.id === route.params.id)
  const navigation  = useNavigation()

  //const onPress = navigation.navigate ('HomeScreen')
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    

  return (
    
    <View style={{flex: 1, 
      backgroundColor: '#fbfbf2',
    justifyContent:'center', alignItems: 'center' }}>
      <View style={{width: tablet ? width * 0.8 : width * 0.7, height: height * 0.80, backgroundColor: ' #FBFBF2', justifyContent: 'space-between',  }}>
        <View style={{flexDirection: tablet ? 'column' : 'row', alignItems: 'center'}}>
          <View style={{
            width: mobile ? '100%' : tablet ? '70%' : '50%' , 
            height: tablet ? height * 0.20 : height * 0.65,  
            backgroundColor: 'lightyellow', 
            justifyContent:'start', alignItems: 'center',
            paddingBottom: mobile ? width / 10 : tablet ?  width / 30 :  width / 200,}} >
            <View style={{
              //justifyContent: 'space-between', backgroundColor: 'lightgreen',
              
              //borderWidth: 2, borderColor: 'black', 
              paddingHorizontal: tablet ? width * 0.02 : width * 0.04, marginLeft: laptop ? width / 10 : 0 }} >
              <View style={{paddingBottom: height * 0.02}}>
                <Text style={{fontFamily: 'OpenSans_400Regular,', fontWeight: 'bold', fontSize: mobile ? width / 25 : tablet ?  width / 40 :  width / 80,  color: '#645355', textAlign: 'center',}}>
                  {item.text}
                </Text>
              </View>
             
             
              <View >
                
                <Text style={{fontFamily: 'OpenSans_400Regular,', fontSize: mobile ? width / 32 : tablet ?  width / 50 :  width / 110,  color: '#645355', textAlign: 'justify',  marginBottom: 40}}>
                  {item.desc}
                </Text>
                
                  
       
                  {/*<Text style={{fontFamily: 'OpenSans_400Regular,', fontWeight: 'bold', fontSize: mobile ? width / 32 : tablet ?  width / 50 :  width / 110,  color: '#645355', textAlign: 'justify',  marginBottom: 5}}>
                      {item.desc2}
                  </Text>
                
                <View style={{flexDirection: 'row' }}>
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <FontAwesome name='circle' size={8} color= '#645355'  />
                  </View>  
                  <Text style={{fontFamily: 'OpenSans_400Regular,',  fontSize: mobile ? width / 32 : tablet ?  width / 50 :  width / 110,  color: '#645355', textAlign: 'justify'}}>
                  {item.desc31}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <FontAwesome name='circle' size={8} color= '#645355'  />
                  </View>  
                  <Text style={{fontFamily: 'OpenSans_400Regular,',  fontSize: mobile ? width / 32 : tablet ?  width / 50 :  width / 110,  color: '#645355', textAlign: 'justify'}}>
                  {item.desc32}
                  </Text>
                </View>
                <Text style={{fontFamily: 'OpenSans_400Regular,', fontWeight: 'bold', fontSize: mobile ? width / 32 : tablet ?  width / 50 :  width / 110,  color: '#645355', textAlign: 'justify', marginBottom: 5, marginTop: 20}}>
                    {item.desc4}
                </Text>
                <View style={{flexDirection: 'row' }}>
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <FontAwesome name='circle' size={8} color= '#645355'  />
                  </View>  
                  <Text style={{fontFamily: 'OpenSans_400Regular,',  fontSize: mobile ? width / 32 : tablet ?  width / 50 :  width / 110,  color: '#645355', textAlign: 'justify'}}>
                  {item.desc51}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <FontAwesome name='circle' size={8} color= '#645355'  />
                  </View>  
                  <Text style={{fontFamily: 'OpenSans_400Regular,',  fontSize: mobile ? width / 32 : tablet ?  width / 50 :  width / 110,  color: '#645355', textAlign: 'justify'}}>
                  {item.desc52}
                  </Text>
            </View>*/}
              </View>
              
            </View>
          </View>

          { videoPressed ?
           <>
            <View style={{  width: mobile ? '100%' : tablet ? '70%' : '50%', 
            height: tablet ? height * 0.5 : height* 0.65,  justifyContent: 'center', alignItems: 'center',  }}>
              <ProjectVideo video={item.video}/>
              </View>
            
        </>
             : 
          
          
          
          <View style={{
            width: mobile ? '100%' : tablet ? '70%' : '50%', 
            height: tablet ? height * 0.5 : height* 0.65, 
            backgroundColor: 'lightblue', 
            justifyContent:'center', alignItems: 'center',  }}>
            <ImageBackground 
            source={{uri: 'https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'}}
            style={{height:  '100%', width: mobile ? width /1.25 : tablet ?  width / 1.9 : width/ 4, paddingBottom: height / 8, alignSelf: 'center',  justifyContent: 'center'   }}
            imageStyle={{opacity: 0.3  }}
            >
              <TouchableOpacity
              onPress={() => {
                setVideoPressed(true)
                
              }}
              style={{
                //opacity: 0.8, 
                width: '50%',
                height: mobile || tablet ? '45%' : '35%',  
                backgroundColor: '#E5E5E5', 
                padding: height / 40,
                justifyContent: 'space-around', alignItems: 'center',  alignSelf: 'center',
                 }}>
                <Text style={{ fontFamily: 'OpenSans_400Regular,', color: '#645355', fontSize: mobile ? 18 : tablet ? 22 : 26, textAlign: 'center'}}> Tab to see how  </Text>
                <Text style={{ fontFamily: 'OpenSans_400Regular,', color: '#FD4E02', fontSize: mobile ? 18 : tablet ? 22 : 26, textAlign: 'center'}}>  it  </Text>
                <Text style={{ fontFamily: 'OpenSans_400Regular,', color: '#645355', fontSize: mobile ? 18 : tablet ? 22 : 26,}}> works</Text>
              </TouchableOpacity>
            </ImageBackground> 
            
          </View>}
        </View> 
        <View style={{
          width:   mobile ? '100%' : tablet ? '87%' :'100%',  
          //backgroundColor: 'lightgrey', 
          alignSelf: 'center', justifyContent:'center', alignItems: 'center', 
          height: tablet ? height * 0.1 : height * 0.15,}}>
          <View style={{
            //backgroundColor: 'grey', 
            width: tablet ? width * 0.8 : width * 0.7, alignItems: 'center'}}>
            <TouchableOpacity  onPress={() => 
             {navigation.navigate ('HomeScreen'),
            setVideoPressed(false)} }
                style={{ 
                 //paddingLeft: mobile ? width / 2.5 : tablet ?  width / 3.25 :  width / 4.25,  
                  paddingTop: mobile ? width / 25 : tablet ?  width / 60 :  width / 45,  }}
          
          >
                  <Text 
                  
                  style={ { 
                    fontFamily: 'AbrilFatface_400Regular ',  color: '#847577', 
                    color: '#FD4E02',
                    fontSize: mobile ? width / 30 : tablet ?  width / 45 :  width / 80, 
                    //textAlign: 'right',
                    }}>Discover more projects 
                  </Text>
            </TouchableOpacity>

          </View>
          <View style={{ 
            //backgroundColor: 'lightgrey' 
          }}
            >
            <Text 
            
            style={[ { 
              fontSize: mobile ? width / 25 : tablet ?  width / 35 :  width / 50,
              fontFamily: 'AbrilFatface_400Regular', 
              textAlign: 'center', color: '#847577',
              paddingTop: mobile ? width / 20 : tablet ?  width / 45 :  width / 45 }]}>Want to work together?</Text>
       
            <TouchableOpacity  onPress={() => Linking.openURL('mailto:elvirashelyganov.a@gmail.com')
          
            }
            title="support@example.com" >
              <Text 
              
              style={ { 
                
                color: '#FD4E02',
                fontSize: mobile  ? width / 23 : tablet ? width / 33 : width / 63,
                fontFamily: 'AbrilFatface_400Regular',
                textAlign: 'center'}}>Get in touch </Text>
            </TouchableOpacity>
    
        </View>
        </View>
      </View>
    </View>
  );
};
}
export default Project2;
