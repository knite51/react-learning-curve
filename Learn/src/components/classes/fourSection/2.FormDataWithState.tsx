// Accessing form data using state
// some say its a slow form of implementation as any change to the form means a rerender of the component

import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  InputHTMLAttributes,
  useState,
} from 'react';
import ReusableCol from '../firstSection/ReusableCol';

const FormDataWithState = () => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
  });

  const handleChange = ({
    target: { value: age },
  }: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      age,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <>
      <ReusableCol>
        <h4>Form Data Using State</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={(event) =>
                setPerson({ ...person, name: event.target.value })
              }
              value={person.name}
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
              onChange={handleChange}
              value={person.age}
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

export default FormDataWithState;
