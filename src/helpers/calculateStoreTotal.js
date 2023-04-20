const calculateStoreTotal = (months) => {
    return months.reduce((total, month) => total + Number(month.value), 0)
}
export default calculateStoreTotal
