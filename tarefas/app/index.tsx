import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState}from 'react';
import {FontAwesome} from '@expo/vector-icons';

export default function App(){
   
    const [tarefa, setTarefa] = useState('');
    
    function handleAdd(){
       alert(tarefa);
    }
  return(
    <View style={styles.container}>
        
        <Text style={styles.title}>Tarefas</Text>
        <View style={styles.containerInput}>

          <TextInput placeholder='Digite sua tarefa..' style={styles.input} value={tarefa} onChangeText={(text)=> setTarefa(text)} />
        
          <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
             <FontAwesome name="plus" size={20} color="white"/>
          </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor: '#22272e',
     paddingTop: 28,
  },
  title:{
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12,
  },

  input:{
   width: '75%',
   backgroundColor:"#fbfbfb",
   height: 44,
   borderRadius: 4,
   paddingHorizontal: 14,

  },

  containerInput:{
    flexDirection: 'row',
    width: "100%",
    height: 44,
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 22,
  }
  ,
  buttonAdd:{
     width: '15%',
     height: 44,
     backgroundColor: '#73f7ff',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 5,
     borderRadius: 5


  }
})