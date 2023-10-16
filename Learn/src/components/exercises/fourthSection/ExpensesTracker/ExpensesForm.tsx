import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataInterface } from '../../../../interface/interface';
import { categories } from './categories';

interface FormProps {
  onFormSubmit: (data: FormDataInterface) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description should be atleast 3 characters' }),
  amount: z.number({ invalid_type_error: 'Number value is required' }),
  category: z.enum(categories, {
    errorMap: () => ({ message: 'Category is required' }),
  }),
});

const ExpensesForm = ({ onFormSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataInterface>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onFormSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register('description')}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message} </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register('amount', { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message} </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register('category')}
            name="category"
            id="category"
            className="form-select"
          >
            <option value="">All categories</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message} </p>
          )}
        </div>
        <button type="submit" className=" mt-3 btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpensesForm;
