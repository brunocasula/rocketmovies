import styled from "styled-components";
import star from "../../assets/star.svg";

export const Container = styled.button`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border: none;
  border-radius: 1.6rem;
  
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};  
    margin-bottom: .6rem;
  }

  > p {
    text-align: left;    
    padding: 1.5rem 0;
    color: ${({ theme }) => theme.COLORS.GRAY_100};  
  }

  > footer {
    display: flex;
    width: 100%;
    margin-top: 1.6rem;
  }
`;