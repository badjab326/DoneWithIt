import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert, Platform, StatusBar, View, Dimensions } from 'react-native';


export default function App() {
  return (

      <View 
        style={{
          backgroundColor: "blue",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View 
          style={{
            backgroundColor: "yellow",
            width: 100,
            height: 300,
            alignSelf: "flex-start"
        }}/>
        <View 
          style={{
            backgroundColor: "red",
            width: 100,
            height: 200
        }}/>
        <View 
          style={{
            backgroundColor: "green",
            width: 100,
            height: 100
        }}/>

      </View>
  );
}

const containerStyle = {backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
