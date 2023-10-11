import { FormDataInterface } from '../../../../interface/interface';

interface ExpenseTableProps {
  tableItems: FormDataInterface[];
  tableItemsTotal: number;
  onExpenseDeletion: (itemIndex: number) => void;
}

const ExpensesTable = ({
  tableItems,
  tableItemsTotal = 0,
  onExpenseDeletion,
}: ExpenseTableProps) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>${item.amount.toFixed(2)}</td>
              <td>{item.category}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => onExpenseDeletion(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <td>${tableItemsTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpensesTable;
