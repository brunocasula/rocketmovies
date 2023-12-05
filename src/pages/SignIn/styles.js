import { styled } from 'styled-components';
import backgroundSign from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  
  /* text-align: center; */

  padding: 0 13.6rem;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 1.4rem;    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    align-self: center;
    margin-top: 4.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};  
  }

  > section {
    margin-bottom: .8rem;
  }

  Button {
    margin-top: 1.6rem;
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundSign}) no-repeat center center;
  filter: opacity(.3);
  background-size: cover;
`;