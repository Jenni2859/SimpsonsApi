import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}: any) => {

    //Estado para el usuario y contraseña
    const [usuario, setUsuario]=useState('');
    const [password, setPassword]=useState('');

    //Funcion para validad y redirigir
    const manejarLogin=()=>{
        //Validar campos vacios
        if(!usuario || !password){
            Alert.alert('Error','Todos los campos son obligatorios')
            return;
        }

        //Simular la autenticacion
        if(usuario==='admin' && password ==='1234'){
            navigation.navigate('Home',{user:usuario});
        }else{
            Alert.alert('Error','Credenciales incorrectas');
        }

    }


  return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Iniciar Sesión
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Usuario'
                value={usuario}
                onChangeText={setUsuario} />  
            
            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword} />
                
            <TouchableOpacity style={styles.button} onPress={manejarLogin}>
                <Text style={styles.buttonText}>¡D'oh! Ingresar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#00aaff', // Azul cielo brillante (como el cielo de Springfield)
    },
    
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#fada00', // Amarillo Simpsons
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
    
    input: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#ffcc00',
        borderRadius: 15,
        padding: 14,
        backgroundColor: '#fff',
        marginBottom: 15,
        fontSize: 18,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    
    button: {
        width: '100%',
        padding: 14,
        backgroundColor: '#fada00', // Amarillo clásico de Los Simpsons
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'sans-serif-condensed', // cambia si quieres una fuente más cómica
    },
    
    


})

export default LoginScreen
