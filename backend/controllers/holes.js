const router = require('express').Router()
const axios = require('axios')


// GET
// All Holes
router.get('/', async (req, res) => {
  let response = await axios.get(`https://www.masters.com/en_US/json/man/course/holes.json`)
  let holes = response.data
  res.send(holes)
})

// Get 1 hole
router.get('/:holeId', async (req, res) => {
  let holeId = Number(req.params.holeId)
  let response = await axios.get(`https://www.masters.com/en_US/json/man/course/holes.json`)
  let holes = response.data
  let des_hole
  if (!holeId || holeId % 1 !== 0) {
    console.log(`${holeId} is not valid`)
    res.redirect(`http://localhost:3000/course`)
  } else if (holeId < 1) {
    console.log(`${holeId} is not valid`)
    res.redirect(`http://localhost:3000/course`)
  } else if (holeId > 18) {
    console.log(`${holeId} is not valid`)
    res.redirect(`http://localhost:3000/course`)
  } else {
    des_hole = holes.holes[holeId - 1]
  }
  response = await axios.get(`https://www.masters.com/en_US/cms/feeds/course/hero_hole${holeId}.json`)
  let hero_hole = response.data

  response = await axios.get(`https://www.masters.com/en_US/scores/feeds/2023/stats/cstats_hole_${holeId}.json`)
  let cstats = response.data

  res.send({
    des_hole,
    hero_hole,
    cstats
  })
})

module.exports = router