import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import PlayerCard from './PlayerCard';
import PlayersFilter from './PlayersFilter';

const PlayersIndex = () => {
  let [roster, setRoster] = useState({})
  let [filter, setFilter] = useState('All Players')

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8080/players'
      const response = await fetch(url) 
      const resData = await response.json()
      if (resData) setRoster(resData)
    }
 
    fetchData()
  },[])

  const filters = [
    'All Players',
    'Professionals',
    'Amatuers',
    'United States',
    'Internationals',
    'Rookies',
    'Past Champions'
  ]
  
  console.log(filter)
  const { players, past_champions_not_competing } = roster 
  
  if (players) {
    
  const playerList = players.map(player => {
    const { id, amateur, international, first_masters, past_champion } = player
    console.log(player)
    let show
    switch (filter) {
      case 'Professionals':
        amateur ? show = false : show = true
        break
      case 'Amatuers':
        amateur ? show = true : show = false
        break
      case 'United States':
        international ? show = false : show = true
        break
      case 'Internationals':
        international ? show = true : show = false
        break
      case 'Rookies':
        first_masters ? show = true : show = false
        break
      case 'Past Champions':
        past_champion ? show = true : show = false
        break;
      default:
        show = true
        break;
    }
    if (show) {
      return (
        <Col key={id} xs={12} sm={6} md={4} >
          <PlayerCard player={player} />
        </Col>
      )
    }
  })

    return (
      <Stack gap={3}>
        <PlayersFilter filter={filter} setFilter={setFilter} filters={filters} />
        <Row className='m-1 p-1'>
          {playerList}
        </Row>
      </Stack>
    )
  }
}

export default PlayersIndex