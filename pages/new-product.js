// Componentes
import React, { useState, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Router from 'next/router';
// Validations
import useValidation from '../hooks/useValidation';
import validateLogin from '../validations/validateLogin';
// Components 
import { 
  ErrorMsn,
  Legend,
  Textarea,
  Container 
} from '../components/ui/FormStyledComponent';
// Firebase
import firebase from '../Firebase';

const Login = () => {

  // Refs
  const uploadFile = useRef(null);
  
  function MaCustomUploadFile(ref_arg){
    const inputFileItem = uploadFile.current;
    const inputFile = inputFileItem.querySelector('input');
    const descriptionFile = inputFileItem.querySelector('p');
    const btnUpload = inputFileItem.querySelector('label.btn');

    let iChild = document.createElement('i');
    
    inputFile.addEventListener('change', () => {
      descriptionFile.textContent = inputFile.value;
      descriptionFile.classList.add('fill');
      btnUpload.textContent = '';
      iChild.classList.add('a-check1');
      btnUpload.appendChild(iChild)
      console.log(descriptionFile.classList);
    });
  }// TODO · Agregar la funcion a la librería 04/04/2020 

  // local STATE 
  const INITIAL_STATE = {
    productName: '',
    company: '',
    image: '',
    url: '',
    description: '',
  };
  const [error, setError] = useState(false);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useValidation(INITIAL_STATE, validateLogin, Login);

  // Destructuring
  const { productName, company, image, url, description } = values;

  const { email, pass } = values;return (  
    <div>

      <Layout>

        <Container className="container">

          { error && <ErrorMsn msn_arg={error} type_arg='msn-s-cancel' /> }
          
          <div className="col-row jc-center">
            <div className="col-10">
              
              <fieldset className="br-lg">

                <Legend>General information</Legend>
                
                <form
                  onSubmit={handleSubmit}
                >

                  <div className="form-item row">
                    <label htmlFor="productName">Product name:</label>
                    <input 
                      type="text"
                      id="productName"
                      name="productName"
                      placeholder="Write the product name"
                      className="input-100 br-m"
                      value={productName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="icon-input">
                      <i className="a-emoji_food_beverage"></i>
                    </div>
                  </div>

                  { errors.productName && <ErrorMsn msn_arg={errors.productName} /> }

                  <div className="form-item row">
                    <label htmlFor="company">Company:</label>
                    <input 
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Write the company name"
                      className="input-100 br-m"
                      value={company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="icon-input">
                      <i className="a-vpn_key"></i>
                    </div>
                  </div>

                  { errors.company && <ErrorMsn msn_arg={errors.company} /> }

                  <div className="form-item row">
                    <label htmlFor="image">Image:</label>
                    <div 
                      className="custom-file br-m"
                      ref={uploadFile}
                    >
                      <input
                        type="file"
                        id="image"
                        name="image"
                        value={image}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <p>No file selected...</p>
                      <label
                        onClick={() => MaCustomUploadFile(uploadFile)}
                        htmlFor="image"
                        className="btn"
                      >
                        <i className="a-upload"></i>&nbsp;
                        Browser...
                      </label>
                    </div>
                  </div>

                  { errors.company && <ErrorMsn msn_arg={errors.company} /> }

                  <div className="form-item row">
                    <label htmlFor="url">URL:</label>
                    <input 
                      type="url"
                      id="url"
                      name="url"
                      className="input-100 br-m"
                      value={url}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  { errors.url && <ErrorMsn msn_arg={errors.url} /> }

                </form>

              </fieldset>

              <fieldset className="mt-3 br-lg">

                <Legend>About your product</Legend>

                <div className="form-item row ai-start">
                  <label htmlFor="description">Description:</label>
                  <Textarea 
                    id="description"
                    name="description"
                    className="input-100 br-m" 
                    value={description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                { errors.description && <ErrorMsn msn_arg={errors.description} /> }

              </fieldset>

              <div className="jc-end mt-3">
                <button type="submit" className="btn btn-interactive btn-tangerine br-m">
                  Create product
                </button>
              </div>

            </div>
          </div>

        </Container>

      </Layout>

    </div>
  );
};

export default Login