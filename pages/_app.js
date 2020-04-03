import App from 'next/app';
import firebase, { FirebaseContex } from '../Firebase';

const MyApp = props => {

  const { Component, pageProps } = props
  
  return(
    <FirebaseContex.Provider
      value={{
        firebase
      }}
    >
      
      <Component { ...pageProps } />

    </FirebaseContex.Provider>
  )
};

export default MyApp;