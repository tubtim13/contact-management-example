
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../../constants/routName';
import Login from '../../screens/Login/index'
import Register from '../../screens/Register';

export default function AutheNavigator() {
    const AuthStrack = createStackNavigator();
    return (
    <AuthStrack.Navigator>
        <AuthStrack.Screen name={LOGIN} component={Login} />
        <AuthStrack.Screen name={REGISTER} component={Register } />
    </AuthStrack.Navigator>
       
    );
}

// export default AutheNavigator();