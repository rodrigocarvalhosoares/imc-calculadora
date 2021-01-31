import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')

  const calculaImc = () => {
    const tempPeso = parseFloat(peso);
    const tempAltura = parseFloat(altura);
    const calc = tempPeso / (tempAltura * tempAltura)
    let texto = '';
    
    if(calc < 18.5){
      texto = 'Você está abaixo do peso.'
    } else if(calc >= 18.5 && calc <= 24.9) {
      texto = 'Seu peso está normal.'
    } else if(calc >= 25 && calc <= 29.9) {
      texto = 'Você está com sobrepeso.'
    } else if(calc >= 30 && calc <= 34.9) {
      texto = 'Você está com Obesidade (Grau I).'
    } else if(calc >= 35 && calc <= 39.9) {
      texto = 'Você está com Obesidade Severa (Grau II).'
    } else if(calc >= 40) {
      texto = 'Você está com Obesidade Mórbida (Grau III).'
    } else {
      texto = 'Informe seu peso e altura.'
    }

    setResultado('IMC: ' + Math.round(calc, 2) + '. ' + texto);
  }

  return (
    <ImageBackground source={{ uri: 'https://segurosinteligentes.com.br/portalrh/wp-content/uploads/biofeedback-saude-mental-nas-empresas.jpg'}} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>Calcule seu IMC</Text>
        <Text style={{ color: '#000', fontSize: 16, textAlign: 'center', marginTop: 20}}>Saiba se você está no seu peso ideal, acima do peso ou abaixo do peso.</Text>

        <TextInput 
          placeholder="Digite seu peso (ex: 90.00)" 
          keyboardType="numeric" 
          style={{ backgroundColor: '#FFF', width: '90%', marginVertical: 14, height: '15%', alignSelf: 'center'}} 
          onChangeText={(value) => setPeso(value)}
        />
        <TextInput 
          placeholder="Digite sua altura (ex: 1.70)" 
          keyboardType="numeric" 
          style={{ backgroundColor: '#FFF', width: '90%', marginVertical: 14, height: '15%', alignSelf: 'center'}}
          onChangeText={(value) => setAltura(value)}
        />

        <TouchableOpacity onPress={calculaImc}>
          <Text style={{ color: '#000', fontSize: 30, textAlign: 'center', marginTop: 20}}>Calcular</Text>
        </TouchableOpacity>

        <Text style={{ color: '#000', fontSize: 16, textAlign: 'center', marginTop: 20}}>Resultado:</Text>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{resultado}</Text>
      </View>
    </ImageBackground>
  )
}

export default App;