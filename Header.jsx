import React from 'react'
import { 
    SafeAreaView, 
    StyleSheet, 
    View, 
    Text } from 'react-native'

const Header = () => {
    return (
        <SafeAreaView>
            <View style={estilos.contenedorTextoITE}>
                <Text style={estilos.textoTecnm}>Tecnológico Nacional de México</Text>
                <Text style={estilos.textoIte}>Campus Ensenada</Text>
            </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    contenedorTextoITE:{
        backgroundColor: '#03045e',
    }, 
    textoTecnm:{
        padding: 25, 
        color: '#fff',
        textAlign: 'center',
        fontSize: 30
    },
    textoIte: {
        paddingLeft: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom: 5
    },
})

export default Header