import styled from "styled-components";

export const Container = styled.section`
  margin: 2.8rem 0;

  > h2 {
    padding-bottom: 1.6rem;
    margin-bottom: 2.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
    font-weight: 400;    
  }
`;