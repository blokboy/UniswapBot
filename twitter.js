Twit = require('twit')

const config = {
    twitter: {
        username: process.env.BOT_USERNAME,
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
    }
}

T = new Twit(config.twitter)

module.exports = {
    tweet: async (text, cb) => {
        T.post('statuses/update', { status: text }, async (e, data, res) => {
            cb(e, data, res)
        })
    },
}