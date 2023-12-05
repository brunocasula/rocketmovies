import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";
  
  width: 100%;
  height: 100vh;

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

      section {
        display: flex;
        align-items: center;
        gap: 1.9rem;
        margin-top: 2.4rem;

        h1 {
          font-size: 36px;
          font-weight: 500;
        }                                       
      }
      
      > div {        
        padding: 4.0rem 0;        
      };

      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }
    }

    p {
      text-align: justify;
    }
  }    
  
`;
