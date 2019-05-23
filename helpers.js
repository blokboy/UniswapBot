module.exports = {
    curateData: (res, threshold) => {
        //Search through data array and pick out the content that's relevant
       
        const matches = res.data.filter(transaction => transaction.value > threshold)
        // If the transaction happened less than 8 min ago
        const timestamps = matches.filter(transaction => Date.now() - transaction.timestamp < 480000)

        return timestamps 
    },
}
