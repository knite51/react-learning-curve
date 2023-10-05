import { Btns } from '../../../utils/data';
import ReusableCol from '../../classes/firstSection/ReusableCol';

const ButtonComponent = () => {
  const btns: string[] = Btns;
  return (
    <>
      <ReusableCol>
        {btns.map((btn) => (
          <button
            type="button"
            key={btn}
            className={`btn me-2 mb-2 btn-${btn}`}
          >
            {btn}
          </button>
        ))}
      </ReusableCol>
    </>
  );
};

export default ButtonComponent;
