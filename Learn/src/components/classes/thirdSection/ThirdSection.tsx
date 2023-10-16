// State Hooks
// React updates state asynchronously to avoid unnnecessary rerender
// state is stored outside the component in memory
// state should be created at the top level of the component and not in a scope

import { UpdateObjectState } from './1.UpdateObjectState';
import UpdateUsingImmer from './2.UpdateUsingImmer';
import { StateSharing } from './3.StatesSharing/StateSharing';

// Best Practices for state
// Avoid redundant state variables - firstname lastname fullname. fullname is redundant
// Group related variables inside an object
// avoid deeply nested structures coz updating them might be tricky

// Keep component pure by keeping changes out of the render phase and should not change any object that existed before rendering
// Meaning any variable function that will change but will not update as part of the rendering phase. It follows the pure function principles

export const ThirdSection = () => {
  return (
    <>
      <div className="row mt-3">
        <hr />
        <h4 className="mb-3">Section Three</h4>
        <UpdateObjectState></UpdateObjectState>
        <UpdateUsingImmer></UpdateUsingImmer>
        <StateSharing></StateSharing>
      </div>
    </>
  );
};
