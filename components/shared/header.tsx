import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerParamList} from '../../common/interfaces';
import {viewheight, viewwidth} from '../../common/HelperFunctions';

type NavigationProp = DrawerNavigationProp<DrawerParamList>;

const HeaderComponent = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.iconContainer}>
        <Image
          source={require('../../assets/menu_icon.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.text}>Profile Name</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Notifications')}
        style={styles.iconContainer}>
        <Image
          source={require('../../assets/notifications_icon.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: viewheight(5),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  iconContainer: {
    height: '100%',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
});

export default HeaderComponent;
