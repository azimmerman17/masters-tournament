import TableRowData from "./TableRowData"

const TableRows = ({ players, columns }) => {
  // console.log(columns)
  // console.log(players)

  const tableRow = players.map(player => {
    const { id } = player
    return (
        <TableRowData key={id} player={player} columns={columns} />
    )
  })
  return (
    <tbody>
      {tableRow}
    </tbody>
  )
}

export default TableRows 