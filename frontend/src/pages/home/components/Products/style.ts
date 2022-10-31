import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    

    h3{
        color:${({theme})=>theme.raisinBlack};
        font-weight: 500;
        font-size: 1.3125rem;
        font-family: Manrope, sans-serif;
    }
`
export const ProductsGrid = styled.div`
    display: grid;
   //make aresponsive grid
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
    place-items: center;
    
`