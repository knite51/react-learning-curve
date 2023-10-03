// Using Props to pass children into component

import { PropsChildrenData } from '../../interface/interface';

const PassChildrenComponent = ({ title, children }: PropsChildrenData) => {
  return (
    <>
      <div className="col-md-3">
        <h5>{title}</h5>
        {children}
      </div>
    </>
  );
};

export default PassChildrenComponent;
