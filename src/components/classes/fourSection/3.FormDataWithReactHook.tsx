// Accessing form data using React
// Applying Validation

import ReusableCol from '../firstSection/ReusableCol';
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
  name: string;
  age: number;
}

interface Statement {
  required: string;
  minLength: string;
  [key: string]: string;
}

const FormDataWithReactHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleStatements = (text: string): string => {
    const s: Statement = {
      required: 'is required',
      minLength: 'must have a minLength of 3',
    };
    return s[text];
  };

  const handleErrorStatement = (text: keyof FormData): string => {
    const type = errors[text]?.type;
    return type ? `${text} ${handleStatements(type.toString())}` : '';
  };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <ReusableCol>
        <h4>Form Data Using React Hook</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              {...register('name', { required: true, minLength: 3 })}
              id="name"
              type="text"
              className="form-control"
            />
            {errors.name && (
              <p className="text-danger">{handleErrorStatement('name')} </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              {...register('age', { required: true, valueAsNumber: true })}
              id="age"
              type="number"
              className="form-control"
            />
            {errors.age && (
              <p className="text-danger">{handleErrorStatement('age')} </p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </ReusableCol>
    </>
  );
};

export default FormDataWithReactHook;
