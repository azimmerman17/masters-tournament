import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'


const HoleImages = ({ imageList, hole }) => {
  const [index, setIndex] = useState(0)
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  
  const carouselImages = imageList.map((image, i) => {
    const { caption, large }= image
    return (
      <Carousel.Item key={`${i}-Carousel`}>
        <img
          src={large}
          alt={caption}
          />
      </Carousel.Item>
    )
  })
  try {
    
    const { des_hole } = hole
    const { number, plant, par, yds } = des_hole
    
    return (
      <Card>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {carouselImages}
        </Carousel>
        <Card.Body>
          <Row>
            <Col className='col-8'>
              <Card.Title>
                  Hole #{number} - {plant}
              </Card.Title>
            </Col>
            <Col className='col-2'>
                <h4>{par}</h4>
                <p>Par</p>
            </Col>
            <Col className='col-2'>
                <h4>{yds}</h4>
                <p>Yards</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      )
  } catch (error) {
    
  }
}

export default HoleImages