const router = require('express').Router()
const axios = require('axios')


// will need to provide validation on the year (previous year's data will not work)
let year = new Date().getFullYear()

// Get
// All players
router.get('/', async (req, res) => {
  console.log(year)
  let players = await axios.get(`https://www.masters.com/en_US/cms/feeds/players/${year}/players.json`)
  res.send(players.data)
})

// Get 1 player
router.get('/:playerId', async (req, res) => {
  let playerId = Number(req.params.playerId)
  // add 404 error if NAN
  let players = await axios.get(`https://www.masters.com/en_US/cms/feeds/players/${year}/players.json`)
  let golfer = players.data.players.filter(player => Number(player.id) === playerId)
  // add 404 if not found
  golferData = await axios.get(`https://www.masters.com/en_US/scores/feeds/${year}/track/${playerId}.json`)
  const { data } = golferData
  golfer.data = data
  console.log(data)
  res.send({
    golfer,
    data
  })

})

module.exports = router