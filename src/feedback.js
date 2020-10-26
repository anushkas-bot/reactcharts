/**
  * Sample React Native App
  * https://github.com/facebook/react-native
  *
  * @format
  * @flow strict-local
  */

 import 'react-native-gesture-handler';

 import * as React from 'react';
 import {  useEffect, useState } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   TextInput,
   Button,
   TouchableOpacity,
   Image
 } from 'react-native';

 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';

 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import DocumentPicker from 'react-native-document-picker';
 import DefaultScrollView from '../../components/default/DefaultScrollView';

 const Stack = createStackNavigator();
 const Feedback = () => {
   return (
     <NavigationContainer style={styles.nav}>
       <Stack.Navigator>
         <Stack.Screen
           name="Home"
           component={HomeScreen}
           options={{ title: 'Contact us' }}
         />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 const HomeScreen: () => React$Node = () => {
   async function documentPicker () {
     try {
       const res = await DocumentPicker.pick({
         type: [DocumentPicker.types.images],
       });
       console.log(
         res.uri,
         res.type, // mime type
         res.name,
         res.size
       );
     } catch (err) {
     if (DocumentPicker.isCancel(err)) {
       // User cancelled the picker, exit any dialogs or menus and move on
     } else {
       throw err;
      }
    }
   }
   const [email, setEmail] = useState('');
   const [emailError, setemailError] = useState('');
   const [feed, setFeed] = useState('');
   const [feedError, setfeedError] = useState('');
   const signin = () => {
    if (email!="") {
     console.log(email)
    }
    else {
      setemailError('Email is required')
    }
    if (feed!="") {
      console.log(feed)
    }
    else {
      setfeedError('Field is required')
    }
  }
   return (
     <>
     <DefaultScrollView>
      <StatusBar barStyle="dark-content" />
       <SafeAreaView>
         <View style={styles.body}>
           <View style={styles.sectionContainer}>
             <Text style={styles.sectionDescription}>Your name</Text>
                <View style={styles.textAreaContainerSingle} >
                     <TextInput
                       style={styles.textAreaSingle}
                       underlineColorAndroid="transparent"
                       numberOfLines={1}
                       autoCorrect={false} />
                </View>
           </View>
           <View style={styles.sectionContainer}>
             <Text style={styles.sectionDescription}>Email address<Text style={{fontSize: 17}}>*</Text></Text>
                <View style={styles.textAreaContainerSingle} >
                   <TextInput
                     style={styles.textAreaSingle}
                     underlineColorAndroid="transparent"
                     numberOfLines={1}
                     autoCapitalize="none"
                     value={email}
                     onChangeText={(email) => setEmail(email)}
                     onChange={() => setemailError('')}
                   />
                </View>
              <Text style={{color:'red'}}>{emailError}</Text>
           </View>
              <View style={styles.sectionContainer} >
                <Text style={styles.sectionDescription}>How can we help you?<Text style={{fontSize: 17}}>*</Text></Text>
                <View style={styles.textAreaContainerSingle} >
                      <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        numberOfLines={10}
                        multiline={true}
                        value={feed}
                        onChangeText={(feed) => setFeed(feed)}
                        onChange={() => setfeedError('')}
                      />
                 </View>
                <Text style={{color:'red'}}>{feedError}</Text>
               </View>
             <View style={styles.sectionContainer}>
               <TouchableOpacity style={styles.buttons} onPress={documentPicker}>
                 <Text style={styles.texts}>
                   <Image style={styles.tinyLogo} source={require('./images2.png')}/>
                   Add file or drop here
                 </Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.button}
                 onPress={signin}
               >
                 <Text style={styles.text}>SUBMIT</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.sectionContainerWhite}>
             </View>
           </View>
       </SafeAreaView>
      </DefaultScrollView>
     </>
   );
 };

 const styles = StyleSheet.create({
   body: {
     backgroundColor: Colors.white,
   },
   sectionContainer: {
     marginTop: 12,
     paddingHorizontal: 24,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 17,
     fontWeight: '400',
     color: Colors.dark,
   },
   textAreaContainer: {
     borderColor: Colors.light,
     borderWidth: 1,
     padding: 5,
   },
   textArea: {
     height: 125,
     justifyContent: "flex-start"
   },
   textAreaContainerSingle: {
     borderColor: Colors.light,
     borderWidth: 1,
     padding: 5,
     marginTop: 7
   },
   textAreaSingle: {
     height: 34,
     justifyContent: "flex-start"
   },
   sectionContainerWhite: {
     backgroundColor: Colors.white,
     height: 450
   },
   button:{
     alignItems: "center",
     backgroundColor: '#007AFF',
     padding: 10,
     width: '30%',
     marginLeft: 258,
     height: 50,
     marginTop: 200
   },
   buttons:{
     height: 50,
     borderRadius:25,
     paddingTop: 5,
     paddingBottom: 5,
     paddingLeft: 50,
     paddingRight: 50,
     backgroundColor: '#FFFFFF',
     shadowColor: 'rgba(0, 0, 0, 0.1)',
     shadowOpacity: 0.8,
     elevation: 6,
     shadowRadius: 15 ,
     shadowOffset : { width: 1, height: 13},
   },
   text: {
     color: '#FFFFFF',
     height: 600,
     fontWeight: '800',
     marginTop: 8
   },
   texts: {
     color: '#808080',
     height: 600,
     marginTop: 8,
     fontSize: 17,
     marginLeft: 35
   },
   tinyLogo: {
     width: 17,
     height: 17,
   },
 });

 export default Feedback;
