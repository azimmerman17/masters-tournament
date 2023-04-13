import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

const CourseIndex = () => {
  let [course, setCourse] = useState({})
  let courseHoles
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8080/holes'
      const response = await fetch(url) 
      const resData = await response.json()
      if (resData) setCourse(resData)
    }
 
    fetchData()
  },[])
  try {
    const { holes } = course
    courseHoles = holes.map(hole => {
      const { plant, imageL, number, par, yds } = hole
      const { src } = imageL
      return (
        <Col key={plant} className='col-4 my-1'>
          <Button className='m-1 p-2' href={`/course/${number}`}>
            <Card>
              <Card.Img variant="top" src={`https://www.masters.com${src}`} alt={`Hole ${number} Photo`}/>
              <Card.Body className='text-dark'>
                <Card.Title>Hole #{number} - {plant}</Card.Title>
                <Card.Body>
                 <Row className='m-0'>
                  <Col className='col-4 text-center'>
                    <p className='m-0'>
                      Par
                    </p>
                    <p>
                      <strong className='m-0'>
                        {par}
                      </strong>
                    </p>
                  </Col>
                  <Col className='col-4'></Col>
                  <Col className='col-4 text-center'>
                    <p className='m-0'>
                      Dist
                    </p>
                    <p>
                      <strong className='m-0'>
                        {yds}
                      </strong>
                    </p>
                  </Col>
                 </Row>
                </Card.Body>
              </Card.Body>
            </Card>
          </Button>  
        </Col>
      )
    })  
  } catch (error) {}
  
  return (
    <Container>
      <Row className='p-1 m-1'>
        {courseHoles}
      </Row>
    </Container>
    )
}

export default CourseIndex