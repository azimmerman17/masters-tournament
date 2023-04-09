import Table from 'react-bootstrap/Table'

import TableHeadings from './TableHeadings'
import TableRows from './TableRows'

const TraditionalLB = ({ leaderboard }) => {
  let columns = [
    'pos',
    'Player',
    'Total',
    'Thru',
    'Today',
    'R1',
    'R2',
    'R3',
    'R4',
    'Agg'
  ]
  return (
    <Table bordered size="sm">
      <TableHeadings columns={columns} />
      <TableRows players={leaderboard} columns={columns} />
    </Table>
  )
}

export default TraditionalLB