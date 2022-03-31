import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

const [anoAtual, setAnoatual] = useState ('');
const [anoNasc, setAnonasc] = useState ('');

function CalcularIdade(){

  const Idade = parseInt(anoAtual) - parseInt(anoNasc);

  alert ("Você têm/terá " +Idade+ " anos de idade nesse ano!");

}
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Aplicativo para encontra idade</Text>

      <TextInput style={styles.campoAnoatual} placeholder="Diga-me o ano atual:"
      keyboardType='numeric' onChangeText={setAnoatual}>
      </TextInput>



      <TextInput style={styles.campoAnonasc} placeholder="Diga-me seu ano de nascimento:"
      keyboardType='numeric' onChangeText={setAnonasc}>
      </TextInput>  

      <TouchableOpacity style={styles.botao} onPress ={CalcularIdade}>
        <Text style={styles.textoBotao}>
        Mostrar Idade
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#FF6633',
},

titulo:{
  fontSize: 30,
  color: '#0800ff',
  fontWeight: 'bold',
  textAlign: 'center',
},

campoAnoatual:{
  backgroundColor: '#ffffff',
  borderRadius: 10,
  marginTop: 30,
  textAlign: 'center',
  padding: 15,
  fontSize: 20,
  color: '#0800ff',
  margin: 30,
},

campoAnonasc:{
  backgroundColor: '#ffffff',
  borderRadius: 10,
  marginTop: 5,
  textAlign: 'center',
  padding: 15,
  fontSize: 20,
  color: '#0800ff',
  marginLeft: 30,
  marginRight: 30,
},

botao:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 30,
  backgroundColor: '#0800ff', 
  borderRadius: 9,
  padding: 10,
  margin: 100,
},

textoBotao:{
  fontSize: 18,
  textAlign: 'center',
  color: '#fff',
},

});
