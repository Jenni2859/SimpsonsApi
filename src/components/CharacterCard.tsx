import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Character } from '../types/character';
import { useNavigation } from '@react-navigation/native'

interface Props {
    character:Character
}

const CharacterCard = ({character}: Props) => {
    const navigation = useNavigation<any>();
  return (
    <View style={Styles.card}>
        <Pressable onPress={() => navigation.navigate('DetailsScreen', {characterName: character.character})}>
            <Image source={{ uri: character.image}} style={Styles.image} />
        </Pressable>

        <Text style={Styles.name}> {character.character} </Text>

    </View>
  )
}

const Styles = StyleSheet.create({
    card:{
        marginBottom:10,
        padding:10,
        backgroundColor: "#c14343",
        borderRadius:10,
        margin: 20,
    },
    image:{
        width:"100%",
        height:200,
        borderRadius:10,
        objectFit:"contain",
    },
    name:{
        fontSize:18,
        fontWeight:"bold",
        marginTop:5,
        color: "#fff"

    }
})

export default CharacterCard
