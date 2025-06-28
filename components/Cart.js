<div className="w-6/12 m-auto">
  <button
    className="p-2 m-2 bg-black text-white rounded-lg"
    onClick={handleClearCart}
  >
    Clear Cart
  </button>
  {cartItems.length === 0 && <h1> Cart is Empty Add Items to Cart</h1>}
  {cartItems.map((item) => (
    <div key={item.id} className="flex items-center justify-between border-b py-2">
      <span>{item.name}</span>
      <button
        className="p-1 bg-red-500 text-white rounded"
        onClick={() => handleRemoveCart(item.id)}
      >
        Remove Item
      </button>
    </div>
  ))}
  {/* <ItemList items={cartItems} /> */}
</div>