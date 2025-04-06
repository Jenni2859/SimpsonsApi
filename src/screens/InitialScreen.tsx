import React from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const InitialScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://eloutput.com/wp-content/uploads/2022/01/todo-sobre-simpson.jpg' }} // Imagen de fondo estilo Simpsons
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenidos al Multiverso de los Simpsons</Text>
        <Text style={styles.subtitle}>Explora los personajes y citas divertidas</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400, 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700', 
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Comic Sans MS', 
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Comic Sans MS', 
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: '#FFD700', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default InitialScreen;
