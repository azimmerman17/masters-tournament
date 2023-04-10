import Table from 'react-bootstrap/Table'

import TableHeadings from '../Tables/TableHeadings'
import TableRows from '../Tables/TableRows'

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
      <TableRows rows={leaderboard} columns={columns} />
    </Table>
  )
}

export default TraditionalLB