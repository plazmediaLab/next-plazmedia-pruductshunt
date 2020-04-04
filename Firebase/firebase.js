import app from 'firebase/app';
import firebaseConfig from './config';
import  'firebase/auth';

class Firebase {
  constructor(){
    if(!app.apps.length){
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
  }

  // SingUP user: 
  async singUP(name_arg, email_arg, pass_arg){
    const newUser = await this.auth.createUserWithEmailAndPassword(email_arg, pass_arg);

    return await newUser.user.updateProfile({
      displayName: name_arg
    });
  }

  // Login user 
  async Login(email_arg, pass_arg){
    return this.auth.signInWithEmailAndPassword(email_arg, pass_arg);
  }

  // Log Out
  async LogOut(){
    await this.auth.signOut();
  }

}

const firebase = new Firebase();

export default firebase;