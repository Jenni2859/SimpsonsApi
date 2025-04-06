import React, { useEffect, useState } from 'react'
import { Character } from '../types/character'
import api from '../api/api'
import { ScrollView, Text } from 'react-native-gesture-handler'
import global from '../styles/global'
import CharacterCard from '../components/CharacterCard'

const HomeScreen = ({route}:any) => {

    const [characters, setCharacters] = useState<Character[]>([]);

    //const {user} = route.params; // Usuario que viene desde el login

    useEffect(() =>{
        const fetchCharacter=async() =>{
            try{
                // Ruta que nos dará los personajes, se necesita el count 
                const response = await api.get('/quotes?count=5');

                //Mapeamos la respuesta para crearle un ID 
                const characterWithId = response.data.map((char: any, index:number) =>({
                    id: index + 1,
                    ...char,
                }));

                setCharacters(characterWithId);
                console.log(characterWithId);

            }
            catch(error){
                console.log(error);

            }
        }
        fetchCharacter();
    },[])


  return (
    
    <ScrollView style={{backgroundColor:"#00aaff"}}>
        <Text style={global.title}> Personajes de Simpsons </Text>

        {characters.map((char)=>(

            <CharacterCard key={char.id} character={char}/>

        ))}
    </ScrollView>
  )
}

export default HomeScreen
