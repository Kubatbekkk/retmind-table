import calculateStoreTotal from './calculateStoreTotal'

const calculateTotalOfTotals = (data) => {
    return data.reduce((acc, curr) => acc + calculateStoreTotal(curr.months), 0)
}

export default calculateTotalOfTotals
