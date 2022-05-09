import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/fontAwesome'
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

const { width, height } = Dimensions.get('window')

const DescriptionPart = ({item}) => {

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
    <View style={{}} >
      <View>
        <Text style={{fontSize: mobile ? width / 32 : tablet ?  width / 50 :  16, fontWeight: 'bold', color: '#645355', paddingBottom: tablet ? 5 : 15}}>
          {item.desc2}
        </Text>
      </View>

      <View>
        <View style={{marginBottom:  mobile? 5 :tablet ? 15 : 40}}>
          <View style={{flexDirection: 'row' }}>
            <View style={{justifyContent: 'center', marginHorizontal: 5}}>
              <FontAwesome name='circle' size={6} color= '#645355'  />
            </View>  
            <Text style={{fontFamily: 'OpenSans_400Regular,',  fontSize: mobile ? width / 32 : tablet ?  width / 50 :  14,  color: '#645355', textAlign: 'justify'}}>
            {item.desc31}
            </Text>
          </View>
          <View style={{flexDirection: 'row' }}>
            <View style={{justifyContent: 'center', marginHorizontal: 5}}>
              <FontAwesome name='circle' size={6} color= '#645355'  />
            </View>  
            <Text style={{fontFamily: 'OpenSans_400Regular,',  fontSize: mobile ? width / 32 : tablet ?  width / 50 :  14,  color: '#645355', textAlign: 'justify'}}>
            {item.desc32}
            </Text>
          </View>
        </View>
      
      </View>
      
      <View>
        <Text style={{fontSize: mobile ? width / 32 : tablet ?  width / 50 :  16, fontWeight: 'bold', color: '#645355', paddingBottom: tablet ? 5 : 15}}>
          {item.desc4}
        </Text>
      </View>
      <View style={{marginBottom: mobile? 5 : tablet ? 15 : 40}}>
        <View style={{flexDirection: 'row' }}>
          <View style={{justifyContent: 'center', marginHorizontal: 5}}>
            <FontAwesome name='circle' size={!item.desc4 ? 0 : 6} color= '#645355'  />
          </View>  
          <Text style={{fontFamily: 'OpenSans_400Regular,',  fontSize: mobile ? width / 32 : tablet ?  width / 50 :  14,  color: '#645355', textAlign: 'justify'}}>
            {item.desc51}
          </Text>
        </View>
        <View style={{flexDirection: 'row' }}>
          <View style={{justifyContent: 'center', marginHorizontal: 5}}>
            <FontAwesome name='circle' size={!item.desc4 ? 0 : 6} color= '#645355'  />
          </View>  
          <Text style={{fontFamily: 'OpenSans_400Regular,',  fontSize: mobile ? width / 32 : tablet ?  width / 50 :  14,  color: '#645355', textAlign: 'justify'}}>
            {item.desc52}
          </Text>
        </View>
      
      </View>
      
      
      
    </View>
    
  )
}

export default DescriptionPart