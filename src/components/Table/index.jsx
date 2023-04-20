import { Fragment } from 'react'
import calculateStoreTotal from '../../helpers/calculateStoreTotal'
import './style.css'
const Table = ({ data, handleBudgetChange }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>STORE</th>
                    {data[0].months.map((month) => (
                        <th key={month.id}>{month.name}</th>
                    ))}
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                {data.map((store) => (
                    <Fragment key={store.store.id}>
                        <tr>
                            <td>{store.store.name}</td>
                            {store.months.map((month) => (
                                <td key={month.id}>
                                    <input
                                        type="number"
                                        className="table__input"
                                        placeholder="your value"
                                        value={month.value === 0 || month.value}
                                        onChange={(e) =>
                                            handleBudgetChange(
                                                store.store.id,
                                                month.id,
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                            ))}
                            <td>Total: {calculateStoreTotal(store.months)}</td>
                        </tr>
                    </Fragment>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    {data[0].months.map((month) => (
                        <td key={month.id}>Total</td>
                    ))}
                    <td>Total of Totals</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table
