import React from 'react';
import { View, BackHandler, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, Alert, Dimensions,Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressBar from '../../components/ProgressBar';

// import sendEmail from '../../services/sendEmail';

const Perfil = (props) => {

    const navegar = useNavigation();
    const axios = require('axios');

    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [email, setEmail] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [password, setPassword] = useState(null);
    const [imagePerfil, setImagePerfil] = useState(null)
    const size = Dimensions.get('window').height
    const userObj = props.route.params?.user ? JSON.parse(props.route.params?.user) : undefined;
    



    // Vai pegar todas as informacoes do user antes de renderizar o componente
    useEffect(() => {
        if (userObj!=null && userObj!=undefined) {
            
        axios.get('https://app-tc.herokuapp.com/getAluno/'+userObj.email+'/'+userObj.password).then(res =>{
           
            setNome(res.data[0].nome)
            setIdade(res.data[0].idade)
            setEmail(res.data[0].email)
            setUsuario(res.data[0].nickName)
            setPassword(res.data[0].senha)
        }).catch(err =>{Alert.alert("Ocorreu um problema ao buscar seus dados...")})
    }else{
    AsyncStorage.getItem('@User').then((res) => { 
        const info = JSON.parse(res);
        axios.get('https://app-tc.herokuapp.com/getAluno/'+info.email+'/'+info.password).then(res =>{
           
            setNome(res.data[0].nome)
            setIdade(res.data[0].idade)
            setEmail(res.data[0].email)
            setUsuario(res.data[0].nickName)
            setPassword(res.data[0].senha)
        }).catch(err =>{Alert.alert("Ocorreu um problema ao buscar seus dados...")})
     })
    }
    AsyncStorage.getItem('@Image').then((res) => { 
        const info = JSON.parse(res);
        setImagePerfil(info.img)
        
     })
}, []);

    
    const logout = () => {
    navegar.dispatch(StackActions.replace('Splash'))
    AsyncStorage.clear();
    }


    return (

        <View style={styles.container}>
             <Image style={{position:'absolute',width:'100%'}} source={require('../assets/backgroundBi.png')}/>

            <Animatable.View animation="fadeInUp" style={styles.container}>

                <View style={styles.containerInfos}>
                    <View>
                        <TouchableOpacity style={{ top: size * -0.23, borderRadius: 3,justifyContent:'center',alignItems:'center' }} onPress={() => navegar.navigate('CamScreen')}>
                            {imagePerfil != null? <Image style={{width:150,height:150,borderRadius:30}} source={{uri:imagePerfil}}/>:<FontAwesome5 name="user" size={100} color="#848484" />}
                        </TouchableOpacity>
                        <Text style={styles.title}>Hellou, {usuario}!</Text>
                        <View style={styles.progressView}></View>
                        <View style={{bottom:'20%'}}>
                        <Text style={styles.titleProgress}>Progresso</Text>
                        <TouchableOpacity style={{bottom:10}} onPress={() => {navegar.navigate('SettingsScreen')}}>
                            <FontAwesome5 name="cog" style={styles.titleSetting} size={29} color="#848484" />
                        </TouchableOpacity>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} style={{bottom:150,height:'50%'}}>
                            <View style={styles.card}>
                                <Image style={{top:'23%'}} source={require('../assets/smallEarth.png')}/>
                                <Text style={styles.titleCard}>Course A1</Text>
                                <Text style={styles.numberData}>0%</Text>
                                <ProgressBar data={70}/>
                            </View>
                            <View style={styles.card}>
                                <Image style={{top:'25%',left:10}} source={require('../assets/smallMars.png')}/>
                                <Text style={styles.titleCard}>Course A2</Text>
                                <Text style={styles.numberData}>0%</Text>
                                <ProgressBar data={35}/>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Animatable.View>





        </View>
    );
}


export default Perfil;