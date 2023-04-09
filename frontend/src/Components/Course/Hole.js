import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { AiOutlineCaretLeft } from 'react-icons/ai'

import HoleImages from './HoleImages'
import Stack from 'react-bootstrap/Stack'

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
  // console.log(hole)
  // console.log(imageList)
  return (
    <Stack gap={2}>
      <a href='/course' className='text-start text-decoration-none'>
        <AiOutlineCaretLeft /> Back to Course
      </a>
      <HoleImages imageList={imageList} hole={hole} />
    </Stack>
  )
}

export default Hole