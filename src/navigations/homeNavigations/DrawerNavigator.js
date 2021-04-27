
import React from 'react';
import { View } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../../constants/routName';

const DrawerNavigator = () => {
    const DrawerStrack = createDrawerNavigator();
    return (
    <DrawerStrack.Navigator>
        <DrawerStrack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </DrawerStrack.Navigator>
       
    );
}

export default DrawerNavigator;