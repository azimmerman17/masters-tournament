
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const PlayersFilter = ({ filter, filters, setFilter  }) => {
  return (
    <>
      <ButtonGroup className='bg-white'>
        {
          filters.map((filterName, i) => {
            return (
              <ToggleButton
                key={`radio-${filterName}`}
                id={`radio-${filterName}`}
                type="radio"
                variant={filter === filterName ? 'outline-primary' : 'outline-secondary'}
                name="radio"
                value={filterName}
                checked={filter === filterName}
                onChange={(e) => setFilter(e.currentTarget.value)}
              >
                {filterName}
              </ToggleButton>
            )
          })
        }
      </ButtonGroup>
    </>
)
}

export default PlayersFilter