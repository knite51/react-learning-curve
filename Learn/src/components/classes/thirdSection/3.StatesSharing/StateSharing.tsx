import { useState } from 'react';
import ReusableCol from '../../firstSection/ReusableCol';
import NavBar from './NavBar';
import Shopping from './Shopping';

export const StateSharing = () => {
  const [cart, setCart] = useState(['Product 1', 'Product 2']);

  const handleAddCart = (text: string) => {
    setCart([...cart, text]);
  };

  const handleRemoveCart = (text: string) => {
    console.log(text, cart);
    setCart(cart.filter((item) => item !== text));
  };
  return (
    <>
      <ReusableCol colDigit="4">
        <div className="row">
          <h4 className="text-center">State Sharing </h4>
          <ul>
            {cart.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
          <ReusableCol colDigit="6">
            <NavBar
              addCart={handleAddCart}
              removeCart={handleRemoveCart}
            ></NavBar>
          </ReusableCol>

          <ReusableCol colDigit="6">
            <Shopping
              addCart={handleAddCart}
              removeCart={handleRemoveCart}
            ></Shopping>
          </ReusableCol>
        </div>
      </ReusableCol>
    </>
  );
};
