import React, { useEffect, useState } from 'react';
import firebase from '../Firebase';

function useAutentication(){
  const [userautentication, setUserAutentication] = useState(null);

  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged(user => {
      if(user){
        setUserAutentication(user);
      }else{
        setUserAutentication(null);
      }
    })

    return () => unsuscribe();
  }, [/* dependencia */]);

  return userautentication;
}

export default useAutentication;