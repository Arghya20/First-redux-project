import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productSlice";
import Lottie from "lottie-react";
import carAmination from "../assets/80410-please-wait-running-car.json";
import dogAmination from "../assets/25177-bull-dog-waiting.json";
import spinnerAmination from "../assets/74612-waiting.json";
import loadingAnimation from "../assets/93670-waiting-page-load-animation.json";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    // const res = await fetch("https://fakestoreapi.com/products");
    // const data = await res.json();
    // console.log(data);
    // setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handelAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return (
      <div className="w-2/12 mx-auto">
        <Lottie animationData={carAmination} loop={true} />
      </div>
    );
  }
  if (status === STATUSES.LOADING) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div className="card w-96 bg-white shadow-xl" key={product.id}>
            <figure>
              <img className="w-1/2" src={product.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-left mb-2">{product.title}</h2>
              <p className="truncate h-12 overflow-hidden line-clamp-3 text-gray-500">
                {product.description}
              </p>
              <p>Price: {product.price}</p>
              <div className="card-actions justify-center">
                <button
                  onClick={() => handelAdd(product)}
                  className="btn btn-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
