import TableRowData from "./TableRowData"

const TableRows = ({ rows, columns }) => {
  const tableRow = rows.map((row, i) => {
    const { id } = row
    return (
        <TableRowData key={id || i} row={row} columns={columns} i={i} />
    )
  })
  return (
    <tbody>
      {tableRow}
    </tbody>
  )
}

export default TableRows 