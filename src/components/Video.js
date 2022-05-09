import React from "react";
import { Video, AVPlaybackStatus } from 'expo-av';
import { View, Button, StyleSheet }  from 'react-native'
import images from "../../assets/data/images";


const  ProjectVideo = (props) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={props.video}
        shouldPlay
        useNativeControls
        resizeMode="cover"
        
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
       
      </View>
        
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
   
    

backgroundColor: '#042D47'
  },
  video: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
    
    
  }
})

export default  ProjectVideo