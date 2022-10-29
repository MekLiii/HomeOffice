import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundLight};
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 11%);
  justify-content: center;
`;
export const NavItems = styled.main`
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: space-between;
  h2 {
    width: 150px;
  }
  img{
    max-height: 100%;
  }
`;
export const Category = styled.ul`
  display: flex;
  width: 50%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  margin: 0;
  li > a {
    flex: 1;
    color: black;
    margin-left: 10px;
    color: ${({ theme }) => theme.sonicSilver};
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Manrope, sans-serif;

    &:hover {
      color: ${({ theme }) => theme.batteryChargedBlue};
    }
  }
`;
export const Searchbar = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;

  input {
    width: 50%;
    height: 30%;
    padding: 10px 20px 10px 20px;
    outline: none;
    background-color: ${({ theme }) => theme.antiFlashWhite};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.spanishGray};
    font-size: 1.1rem;
  };
`;

export const Login = styled.section`
  display: flex;
  width: auto;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
   a {
    flex: 1;
    color: black;
    margin-left: 10px;
    color: ${({ theme }) => theme.sonicSilver};
    font-size: .8rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Manrope, sans-serif;

    &:hover {
      color: ${({ theme }) => theme.batteryChargedBlue};
    }
  }
`
