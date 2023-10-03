import { Exercise } from '../../interface/interface';
import ButtonComponent from './1.ButtonComponent';

const Exercises = ({ btnName, mode, onToggleMode }: Exercise) => {
  return (
    <>
      <div className="row justify-content-center">
        <button
          type="button"
          className={'btn col-2 btn-' + (mode ? 'danger' : 'primary')}
          onClick={() => onToggleMode(!mode)}
        >
          {btnName} Exercise
        </button>
      </div>

      {mode && (
        <div className="row mt-3">
          <ButtonComponent></ButtonComponent>
        </div>
      )}
    </>
  );
};

export default Exercises;
