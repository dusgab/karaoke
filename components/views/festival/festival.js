import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

export default class Festival extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
        <Text style={styles.titulo}>Fiesta Nacional del Chamamé</Text>
        <Text style={styles.subTitulo}>29° FIESTA NACIONAL DEL CHAMAMÉ</Text>
        <Text style={styles.subTitulo}>15° FIESTA DEL CHAMAMÉ DEL MERCOSUR</Text>
        <Text style={styles.texto}>La Fiesta Nacional del Chamamé 2019 ya tiene fecha. Se realizará del 11 al 20 de enero y se llamará “Chamamé de la Humanidad”, como correlato de la postulación ante la Unesco que impulsa el Gobierno Provincial con el apoyo de la Nación para que el género
        obtenga el reconocimiento internacional.</Text>
        <Image style={styles.imagen} source={require('../../resources/images/festival.jpg')}/>
        <Text style={styles.subTitulo}>Programa del Día</Text>
        <Image style={styles.imagen} source={require('../../resources/images/programa.jpeg')}/>
        <Text style={styles.subTitulo}>FIESTA DEL CHAMAMÉ</Text>
        <Text style={styles.texto}>La Fiesta del Chamamé se celebra en la ciudad de Corrientes, Argentina, específicamente en el Anfiteatro Cocomarola y en el Puente Pexoa, donde cada año durante varios días del mes de enero, suena y se baila el chamamé, un género musical de origen folclórico
        característico de la región oriental de Argentina, el Paraguay, Río Grande del Sur y algunos pueblos de sur de Brasil, y Uruguay.</Text>
        <Text style={styles.subTitulo}>CHAMAMÉ</Text>
        <Text style={styles.texto}>Acerca del origen del nombre &quot;chamamé&quot;: La acepción más equilibrada contempla la propia de “baile que se improvisa” o “espontáneo” o “como nace desde adentro” o “como se siente” también aplicado por autores al baile como &quot;ritmo bailado
        de acuerdo al sentimiento que provoca la música, sin reglas estructuradas&quot;.</Text>
        <Text style={styles.subTitulo}>CHAMAMÉ SEGÚN SUS INFLUENCIAS</Text>
        <Text style={styles.texto2}>Chamamé Maceta: de pulsos y ritmos vivos, habituales en los grupos que tocan en festivales, bailes y &quot;boliches&quot;.</Text>
        <Text style={styles.texto2}>Chamamé Cangüí (triste): se caracteriza por su tónica lenta y sentimental.</Text>
        <Text style={styles.texto2}>Chamamé Orillero: en el que se notan muchas influencias del tango.</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  titulo: {
    color: '#6ABB3A',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 5,
  },
  subTitulo: {
    color: '#6ABB3A',
    fontWeight: 'normal',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 5,
  },
  texto: {
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'normal',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'justify',
  },
  texto2: {
    marginHorizontal: 10,
    color: 'gray',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'auto',
  },
  imagen: {
    flex: 1, 
    width: Dimensions.get('window').width,
    height: 250, 
    resizeMode: 'stretch',
    marginBottom: 10,
  }
});