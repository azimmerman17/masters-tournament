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
      const { plant, imageL, number, holeDesc } = hole
      const { src } = imageL
      return (
        <Col key={plant} className='col-4 my-1'>
          <Button nclassName='m-1 p-1' href={`/course/${number}`}>
            <Card>
              <Card.Img variant="top" src={`https://www.masters.com${src}`} alt={`Hole ${number} Photo`}/>
              <Card.Body>
                <Card.Title className='text-dark'>{plant}</Card.Title>
                <Card.Text className='text-dark'>{holeDesc}</Card.Text>
              </Card.Body>
            </Card>
          </Button>  
        </Col>
      )
    })  
  } catch (error) {}
  

  console.log(course)

  return (
    <Container>
      <Row className='p-1 m-1'>
        {courseHoles}
      </Row>
    </Container>
    )
}

export default CourseIndex