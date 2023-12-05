import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
  

  margin-bottom: .8rem;
  border-radius: 1.0rem;
  padding-right: 1.6rem;

 > button {
  border: none;
  background: none;
 }

 .button-delete {
  color: ${({ theme }) => theme.COLORS.PINK};  
 }

 .button-add {
  color: ${({ theme }) => theme.COLORS.PINK};  
 }

 > input{
  width: 100%;
  height: 5.6rem;

  padding: 1.2rem;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;
  
  border: none;  

  &placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};  
  }
 }

 /* svg {
  font-size: 1.6rem;
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.ORANGE : theme.COLORS.RED}
 } */
`;
