
import React, { useRef }  from 'react'
import { StatusBar } from 'expo-status-bar';
import '@expo/match-media';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMediaQuery } from "react-responsive";
import { StyleSheet, Text, View, FlatList, Image, Animated,  ImageBackground,  Dimensions } from 'react-native';
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
import {Linking} from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts,  AbrilFatface_400Regular  } from '@expo-google-fonts/abril-fatface';
import Parallax3 from '../components/Parallax3';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import images from '../../assets/data/images'

const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.5;
const ITEM_HEIGHT = height;


const data = images.map((image, index) => ({
  key: String(index),
  photo: image.photo,
  text: image.text,
  desc: image.desc,
  video: image.video
}))

const HomeScreen2 = ({navigation}) => {

  const laptop = useMediaQuery({
    maxDeviceWidth: 1440,
    query: "(max-device-width: 1440px)"
  })
  const tablet = useMediaQuery({
    maxDeviceWidth: 992,
    query: "(max-device-width: 992px)"
  })
  const smallMobile = useMediaQuery({
    maxDeviceWidth: 375,
    query: "(max-device-width: 375px)"
  })
  const mobile = useMediaQuery({
    maxDeviceWidth: 600,
    query: "(max-device-width: 600px)"
  })
 

  const scrollY = useRef(new Animated.Value(0)).current
 
  

  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
    OpenSans_400Regular
    
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  
  return (
    <SafeAreaView style={styles.outerContainer}>
      
        
      <View style={[styles.innerContainer,  
          { width: mobile ? width : tablet ?  width * 0.85 : width * 0.75,
          //backgroundColor: 'lightblue'
          }]}>
        
       
        
       
        <View style={[styles.container, { width: mobile ? width : tablet ? width * 0.85 :  width * 0.7 , 
           paddingTop: mobile ? height / 6 : tablet ? height / 5 : height / 5 ,
           paddingBottom: mobile ? height / 8 :  height / 10, maxWidth: 960}
         ]}>
          <View style={styles.circleContainer}>
              <View style={styles.circle}>
                <Text style={[styles.circleText, {fontSize: mobile ? 14 : tablet ? 20 : 20}]}>TheElza</Text>
              </View>
          </View>
          <View style={[styles.titleContainer, {
            //backgroundColor: 'lightyellow', 
            marginBottom: mobile ? 0 : tablet ? height/15 : height/40, marginHorizontal: mobile ? height/20 : 0 }]}>
            <Text 
            //numberOfLines={2}
            //adjustsFontSizeToFit
            style={[styles.title, { fontSize: mobile ?  16 : tablet ? 22 : 20 }]}>A front-end developer working in react-native. </Text>
            <Text style={[styles.title, { fontSize: mobile  ? 16 : tablet ? 22 : 20 }, {paddingBottom: 0}]}>Creating websites and applications for   </Text>
            <Text style={[styles.title, { fontSize: mobile ? 16 : tablet ? 22 : 20 }]}>  new & growing companies.</Text>
          </View>
          <TouchableOpacity 
                style={{
                  marginBottom: mobile ? 20 : tablet ? height / 20 : height/ 15,  
                 //backgroundColor: 'yellow',
                 
                  width :  mobile ? ITEM_WIDTH * 1.5 : tablet ? ITEM_WIDTH * 1.5 :  ITEM_WIDTH ,  
        maxWidth: 760,
       height: smallMobile ? ITEM_HEIGHT/2.5 : mobile ? ITEM_HEIGHT * 2.5 : tablet ? ITEM_HEIGHT  : laptop ? ITEM_HEIGHT/ 2.2 : ITEM_HEIGHT, 
        maxHeight: 450,
                  //height:  mobile ? height / 4 : tablet ? height / 3.5 : height/ 2.5,
                  //width: mobile ? width / 1.2 : tablet ?  width / 1.75 : width/ 2.6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  //borderWidth: 2,
                  //borderColor: 'red'


                }}
               >
            <View 
            
            >
              <Parallax3  /> 
            </View>
          </TouchableOpacity>
          <View 
          style={styles.bottomContainer}
          >
            <Text 
            //numberOfLines={2}
            //adjustsFontSizeToFit
            style={[styles.question, { fontSize: mobile ? 16 : tablet ? 22 : 22 }]}>Want to work together?</Text>
            <TouchableOpacity 
             onPress={() => Linking.openURL('mailto:elvirashelyganov.a@gmail.com')
            //?subject=SendMail&body=Description') 
            }
            title="support@example.com" >
              <Text 
              //numberOfLines={2}
              //adjustsFontSizeToFit
              style={[styles.getInTouch, { fontSize: mobile ? 18 :  tablet ? 24 : 26 }]}>Get in touch </Text>
            </TouchableOpacity>
        </View>
        </View>
        
      </View>
      
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({

  outerContainer: {
    flex: 1,
    width: '100%',
  
    height: height,
    backgroundColor: '#fbfbf2',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  
  innerContainer: {
    //flex: 1,
   
    height: height,
    //width: '70%',
    //minWidth: 300,

   
   
   //paddingHorizontal:  width / 16,
    alignItems: 'center',
    //
    justifyContent: 'space-between'
    
  }, 
  circleContainer: {
    height: height / 8.75,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    //top: -windowHeight / 10,
   // backgroundColor: 'green',
  },

  circle: {
    height: height / 4,
    width: height / 4,
    backgroundColor: '#FD4E02',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',

   //marginBottom: windowWidth / 30,
   
  },
  circleText: {
    color: '#fff',
    position: 'relative',
    bottom: - height / 16,
    fontFamily: 'AbrilFatface_400Regular',
    

    //backgroundColor: 'lightgreen'
    
  },
//Do not know why it's here
  container: {
    
    height: '100%',
    
    justifyContent: 'space-around',
    alignItems: 'center',
   

   //backgroundColor: '#fbfbf2',

    textAlign: 'center',
    //borderColor: 'black',
   // borderWidth: 1
    
    //paddingBottom: width / 25
  },
  titleContainer: {
    //marginTop: height /10,
   //
    
  },
  title: {
    color:  '#857676',
    paddingBottom: 20,
    //fontSize: width / 72,
    fontFamily: ' OpenSans_400Regular',
    fontWeight: '600'
  },
//don't need it at all
  imageContainer:
   {
    width: '100%',
    height: width / 5,
    overflow: 'hidden',
    marginVertical: width / 36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    //backgroundColor: '#cac9c3',
  },


  bottomContainer: {
    //justifyContent: 'flex-start',
    textAlign: 'center',
    //paddingTop: windowWidth / 30,
    //marginBottom: height / 60,
   // backgroundColor: 'lightpink',
  },
  
  question: {
    color:  '#857676',
    
    fontFamily: ' OpenSans_400Regular',
    marginBottom: height / 100,
    fontWeight: '600'
    //marginTop: windowWidth / 40
  }, 

  getInTouch: {
    color: '#FD4E02',
    fontSize: width / 60,
    fontFamily: ' OpenSans_400Regular',
    fontWeight: '900'
  }

});

export default HomeScreen2