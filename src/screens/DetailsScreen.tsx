import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Para acceder a los parámetros de la navegación

const DetailsScreen = () => {
  const route = useRoute<any>();
  const { characterId } = route.params; // Obtener el ID del personaje

  const [characterDetails, setCharacterDetails] = useState<any>(null);

  useEffect(() => {
    // Realizar la solicitud de los detalles del personaje con el ID
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${characterId}`);
        const data = await response.json();
        setCharacterDetails(data[0]); // Suponiendo que la respuesta es un array
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacterDetails();
  }, [characterId]);

  if (!characterDetails) {
    return <Text>{' Cargando datos de: ' + characterId}</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: characterDetails.image }} style={styles.image} />
      <Text style={styles.name}>{characterDetails.character}</Text>
      <Text  style={styles.quote}>{characterDetails.quote}</Text>
      <Text>{'Dirección del personaje: '+ characterDetails.characterDirection}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5cc00', // Un color más vibrante y relacionado con el tema de los Simpsons
      borderRadius: 15, // Redondear las esquinas
      marginHorizontal: 15,
    },
    image: {
      width: 220, // Tamaño un poco mayor para darle protagonismo
      height: 220,
      borderRadius: 110, // Hacer la imagen completamente redonda
      borderWidth: 5, // Agregar un borde alrededor de la imagen
      borderColor: '#fff', // Borde blanco para resaltar
      marginBottom: 30, // Mayor espacio debajo de la imagen
      resizeMode: 'contain',
    },
    name: {
      fontSize: 28, // Tamaño de fuente más grande para el nombre
      fontWeight: 'bold',
      color: '#3a3a3a', // Un color gris oscuro para el nombre
      textAlign: 'center', // Centrado del texto
      marginBottom: 15,
      fontFamily: 'Comic Sans MS', // Fuentes más divertidas y relacionadas con el estilo del show
    },
    quote: {
      fontSize: 18,
      fontStyle: 'italic',
      color: '#333', // Un gris más oscuro para el texto de la cita
      textAlign: 'center',
    },
  });
  

export default DetailsScreen;
