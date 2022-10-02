import React, { useRef } from 'react';
import {View, BackHandler, Dimensions,Touchable, Pressable,Text, Button, TouchableOpacity,Image,FlatList} from 'react-native';
import LottieView from 'lottie-react-native';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';



const SelectLanguage = (props) => {

    const [alunos, setAlunos] = useState([]);
    const axios = require('axios');
    const [logado,setLogado] = useState([true]);
    const width = Dimensions.get('screen').width;
    const [test,setTest] = useState('');
    const interInPlanet = (planet) => {
       if(planet){
         navigate.navigate(planet, {planet: toString(planet)});
       } 
    }

    const navigate = useNavigation()
    const navegacaoSplash = useNavigation()
    
    const table = [
      {
        id:1,
        img:<Image source={require('../assets/bandeiraEUA.png')}/>
      },
      {
        id:2,
        img:<Image source={require('../assets/bandeiraEUA.png')}/>
      },
      {
        id:3,
        img:<Image source={require('../assets/bandeiraEUA.png')}/>
      }


    ]

    return (
        
      <View style={styles.container}>

      <Animatable.View animation="fadeInRight" delay={500} style={styles.containerHeader}>
          
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          
          <Animatable.Image
            delay={500}
            animation="flipInX"
            source={require('../assets/SaturnoBilinguo.png')}
            style={styles.containerLogo}
            resizeMode="contain"
          />
          
          <Animatable.View animation={"fadeInRight"} delay={500} style={styles.containerOptions}>
            <Text style={styles.headerText}> Qual idioma você quer aprender?</Text>
            <FlatList style={{height:350}} data={table}
            keyExtractor={(item)=>String(item.id)}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => 
              <TouchableOpacity style={styles.button}>
               {item.img}
              </TouchableOpacity>
            }/>
            {/* <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/bandeiraEUA.png')}/>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => navegacaoSplash.navigate("Splash")}  style={styles.buttonAceppt}>
              <Text style={styles.buttonText}>{<FontAwesome name="angle-right" size={30} color="#3C3C3C"/>}</Text>
            </TouchableOpacity>

          </Animatable.View>
      </Animatable.View>


  </View>  
    );
}


export default SelectLanguage;