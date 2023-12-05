import { styled } from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;

  width: 100%;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  border: 0;
  padding: 0 1.6rem;
  /* margin-top: 1.6rem; */
  border-radius: 1.0rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;    
  }

  /* > svg {
    margin-left: 1.6rem;
  } */

`;