
import React from 'react';
import { View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../../constants/routName';

const Login = () => {
    return(
        <View>
            <Text>Hi from contacts</Text>
        </View>
    );
}

const SignUp = () => {
    return(
        <View>
            <Text>Hi from contactDetail</Text>
        </View>
    );
}



export default function AutheNavigator() {
    const AuthStrack = createStackNavigator();
    return (
    <AuthStrack.Navigator>
        <AuthStrack.Screen name={LOGIN} component={Login} />
        <AuthStrack.Screen name={REGISTER} component={SignUp } />
    </AuthStrack.Navigator>
       
    );
}

// export default AutheNavigator();