


import React, { useRef, useContext } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useMediaQuery } from "react-responsive";
import '@expo/match-media';



import images from '../../assets/data/images'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.6;
const ITEM_HEIGHT = height * 0.5;

const data = images.map((image, index) => ({
  key: String(index),
  id: image.id,
  photo: image.photo,
  text: image.text,
  video: image.video,

}))

const Parallax3 = () => {

  const laptop = useMediaQuery({
    maxDeviceWidth: 1440,
    query: "(max-device-width: 1440px)"
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
    maxDeviceWidth: 375,
    query: "(max-device-width: 375px)"
  })
  
  const navigation  = useNavigation()

  const onPress = (item) => {
    navigation.navigate('Project', { id: item.id })
     
  }  
  const scrollY = useRef(new Animated.Value(0)).current
 
  return (
    <View style={{ 
      //width : mobile ? ITEM_WIDTH *1.15 : tablet ? ITEM_WIDTH * 1.5 :  ITEM_WIDTH ,  
      //maxWidth: 760,
      //height: mobile ? ITEM_HEIGHT * 2.5 : tablet ? ITEM_HEIGHT * 1.7 : ITEM_HEIGHT , 
      //maxHeight: 450, 
      justifyContent: 'center',
      alignContent: 'center',
      //backgroundColor: 'grey',
      //opacity: 0.5
    }}>

      <View style={{ 
        width : mobile ? ITEM_WIDTH *1.15 : tablet ? ITEM_WIDTH  :  ITEM_WIDTH ,
        maxWidth: 760, 
        height: mobile ? ITEM_HEIGHT * 2.5 : tablet ? ITEM_HEIGHT * 1.7 : laptop ? ITEM_HEIGHT : ITEM_HEIGHT,
        maxHeight:  450, 
        justifyContent: 'center', 
        alignContent: 'center', 
        flexDirection: 'row',
        
      }}>   

        <View style={{position: 'absolute', top: smallMobile ? ITEM_HEIGHT / 2 + 40  : mobile ? ITEM_HEIGHT / 2   : tablet ?  ITEM_HEIGHT / 2 - 40 : ITEM_HEIGHT / 2, right: mobile ? -width / 25 : - width / 50}}>
         {images.map((_, index) => {
           return <View 
             key={index}
             style={{width: 6, height: 6, borderRadius: 6, marginBottom: 6,
            backgroundColor: 'lightgrey', 
          }} 
            
                  />
          })}
        <Animated.View 
           style={{ width: 12, height: 12, borderRadius: 12, borderWidth: 1, borderColor: 'lightgrey', position: 'absolute', top: -3, right: -3, 
             transform: [{translateY: Animated.divide(scrollY, ITEM_HEIGHT).interpolate({
               inputRange: [0, 1],
               outputRange: smallMobile ? [0, 9] : mobile ? [0, 11] : tablet ? [0, 14] : [0, 13]
             })}]
        }}>

         </Animated.View>
       </View>   
       
         <FlatList
           data={data}
           keyExtractor={item => item.key}
           pagingEnabled
           showsVerticalScrollIndicator={false}
           onScroll={Animated.event(
             [{nativeEvent: {contentOffset: {y: scrollY}} }],{useNativeDriver: true} 
            )}
           renderItem={({item, index}) => {
            const inputRange = mobile ? [
              (index - 1) * height/1.85,
              index * height/1.85,
              (index + 1) * height/1.85
             ] :
             tablet ? [
              (index - 1) * height/2.6,
              index * height/2.6,
              (index + 1) * height/2.6
             ] :
             laptop ? [
              (index - 1) * height/2,
              index * height/2,
              (index + 1) * height/2
             ] :
              [
              (index - 1) * height/2.3,
              index * height/2.3,
              (index + 1) * height/2.3
             ]
             const translateY = scrollY.interpolate({
               inputRange,
               outputRange: [-height * 0.2, 0, height * 0.2] 
             })
            return <TouchableOpacity
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
              <View style={{
                    width: mobile ? ITEM_WIDTH *1.15 : ITEM_WIDTH  , 
                    maxWidth: 760,
                    height: mobile ? ITEM_HEIGHT * 2.5 : tablet ? ITEM_HEIGHT * 1.7 : laptop ? ITEM_HEIGHT : ITEM_HEIGHT, 
        maxHeight: 450,
                    justifyContent: 'center',
              alignContent: 'center',
              //borderColor: 'red',
              //borderWidth: 2,
              overflow: 'hidden'
                    
                  }} >
                <Image 
                  source={item.photo}
                  style={{
                    //borderColor: 'black',
                    //borderWidth: 2,
                    width:  mobile ? ITEM_WIDTH *1.15 : ITEM_WIDTH  , 
                    maxWidth: 760,
                    //aspectRatio: mobile ? 1/1 : 1/2,
                    height: mobile ? ITEM_HEIGHT * 1.7 : ITEM_HEIGHT , 
                    maxHeight: 450,
                    resizeMode: 'contain',
                    
                    //transform: [{
                      //translateY
                   // }]
                  }}
                  />
              </View>
            </TouchableOpacity>
           }}
         />
       </View>
      </View>
      
    
  )
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

export default Parallax3