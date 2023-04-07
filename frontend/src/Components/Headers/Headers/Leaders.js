import { useContext } from 'react'
import { DataContext } from '../../../Context/DataContext'

const Leaders = () => {
  const data = useContext(DataContext)
  console.log(data)

  return (
    <h1>Leaders</h1>
  )
}

export default Leaders