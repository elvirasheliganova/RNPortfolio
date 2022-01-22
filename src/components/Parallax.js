import React, { useRef } from 'react';
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
import { StatusBar } from 'expo-status-bar';
import images from '../../assets/data/images'
import { useNavigation } from '@react-navigation/native'
import Project from '../screens/Project';


const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.36;
const ITEM_HEIGHT = ITEM_WIDTH * 0.50;



//const images = [
  //'https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2t0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //'https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //'https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2t0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //'https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80',
  //'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  //'https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80',
  //'https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80',
  //'https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80',
  //'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80',
  //'https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80',
  //'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',];
 

const data = images.map((image, index) => ({
  key: String(index),
  id: image.id,
  photo: image.photo,
  text: image.text,
  video: image.video,

}))
export default function Parallax() {

  const navigation  = useNavigation()

  const onPress = (item) => navigation.navigate('Project', { id: item.id })
  
      
      //console.log(item.text)
   
    

    
  const scrollY = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}>
      <View style={{width: ITEM_WIDTH , height: ITEM_HEIGHT * 1.4 , justifyContent: 'center', alignItems: 'center', }}>
        <StatusBar hidden />
        <Animated.FlatList 
          data={data}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}} }],
            {useNativeDriver: true}
          ) }
          renderItem={({item, index}) => {
            const inputRange = [
             (index - 1) * height/3,
             index * height/3,
             (index + 1) * height/3
            ];
            const translateY = scrollY.interpolate({
              inputRange,
              //outputRange: [-250, 0, 250]
              outputRange: [-height * 0.5, 0, height * 0.5]
            })
            
          return (
            
            
              <TouchableOpacity
              onPress= {() => onPress(item)}
              
              style={{
               
                //borderRadius: 22,
                
                margin: 20,
                
                //borderColor: 'white',
                //borderWidth: 10,
                shadowRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.3,
                
                elevation: 5,
                //padding: 6,
                justifyContent: 'center', alignContent: 'center'
              }}>
                <View  style={{
                     
                      overflow: 'hidden', 
                      
                      justifyContent: 'center',
                      //borderRadius: 22,
                

                
                    }}>
                  <Animated.View style={{  width: ITEM_WIDTH,
                      height: ITEM_HEIGHT  , transform: [{
                            translateY,
                          },
                        ],
                        
                        }}>
                    <ImageBackground
                        source={{uri: item.photo}}
                        style={{
                          width: ITEM_WIDTH ,
                          height: ITEM_HEIGHT * 1.5 ,
                          //justifyContent: 'center',
                          //alignContent: 'center',
                          paddingVertical: ITEM_HEIGHT / 2.5,
                          resizeMode: 'cover',
                        
                          
                        }}
                        imageStyle={{opacity: 0.3}}
                      >
                          
                            <Text style={{opacity: 1, marginBottom: ITEM_HEIGHT/20, textAlign: 'center', color: '#847577', fontSize: 80, fontFamily: 'AbrilFatface_400Regular', }}>
                                {item.text}
                            </Text>
                        
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
    
    
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
