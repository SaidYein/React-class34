import Product from "./Product";
import Spinner from "./Loader/Loader";

const ProductList = ({ products, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <ul className="productList">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductList;
