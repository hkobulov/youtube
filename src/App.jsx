import React from 'react';
import './App.scss';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import {Context as AuthContext} from './Context/AuthContext';

function App() {
  const {token} = React.useContext(AuthContext)

 if(token) {
   return <AuthenticatedApp />
 } else {
   return <UnauthenticatedApp/>
 }
}

export default App;
