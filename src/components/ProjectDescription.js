import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import DescriptionPart from './DescriptionPart'
import { useMediaQuery } from "react-responsive";
import * as Linking from 'expo-linking';

const { width, height } = Dimensions.get('window')



 


const ProjectDescription = ({item}) => {

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
  
  return (
    <View style={{flex:1, justifyContent: 'flex-start', 
    //backgroundColor: 'lightgreen' 
  }}>
     
      <View style={{width: '100%', height:  tablet ? '15%' : '10%', marginBottom:  mobile? 5 : tablet ? 15 :40, alignItems: 'flex-start', 
      //backgroundColor: 'pink' , alignItems: 'flex-start'
      }}>
        <Image 
          source={item.frame}
          style={{width:  tablet ? '50%' : '100%', height: '100%', resizeMode: 'contain', }}
    />
    
      </View>
        <View style={{marginBottom: mobile? 5 : tablet ? 10 : 30}}>
          <Text style={{fontFamily: 'OpenSans_400Regular,', fontSize: mobile ? width / 32 : tablet ?  width / 50 :  14, color: '#645355', textAlign: 'justify'}}>
            {item.desc1}
          </Text>
        </View>
        <View style={{}}>
          <DescriptionPart item = {item}/>
        </View>
        <TouchableOpacity  
        onPress={() => Linking.openURL( `${item.link}`)}
//?subject=SendMail&body=Description') 
      
        //title="support@example.com"
        style={{marginBottom: 20}} >
           <Text style={{color: '#4285F4', fontSize:  mobile? 12 : 14, fontWeight: 'bold'}}
          //numberOfLines={2}
          //adjustsFontSizeToFit
            >Link to Page </Text>
        </TouchableOpacity>
      
      

    </View>
  )
}

export default ProjectDescription

