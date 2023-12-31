import { useState } from 'react';
import './App.css';
import Exercises from './components/exercises/Exercises';
import Lessons from './components/classes/Classes';

function App() {
  const [exerciseMode, setExerciseMode] = useState(false);
  const [btnName, setBtnName] = useState('Activate');
  const handleSetExerciseMode = (mode: boolean) => {
    setExerciseMode(!mode);
    setBtnName(mode ? 'Activate' : 'Deactivate');
  };

  return (
    <div className="App ps-3 pt-3 pb-3 pe-3">
      <h3 className="text-center">React Learning Curve</h3>

      <div className="row justify-content-center">
        <button
          type="button"
          className={'btn col-2 btn-' + (exerciseMode ? 'danger' : 'primary')}
          onClick={() => handleSetExerciseMode(exerciseMode)}
        >
          {btnName} Exercise
        </button>
      </div>

      {exerciseMode && <Exercises></Exercises>}

      {!exerciseMode && <Lessons />}
    </div>
  );
}

export default App;
