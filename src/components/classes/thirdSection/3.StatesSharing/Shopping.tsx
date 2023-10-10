import { Cart } from '../../../../interface/interface';

const Shopping = ({ addCart, removeCart }: Cart) => {
  return (
    <>
      <button
        className="btn btn-primary mb-3"
        onClick={() => addCart('Product 4')}
      >
        Add Cart Shop
      </button>
      <button
        className="btn btn-danger mb-3"
        onClick={() => removeCart('Product 4')}
      >
        Remove Cart Shop
      </button>
    </>
  );
};

export default Shopping;
