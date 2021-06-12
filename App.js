import AppNavContainer from './src/navigations';
import React from 'react';
import 'react-native-gesture-handler';
import GlobalProvider from './src/contaxt/Provider';

const App = () => {
  return ( 
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
    
  );
}

export default App;

