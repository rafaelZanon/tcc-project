import React,{ useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert,TextInput, ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CheckBox from 'react-native-custom-checkbox';
import { useNavigation } from '@react-navigation/native';
import styles from './style';



const Singin = () => {
    const axios = require('axios');
    const navegar = useNavigation();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState();
    const [invisible, setVisible] = useState(false);
    // estado para quando apertado o botao de loading tenha um loading
    const [loading, setLoading] = useState([{
        loadingLogin: false
      }])

    

    async function singUser(){
        // aqui tenho minha função de logar
        setLoading({loadingLogin:true})
        await axios.get('http://192.168.1.105:3000/getAluno/'+email+'/'+password).then(res =>{
                navegar.navigate('Home',{nome:email})
                setLoading({loadingLogin:false})
            }).catch(err =>{Alert.alert("Email ou senha incorretos!!") 
            setLoading({loadingLogin:false})})
       
    }

    return (
        <View style={styles.container}>
           <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
               <Text style={styles.message}>Bem vindo(a)</Text>
            </Animatable.View> 

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
               <Text style={styles.title}>Email</Text>
               <TextInput
               placeholder='Digite seu Email..'
               value={email}
               style={styles.input}
               onChangeText = {text => setEmail(text)}
               />
                

                <Text style={styles.title}>Senha</Text>
               <TextInput
               passwordRules='number'
               placeholder='Sua senha...'
               value={password}
               style={styles.input}
               onChangeText = {text => setPassword(text)}
               secureTextEntry = {!invisible}
               />

            <Animatable.View animation="fadeIn" delay={500} style={styles.textVisible}>
            <Text style={styles.textVisible} >Deixar senha vísivel </Text>
                        <CheckBox name = 'checkbox' checked={invisible} 
                        size = {17} style={styles.CheckBox} onChange = {() => {setVisible(!invisible)}}/>
            </Animatable.View> 
                        
               

                    <TouchableOpacity onPress={() => {singUser()}} style={styles.button}>
                                {loading.loadingLogin ? <ActivityIndicator size={"small"} color ={"white"}/> :<Text style={styles.buttonText}>Acessar</Text>}
                    </TouchableOpacity>
            
               <TouchableOpacity style={styles.buttonRegister} onPress={()=>{navegar.navigate('Register')}}>
                    <Text style={styles.registerText}>Não possui acesso? Registre - se</Text>
               </TouchableOpacity>

            </Animatable.View> 

        </View>
    );
}



export default Singin;
