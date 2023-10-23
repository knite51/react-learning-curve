import React, { useState } from 'react';
import ReusableCol from '../../classes/firstSection/ReusableCol';
import ExpandableText from './2.ExpandableText';

const ThirdSectionEx = () => {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  });

  const handleClick = (text: string) => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, text],
    });
  };

  return (
    <>
      <div className="row mt-3">
        <hr />
        <h4 className="mb-3">Section Three Exercise</h4>

        <ReusableCol colDigit="3">
          <h6> Pizza Name: {pizza.name}</h6>
          <ul>
            {pizza.toppings.map((top) => (
              <li key={top}>{top}</li>
            ))}
          </ul>
          <button onClick={() => handleClick('Cheese')}>Add Toppings</button>
        </ReusableCol>

        <ReusableCol colDigit="6">
          <ExpandableText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            nesciunt? Eaque dolore, numquam illo omnis aut quo veritatis
            necessitatibus expedita ratione voluptatum praesentium earum odio,
            quasi totam nostrum, unde eius! Accusamus consequuntur, non sunt
            nesciunt nisi perspiciatis dolorem iure. Nobis ratione veritatis ex
            ullam unde ipsa repudiandae sed culpa aperiam asperiores dolore,
            sequi voluptatem, aliquid rem cumque autem ad. Praesentium quam,
            ratione cum quasi omnis dolore quidem animi alias adipisci magnam
            corporis, esse reiciendis illo officiis? Quisquam, sit fuga
            doloribus minima voluptate earum corrupti ducimus officia possimus
            soluta vero eos at delectus quibusdam accusantium fugiat. Facilis
            modi commodi nostrum iste.
          </ExpandableText>
        </ReusableCol>
      </div>
    </>
  );
};

export default ThirdSectionEx;
