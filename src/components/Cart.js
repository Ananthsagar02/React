import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // to read items from cart using useSelector

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveCart = (cartItems) => {
    dispatch(removeItem(cartItems));
  };

  return (
    <div className="text-center m-6 p-6">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1> Cart is Empty Add Items to Cart</h1>}
        <ItemList items={cartItems} />

        <button className="bg-blend-saturation" onClick={() => handleRemoveCart(cartItems)}>Remove Item</button>
      </div>
    </div>
  );
};

export default Cart;
