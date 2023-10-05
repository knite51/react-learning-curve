import { useState } from 'react';
import ReusableCol from '../../classes/firstSection/ReusableCol';

const ShowAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <ReusableCol>
      {showAlert && (
        <div className="alert alert-primary  alert-dismissible" role="alert">
          A simple primary alert—check it out!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowAlert(true)}
      >
        Show Alert
      </button>
    </ReusableCol>
  );
};

export default ShowAlert;
