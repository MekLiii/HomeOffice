import styled, { keyframes } from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 250px;
  height: 350px;
  background-color: ${({ theme }) => theme.backgroundLight};
  box-shadow: 0px 0px 18px -11px rgba(66, 68, 90, 1);
  position: relative;
  cursor: pointer;
  &:hover {
    .product-overview {
      transform: translateY(-50px);
    }
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: ${({ theme }) => theme.backgroundLight};
  h4 {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.sonicSilver};
    text-align: center;
    text-decoration: none;
    text-align: center;
    width: 100%;
    font-family: Manrope, sans-serif;
  }
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.raisinBlack};
    text-align: center;
    text-align: center;
    width: 100%;
    font-family: Manrope, sans-serif;
  }
`;
export const OverView = styled.div`
  transform: translateY(-4px);
  height: 45px;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundLight};
  transition: all 0.3s ease-in-out;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: Manrope, sans-serif;
    color: ${({ theme }) => theme.sonicSilver};
  }
`;

export const AddToFavourite = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundDarker};
  display: grid;
  place-items: center;

  img {
    width: 20px;
  }
  &:hover {
    box-shadow: 0.125rem -0.125rem 0.25rem 0 rgb(0 0 0 / 20%);
  }
`;
