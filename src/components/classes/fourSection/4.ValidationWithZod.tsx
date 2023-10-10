// Schema based validation - suitable for complex form validation (Joi, Yup and Zod)
// Applying Validation with Zod

import ReusableCol from '../firstSection/ReusableCol';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be atleast 3 Characters' }),
  age: z.number({ invalid_type_error: 'Age is required' }).min(18),
});
// invalid_type_error; when the type is number but input is string.

type FormData = z.infer<typeof schema>;

const ValidationWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
              {...register('name')}
              id="name"
              type="text"
              className="form-control"
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message} </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              {...register('age', { valueAsNumber: true })}
              id="age"
              type="number"
              className="form-control"
            />
            {errors.age && <p className="text-danger">{errors.age.message} </p>}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </ReusableCol>
    </>
  );
};

export default ValidationWithZod;
