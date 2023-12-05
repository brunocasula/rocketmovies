import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 1.0rem;

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }        
  }  

  ::-ms-reveal {
    /* display: none; */
    filter: invert(100%);    
  } 

  > svg {
      margin-left: 1.6rem;
    }

`;