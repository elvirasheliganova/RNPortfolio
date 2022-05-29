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
    <View style={{flex:1, justifyContent:   'flex-start', alignItems: mobile || tablet ? 'center' : 'flex-start' ,
    //backgroundColor: 'lightgreen' ,
    
  }}>
     
      
      
      <View style={{marginBottom: mobile || tablet ? 10 : 30}}>
        <View style={{marginBottom: 40, }}>
          <Text style={{fontSize: 26, fontWeight: 'bold', color: '#645355', textAlign: mobile || tablet ? 'center' : 'left'}}>{item.title}</Text>
        </View>
        
        <Text style={{fontFamily: 'OpenSans_400Regular,', fontSize: mobile ? width / 30 : tablet ?  width / 50 :  14, color: '#645355', textAlign: 'justify', marginBottom: tablet ? 10 : 0 }}>
            {item.desc1}
        </Text>
      </View>

      <View style={{width: '100%'}}>
        <DescriptionPart item = {item}/>
      </View>
      <TouchableOpacity  
        onPress={() => Linking.openURL( `${item.link}`)}
//?subject=SendMail&body=Description') 
      
        //title="support@example.com"
        style={{marginBottom: tablet ? 10 : 20,  marginTop: mobile? 20 : 0} }>
        <Text style={{color: '#FD4E02', fontSize:  mobile? 12 : 14, fontWeight: 'bold'}}
          //numberOfLines={2}
          //adjustsFontSizeToFit
            >Link to Page </Text>
      </TouchableOpacity>
      
      

    </View>
  )
}

export default ProjectDescription

