import React, { useRef }  from 'react'
import { StatusBar } from 'expo-status-bar';
import '@expo/match-media';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMediaQuery } from "react-responsive";
import { StyleSheet, Text, View, FlatList, Image, Animated,  ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts,  AbrilFatface_400Regular  } from '@expo-google-fonts/abril-fatface';
import Parallax from '../components/Parallax';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import images from '../../assets/data/images'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height
const { width, height } = Dimensions.get('window');


const data = images.map((image, index) => ({
  key: String(index),
  photo: image.photo,
  text: image.text,
  desc: image.desc,
  video: image.video
}))

const HomeScreen = ({navigation}) => {
 

  const scrollY = useRef(new Animated.Value(0)).current
 
  

  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
       <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>TheElza</Text>
        </View>
       </View>
        <View style={styles.titleContainer}>
          <Text 
           //numberOfLines={2}
           //adjustsFontSizeToFit
          style={styles.title}>A front-end developer working in react-native. </Text>
          <Text style={styles.title}>Creating websites and applications for new & growing companies.</Text>
        </View>
      
          

        
        <TouchableOpacity 
                //style={styles.imageContainer}
               >
          <View style={{marginBottom: height / 15}}>
            <Parallax />
          </View>
        </TouchableOpacity>
          {/*<Animated.FlatList
            data={data}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator = {false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset:{ y: scrollY }}}],
              { useNativeDriver: true }
            )}
            renderItem={({item, index}) => {
              console.log(item)

              const inputRange = [
                (index - 1) * windowHeight * 0.4,
                index * windowHeight * 0.4,
                (index + 1) * windowHeight * 0.4,
              ]
              const translateY = scrollY.interpolate({
                inputRange,
                outputRange: [-windowHeight * 0.4, 0, windowHeight * 0.4]
              })

              return <TouchableOpacity 
                style={styles.imageContainer}
                onPress={({item}) => navigation.navigate('Project')}>
                <Animated.View style={{
                  width: windowWidth * 0.4, 
                  height: windowHeight * 0.4, 
                  overflow: 'hidden',
                  //backgroundColor: 'pink',
                  transform: [
                        
                    {
                      translateY,
                      
                    },]
                 
                  }}>
                  <ImageBackground
                    source={{uri: item.photo}}
                    style={{
                      width: windowWidth * 0.4, 
                      height: windowHeight * 0.4, 
                      backgroundColor: 'rgba(166, 162, 162, 0.2)',
                      justifyContent: 'center', 
                      alignItems: 'center',
                      paddingBottom: 50
                    }}
                    imageStyle={{opacity: 0.3}}
                  
                  >
                    <View style={{padding: 20, backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{opacity: 1, color: '#847577', fontSize: 80, fontFamily: 'AbrilFatface_400Regular', }}>
                          {item.text}
                      </Text>
                    </View>
                    
                  </ImageBackground>
                   
                </Animated.View>
              </TouchableOpacity>
            }}

          />*/}
          
         {/* <Image  source={{
          uri: 'https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }} style={{width: '100%', height: '120%'}}/>

        </View>
        <View style={{width: windowWidth * 0.4, height: windowHeight * 0.75, overflow: 'hidden',}}>
        <Image  source={{
          uri: 'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2t0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        }} style={{width: '100%', height: '120%'}}/>*/}



      
      

        
        
      <View style={styles.bottomContainer}>
          <Text 
           //numberOfLines={2}
           //adjustsFontSizeToFit
           style={styles.question}>Want to work together?</Text>
           <Text 
           //numberOfLines={2}
           //adjustsFontSizeToFit
          style={styles.getInTouch}>Get in touch </Text>
          
        </View>
        
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    
  width: windowWidth * 0.6,
  height: windowHeight,

    
    
    minWidth: 1120,
    backgroundColor: '#E5E5E5',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    
    
    //paddingBottom: 100
  },
  innerContainer: {
    //flex: 1,
    width: '70%',
    minWidth: 300,
    
    alignItems: 'center',
    paddingHorizontal: windowWidth / 16,
    
  }, 
  circleContainer: {
    height: windowHeight / 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: -windowHeight / 10
  },

  circle: {
    height: windowHeight / 4,
    width: windowHeight / 4,
    backgroundColor: '#FD4E02',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',

   //marginBottom: windowWidth / 30,
   
    
    
    
    
  },
  circleText: {
    color: '#fff',
    position: 'relative',
    top: windowWidth / 28,
    fontFamily: 'AbrilFatface_400Regular',
    fontSize: windowWidth / 80
  },
  titleContainer: {
    width: windowWidth * 0.28,
    justifyContent: 'flex-start',
    textAlign: 'center',
    paddingTop: windowHeight / 12,
    paddingBottom: windowWidth / 50
  },
  title: {
    color:  '#857676',
    paddingBottom: 20,
    fontSize: windowWidth / 72,
    fontFamily: 'AbrilFatface_400Regular',
  },

  imageContainer: {
    width: '100%',
    height: windowWidth / 5,
    //backgroundColor: 'yellow',
    overflow: 'hidden',
   //backgroundColor: '#cac9c3',
    marginVertical: windowWidth / 36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5
  },

  bottomContainer: {
    //justifyContent: 'flex-start',
    textAlign: 'center',
    //paddingTop: windowWidth / 30,
    //marginBottom: windowWidth / 20
  },
  
  question: {
    color:  '#857676',
    fontSize: windowWidth / 60,
    fontFamily: 'AbrilFatface_400Regular',
    //marginBottom:  windowWidth / 150,
    //marginTop: windowWidth / 40
  }, 

  getInTouch: {
    color: '#FD4E02',
    fontSize: windowWidth / 60,
    fontFamily: 'AbrilFatface_400Regular',
  }

});

export default HomeScreen
