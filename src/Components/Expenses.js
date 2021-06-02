import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    return(
        <div>
            <ExpenseItem 
            title={props.expArr[0].title} 
            amount={props.expArr[0].amount} 
            date={props.expArr[0].date}/>
            <ExpenseItem 
            title={props.expArr[1].title} 
            amount={props.expArr[1].amount} 
            date={props.expArr[0].date}/>
            <ExpenseItem 
            title={props.expArr[2].title} 
            amount={props.expArr[2].amount} 
            date={props.expArr[0].date}/>
            <ExpenseItem 
            title={props.expArr[3].title} 
            amount={props.expArr[3].amount} 
            date={props.expArr[0].date}/>
        </div>
    )
}

export default Expenses;