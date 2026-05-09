import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, Pressable } from "react-native";

export default function Index() {

  const [name, setName] = useState<string>('')


  return (
    <View style={styles.container}>

      <Text numberOfLines={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nihil!</Text>

      <TextInput 
        placeholder="Enter your name"
        placeholderTextColor={'#1f4ba3ff'}
        value = {name}
        onChangeText={setName}
        style={{
          borderWidth:1,
          borderColor:'#000000ff',
          borderRadius:20,
          paddingHorizontal:20,
          paddingVertical:10,
          fontSize:14,
          fontWeight:"500"
        }}>
      </TextInput>

      <Pressable 
        onPress={()=>{alert("Button Pressed")}}
        onLongPress={()=>{}}
        hitSlop={{
          top:20,
          bottom:20,
          left:20,
          right:20
        }}
        style={({pressed})=>({
          backgroundColor: pressed? "#f31111ff":  "#604f96ff" ,
          padding:10,
          borderRadius:8
        })}>

        {
          ({pressed})=>
            pressed? <Text>Pressing...</Text>: <Text>Press me</Text>
        }
      </Pressable>


      <Image
        source = {{uri: 'https://imgs.search.brave.com/TS2KFZERbdEcFfXtZ3G1tcG5g7WsltJg9jWpPuztTsE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUx/NzQ4MjEyMy9waG90/by9ydW5uaW5nLXRo/cm91Z2gtbWV0YXZl/cnNlLXBvcnRhbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bVAzTXYyOFZKWk9S/OUJhak1TbkRsRkhV/V1NGaFJNR1V1MjN2/T3NvQkZNcz0',}}
        width={80}
        height={80}
        blurRadius={0} />

      <Image 
        source = {require('@/assets/images/icon.png')}
        style={{
          height:100,
          width:100
        }}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding:20,
    gap:10,

  },
});
