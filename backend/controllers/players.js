const router = require('express').Router()
const axios = require('axios')


// will need to provide validation on the year (previous year's data will not work)
let year = new Date().getFullYear()

// Get
// All players
router.get('/', async (req, res) => {
  console.log(year)
  let response = await axios.get(`https://www.masters.com/en_US/cms/feeds/players/${year}/players.json`)
  let players = response.data
  res.send(players)
})

// Get 1 player
router.get('/:playerId', async (req, res) => {
  let playerId = Number(req.params.playerId)
  // add 404 error if NAN
  let response = await axios.get(`https://www.masters.com/en_US/cms/feeds/players/${year}/players.json`)
  let resData = response.data
  let golfer = resData.players.filter(player => Number(player.id) === playerId)
  // add 404 if not found
  playerResponse = await axios.get(`https://www.masters.com/en_US/scores/feeds/${year}/track/${playerId}.json`)
  let data = playerResponse.data
  res.send({
    golfer,
    data
  })

})

module.exports = router