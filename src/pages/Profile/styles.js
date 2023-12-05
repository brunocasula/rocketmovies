import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    display: flex;
    align-items: center;

    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    padding: 0 12.4rem;

    a {
      display: flex;
      align-items: center;
      gap: .8rem;

      color: ${({ theme }) => theme.COLORS.PINK}; 
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2.4rem;
    }
  }

`;

export const Form = styled.form`
  max-width: 34.0rem;
  margin: 3.0rem auto 0;

  > div:nth-child(3), 
  > div:nth-child(5) {
    margin-top: .8rem;
  }

  > div:nth-child(4),
  > Button {
    margin-top: 2.4rem;
  }
      
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem; 
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;    
    /* object-fit: cover; */    
    border-radius: 50%;
  }

  > label {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .10rem;

    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    cursor: pointer;

    input {
      display: none;
    }
  }
  
`;