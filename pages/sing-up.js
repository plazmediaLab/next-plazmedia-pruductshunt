import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Router from 'next/router';
// Validations
import useValidation from '../hooks/useValidation';
import validateSingUP from '../validations/validateSingUP';
// Components 
import { ErrorMsn } from '../components/ui/FormStyledComponent';
// Firebase
import firebase from '../Firebase';

const SingUp = () => { 

  // local STATE 
  const INITIAL_STATE = {
    name: '',
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
  } = useValidation(INITIAL_STATE, validateSingUP, singUP);

  const { name, email, pass } = values;

  async function singUP(){
    
    // Create account
    try {

      await firebase.singUP( name, email, pass );
      Router.push('/');
      
    } catch (error) {

      setError(error.message);

    }

  }

  return (
    <div>

      <Layout>

        <div className="container">

          { error && <ErrorMsn msn_arg={error} type_arg='msn-s-cancel' /> }
          
          <div className="col-row jc-center pt-6">
            <div className="col-7">
              <div className="card br-lg">
                <div className="card-head txt-a-c">
                  <h2>Create account</h2>
                </div>
                <div className="card-body">
                  <form
                    onSubmit={handleSubmit}
                  >
                    <div className="form-item">
                      <label htmlFor="name">Name:</label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Write your name"
                        className="input-100 br-m"
                        value={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="icon-input">
                        <i className="a-plaz-astronaut"></i>
                      </div>
                    </div>

                    { errors.name && <ErrorMsn msn_arg={errors.name} /> }

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
                      <button type="submit" className="btn btn-interactive btn-acept br-m">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>

      </Layout>

    </div>
  )
};

export default SingUp