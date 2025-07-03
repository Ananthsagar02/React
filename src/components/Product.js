import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../utils/prodSlice";
import { thunkFunction } from "../utils/prodthunk";

const Product = () => {
  //const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const { data: product } = useSelector((state) => state.pthunk);

  useEffect(() => {
    //dispatch action
    dispatch(thunkFunction());

    // fetchData();
  }, []);

  // const fetchData = async () => {
  // const data = await fetch("https://fakestoreapi.com/products");
  // const json = await data.json();
  // console.log(json);
  // setProduct(json);
  // optional chaining
  //};

  const pcart = (item) => {
    // dispatch a add action
    dispatch(add(item));
  };

  console.log(pcart);

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="flex flex-wrap">
        {product.map((item, indx) => (
          <div
            key={indx}
            className="m-3 w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-600 dark:border-gray-700"
          >
            <div className="text-center">
              <img className="rounded-t-lg w-25 h-33" src={item.image} alt="" />
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                INN: {item.price}
              </p>
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => pcart(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
