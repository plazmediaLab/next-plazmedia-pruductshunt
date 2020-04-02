import { useState, useEffect } from 'react';

const useValidation = (initialState_arg, validate_arg, func_arg) => {

  // Local STATE
  const [values, setValues] = useState(initialState_arg);
  const [errors, setErrors] = useState({});
  const [submitform, setSubmitForm] = useState(false);

  // useEffect
  useEffect(() => {
    if(submitform){
      const noErrors = Object.keys(errors).length === 0;

      if(noErrors){
        func_arg(); // Launch in component
      }
      setSubmitForm(false);
      
    };
  }, [errors]);

  // Handle changes that user insert
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  // Handle submit forms
  const handleSubmit = e => {
    e.preventDefault();
    
    const validationErrors = validate_arg(values)
    setErrors(validationErrors);
    setSubmitForm(true);
  } 

  // On evet Blur of the fields
  const handleBlur = () => {
    const validationErrors = validate_arg(values)
    setErrors(validationErrors);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  };
};

export default useValidation;