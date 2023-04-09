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
  if (!holeId || holeId % 1 !== 0) {
    console.log(`${holeId} is not valid`)
    res.redirect('/holes')
  } else if (holeId < 1) {
    console.log(`${holeId} is not valid`)
    res.redirect('/holes')
  } else if (holeId > 18) {
    console.log(`${holeId} is not valid`)
    res.redirect('/holes')
  } else {
    let hole = holes.holes[holeId - 1]
    res.send(hole)
  }
})

module.exports = router