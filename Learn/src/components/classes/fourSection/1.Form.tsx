// Creating form
// Submiting form
// Accessing form data using useRefn

import { FormEvent, useRef } from 'react';
import ReusableCol from '../firstSection/ReusableCol';

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: '', age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { current: name } = nameRef;
    const { current: age } = ageRef;
    person.name = name?.value || '';
    person.age = Number(age?.value);
    console.log(person);
  };
  return (
    <>
      <ReusableCol>
        <h4>Form Data Using UseRef</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              ref={nameRef}
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              ref={ageRef}
              id="age"
              type="number"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </ReusableCol>
    </>
  );
};

export default Form;
