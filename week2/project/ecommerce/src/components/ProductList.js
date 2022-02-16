import Product from "./Product";
import Spinner from "./Loader/Loader";

const ProductList = ({ products, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="productList">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
