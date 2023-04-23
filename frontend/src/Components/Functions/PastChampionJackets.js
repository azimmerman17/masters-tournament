import { FaTshirt } from 'react-icons/fa'

const PastChampionJackets = (past_champion, masters_wins) => {
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

export default PastChampionJackets