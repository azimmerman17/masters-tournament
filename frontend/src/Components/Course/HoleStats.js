import Table from 'react-bootstrap/Table'
import TableHeadings from '../Tables/TableHeadings'
import TableRows from '../Tables/TableRows'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


const HoleStats = ({ des_hole, cstats }) => {
  const columns = [
    'Round',
    'Par',
    'Average',
    'Rank',
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

  const holeAverages = () => {
    if (des_hole) {
      const { lstYrAvSrks, highAvStks, lowAvStks, cumAvSrks } = des_hole
      return (
        <Row>
          <Col>
              <p>Historical Avg: <strong>{cumAvSrks}</strong></p>
          </Col>
          <Col>
              <p>Lowest Year: <strong>{lowAvStks}</strong></p>
          </Col>
          <Col>
              <p>Highest Year: <strong>{highAvStks}</strong></p>
          </Col>
          <Col>
              <p>Last Year: <strong>{lstYrAvSrks}</strong></p>
          </Col>
        </Row>

      )

    }
  }

  return (
    <div>
      <h3>Hole Stats</h3>
      <Table bordered size="sm">
        <TableHeadings columns={columns} />
        <TableRows rows={rows} columns={columns} />
      </Table>
      {holeAverages()}
    </div>
  )
}

export default HoleStats