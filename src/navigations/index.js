
import React, {useContext} from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './homeNavigations/DrawerNavigator';
import AutheNavigator from './homeNavigations/AuthNavigator';
import { GlobalContext } from '../contaxt/Provider';


const AppNavContainer = () => {
    const {authState:{isLoggedIn}} = useContext(GlobalContext);
    return (
        <NavigationContainer>
            {isLoggedIn?   <DrawerNavigator/>: <AutheNavigator/> }
         </NavigationContainer>
         
      );
}

export default AppNavContainer;
