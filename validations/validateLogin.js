export default function validateSingUP(values_arg){

  let errors = {};

  // Validate user email 
  if(!values_arg.email){
    errors.email = 'The email es required.'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values_arg.email)){
    errors.email = 'The email is not valid.'
  };
  // Validate user pass
  if(!values_arg.pass){
    errors.pass = 'The password field es required.'
  }else if(values_arg.pass.length < 6){
    errors.pass = 'The password must be at least 6 characters.';
  }

  return errors;
};