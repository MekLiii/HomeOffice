import { ProductsContainer, ProductsGrid } from "./style";
import { Product } from "./index";

const Products = () => {
  return (
    <ProductsContainer>
      <h3>Product</h3>
      <ProductsGrid className="its-gonna-be-grid">
        {[1, 2, 3, 4, 5, 6, 7 ].map((item) => (
          <Product key={item} />
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};

export default Products;
