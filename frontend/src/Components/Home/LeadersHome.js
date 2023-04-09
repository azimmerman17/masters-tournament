import Stack from 'react-bootstrap/Stack';

import TraditionalLB from '../LeaderBoard/TraditionalLB';

const LeadersHome = ({ leaderboardData }) => {
  const { leaderboard } = leaderboardData
  const { player } = leaderboard.data

  let top10 = []

  for (let i = 0; i < 10; i++) {
    top10[i] = player[i]
  }
  return (
    <Stack gap={2}>
      <h3>Leaders</h3>
      <TraditionalLB leaderboard={top10} />
      

    </Stack>
  )
}

export default LeadersHome