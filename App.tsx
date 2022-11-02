// import React from 'react';
// import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

// interface Contato {
//   nome: string;
//   textoLivre?: string;
//   primeiroNum?: number;
//   segundoNum?: string;
// }

// export default function App() {
//   const [contato, SetContato] = React.useState<Contato>({nome: 'React Native'}); // use state controle state local do código Primeiro constate e segunda a função eles estão interligados
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Prova Mobile,</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Texto Livre"
//         value={contato.textoLivre}
//         onChangeText={textoLivre => {
//           SetContato({...contato, textoLivre: textoLivre});
//         }}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Primeiro Número"
//         keyboardType="number-pad"
//         value={String(contato.primeiroNum ? String(contato.primeiroNum) : '')}
//         onChangeText={primeiroNum => {
//           SetContato({
//             ...contato,
//             primeiroNum: primeiroNum ? Number(primeiroNum) : 0,
//           });
//         }}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder=" Segundo Número"
//         keyboardType="number-pad"
//         value={contato?.segundoNum}
//         onChangeText={segundoNum => {
//           SetContato({...contato, segundoNum: segundoNum});
//           //... destructor, eliminar o que estava antes e acrescentar o novo
//         }}
//       />
//       <Pressable
//         style={styles.button}
//         onPress={() => {
//           console.log(`O nome é ${contato.nome}.`);
//         }}>
//         <Text style={styles.labelButton}>Imprimir</Text>
//       </Pressable>
//       <Text>Email: {contato.textoLivre}</Text>
//       <Text>Primeiro Número: {contato.primeiroNum}</Text>
//       <Text>Segundo Número: {contato.segundoNum}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   titulo: {
//     textAlign: 'center',
//     fontSize: 25,
//     color: 'blue',
//   },
//   input: {
//     margin: 12,
//     fontSize: 20,
//   },
//   labelButton: {
//     color: 'white',
//     fontSize: 20,
//   },
//   button: {
//     backgroundColor: 'green',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginHorizontal: 25,
//   },
// });

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [texto, setText] = useState<string>('');
  const [numero1, setNum1] = useState<number>();
  const [numero2, setNum2] = useState<number>();

  return (
    <ScrollView>
      <View>
        <Text style={{textAlign: 'center'}}>"Prova de Mobile"</Text>
        <TextInput
          style={{marginLeft: 10}}
          placeholder="Texto livre"
          onChangeText={string => {
            setText(string);
          }}
        />
        <TextInput
          style={{marginLeft: 10}}
          placeholder="Numero 1"
          keyboardType="number-pad"
          onChangeText={number => {
            setNum1(Number(number));
          }}
        />
        <TextInput
          style={{marginLeft: 10}}
          placeholder="Numero 2"
          keyboardType="number-pad"
          onChangeText={number => {
            setNum2(Number(number));
          }}
        />
        <Text style={{marginLeft: 5}}>Texto Livre: {texto}</Text>
        <Text style={{marginLeft: 5}}>Numero 1°: {numero1}</Text>
        <Text style={{marginLeft: 5}}>Numero 2°: {numero2}</Text>
      </View>
    </ScrollView>
  );
}
