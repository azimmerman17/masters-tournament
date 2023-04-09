const TableHeadings = ({ columns }) => {
  const headingColumns = columns.map(column => {
    return <th key={`header-${column}`}>{column}</th>
  })

  return (
    <thead>
      <tr>
        {headingColumns}
      </tr>
    </thead>
  )
}

export default TableHeadings