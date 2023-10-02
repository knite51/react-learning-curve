import './App.css';
import { LogicalLoopComponent } from './components/1.LogicalLoopComponent';
import { EventsComponent } from './components/2.EventsComponents';
import { StateManagementComponent } from './components/3.StateManagementComponent';
import { PropsParentComponent } from './components/5.PropsParentComponent';

function App() {
  return (
    <div className="App ps-3 pt-3 pb-3 pe-3">
      <h3 className="text-center">React Learning Curve</h3>
      <div className="row mt-3">
        <LogicalLoopComponent></LogicalLoopComponent>
        <EventsComponent></EventsComponent>
        <StateManagementComponent></StateManagementComponent>
        <PropsParentComponent></PropsParentComponent>
      </div>
    </div>
  );
}

export default App;
