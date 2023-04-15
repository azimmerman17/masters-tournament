import Stack from 'react-bootstrap/Stack';
import { FaTshirt } from 'react-icons/fa'


const PastChampionsNotCompeting = ({ past_champions_not_competing }) => {
  const pastChampions = past_champions_not_competing.map((champion, i) => {
    const { firstname, lastname } = champion
    return <p key={i} className='p-0 m-0'><FaTshirt style={{color: '#446f42'}}/> {firstname} {lastname}</p>

  })

  return (
    <Stack gap={2}>
      <h3>Past Champions Not Competing</h3>
      {pastChampions}
    </Stack>
  )
}

export default PastChampionsNotCompeting