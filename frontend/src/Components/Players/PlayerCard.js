import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap//Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PastChampionJackets from '../Functions/PastChampionJackets';

const PlayerCard = ({ player }) => {
  let year = new Date().getFullYear()
  const { amateur, countryCode, countryName, first_masters, id, masters_wins, name, past_champion } = player

  return (
    <Button className='my-1' href={`players/${id}`}>
      <Card>
        <Card.Img variant="top" src={`https://images.masters.com/players/${year}/720x405/${id}.jpg`} alt={name}/>
        <Card.Body className='text-dark'>
          <Card.Title>{name} {amateur === true ? '(A)' : null}</Card.Title>
          <Card.Body>
            <Row>
              <Col>
                <img src={`https://www.masters.com/assets/images/flags/${countryCode}_sm.gif`} alt={countryCode}/> {countryName}
              </Col>
              <Col >
                {first_masters ? 'First Apperence' : PastChampionJackets(past_champion, masters_wins)}
              </Col>
            </Row>
          </Card.Body>
        </Card.Body>
      </Card>
    </Button>
  )  
}

export default PlayerCard
