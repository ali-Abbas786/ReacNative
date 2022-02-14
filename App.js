import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,Image} from 'react-native';  
  
type Props = {};  
export default class App extends Component<Props> {  
  render() {  
    return (  
      <View>
        
       <View style={{flexDirection:'row',paddingHorizontal:0,marginTop:30}}>
          <Image style={styles.Logo}
          source={require('./xyz.jpg')}/>
          <Text style={{textAlign:'right',flex:1,fontSize:25,color:'green',marginTop:60,marginRight:30}}>PMAS AAUR</Text>
          </View>
         <Image source={require('./ali.jpeg') } style={{ width: 150, height: 150, marginTop:30, alignSelf: 'center',}} /> 
         <Text style={styles.welcome}>Ali Abbas</Text>  
         <Text style={styles.welcome}>19-ARID-1232</Text>
         <Text style={styles.welcome}>BS(Software Engineering)</Text> 
         <Text style={styles.welcome}>(UIIT)</Text> 
      </View>      
    );  
  }  
}  
const styles = StyleSheet.create({  
  welcome: {  
    fontSize: 20, 
    textAlign: 'center', 
    marginTop:0, 
  }
//    Logo: {
//  width:100,
//  height:100,
// borderRadius:105

//  }  
});