import {
  ProductContainer,
  ProductDescription,
  ProductImage,
  OverView,
  AddToFavourite
} from "./style";

import IconHeart from '../../../../../assets/icons/icon-heart.svg';

type Props = {
  name?: string;
  price?: number;
  description?: string;
  image?: string;
  discount?: number;
};

const defaultProps: Props = {
  name: "Hummingbird Printed T-Shirt",
  price: 22.94,
  description: "This is a shirt",
  image: "/img/proudct.jpg",
};

const Product = ({ name, price, description, image, discount }: Props) => {
  return (
    <ProductContainer className="product">
      <AddToFavourite>
        <img src={IconHeart} alt="add to favourite icon"/>
      </AddToFavourite>
      <ProductImage>
        <img src={image} alt={name} />
        <OverView className="product-overview">
          <p>Quick view</p>
        </OverView>
      </ProductImage>
      <ProductDescription>
        <h4>{name}</h4>
        <span>{price}$</span>
      </ProductDescription>
    </ProductContainer>
  );
};

// add default props
Product.defaultProps = defaultProps;

export default Product;
