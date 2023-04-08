import { useContext, useState } from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { DataContext } from '../../Context/DataContext'
import Container from 'react-bootstrap/esm/Container'
import LeaderHeader from './LeadersHeader'

const Leaders = () => {
  const leadersData =  useContext(DataContext)
  let leaders = []
  let round
  
  try {
    const { leaderboard, pairings } = leadersData
    const { currentRound } = pairings
    const { data } = leaderboard
    const { player } = data
    for (let i = 0; i < 5; i++) {
      leaders[i] = player[i]
    }
    round = currentRound
  } catch (error) {
    
  }

  const tournamentLeaders = leaders.map(leader => {
    const { id } = leader
    return (
      <Col className='col border border-1' key={`leader-${id}`}><LeaderHeader leader={leader} currentRound={round}/></Col>
    )
  })

  return (
    <Container fluid className='p-1'>
      <Row className='header'>
        <Col className='col-1'>
        <h3>R{round}</h3>
        </Col>
        {tournamentLeaders}
      </Row>
    </Container>
  )
}

export default Leaders