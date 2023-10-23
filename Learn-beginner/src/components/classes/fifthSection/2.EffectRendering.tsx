// Passing a dependency into effect hook = []
// Passing [] inton the effect hook handling tells it to run the effect callback without dependencies only once
// an effect hook without a dependency will be run at every rerender and could cause infinite loop
// A states, props can be use as a dependencey as bellow and react will only render if their values changes
// To clean up a effect you return a function for the mop up

import React, { useEffect, useRef, useState } from 'react';
import ReusableCol from '../firstSection/ReusableCol';

const EffectRendering = () => {
  const [product, setProduct] = useState<string>('Products');
  const [category, setCategory] = useState<string>('');

  const connnet = () => console.log('Connecting');
  const disconnnet = () => console.log('Disconnecting');

  useEffect(() => {
    console.log('fetching product from ', category);
    setProduct(category);
  }, [category]);

  // Clean up on Effect
  useEffect(() => {
    connnet();

    return () => disconnnet();
  }, []);

  return (
    <>
      <ReusableCol>
        <h4>Effect Rendering and Clean up</h4>
        <select
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>

        <div>{product}</div>
      </ReusableCol>
    </>
  );
};

export default EffectRendering;
