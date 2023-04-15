import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap//Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTshirt } from 'react-icons/fa'



const PlayerCard = ({ player }) => {
    const { amateur, countryCode, countryName, first_masters, id, masters_wins, name, past_champion } = player

    const winner = () => {
      if (past_champion) {
        let wins = []
        for (let i = 0; i < masters_wins; i++) {
          wins.push(i)    
        }

        const greenjackets = wins.map(win => {
          return <FaTshirt key={win} style={{color: '#446f42', height: '1.25em', width: '1.25em'}}/>
        })

        return <div>{greenjackets}</div>
      }
    }
    return (
      <Button className='my-1' href={`players/${id}`}>
        <Card>
          <Card.Img variant="top" src={`https://images.masters.com/players/2023/720x405/${id}.jpg`} alt={name}/>
          <Card.Body className='text-dark'>
            <Card.Title>{name} {amateur === true ? '(A)' : null}</Card.Title>
            <Card.Body>
              <Row>
                <Col>
                  <img src={`https://www.masters.com/assets/images/flags/${countryCode}_sm.gif`} alt={countryCode}/> {countryName}
                </Col>
                <Col >
                  {first_masters ? 'First Apperence' : winner() }
                  {/* {Past} {past_champion} {masters_wins} */}
                </Col>
              </Row>
            </Card.Body>
          </Card.Body>
        </Card>
      </Button>
    )  
}

export default PlayerCard
