import React, { useRef, useContext } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import { StatusBar } from 'expo-status-bar';
import images from '../../assets/data/images'
import { useNavigation } from '@react-navigation/native'

import Project from '../screens/Project';


const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.5;
//const ITEM_WIDTH = width * 0.39;
const ITEM_HEIGHT = ITEM_WIDTH * 0.6;
//const ITEM_HEIGHT = ITEM_WIDTH * 0.55;
const mobileItemWidth = width * 0.7
const mobileItemHeight = mobileItemWidth * 0.8



const data = images.map((image, index) => ({
  key: String(index),
  id: image.id,
  photo: image.photo,
  text: image.text,
  video: image.video,

}))
export default function Parallax() {
//const [videoPressed, setVideoPressed] = useContext(ProjectContext)


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


  const navigation  = useNavigation()

  const onPress = (item) => {
   navigation.navigate('Project', { id: item.id })
    
}    

  const scrollY = useRef(new Animated.Value(0)).current

  return (
    <View style={{ justifyContent: 'center',
    alignContent: 'center',}
     // [styles.container], {}
      }>
      <View style={{ 
        width : mobile ? ITEM_WIDTH * 2.2 : tablet ? ITEM_WIDTH * 1.5 :  ITEM_WIDTH , 
        height: mobile ? ITEM_HEIGHT * 2.5 : tablet ? ITEM_HEIGHT * 1.7 : ITEM_HEIGHT, 
       //maxHeight: 450,
        justifyContent: 'center', 
        alignContent: 'center', 
        flexDirection: 'row',
       // borderWidth: 5,
        //borderColor: 'white',
                  }}>
       <View style={{position: 'absolute', top: mobile ? ITEM_HEIGHT / 2 + 40  : tablet ?  ITEM_HEIGHT / 2 + 35 : ITEM_HEIGHT / 2, right: mobile ? -width / 25 : - width / 50}}>
         {images.map((_, index) => {
           return <View 
             key={index}
             style={{width: 6, height: 6, borderRadius: 6, marginBottom: 6,
            backgroundColor: 'lightgrey', }} 
            
                  />
         })}
         <Animated.View 
           style={{width: 12, height: 12, borderRadius: 12, borderWidth: 1, borderColor: 'lightgrey', position: 'absolute', top: -3, right: -3, 
             transform: [{translateY: Animated.divide(scrollY, ITEM_HEIGHT).interpolate({
               inputRange: [0, 1],
               outputRange: mobile ? [0, 4.75] : tablet ? [0, 7] : [0, 12]
             })}]
        }}>

         </Animated.View>
       </View>
        <Animated.FlatList 
          data={data}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}} }],{useNativeDriver: true} ) }
          renderItem={({item, index}) => {
            const inputRange = mobile ? [
              (index - 1) * height/4,
              index * height/4,
              (index + 1) * height/4
             ] :
             tablet ? [
              (index - 1) * height/3.8,
              index * height/3.8,
              (index + 1) * height/3.8
             ]
            :[
             (index - 1) * height/2.3,
             index * height/2.3,
             (index + 1) * height/2.3
            ];
            const translateY = scrollY.interpolate({
              inputRange,
             // outputRange: [-250, 0, 250],
              outputRange: 
              mobile ? 
              [-height * 0.3, 0, height * 0.3] :
              tablet ? 
              [-height * 0.4, 0, height * 0.4] :
              [-height * 0.2, 0, height * 0.2] 
            })
            
          return (
            
             <TouchableOpacity
              onPress= {() => onPress(item)
              }
              
              style={{
               //borderRadius: 22,
                
               // margin: 20,
               // width: width,
                
               // borderColor: 'black',
                //borderWidth: 2,
               // shadowRadius: 20,
                //shadowColor: "#000",
                //shadowOffset: {
                //  width: 0,
                //  height: 0,
               // },
                //shadowOpacity: 0.3,
                
                //elevation: 5,
                //padding: 6,
                justifyContent: 'center', alignContent: 'center'
              }}>
                <View  style={{
                     
                      overflow: 'hidden', 
                      
                      justifyContent: 'center',
                      alignItems: 'center', 
                      
                      //borderRadius: 22,
                   
                    }}>
                  <Animated.View style={{ 
                    // width: mobile ? mobileItemWidth   : ITEM_WIDTH,
                   //ITEM_WIDTH * 1.7,
                     // height: mobile ? mobileItemHeight * 0.7 :  ITEM_HEIGHT   , 
                     width : mobile ? ITEM_WIDTH * 2.2 : tablet ? ITEM_WIDTH * 1.5 : ITEM_WIDTH ,  
                     
                     height: mobile ? ITEM_HEIGHT * 2.5 : tablet ? ITEM_HEIGHT * 1.7 : ITEM_HEIGHT  ,
                     justifyContent: 'center', 
                     alignContent: 'center', 
                    // height:  mobile ? height / 4 : tablet ? height / 3.5 : height/ 2.5,
                  //width: mobile ? width : tablet ?  width /1.9 : width/ 2.6,
                     // backgroundColor: 'pink',
                      transform: [{ translateY },]
                        
                        }}>
                    <ImageBackground
                        source=
                        //{require('./../../assets/data/BANNER.png')}
                          {
                          item.photo
                          
                        }
                      
                        style={{
                          //aspectRatio: 3/4,
                          width :  mobile ? ITEM_WIDTH * 2.2 : tablet ? ITEM_WIDTH * 1.5 : ITEM_WIDTH ,  
                          height: mobile ? ITEM_HEIGHT * 2.5 : tablet ? ITEM_HEIGHT * 1.9 : ITEM_HEIGHT   ,
                         // width: mobile ? mobileItemWidth :   ITEM_WIDTH ,
                         // height: mobile ? mobileItemHeight * 1.5 :  ITEM_HEIGHT * 1.6 ,
                          justifyContent: 'center',
                          alignContent: 'center',
                          
                          resizeMode: 'contain',
                        
                          
                        }}
                        imageStyle={{width :  mobile ? ITEM_WIDTH * 2.2 :tablet ? ITEM_WIDTH * 1.5 : ITEM_WIDTH ,  
                          height: mobile ? ITEM_HEIGHT * 2.5 : tablet ? ITEM_HEIGHT * 2.5 : ITEM_HEIGHT   ,
                          
                          
                        }}
                      >
                          <View style={{height:  '100%', 
                          paddingTop: mobile ? ITEM_HEIGHT / 1.3 : tablet ? ITEM_HEIGHT/1.4 :  ITEM_HEIGHT/1.7 , 
                          
                          //borderWidth: 1,
                          //borderColor: 'red'
                        }}>
                            {/*<Text style={{opacity: 1,  textAlign: 'center', color: '#847577', fontSize: mobile ? 26 : bigMobile ? 32 : tablet ? 40 : 50, fontFamily: 'AbrilFatface_400Regular', }}>
                                Here you will see the picture of my  {item.text}
                      </Text>*/}
                            
                          </View>
                        
                        </ImageBackground>
                  </Animated.View>
                </View>
              </TouchableOpacity>
            
          )}}
          
        />
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    
    
    //backgroundColor: '#fff',
    alignItems: 'center',
   
  },
});
