const router = require('express').Router()
const axios = require('axios')

// GET
router.get('/', async (req, res) => {
  let response = await axios.get(`https://www.masters.com/en_US/cms/feeds/home/days.json`)
  let data = response.data

  let currentDay = data.days[0]
  const { file } = currentDay

  response = await axios.get(`https://www.masters.com/${file}`)
  let news = response.data

  response = await axios.get('https://www.masters.com/en_US/cms/feeds/home/home.json')
  let home = response.data


  res.send({
    currentDay,
    news,
    home
  })
})

module.exports = router