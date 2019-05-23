require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const twitter = require('./twitter.js')
const uniswap = require('./uniswap.js')

const app = express()

app.use(helmet())
app.use(morgan('combined'))
app.use(express.static('public'))
app.use(express.json())

app.all(`*`, async (req, res) => {
    try {

        const ANT = await uniswap.getANT()
        const BAT = await uniswap.getBAT() 
        const CVC = await uniswap.getCVC()
        const DAI = await uniswap.getDAI()
        const MKR = await uniswap.getMKR()
        const FUN = await uniswap.getFUN()
        const GNO = await uniswap.getGNO()
        const KIN = await uniswap.getKIN()
        const KNC = await uniswap.getKNC()
        const LINK = await uniswap.getLINK()
        const LOOM = await uniswap.getLOOM()
        const MANA = await uniswap.getMANA()
        const GUSD = await uniswap.getGUSD()
        const NEXO = await uniswap.getNEXO()
        const PAX = await uniswap.getPAX()

        const obj = { ANT, BAT, CVC, DAI, FUN, GNO, GUSD, KIN, KNC, LINK, LOOM, MANA, MKR, NEXO, PAX }

        for(let ticker of Object.keys(obj)) {
            if(typeof(obj[ticker]) !== 'undefined') {
                for(let transactions in obj[ticker]) {
                    if(typeof(obj[ticker][transactions].value) == 'undefined') { 
                        continue 
                    } else {
                        const alert = `${obj[ticker][transactions].value.toFixed(2)} $ETH traded for ${ticker}! Check it out at: https://etherscan.io/tx/${obj[ticker][transactions].hash}`
                        console.log(alert)
                        twitter.tweet(alert, (err, data, res) => {
                            if(err) {
                                console.log(err)
                                res.sendStatus(500)
                            } else {
                                console.log('Tweet sent!')
                                res.sendStatus(200)
                            }
                        })
                    } 
                }
            } else {
                console.log(ticker, ': No whales found.')
            }
        }

        res.status(200).json({message: 'Success!'})
    } catch({ message }) {
        res.status(500).json({ message })
    }
})

const listener = app.listen(process.env.PORT, () => {
    console.log('Twitter bot is running on port ' + listener.address().port)
})