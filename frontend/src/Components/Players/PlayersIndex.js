import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlayerCard from './PlayerCard';

const PlayersIndex = () => {
  let [roster, setRoster] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8080/players'
      const response = await fetch(url) 
      const resData = await response.json()
      if (resData) setRoster(resData)
    }
 
    fetchData()
  },[])
  
  const { players, past_champions_not_competing } = roster 
  
  if (players) {
    
  const playerList = players.map(player => {
    const { id } = player
    return (
      <Col key={id} xs={12} sm={6} md={4} >
        <PlayerCard player={player} />
      </Col>
    )
  })

    return (
      <Row className='m-1 p-1'>
        {playerList}
      </Row>
    )
  }
}

export default PlayersIndex