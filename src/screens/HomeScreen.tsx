import React, { useEffect, useState } from 'react'
import { Character } from '../types/character'
import api from '../api/api'
import { ScrollView, Text } from 'react-native-gesture-handler'
import global from '../styles/global'
import CharacterCard from '../components/CharacterCard'

const HomeScreen = () => {

    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() =>{
        const fetchCharacter=async() =>{
            const response = await api.get('/character');
            setCharacters(response.data.results);
        }
        fetchCharacter();
    },[])


  return (
    <ScrollView>
        <Text style={global.title}> Personajes de Simpsons </Text>

        {characters.map((char, index)=>(

            <CharacterCard key={index} character={{...char, id:index}}/>

        ))}
    </ScrollView>
  )
}

export default HomeScreen
