import { Fragment } from 'react'
import calculateMonthTotal from '../../helpers/calculateMonthTotal'
import calculateStoreTotal from '../../helpers/calculateStoreTotal'
import calculateTotalOfTotals from '../../helpers/calculateTotalOfTotals'
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
                                        placeholder={
                                            month.value > 0 ? '' : 'your value'
                                        }
                                        value={
                                            month.value > 0 ? month.value : ''
                                        }
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
                            <td>
                                {' '}
                                {calculateStoreTotal(store.months) === 0 ? (
                                    <div className="table__store-total">
                                        Store Total
                                    </div>
                                ) : (
                                    <div className="table__store-total">
                                        {calculateStoreTotal(store.months)}
                                    </div>
                                )}
                            </td>
                        </tr>
                    </Fragment>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    {data[0].months.map((month) => (
                        <td key={month.id}>
                            {calculateMonthTotal(data, month.name) === 0 ? (
                                <div className="table__month-total">
                                    Month Total
                                </div>
                            ) : (
                                <div className="table__month-total">
                                    {calculateMonthTotal(data, month.name)}
                                </div>
                            )}
                        </td>
                    ))}
                    <td>
                        {calculateTotalOfTotals(data) === 0 ? (
                            <div className="table__tOt">Total Of Totals</div>
                        ) : (
                            <div className="table__tOt">
                                {calculateTotalOfTotals(data)}
                            </div>
                        )}
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table
