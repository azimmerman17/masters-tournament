import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useContext } from 'react'

import { DataContext } from '../../Context/DataContext'
import PastChampionJackets from "../Functions/PastChampionJackets"
import toParColor from "../Functions/ToParColor"

const PlayerHeader = ({ bio, golfer }) => {
  let year = new Date().getFullYear()
  const scoreData =  useContext(DataContext)
  const { amateur, countryCode, countryName, first_masters, id, masters_wins, name, past_champion } = golfer
  let { player } = scoreData.leaderboard.data
  player = player.filter(player => Number(player.id) === Number(id))
  const golferScore = player[0]
  const { pos, newStatus, topar, teetime } = golferScore
  console.log(golferScore)

  const playerStatus = (newStatus) => {
    if (newStatus === 'W') {
      return 'WD'
    } else if (newStatus === 'C') {
      return 'MC'
    }
  }

  return (
    <Row >
      <Col md={2} className=' m-1 p-1'>
        <img src={`https://images.masters.com/players/${year}/240x240/${id}.jpg`} alt={name} className='img-thumbnail-lg rounded-circle'/>
      </Col>
      <Col md={6} className='text-start'>
        <Row className='m-1 p-1'>
          <Col>
            <h2>{name} {amateur ? '(A)' : null}</h2>
          </Col>
        </Row>
        <Row className='m-1 p-1'>
          <Col>
            <img src={`https://www.masters.com/assets/images/flags/${countryCode}_sm.gif`} alt={countryCode}/> {countryName}
          </Col>
        </Row>
        <Row className='m-1 p-1'>
          <Col>
            {first_masters ? 'First Apperence' : PastChampionJackets(past_champion, masters_wins)}
          </Col>
        </Row>
      </Col>
      <Col className='align-center'>
        <h4>{pos !== '' ? pos : playerStatus(newStatus)}</h4>
        <p>
          <small>
            pos
          </small>
        </p>
      </Col>
      <Col>
        <h4 style={{color: toParColor(topar)}}>{topar}</h4>
        <p>
          <small>
            score
          </small>
        </p>
      </Col>
      <Col>
        <h4>{teetime === '' ? ' ' : teetime}</h4>
        <p>
          <small>
            tee time
          </small>
        </p>
      </Col>
    </Row>
  )
}

export default PlayerHeader
