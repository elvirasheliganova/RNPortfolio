import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native'; 
import { View, Text, Dimensions, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import { useFonts,  AbrilFatface_400Regular  } from '@expo-google-fonts/abril-fatface';
import {
  
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
import { useMediaQuery } from "react-responsive";

import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import images from '../../assets/data/images'
import { ProjectContext } from '../components/ProjectContext';
import ProjectVideo from '../components/Video';
import ProjectDescription from '../components/ProjectDescription';


const { width, height } = Dimensions.get('window')
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height



const Project4 = () => {

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
  const smallMobile = useMediaQuery({
    maxDeviceWidth: 666,
    query: "(max-device-width: 666px)"
  })

  const route = useRoute()
  const navigation  = useNavigation()
  const [videoPressed, setVideoPressed] =  useContext(ProjectContext)
 

  //console.log(route.params.id)
  const item = images.find(item => item.id === route.params.id)
  //console.log(item.text)
  console.log(item)


  

  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    
  return (
    <SafeAreaView style={{flex: 1 , width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 30, backgroundColor: '#fbfbf2',  }}>
      <View style={{  width: mobile ? width   : tablet ? width * 0.85 :  width * 0.6 ,   justifyContent: 'space-between',  
      //backgroundColor: 'pink'  
      }}>
        <View>
          <View style={{ flexDirection: mobile || tablet ? 'column' : 'row',  
          //backgroundColor: 'lightblue', 
          alignItems: mobile || tablet ? 'center' : 'flex-start' ,
          justifyContent: mobile  ? 'space-around' : 'space-between',
          //width: mobile ? '75%' : '100%',
          height: tablet ? height * 0.8 : height * 0.6,   
        }}>
            <View style={{
              width: mobile ? '90%' : tablet ? '80%' : '45%' , 
              //height: '100%',
              //backgroundColor: 'lightyellow', 
              justifyContent:'start', alignItems: 'center',
              //paddingBottom: mobile ? width / 10 : tablet ?  width / 30 :  width / 200,
            }}>
              {/*<Text style={{fontSize: 30, fontWeight: 'bold',fontFamily: 'OpenSans_400Regular,',  color: '#847577', paddingBottom: 20}}>{item.text}</Text>
              <Text style={{fontFamily: 'OpenSans_400Regular,',  color: '#847577', textAlign: 'justify'}}>{item.desc}</Text>*/}
              <ProjectDescription item={item}/>
            </View>
            { videoPressed ?
              <>
                <View style={{  width: mobile ? '70%' : tablet ? '60%' : '45%', 
                height: tablet ? height * 0.5 : height* 0.6,  
                justifyContent: 'center', alignItems: 'center',   }}>
                  <ProjectVideo video={item.video}/>
                  </View>
                
              </>
             : 
          
          
          
          <View style={{
            width: mobile ? '70%' : tablet ? '60%' : '45%', 
           height: tablet ? height * 0.5 : height* 0.6, 
           //backgroundColor: 'blue', 
            justifyContent:'center', alignSelf: tablet ? 'center' : 'start',  }}>
            <ImageBackground 
            source= {item.banner}
              //'https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
          
            style={{
              height:  '100%', width: '100%', 
            //mobile ? width /1.25 : tablet ?  width / 1.9 : width/ 3.5, 
            //paddingBottom: height / 8, alignSelf:'flex-end',  
            justifyContent: 'center'   
          }}
            imageStyle={{opacity: 1 , resizeMode: 'contain', borderRadius: 5 }}
            >
              {/*<TouchableOpacity
              onPress={() => {
                setVideoPressed(true)
                
              }}
              style={{
                //opacity: 0.8, 
                width: '40%',
                height: mobile || tablet ? '45%' : '25%',  
                backgroundColor: '#FD4E02', 
                padding: height / 40,
                justifyContent: 'space-around', alignItems: 'center',  alignSelf: 'center',
                 }}>
                <Text style={{ fontFamily: 'OpenSans_400Regular,', color: '#645355', fontSize: mobile ? width / 22 : tablet ?  width / 30 :  width / 80, fontWeight: 'bold', textAlign: 'center'}}> Tab to see how  </Text>
                <Text style={{ fontFamily: 'OpenSans_400Regular,', color: '#E5E5E5', fontSize: mobile ? width / 22 : tablet ?  width / 30 :  width / 80,fontWeight: 'bold', textAlign: 'center'}}>  it  </Text>
                <Text style={{ fontFamily: 'OpenSans_400Regular,', color: '#645355', fontSize: mobile ? width / 22 : tablet ?  width / 30 :  width / 80, fontWeight: 'bold'}}> works</Text>
                </TouchableOpacity>*/}
            </ImageBackground> 
            
            
          </View>}
           {/*} <ImageBackground 
            source={{uri: 'https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'}}
            style={{ height: '80%', width: '50%',  justifyContent: 'center', alignItems: 'center', alignSelf: 'center' 
          }}
            imageStyle={{ height: '100%', width: '100%', opacity: 0.3, justifyContent: 'center', alignItems: 'center',   }}
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
                </ImageBackground>*/}

          </View>
          <View  style={{
            //backgroundColor: 'grey', 
            width: tablet ? width * 0.8 : width * 0.6, alignItems: 'center'}}>
             
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', 
        //backgroundColor: 'grey', 
        paddingTop: mobile ? width / 25 : tablet ?  width / 60 :  height / 45, }}>
          <TouchableOpacity 
                style={{ 
                  //paddingLeft: mobile ? width / 2.5 : tablet ?  width / 3.25 :  width / 4.25,  
                  //paddingTop: mobile ? width / 25 : tablet ?  width / 60 :  width / 45, 
                  marginLeft: mobile ? width/12 : tablet ? width/6 : 0 ,
                  alignSelf: 'flex-start',
                  //backgroundColor: 'lightgreen'
                  }}
                onPress={() => {navigation.navigate ('TheElza'),
                setVideoPressed(false),
                console.log(videoPressed)}}>
                  <Text  style={ { 
                      fontFamily: 'OpenSans_400Regular,',  color: '#847577', 
                      color: '#FD4E02',
                      fontSize: mobile ? width / 30 : tablet ?  width / 50 :  16, fontWeight: 'bold',
                    
                      //marginTop:  mobile ? width / 30 : tablet ?  width / 35 :  width / 100, 
                      //textAlign: 'right',
                      }}>Discover more projects</Text>
                </TouchableOpacity>
                { !videoPressed ?
                <TouchableOpacity 
              style={{ 
                //paddingLeft: mobile ? width / 2.5 : tablet ?  width / 3.25 :  width / 4.25,  
                 //paddingTop: mobile ? width / 25 : tablet ?  width / 60 :  width / 45, 
                 marginRight: mobile ? width/12 : tablet ? width/6 : 0 ,
                 alignSelf: 'flex-end',
                 justifyContent: 'center',
                 alignContent: 'center',
                 //backgroundColor: 'lightgreen', 
                 flexDirection: 'row'
                 }}
                 onPress={() => {
                  setVideoPressed(true)
                  
                }}
              >
                
                <Text  style={ { 
                    fontFamily: 'OpenSans_400Regular,', 
                    color: '#FD4E02',
                    fontSize: mobile ? width / 30 : tablet ?  width / 50 :  16, fontWeight: 'bold',
                   
                    //marginTop:  mobile ? width / 30 : tablet ?  width / 35 :  width / 100, 
                    //textAlign: 'center',
                    }}>Play video
                </Text>
                <Entypo name="controller-play" size={18} color='#FD4E02' />

              </TouchableOpacity>
              : 
              <>
              </>}
        </View>
        
        
      </View>
      
      
      <View style={{
        textAlign: 'center',
       
        }}>
           

           
            <Text 
            
            style={[ { 
              fontSize: mobile ? width / 25 : tablet ?  width / 35 :  22,
              fontFamily:' OpenSans_400Regular,',
              fontWeight: '600',
              marginBottom: height / 100,
              textAlign: 'center', color: '#847577',
              paddingTop: mobile ? width / 20 : tablet ?  width / 45 :  width / 90 }]}>Want to work together?</Text>
       
            <TouchableOpacity  style={{ 
            //backgroundColor: '#FD4E02', borderRadius: 3
          }}
            
            onPress={() => Linking.openURL('mailto:elvirashelyganov.a@gmail.com')
          
            }
            title="support@example.com" >
              <Text 
              
              style={ { 
                
                color: '#FD4E02',
                //'#FD4E02',
                //fontSize: mobile  ? width / 23 : tablet ? width / 33 : 28,
                fontSize: mobile  ? width / 23 : tablet ? width / 33 : width / 60,
                fontFamily: 'OpenSans_400Regular,',
                fontWeight: '600',
                textAlign: 'center'}}>Get in touch </Text>
            </TouchableOpacity>
    
        
            

      </View>
    </SafeAreaView>
  )
}}

export default Project4
