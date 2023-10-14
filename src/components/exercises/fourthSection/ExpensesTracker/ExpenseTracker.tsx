import { RefObject, useState } from 'react';
import ReusableCol from '../../../classes/firstSection/ReusableCol';
import ExpensesForm from './ExpensesForm';
import ExpensesTable from './ExpensesTable';
import { FormDataInterface } from '../../../../interface/interface';
import ExpenseFilter from './ExpenseFilter';

const ExpenseTracker = () => {
  const [formData, setFormData] = useState<FormDataInterface[]>([]);
  const [filteredWord, setFilteredWord] = useState<string | undefined>();

  const handleAddExpense = (data: FormDataInterface) => {
    setFormData([...formData, data]);
  };

  const handleRemoveExpense = (itemIndex: number) => {
    setFormData(formData.filter((el, index) => index !== itemIndex));
  };

  const handleFilter = (filteredWord: RefObject<HTMLSelectElement>) => {
    setFilteredWord(filteredWord.current?.value);
  };

  const filtedFormData = filteredWord
    ? formData.filter(
        (el) => el.category.toLowerCase() === filteredWord?.toLowerCase()
      )
    : formData;

  return (
    <>
      <ReusableCol colDigit="4">
        <ExpensesForm onFormSubmit={handleAddExpense}></ExpensesForm>
      </ReusableCol>
      <ReusableCol colDigit="4">
        <ExpenseFilter onFilter={handleFilter}></ExpenseFilter>
        <ExpensesTable
          tableItems={filtedFormData}
          onExpenseDeletion={handleRemoveExpense}
        ></ExpensesTable>
      </ReusableCol>
    </>
  );
};

export default ExpenseTracker;
