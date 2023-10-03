import { Btns } from '../../utils/data';

const ButtonComponent = () => {
  const btns: string[] = Btns;
  return (
    <>
      <div className="col-md-3">
        {btns.map((btn) => (
          <button
            type="button"
            key={btn}
            className={`btn me-2 mb-2 btn-${btn}`}
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonComponent;
