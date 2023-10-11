import { RefObject, useRef } from 'react';

interface ExpenseFilterProps {
  onFilter: (filteredWord: RefObject<HTMLSelectElement>) => void;
}

const ExpenseFilter = ({ onFilter }: ExpenseFilterProps) => {
  const filterRef = useRef<HTMLSelectElement>(null);

  return (
    <>
      <select
        name="filter"
        id="filter"
        className="form-select mb-2"
        ref={filterRef}
        onChange={() => onFilter(filterRef)}
      >
        <option value="">All categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </>
  );
};

export default ExpenseFilter;
