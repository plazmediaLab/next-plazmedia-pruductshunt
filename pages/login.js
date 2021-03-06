import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Router from 'next/router';
// Validations
import useValidation from '../hooks/useValidation';
import validateLogin from '../validations/validateLogin';
// Components 
import { 
  ErrorMsn,
  Container 
} from '../components/ui/FormStyledComponent';
// Firebase
import firebase from '../Firebase';

const Login = () => {

  // local STATE 
  const INITIAL_STATE = {
    email: '',
    pass: '',
  };
  const [error, setError] = useState(false);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useValidation(INITIAL_STATE, validateLogin, Login);

  const { email, pass } = values;

  async function Login(){
    try {
      
      const user = await firebase.Login(email, pass);
      console.log(user);
      Router.push('/');

    } catch (error) {
      
      setError(error.message);

    }
  }
  
  return (  
    <div>

      <Layout>

        <Container className="container">

          { error && <ErrorMsn msn_arg={error} type_arg='msn-s-cancel' /> }
          
          <div className="col-row jc-center">
            <div className="col-7">
              <div className="card br-lg">
                <div className="card-head txt-a-c">
                  <h2><i className="a-plaz-astronaut"></i> Login</h2>
                </div>
                <div className="card-body">
                  <form
                    onSubmit={handleSubmit}
                  >

                    <div className="form-item">
                      <label htmlFor="email">E-mail:</label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Write your E-mail"
                        className="input-100 br-m"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="icon-input">
                        <i className="a-emoji_food_beverage"></i>
                      </div>
                    </div>

                    { errors.email && <ErrorMsn msn_arg={errors.email} /> }

                    <div className="form-item">
                      <label htmlFor="pass">Password:</label>
                      <input 
                        type="password"
                        id="pass"
                        name="pass"
                        placeholder="Write your password"
                        className="input-100 br-m"
                        value={pass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="icon-input">
                        <i className="a-vpn_key"></i>
                      </div>
                    </div>

                    { errors.pass && <ErrorMsn msn_arg={errors.pass} /> }

                    <hr/>
                    <div className="jc-end">
                      <button type="submit" className="btn btn-interactive btn-blue br-m">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </Container>

      </Layout>

    </div>
  );
};

export default Login