import { Component } from 'react'
import Table from '../Table'
import { data } from '../../data/mockData'
import './style.css'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArray: data,
        }
    }

    handleBudgetChange = (storeId, monthId, value) => {
        const newData = [...this.state.dataArray]
        const storeIndex = newData.findIndex(
            (store) => store.store.id === storeId
        )
        const monthIndex = newData[storeIndex].months.findIndex(
            (month) => month.id === monthId
        )
        newData[storeIndex].months[monthIndex].value = value

        this.setState({ dataArray: newData })
    }

    render() {
        const { dataArray } = this.state
        return (
            <div className="main">
                <h1 className="main__heading">Store Table</h1>
                <Table
                    data={dataArray}
                    handleBudgetChange={this.handleBudgetChange}
                />
            </div>
        )
    }
}
