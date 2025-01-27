import React from 'react';
import { View, BackHandler, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, Alert, Dimensions,Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome4Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressBar from '../../components/ProgressBar';
import Tryhard from '../../components/TryHard';
// import sendEmail from '../../services/sendEmail';

const Perfil = (props) => {

    const navegar = useNavigation();
    const axios = require('axios');

    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [email, setEmail] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [password, setPassword] = useState(null);
    const [progress, setProgress] = useState(0);
    const [progressMars, setProgressMars] = useState(0);
    const [imagePerfil, setImagePerfil] = useState(null)
    const [startedNow, setStartedNow] = useState(false);
    const size = Dimensions.get('window').height
    const userObj = props.route.params?.user ? JSON.parse(props.route.params?.user) : undefined;
    const [vetorWins,setVetorWins] = useState([]);

    const attData = () => {
        axios.get("https://app-tc.herokuapp.com/getProgress/"+email+"/earth").then((res) => {
            const data = res.data;
           setProgress(data[0].progresso);
           })
           .catch((err) => {});

           axios.get("https://app-tc.herokuapp.com/getProgress/"+email+"/mars").then((res) => {
            const data = res.data;
           setProgressMars(data[0].progresso);
           })
           .catch((err) => {});
           AsyncStorage.getItem('@Tryhard').then((res) => { 
            try{
                const data = JSON.parse(res);
                setVetorWins(data.vitory);
            }catch(e){}
         })
    };


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
        try {
            const info = JSON.parse(res);
        setImagePerfil(info.img)
        }catch(error){} 
        
     })

     AsyncStorage.getItem('@state').then((e) => {
        try{
            const data = JSON.parse(e);
        setStartedNow(data.startedNow!=null?data.startedNow:false);
        }catch(e){}
      });  

      AsyncStorage.getItem('@Tryhard').then((res) => { 
        try{
            const data = JSON.parse(res);
            setVetorWins(data.vitory);
        }catch(e){}
     })
     
}, []);

            axios.get("https://app-tc.herokuapp.com/getProgress/"+email+"/earth").then((res) => {
            const data = res.data;
           setProgress(data[0].progresso);
           })
           .catch((err) => {});

           axios.get("https://app-tc.herokuapp.com/getProgress/"+email+"/mars").then((res) => {
            const data = res.data;
           setProgressMars(data[0].progresso);
           })
           .catch((err) => {});
        

    


    return (

        <View style={styles.container}>
             <Image style={{position:'absolute',width:'100%'}} source={require('../assets/backgroundBi.png')}/>

           {
            !startedNow ?
            
           <Animatable.View animation="fadeInUp" style={styles.container}>
                <View style={styles.containerInfos}>
                    <View>
                        <TouchableOpacity style={{ top: size * -0.23, borderRadius: 3,justifyContent:'center',alignItems:'center' }} onPress={() => navegar.navigate('CamScreen')}>
                            {imagePerfil != null? <Image style={{width:150,height:150,borderRadius:300,borderColor:'#3841F2',borderWidth:2}} source={{uri:imagePerfil}}/>:<Image style={{width:150,height:150,borderRadius:30}} source={require('../assets/defaultImage.png')}/>}
                        </TouchableOpacity>
                        <Text style={styles.title}>Hellou, {usuario}!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.progressView}>
                            {vetorWins.flatMap(element => {
                                return <Tryhard key={`${element}`} text={`${element}`}/> 
                            })
                            }
                        </ScrollView>
                        <View style={{bottom:'20%'}}>
                        <Text style={styles.titleProgress}>Progresso</Text>
                        <TouchableOpacity style={{bottom:10}} onPress={() => {navegar.navigate('Settings')}}>
                            <FontAwesome5 name="cog" style={styles.titleSetting} size={29} color="#848484" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={e=>attData()}>
                        <Text style={styles.titleSetting}>Atualizar dados</Text>
                        </TouchableOpacity>
                        
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} style={{bottom:150,height:'50%'}}>
                            <View style={styles.card}>
                                <Image style={{top:'23%'}} source={require('../assets/smallEarth.png')}/>
                                <Text style={styles.titleCard}>Course A1</Text>
                                <Text style={styles.numberData}>{progress}%</Text>
                                <ProgressBar data={progress}/>
                            </View>
                            <View style={styles.card}>
                                <Image style={{top:'25%',left:10}} source={require('../assets/smallMars.png')}/>
                                <Text style={styles.titleCard}>Course A2</Text>
                                <Text style={styles.numberData}>{progressMars}%</Text>
                                <ProgressBar data={progressMars}/>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Animatable.View>:

            // quando ele estiver em estado nao logado
            <Animatable.View animation="fadeInUp" style={styles.container}>
            <View style={styles.containerInfos}>
                <View>
                <TouchableOpacity style={{ top: size * -0.23, borderRadius: 3,justifyContent:'center',alignItems:'center' }} onPress={() => navegar.navigate('CamScreen')}>
                            {imagePerfil != null? <Image style={{width:150,height:150,borderRadius:300,borderColor:'#3841F2',borderWidth:2}} source={{uri:imagePerfil}}/>:<Image style={{width:150,height:150,borderRadius:30}} source={require('../assets/defaultImage.png')}/>}
                        </TouchableOpacity>
                    
                    <View style={styles.description}>
                        <Text style={{fontSize:20}}>Gostou da plataforma? Realize o login!</Text>
                        <TouchableOpacity style={styles.button2} onPress={()=>{navegar.dispatch(StackActions.replace('Singin')); AsyncStorage.clear();}}>
                        <Text style={{color:'#FFF',fontSize:30}}> Fazer o login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Animatable.View>}
        </View>
    );
}


export default Perfil;
