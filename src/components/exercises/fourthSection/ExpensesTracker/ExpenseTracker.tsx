import { RefObject, useState } from 'react';
import ReusableCol from '../../../classes/firstSection/ReusableCol';
import ExpensesForm from './ExpensesForm';
import ExpensesTable from './ExpensesTable';
import { FormDataInterface } from '../../../../interface/interface';
import ExpenseFilter from './ExpenseFilter';

const ExpenseTracker = () => {
  const [formData, setFormData] = useState<FormDataInterface[]>([]);
  const [formDataFiltered, setFormDataFiltered] = useState<FormDataInterface[]>(
    []
  );
  const [filteredWord, setFilteredWord] = useState<string | undefined>();
  const [tableTotal, setTableTotal] = useState<number>(0);

  const handleAddExpense = (data: FormDataInterface) => {
    const newData = [...formData, data];
    handleSetFormData(newData);
  };

  const handleRemoveExpense = (itemIndex: number) => {
    const newData = formData.filter((el, index) => index !== itemIndex);
    handleSetFormData(newData);
  };

  const handleFilter = (filteredWord: RefObject<HTMLSelectElement>) => {
    const filterRef = filteredWord.current?.value;
    handleSetFilteredWord(filterRef);
    handleFilteringLogic(filterRef);
  };

  const handleFilteringLogic = (word = filteredWord, data = formData) => {
    if (word) {
      const newData = data.filter(
        (el) => el.category.toLowerCase() === word?.toLowerCase()
      );
      handleSetFormData(newData, 'filtering');
    } else {
      handleSetFormData(formData, 'filtering');
    }
  };

  const handleCalculateTotal = (latestFormData: FormDataInterface[]) => {
    setTableTotal(latestFormData.reduce((acc, curr) => acc + curr.amount, 0));
  };

  const handleSetFormData = (newData: FormDataInterface[], action = 'none') => {
    if (action == 'none') {
      setFormData(newData);
    }
    setFormDataFiltered(newData);
    handleCalculateTotal(newData);
  };

  const handleSetFilteredWord = (filteredWord: string | undefined) => {
    setFilteredWord(filteredWord);
  };

  return (
    <>
      <ReusableCol colDigit="4">
        <ExpensesForm onFormSubmit={handleAddExpense}></ExpensesForm>
      </ReusableCol>
      <ReusableCol colDigit="4">
        <ExpenseFilter onFilter={handleFilter}></ExpenseFilter>
        <ExpensesTable
          tableItems={formDataFiltered}
          tableItemsTotal={tableTotal}
          onExpenseDeletion={handleRemoveExpense}
        ></ExpensesTable>
      </ReusableCol>
    </>
  );
};

export default ExpenseTracker;
