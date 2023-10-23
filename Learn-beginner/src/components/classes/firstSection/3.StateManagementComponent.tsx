// State management with React (State Hook) for two way databinding
// CSS intergration

import { useState } from 'react';
import { Fruits } from '../../../utils/data';
import './State.css';

export const StateManagementComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const fruits: string[] = Fruits;

  return (
    <>
      <div className="col-md-3">
        <h5>State Management</h5>
        <ul className="list-group">
          {fruits.map((fruit: string, index: number) => {
            return (
              <li
                key={index}
                className={
                  'list-group-item ' +
                  (selectedIndex === index ? 'active' : 'hover')
                }
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                {fruit}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
