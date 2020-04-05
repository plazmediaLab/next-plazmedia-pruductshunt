import styled from '@emotion/styled';

export const ErrorMsn = ({ msn_arg, type_arg =  'msn-error' }) => {
  return(
    <p className={`msn ${type_arg} txt-a-c br-m`}>
      <i className="a-info-warning"></i>&nbsp; { msn_arg } 
    </p>
  )
};

export const Legend = styled.legend`
  color: var(--tangerine-light-1);

  @media (max-width: 768px){
    margin:0 auto;
  }
`;

export const Textarea = styled.textarea`
  height: 15rem;
  
  @media (max-width: 768px){
    height: 30rem;
  }
`;

export const Avatar = styled.div`

  @media (max-width: 768px){
    margin: 1.5rem 0;
  }
`;

export const Container = styled.div`
  padding-top: 5rem;
  
  @media (max-width: 768px){
    padding-top: 2rem;
  }
`;