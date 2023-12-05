import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    padding: 6.4rem 12.3rem;
    overflow-y: auto;
    
    > header {
      a {
        display: flex;
        align-items: center;
        gap: .8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-bottom: 2.4rem;        
      }

      h1 {
        font-size: 3.6rem;
        font-weight: 500;
      }
    }

    section {
      display: flex;
      gap: 4.0rem;
      padding: 4.0rem 0;
    }

  }
`;

export const Form = styled.form`  
  h2{
    margin-top: 4.0rem;
    margin-bottom: 2.4rem;    
  }
  
  > footer {
    margin-top: 4.0rem;
    display: flex;
    gap: 4.0rem;
  }

  > div {
    display: flex;
    gap: 2.4rem;
    border-radius: .8rem;
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  > footer > Button:nth-child(1) {    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;