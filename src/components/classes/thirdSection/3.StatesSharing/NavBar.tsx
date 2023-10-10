import { Cart } from '../../../../interface/interface';

const NavBar = ({ addCart, removeCart }: Cart) => {
  return (
    <>
      <button
        className="btn btn-primary mb-3"
        onClick={() => addCart('Product 3')}
      >
        Add Cart Nav
      </button>
      <button
        className="btn btn-danger mb-3"
        onClick={() => removeCart('Product 3')}
      >
        Remove Cart Nav
      </button>
    </>
  );
};

export default NavBar;
