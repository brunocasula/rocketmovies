import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "content"; 
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 12.3rem;
  overflow-y: auto;

  max-height: calc(100vh - 11.6rem);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2.6rem 0;
  }

`;

export const NewMovie = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;

  width: 20.7rem;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  border: 0;
  padding: 0 1.6rem;
  /* margin-top: 1.6rem; */
  border-radius: 1.0rem;
  font-weight: 500;

`;