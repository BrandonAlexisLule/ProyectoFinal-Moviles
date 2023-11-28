import React from 'react'
import { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    Pressable
} from 'react-native'
import Header from './components/Header'

const FormularioRegistro = () => {
    const [nombreCompleto, setNombreCompleto] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [carrera, setCarrera] = useState('')
    const [semestre, setSemestre] = useState('')
    const [correo, setCorreo] = useState('')
    const [laboratorio, setLaboratorio] = useState('')
    
    {/**REGISTRO DE DATOS PARA REGISTRAR ASISTENCIA. */}
    return (
        <View style={estilos.principal}>
            <Header />
            <ScrollView>
                <View>
                    <Text style={estilos.textoLlenarCampos}>¡Favor de llenar los siguientes campos para tener acceso al laboratorio!</Text>
                </View>
                <View>
                    <Text style={estilos.label}>Nombre completo *</Text>
                    <TextInput 
                        style={estilos.input}
                        placeholder="Escriba su nombre completo."
                        placeholderTextColor={'#00b4d8'}
                        value={nombreCompleto}
                        onChangeText={setNombreCompleto} />
                </View>
                <View>
                    <Text style={estilos.label}>Apellido paterno y materno *</Text>
                    <TextInput 
                        style={estilos.input}
                        placeholder="Apellido materno en caso de existir."
                        placeholderTextColor={'#00b4d8'}
                        value={apellidos}
                        onChangeText={setApellidos} />
                </View>
                <View>
                    {/**AGREGAR UNA LISTA DE CARRERAS CON EL PICKER OBJECT */}
                    <Text style={estilos.label}>Carrera *</Text>
                    <TextInput 
                        style={estilos.input}
                        placeholder="Escriba su carrera que está cursando."
                        placeholderTextColor={'#00b4d8'}
                        value={carrera}
                        onChangeText={setCarrera} />
                </View>
                <View>
                    <Text style={estilos.label}>Semestre *</Text>
                    <TextInput 
                        style={estilos.input}
                        placeholder="Número de semestre actual."
                        placeholderTextColor={'#00b4d8'}
                        keyboardType='numeric'
                        value={semestre}
                        onChangeText={setSemestre} />
                </View>
                <View>
                    <Text style={estilos.label}>Matrícula *</Text>
                    <TextInput 
                        style={estilos.input}
                        placeholder="Escriba su matrícula de estudiante del ITE."
                        placeholderTextColor={'#00b4d8'}
                        keyboardType='email-address'
                        value={correo}
                        onChangeText={setCorreo} />
                </View>
                <View>
                    <Text style={estilos.label}>Selecciona un laboratorio *</Text>                    
                    <Picker
                        style={estilos.seleccionar_laboratorios}
                        selectedValue={laboratorio}
                        onValueChange={(valor)=>{
                        setLaboratorio(valor) }}>
                        <Picker.Item color={'#00b4d8'} label="Selecciona un laboratorio para acceder" value={''}></Picker.Item>
                        <Picker.Item color={'#00b4d8'}  label="Laboratorio de Cómputo LC1" value={'lc1'}></Picker.Item>
                        <Picker.Item color={'#00b4d8'}  label="Laboratorio de Cómputo LC2" value={'lc2'}></Picker.Item>
                        <Picker.Item color={'#00b4d8'}  label="Laboratorio de Cómputo LC3" value={'lc3'}></Picker.Item>
                        <Picker.Item color={'#00b4d8'}  label="Laboratorio de Cómputo LC4" value={'lc4'}></Picker.Item>
                        <Picker.Item color={'#00b4d8'}  label="Laboratorio de Cómputo LC5" value={'lc5'}></Picker.Item>
                        <Picker.Item color={'#00b4d8'}  label="Laboratorio de Cómputo LC6" value={'lc6'}></Picker.Item>
                    </Picker>
                </View>



                <View>
                    <Pressable
                        style={estilos.botonHacerCuenta}>
                        <Text style={estilos.textoHacerCuenta}>Ingresar al laboratorio</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

{/**Creación de los estilos de la aplicación */}
const estilos = StyleSheet.create({
    principal:{
        flex: 1,
    },
    seleccionar_laboratorios:{
        padding: 8,
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: '#caf0f8',
        fontSize: 18,
        borderRadius: 10,
    },
    textoLlenarCampos: {
        backgroundColor: '#00b4d8',
        padding: 5,
        margin: 20,
        borderRadius: 10,
        color: '#ffffff',
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 25,
        marginVertical: 39,
    },
    label:{
        flexDirection: 'column',   
        marginHorizontal: 30,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: -10,
        color: '#0077b6'
    },
    input: {
        padding: 8,
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: '#caf0f8',
        fontWeight: 'bold',
        fontSize: 18,
        borderRadius: 10,
    },
    botonHacerCuenta: {
        marginVertical: 30,
        marginHorizontal: 20, 
        backgroundColor: '#03045e',
        borderRadius: 10,
    },
    textoHacerCuenta:{
        padding: 15,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold'
    },
})

export default FormularioRegistro