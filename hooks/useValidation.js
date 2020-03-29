import React, { useState } from 'react';

const useValidation = (initialState, validate, func) => {

  // Local STATE
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitform, setSubmitForm] = useState(false);

  // useEffect
  useEffect(() => {
    if(submitform){
      const noErrors = Object.keys(errors).length === 0;

      if(noErrors){
        func();
      }
      setSubmitForm(false);
      
    };
  }, [/* dependencia */]);

  return (
    // Component content ...
  );
};

export default useValidation;