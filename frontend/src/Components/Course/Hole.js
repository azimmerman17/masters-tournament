import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { AiOutlineCaretLeft } from 'react-icons/ai'

import HoleImages from './HoleImages'
import Stack from 'react-bootstrap/Stack'
import HoleStats from './HoleStats'
import HoleFlower from './HoleFlower'
import HoleFlyover from './HoleFlyover'
import HoleMap from './HoleMap'

const Hole = () => {
  const { holeId } = useParams()
  let [hole, setHole] = useState({})
  let imageList = []
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8080/holes/${holeId}`
      const response = await fetch(url) 
      const resData = await response.json()
      if (resData) setHole(resData)
    }
  
    fetchData()
  },[holeId])

  try {
    const { hero_hole } = hole
    const { images } = hero_hole
    images.forEach(image =>{
      imageList.push(image)
    })
  } catch (error) {}
  const { des_hole, cstats } = hole 

  const description = () => {
    if (des_hole) {
      const { holeDesc, hist } =des_hole
      return (
        <div style={{width: '80%', margin: 'auto'}}>
          <h3>Hole Description</h3>
          <p className='text-start'>{holeDesc}</p>
          <p className='text-start'>{hist}</p>
        </div>
      )
    }
  }

  return (
    <Stack gap={3}>
      <a href='/course' className='text-start text-decoration-none'>
        <AiOutlineCaretLeft /> Back to Course
      </a>
      <HoleImages imageList={imageList} hole={hole} />
      <Stack gap={3} className='main'>
        {description()}
        <HoleStats des_hole={des_hole} cstats={cstats} />
        <HoleFlower des_hole={des_hole} />
        <HoleFlyover des_hole={des_hole} />
        <HoleMap des_hole={des_hole} />
      </Stack>
    </Stack>
  )
}

export default Hole