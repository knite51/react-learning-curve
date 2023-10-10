import { useState } from 'react';
import ReusableCol from '../firstSection/ReusableCol';

export const UpdateObjectState = () => {
  // Treat state object as immutable
  const [drink, setDrink] = useState({
    title: 'Armarola',
    price: 5,
  });

  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'lagos',
      zipcode: 1232,
    },
  });

  const [emotion, setEmotion] = useState(['happy', 'glad', 'upset']);

  const handleClick = () => {
    setDrink({
      ...drink,
      price: 6,
    });

    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 2222 },
    });

    // Add
    setEmotion([...emotion, 'cheerful']);

    // Remove
    // setEmotion(emotion.filter(el => el !== 'sad'));

    // Update
    // setEmotion(emotion.map((el) => el === 'sad' ? 'notanymore' : el));
  };

  return (
    <>
      <ReusableCol colDigit="2">
        <div>Update Object: {drink.price}</div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClick}
        >
          Update Objects
        </button>
      </ReusableCol>
      <ReusableCol colDigit="2">
        <div>Update Nested Object: {customer.address.zipcode}</div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClick}
        >
          Update Nested Objects
        </button>
      </ReusableCol>
      <ReusableCol colDigit="2">
        <div>Update Array Object: {emotion[emotion.length - 1]}</div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClick}
        >
          Update Array Objects
        </button>
      </ReusableCol>
    </>
  );
};
