
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTING } from '../../constants/routName';
import Contacts from '../../screens/contacts'
import ContactDetail from '../../screens/contacDetail';
import Setting from '../../screens/setting';
import CreateContact from '../../screens/createContact';

const HomeNavigator = () => {
    const HomeStrack = createStackNavigator();
    return (
    <HomeStrack.Navigator initialRouteName = {CONTACT_LIST}>
        <HomeStrack.Screen name={CONTACT_LIST} component={Contacts} />
        <HomeStrack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
        <HomeStrack.Screen name={CREATE_CONTACT} component={CreateContact} />
        <HomeStrack.Screen name={SETTING} component={Setting} />
    </HomeStrack.Navigator>
       
    );
}

export default HomeNavigator;