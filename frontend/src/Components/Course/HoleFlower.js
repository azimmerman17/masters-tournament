import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const HoleFlower = ({ des_hole }) => {
  if (des_hole) {
    const { flower, plant, plantText } = des_hole
    return (
      <div>
        <h3>Hole Flower</h3>
        <Row>
          <Col className='col-4'>
            <img src={`https://www.masters.com${flower}`} alt={plant} className="img-flower"/>
          </Col>
          <Col className='col-8 text-start'>
            {plantText}
          </Col>
        </Row>
      </div>
    )
  }
}

export default HoleFlower