import toParColor from "../Functions/ToParColor"

const TableRowData = ({ player, columns }) => {
  const { amateur, display_name2, first_name, id, pos, round1, round2, round3, round4, teetime, thru, today, topar, total } = player
  const year = new Date().getFullYear()
  
  let roundsPlayed = 0
  if (round4.roundStatus === 'Finished') roundsPlayed = 4
  else if (round3.roundStatus === 'Finished') roundsPlayed = 3
  else if (round2.roundStatus === 'Finished') roundsPlayed = 2
  else if (round1.roundStatus === 'Finished') roundsPlayed = 1

  const data = columns.map((column) => {
    switch (column) {
      case 'pos':
        return (
          <td key={`${id}-${column}`}>
            <strong>
              {pos}
            </strong>
          </td>
        )
      case 'Player':
        return (
          <td key={`${id}-${column}`} className='text-start'>
            <img src={`https://images.masters.com/players/${year}/240x240/${id}.jpg`} alt='' className='img-thumbnail-xsm rounded-circle mx-2'/>
            <strong>{first_name} {display_name2}</strong>
            {amateur === true ? ' (A)' : null} 
          </td>
        )
        case 'Total':
        return (
          <td key={`${id}-${column}`} style={{color: toParColor(topar)}}>
            <strong>
              {topar}
            </strong>
          </td>
        )
      case 'Thru':
        if (thru === '') {
          return <td key={`${id}-teeTime`} colSpan={2}>{teetime}</td>
        }
        return <td key={`${id}-${column}`}>{thru}</td>
      case 'Today':
        if (thru === '') {
          return null
        }
        return <td key={`${id}-${column}`}>{today}</td>
      case 'R1':
        return <td key={`${id}-${column}`} style={{color: toParColor(round1.total - 72)}}>{round1.total}</td>
      case 'R2':
        return <td key={`${id}-${column}`} style={{color: toParColor(round2.total - 72)}}>{round2.total}</td>
      case 'R3':
        return <td key={`${id}-${column}`} style={{color: toParColor(round3.total - 72)}}>{round3.total}</td>
      case 'R4':
        return <td key={`${id}-${column}`} style={{color: toParColor(round4.total - 72)}}>{round4.total}</td>
      case 'Agg':
        return (
          <td key={`${id}-${column}`} style={{color: toParColor(total - roundsPlayed * 72)}}>
            <strong>
              {total}
            </strong>
          </td>
        )
      default:
        return <td key={`${id}-${column}`}>N/A</td>
    }
  })
  return (
    <tr>
      {data}
    </tr>
  )
}

export default TableRowData
