// call as base of the frontend - should be accessible everywhere
const router = require('express').Router()
const axios = require('axios')


// will need to provide validation on the year (previous year's data will not work)
let year = new Date().getFullYear()

router.get('/', async (req, res) => {
  let pairingsRes = await axios.get(`https://www.masters.com/en_US/scores/feeds/${year}/pairings.json`)
  let pairings = pairingsRes.data
  let leaderboardRes = await axios.get(`https://www.masters.com/en_US/scores/feeds/${year}/scores.json`)
  let leaderboard =leaderboardRes.data
  res.status(200).send({
    pairings,
    leaderboard
  })
})

router.get('/par3contest', async (req, res) => {
  let response = await axios.get(`https://www.masters.com/en_US/scores/feeds/${year}/par3contest.json`)
  let leaderboard =response.data
  res.status(200).send({
    leaderboard
  })
})



module.exports = router