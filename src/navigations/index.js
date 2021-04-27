
import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './homeNavigations/DrawerNavigator';
import AutheNavigator from './homeNavigations/AuthNavigator';

export default function AppNavContainer() {
    const isLogedIn = true;
    return (
        <NavigationContainer>
            {isLogedIn?   <DrawerNavigator/>: <AutheNavigator/> }
            {/* <DrawerNavigator/> */}
         </NavigationContainer>
         
      );
}

  
// export default AppNavContainer();