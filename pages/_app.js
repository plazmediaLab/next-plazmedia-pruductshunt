import App from 'next/app';
import firebase, { FirebaseContex } from '../Firebase';
// Hooks
import useAutentication from '../hooks/useAutentication';

const MyApp = props => {

  const userInfo = useAutentication();
  const { Component, pageProps } = props
  
  return(
    <FirebaseContex.Provider
      value={{
        firebase,
        userInfo
      }}
    >
      
      <Component { ...pageProps } />

    </FirebaseContex.Provider>
  )
};

export default MyApp;