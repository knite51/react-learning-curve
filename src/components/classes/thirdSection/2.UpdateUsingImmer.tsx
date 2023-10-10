import { useState } from 'react';
import produce from 'immer';
import ReusableCol from '../firstSection/ReusableCol';

const UpdateUsingImmer = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);

  const handleClick = () => {
    // Normal Update
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    // Using Immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <>
      <ReusableCol colDigit="2">
        <div>Update Object Using Immer</div>
        {bugs.map((bug) => (
          <p key={bug.id}>
            {bug.title}: {bug.fixed ? 'Fixed' : 'New'}
          </p>
        ))}
        <button type="button" className="btn btn-danger" onClick={handleClick}>
          Update Objects
        </button>
      </ReusableCol>
    </>
  );
};

export default UpdateUsingImmer;
