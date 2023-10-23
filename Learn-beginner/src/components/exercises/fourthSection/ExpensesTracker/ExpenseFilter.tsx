import { RefObject, useRef } from 'react';
import { categories } from './categories';

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
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
