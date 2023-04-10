import Table from 'react-bootstrap/Table'
import TableHeadings from '../Tables/TableHeadings'
import TableRows from '../Tables/TableRows'

const HoleStats = ({ des_hole, cstats }) => {
  const columns = [
    'Round',
    'Par',
    'Average	Rank',
    'Eagles -',
    'Birdies',
    'Pars',
    'Bogeys',	
    'Double Bogeys +',
  ]
  let rows = []

  try {
    const { hole } = cstats
    const { round1, round2, round3, round4 } = hole
    rows.push(round1)
    rows.push(round2)
    rows.push(round3)
    rows.push(round4)
  } catch (error) {}

  return (
    <div>
      <h3>Hole Stats</h3>
      <Table bordered size="sm">
        <TableHeadings columns={columns} />
        <TableRows rows={rows} columns={columns} />
      </Table>
    </div>
  )
}

export default HoleStats