import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Inicio extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenio a Karaoke Chamamecero</Text>
        <Text style={styles.texto}>La aplicación donde te mostraremos nuestras raices chamameceras, tus raices...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    flex: 4,
    marginVertical: 20,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  texto: {
    flex: 4,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'normal',
    fontSize: 25,
    textAlign: 'justify',
  },
});