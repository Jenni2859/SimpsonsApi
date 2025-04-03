import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'; 

const DetailsScreen = () => {
  const route = useRoute<any>();
  const { characterName } = route.params; // Obtener el nombre del personaje

  const [characterDetails, setCharacterDetails] = useState<any>(null);

  useEffect(() => {
    // Realizar la solicitud de los detalles del personaje con el ID
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${characterName}`);
        const data = await response.json();
        setCharacterDetails(data[0]); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacterDetails();
  }, [characterName]);

  if (!characterDetails) {
    return <Text>{' Cargando datos de: ' + characterName}</Text>;
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
      backgroundColor: '#f5cc00', 
      borderRadius: 15, 
      marginHorizontal: 15,
    },
    image: {
      width: 220, 
      height: 220,
      borderRadius: 110, 
      borderWidth: 5, 
      borderColor: '#fff', 
      marginBottom: 30, 
      resizeMode: 'contain',
    },
    name: {
      fontSize: 28, 
      fontWeight: 'bold',
      color: '#3a3a3a', 
      textAlign: 'center', 
      marginBottom: 15,
      fontFamily: 'Comic Sans MS', 
    },
    quote: {
      fontSize: 18,
      fontStyle: 'italic',
      color: '#333', 
      textAlign: 'center',
    },
  });
  

export default DetailsScreen;
