// Rendering Markup with JSX
// Conditional Statments with JSX
// Loop Statements with JSX

import { Fruits } from '../../utils/data';

export const LogicalLoopComponent = () => {
  const fruits: string[] = Fruits;

  const getLastItem = (arr: string[]) => {
    if (arr.length > 3) {
      return arr[arr.length - 1];
    }
    return 'Length is Short';
  };

  return (
    <>
      <div className="col-md-3">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h5>Conditional Statement in JSX</h5>
            <ul className="list-group">
              <li className="list-group-item" key={getLastItem(fruits)}>
                {getLastItem(fruits) || fruits.length > 3
                  ? fruits[fruits.length - 1]
                  : 'Length is Shorter' ||
                    (fruits.length > 2 && fruits[fruits.length - 2])}
              </li>
            </ul>
          </div>
          <div className="col-md-12 mb-4">
            <h5>Looping in JSX</h5>
            <ul className="list-group">
              {fruits.map((el) => (
                <li className="list-group-item" key={el}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
