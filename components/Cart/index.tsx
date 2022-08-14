import { getContext } from './../../utils/context';
import { CartItem } from './../CartItem/index';

export function Cart() {
  return (
    <div className="h-40 border-solid border-4">
      <CartLogic />
    </div>
  );
}

function CartLogic() {
  const { cart, clearCart } = getContext();
  const itemsInCart = Object.keys(cart),
    isCartLength = itemsInCart.length,
    isCartPresent = isCartLength > 0;
  if (!isCartPresent) {
    return <p>Sorry no item in cart yet</p>;
  }
  return (
    <div>
      <div>
        <div className="flex gap-2">
          {itemsInCart.map((item) => (
            <CartItem productDetails={cart[item]} />
          ))}
        </div>
        <button
          onClick={() => clearCart()}
          className="border-solid border-2 border-sky-500 rounded px-4 py-2 bg-sky-700 text-white"
        >
          clear cart
        </button>
      </div>
    </div>
  );
}
