import styled from '@emotion/styled';

export const ErrorMsn = ({ msn_arg }) => {
  return(
    <p className="msn msn-error txt-a-c br-m">
      <i className="a-info-warning"></i>&nbsp; { msn_arg } 
    </p>
  )
};