// Events with JSX

import { Btns } from '../../utils/data';

export const EventsComponent = () => {
  const btns: string[] = Btns;

  return (
    <>
      <div className="col-md-3">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h5>Events (onClick) </h5>
            {btns.map((btn) => {
              return (
                <button
                  type="button"
                  className={`btn btn-outline-${btn} me-2 mb-2`}
                  onClick={(event) => alert(`${btn} button Clicked`)}
                  key={btn}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
