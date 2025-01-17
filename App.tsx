import React, {useEffect} from 'react';
import {Alert, StyleSheet, useColorScheme} from 'react-native';

import messaging from '@react-native-firebase/messaging';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootParamList} from './common/interfaces';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import Notifications from './components/notifications/notifications';
import Profile from './components/profile/profile';
import firebase from '@react-native-firebase/app';
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const MainStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="View Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Logout"
        component={Login}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

function App(): React.JSX.Element {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'A new FCM message arrived!',
        JSON.stringify(remoteMessage.notification?.body),
      );
    });
    return unsubscribe;
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator<RootParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
