import styled from "styled-components";

export const Container = styled.header`
  display: flex;  
  grid-area: header;

  gap: 6.4rem;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  height: 11.6rem;

  padding: 2.4rem 12.3rem;

  margin: 0 auto;
   
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1, a  {
    font-size: 2.4rem;    
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK}
  } 

`;

export const Profile = styled.div`  
  display: flex;  
  align-items: center;
  justify-content: end; 
  gap: .9rem;
  
  width: 36.0rem;

  > div {    
    display: flex;    
    flex-direction: column;
    line-height: 2.4rem;
    
    strong {                  
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE} ;
    }
    
    a {
      font-size: 1.4rem;
      text-align: end;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
  
  img {    
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;