import styled from '@emotion/styled';

export const ErrorMsn = ({ msn_arg, type_arg =  'msn-error' }) => {
  return(
    <p className={`msn ${type_arg} txt-a-c br-m`}>
      <i className="a-info-warning"></i>&nbsp; { msn_arg } 
    </p>
  )
};