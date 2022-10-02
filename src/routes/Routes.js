import * as React from 'react';
import { Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Singin from '../pages/SignIn';
import { StatusBar } from 'expo-status-bar';
import Register from '../pages/Register';
import Home from '../pages/Home';
import WaitConfirm from '../pages/waitConfirm';
import InfoForgot from '../pages/InfoForgot';
import ForgotAcsses from '../pages/ForgotAcsses';
import SplashForgot from '../pages/SplashForgotAsses'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../pages/Settings';
// Familia de icones da lib vector icons
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Splash from '../pages/Splash';
import CamScreen from '../pages/CamScreen';
import Earth from '../pages/InPlanets/earth';
import Mars from '../pages/InPlanets/mars';
import Neptune from '../pages/InPlanets/neptune';
import EarthGame from '../pages/GameScreens/earthGame';
import MarsGame from '../pages/GameScreens/marsGame';
import DailyGoal from '../pages/DailyGoal';
import Search from '../pages/Search';

// tipos de navigations
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const plataforma = Platform.OS
//minha navegacao por tabs
// consigo receber as props, se eu chamar e passar elas

const jsonStyleAndroid = {
  backgroundColor: '#202020',
  borderTopWidth: 0,
  borderRadius: 10,
  position: 'absolute',
  left: 10,
  right: 10,
  bottom:'3%',
  height:50
}

const jsonStyleIos = {
  backgroundColor: '#202020',
  borderTopWidth: 0,
  borderRadius: 10,
  position: 'absolute',
  left: 10,
  right: 10,
  bottom:15,
  height: 50,
}

function TabNav(props) {
  
 
  return (
    
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: plataforma == 'ios' ? jsonStyleIos.backgroundColor :jsonStyleAndroid.backgroundColor,
          borderTopWidth: plataforma == 'ios' ? jsonStyleIos.borderTopWidth :jsonStyleAndroid.borderTopWidth,
          borderRadius: plataforma == 'ios' ? jsonStyleIos.borderRadius :jsonStyleAndroid.borderRadius,
          position: plataforma == 'ios' ? jsonStyleIos.position :jsonStyleAndroid.position,
          left: plataforma == 'ios' ? jsonStyleIos.left :jsonStyleAndroid.left,
          right: plataforma == 'ios' ? jsonStyleIos.right :jsonStyleAndroid.right,
          bottom:plataforma == 'ios' ? jsonStyleIos.bottom :jsonStyleAndroid.bottom,
          height: plataforma == 'ios' ? jsonStyleIos.height :jsonStyleAndroid.height
        },
        tabBarIconStyle: {
          top: plataforma == 'ios' ? jsonStyleIos.top :jsonStyleAndroid.top
        }
      }}
    >
      {/*Aqui passo minhas props para o componente home no initialParams*/}
      <Tab.Screen name="Home" component={PlanetsNav}
        options={{
          headerShown: false,
          // Configuração dos icones que aparecem na tabBar
          tabBarIcon: ({ color, size, focused }) => {
           return focused ? <Image source={require('../pages/assets/iconMain.png')}/> : <Image source={require('../pages/assets/iconMainFocused.png')}/>
          }
        }} />

      <Tab.Screen name="Settings" component={SettingsNav} initialParams={{user:props.route.params?.user}}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
           return focused ? <Image source={require('../pages/assets/iconProfile.png')}/> : <Image source={require('../pages/assets/iconProfileFocused.png')}/>
          }
        }} />

      
    </Tab.Navigator>
    
  );
}


// stack navigator para a aba de configurações
function SettingsNav(props) {
 
  return (
  <Stack.Navigator>
    <Stack.Screen name="SettingsScreen" initialParams={{user:props.route.params?.user}} component={Settings} options={{headerShown: false}} />
    <Stack.Screen name="CamScreen" component={CamScreen} options={{headerShown: false}} />
  </Stack.Navigator>
    
  );
}

// stack navigator para a aba de configurações
function PlanetsNav(props) {
 
  return (
  <Stack.Navigator>
    
    <Stack.Screen name="Earth" initialParams={{planet: 'Mars'}} component={Earth} options={{headerShown: false}} />
    <Stack.Screen name="Mars" component={Mars} options={{headerShown: false}} />
    <Stack.Screen name="Neptune" component={Neptune} options={{headerShown: false}} />
    <Stack.Screen name="EarthGame" component={EarthGame} options={{headerShown: false}} />
    <Stack.Screen name="MarsGame" component={MarsGame} options={{headerShown: false}} />
  </Stack.Navigator>
    
  );
}

function Routes() {
  // Aqui esta a navegacao estatica 
  return (
      <Stack.Navigator>
        <Stack.Screen name="Splash" initialParams={{screen:'Welcome'}} component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="WaitConfirm" component={WaitConfirm} options={{headerShown: false}} />
        <Stack.Screen name="Singin" component={Singin} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="Search" initialParams={{screen:'Welcome'}} component={Search} options={{headerShown: false}} />
        <Stack.Screen name="DailyGoal" initialParams={{screen:'Welcome'}} component={DailyGoal} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={TabNav} options={{headerShown: false}} />
        <Stack.Screen name="ForgotAcsses" component={ForgotAcsses} options={{headerShown: false}} />
        <Stack.Screen name="InfoForgot" component={InfoForgot} options={{headerShown: false}} />
        <Stack.Screen name="SplashForgot" initialParams={{screen:'InfoForgot'}} component={SplashForgot} options={{headerShown: false}} />
      </Stack.Navigator>
  );
}

export default Routes;