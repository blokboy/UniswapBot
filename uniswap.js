require('dotenv').config()
const axios = require('axios')
const helpers = require('./helpers.js')

module.exports = {
    getANT: async () => {
        console.log('Getting data from Uniswap ANT contract...')

        try {
            const ANTdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_ANT}?apiKey=${process.env.API_KEY}`)
    
            if(ANTdata.data.length > 0) {
                const ANTwhales = helpers.curateData(ANTdata, 5)
                if(ANTwhales.length > 0) {
                    return ANTwhales
                } else {
                    console.log('No whales found in ANT contract...')
                }
            } else {
                console.log('No ANT data was returned.')
                return
            }
        } catch({ message }) {
            return { message: `There was an issue connecting to Uniswap ANT exchange.` }
        }
    },
    getBAT: async () => {
        console.log('Getting data from Uniswap BAT contract...')

        try {
            const BATdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_BAT}?apiKey=${process.env.API_KEY}`)

            if(BATdata.data.length > 0) {
                const BATwhales = helpers.curateData(BATdata, 5)
                if(BATwhales.length > 0) {
                    return BATwhales
                } else {
                    console.log('No whales found in BAT contract...')
                }
            } else {
                console.log('No BAT data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to Uniswap BAT exchange.' }
        }
    },
    getCVC: async () => {
        console.log('Getting data from Uniswap CVC contract...')

        try {
            const CVCdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_CVC}?apiKey=${process.env.API_KEY}`)

            if(CVCdata.data.length > 0) {
                const CVCwhales = helpers.curateData(CVCdata, 5)
                if(CVCwhales.length > 0) {
                    return CVCwhales
                } else {
                    console.log('No whales found in CVC contract...')
                }
            } else {
                console.log('No CVC data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to Uniswap CVC exchange...' }
        }
    },
    getDAI: async () => {
        console.log('Getting data from Uniswap DAI contract...')

        try {
            const DAIdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_DAI}?apiKey=${process.env.API_KEY}`)

            if(DAIdata.data.length > 0) {
                const DAIwhales = helpers.curateData(DAIdata, 5)
                if(DAIwhales.length > 0) {
                    return DAIwhales
                } else {
                    console.log('No whales found in DAI contract...')
                }
            } else { 
                console.log('No DAI data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to Uniswap DAI exchange...' }
        }
    },
    getFUN: async () => {
        console.log('Getting data from Uniswap FUN contract...')

        try {
            const FUNdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_FUN}?apiKey=${process.env.API_KEY}`)

            if(FUNdata.data.length > 0) {
                const FUNwhales = helpers.curateData(FUNdata, 5)
                if(FUNwhales.length > 0) {
                    return FUNwhales
                } else {
                    console.log('No whales found in FUN contract...')
                }
            } else {
                console.log('No FUN data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to Uniswap FUN exchange...' }
        }
    }, 
    getGNO: async () => {
        console.log('Getting data from Uniswap GNO contract...')

        try {
            const GNOdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_GNO}?apiKey=${process.env.API_KEY}`)

            if(GNOdata.data.length > 0) {
                const GNOwhales = helpers.curateData(GNOdata, 5)
                if(GNOwhales.length > 0) {
                    return GNOwhales
                } else {
                    console.log('No whales found in GNO contract...')
                }
            } else {
                console.log('No GNO data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to Uniswap GNO exchange...' }
        }
    },
    getGUSD: async () => {
        console.log('Getting data from Uniswap GUSD contract...')

        try {
            const GUSDdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_GUSD}?apiKey=${process.env.API_KEY}`)

            if(GUSDdata.data.length > 0) {
                const GUSDwhales = helpers.curateData(GUSDdata, 5)
                if(GUSDwhales.length > 0) { 
                    return GUSDwhales
                } else {
                    console.log('No whales found in GUSD contract...')
                }
            } else {
                console.log('No GUSD data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to Uniswap GUSD exchange...' }
        }
    },
    getKIN: async () => {
        console.log('Getting data from Uniswap KIN contract...')

        try {
            const KINdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_KIN}?apiKey=${process.env.API_KEY}`)

            if(KINdata.data.length > 0) {
                const KINwhales = helpers.curateData(KINdata, 5) 
                if(KINwhales.length > 0) {
                    return KINwhales 
                } else {
                    console.log('No whales found in KIN contract...')
                }
            } else {
                console.log('No KIN data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to Uniswap KIN exchange...' }
        }
    },
    getKNC: async () => {
        console.log('Getting data from Uniswap KNC contract...')

        try {
            const KNCdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_KNC}?apiKey=${process.env.API_KEY}`)

            if(KNCdata.data.length > 0) {
                const KNCwhales = helpers.curateData(KNCdata, 5)
                if(KNCwhales.length > 0) {
                    return KNCwhales 
                } else {
                    console.log('No whales found in KNC contract...')
                }
            } else {
                console.log('No KNC data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to Uniswap KNC exchange...' } 
        }
    },
    getLINK: async () => {
        console.log('Getting data from Uniswap LINK contract...')

        try {
            const LINKdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_LINK}?apiKey=${process.env.API_KEY}`)

            if(LINKdata.data.length > 0) {
                const LINKwhales = helpers.curateData(LINKdata, 5)
                if(LINKwhales.length > 0) {
                    return LINKwhales
                } else {
                    console.log('No whales found in LINK contract...')
                }
            } else {
                console.log('No LINK data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to the Uniswap LINK exchange...' }
        }
    },
    getLOOM: async () => {
        console.log('Getting data from Uniswap LOOM contract...')

        try {
            const LOOMdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_LOOM}?apiKey=${process.env.API_KEY}`)

            if(LOOMdata.data.length > 0) {
                const LOOMwhales = helpers.curateData(LOOMdata, 5)
                if(LOOMwhales.length > 0) { 
                    return LOOMwhales 
                } else {
                    console.log('No whales found in LOOM contract...')
                }
            } else {
                console.log('No LOOM data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to the Uniswap LOOM exchange...' }
        }
    },
    getMANA: async () => {
        console.log('Getting data from Uniswap MANA contract...')
        
        try {
            const MANAdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_MANA}?apiKey=${process.env.API_KEY}`)

            if(MANAdata.data.length > 0) {
                 const MANAwhales = helpers.curateData(MANAdata, 5)
                 if(MANAwhales.length > 0) {
                     return MANAwhales
                 } else {
                     console.log('No whales found in MANA contract...')
                 }
            } else {
                console.log('No MANA data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to the Uniswap MANA exchange...' }
        }
    },
    getMKR: async () => {
        console.log('Getting data from Uniswap MKR contract...')

        try {
            const MKRdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_MKR}?apiKey=${process.env.API_KEY}`)

            if(MKRdata.data.length > 0) {
                const MKRwhales = helpers.curateData(MKRdata, 5)
                if(MKRwhales.length > 0) {
                    return MKRwhales 
                } else {
                    console.log('No whales found in MKR contract...')
                }
            } else {
                console.log('No MKR data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to the Uniswap MKR contract...' }
        }
    },
    getNEXO: async () => {
        console.log('Getting data from Uniswap NEXO contract...')

        try {
            const NEXOdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_NEXO}?apiKey=${process.env.API_KEY}`)

            if(NEXOdata.data.length > 0) {
                const NEXOwhales = helpers.curateData(NEXOdata, 5)
                if(NEXOwhales.length > 0) {
                    return NEXOwhales 
                } else {
                    console.log('No whales found in NEXO contract...')
                }
            } else {
                console.log('No NEXO data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to the Uniswap NEXO contract...' }
        }
    }, 
    getPAX: async () => {
        console.log('Getting data from Uniswap PAX contract...')
        
        try {
            const PAXdata = await axios.get(`http://api.ethplorer.io/getAddressTransactions/${process.env.UNISWAP_PAX}?apiKey=${process.env.API_KEY}`)

            if(PAXdata.data.length > 0) {
                const PAXwhales = helpers.curateData(PAXdata, 5)
                if(PAXwhales.length > 0) {
                    return PAXwhales
                } else {
                    console.log('No whales found in PAX contract...')
                }
            } else {
                console.log('No PAX data was returned.')
                return
            }
        } catch({ message }) {
            return { message: 'There was an issue connecting to the Uniswap PAX contract...' }
        }
    }
}