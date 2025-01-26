import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useState}from 'react';

export default function App(){
  const [nome, setNome] = useState("Lu");

  function handleNome(){
    // alert('test')
    setNome("acrisio");
  }
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Code + Coffe</Text>
        <Text style={[styles.title, styles.text]}>Developer Full Stack</Text>
        <Text style={styles.nome}>{nome}</Text>

        <TouchableOpacity style={styles.button} onPress={handleNome}>
          <Text style={styles.buttonText}>Click</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor: '#f1f1f1',
     paddingTop: 28,
  },
  title:{
    fontSize:32,
    color: "#121212",
    fontWeight: 'bold'
  }
  ,
  text:{
    color: 'red'
  },

  nome:{
    textAlign:'center',
    fontSize:28,
    fontStyle:'italic'
  },

  button:{
    backgroundColor:'blue',
    height: 40,
    justifyContent: 'center',
    alignItems:"center",
    marginTop: 35
  },

  buttonText:{
     color: '#FFF',
     fontWeight: 'bold'
  }

})