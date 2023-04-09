import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ToParColor from "../Functions/ToParColor"

const LeaderHeader = ({ leader }) => {
  const { display_name, pos, topar, today, thru, teetime, id } = leader
  let year = new Date().getFullYear()

  const round = () => {
    if (thru) {
      return (
        <small>
          <span style={{color: ToParColor(today)}}>{today}</span>
          <span> thru {thru}</span>
        </small>
      )
    }
    return (
      <small>
        <span>{teetime}</span>
      </small>
    )
  }

  return (
    <Container fluid className='p-1 m-0'>
      <Row>
        <Col className="col-1">
          <small>{pos}</small>
        </Col>
        <Col className='col-5'>
          <img className='img-thumbnail rounded-circle' src={`https://images.masters.com/players/${year}/240x240/${id}.jpg`} alt={display_name} />
        </Col>
        <Col className='col-5'>
          <Row>
            <h5>{display_name}</h5>
          </Row>
          <Row>
            <h5>
              <span>Total: </span>
              <span style={{color: ToParColor(topar)}}>{topar}</span>
            </h5>
          </Row>
          <Row>
            {round()}
          </Row>
        </Col>
      </Row>
    </Container>

  )
}

export default LeaderHeader
