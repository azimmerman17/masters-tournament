const router = require('express').Router()
const axios = require('axios')

// GET
router.get('/', async (req, res) => {
  let response = await axios.get(`https://www.masters.com/en_US/cms/feeds/alerts.json`)
  let alert = response.data
  res.send(alert)
})

module.exports = router