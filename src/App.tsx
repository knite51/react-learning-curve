import { useState } from 'react';
import './App.css';
import Exercises from './components/exercises/Exercises';
import Lessons from './components/classes/Classes';

function App() {
  const [exerciseMode, setExerciseMode] = useState(false);
  const handleSetExerciseMode = (mode: boolean) => {
    setExerciseMode(mode);
  };

  return (
    <div className="App ps-3 pt-3 pb-3 pe-3">
      <h3 className="text-center">React Learning Curve</h3>

      <Exercises
        btnName={exerciseMode ? 'Deactivate' : 'Activate'}
        mode={exerciseMode}
        onToggleMode={handleSetExerciseMode}
      ></Exercises>

      {!exerciseMode && <Lessons />}
    </div>
  );
}

export default App;
