import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../utils/prodSlice";

const Bag = () => {
  const bagItems = useSelector((store) => store.prod.product);

  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="flex flex-wrap text-center m-6">
        {bagItems.length === 0 && <h1> Cart is Empty Add Items to Cart</h1>}
      {bagItems.map((item, indx) => (
        <div
          key={item.id}
          className="m-3 w-78 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-600 dark:border-gray-700"
        >
          <div className="text-center">
            <img className="rounded-t-lg w-25 h-33" src={item.image} alt="" />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-white-700 dark:text-white-400">
              INN: {item.price}
            </p>
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800  dark:bg-red-600"
              onClick={() => removeCart(item.id)}
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bag;
