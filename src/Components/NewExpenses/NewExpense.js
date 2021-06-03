import ExpenseFrom from "./ExpenseForm";
import './NewExpenses.css'

const NewExpenses = (event) => {
    return(
        <div className="new-expense">
            <ExpenseFrom/>
        </div>
    );
}
export default NewExpenses;