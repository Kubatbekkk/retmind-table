const calculateMonthTotal = (data, monthName) => {
    let total = 0
    for (const store of data) {
        const month = store.months.find((month) => month.name === monthName)
        if (month) {
            total += Number(month.value)
        }
    }
    return total
}
export default calculateMonthTotal
