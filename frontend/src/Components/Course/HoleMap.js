const HoleMap = ({ des_hole }) => {
  if (des_hole) {
    const { number } = des_hole
    return (
      <div>
        <h3>Hole Map</h3>
        <img className='hole-map' src={`https://www.masters.com/assets/images/course/angc/hole-map-${number}.jpg`} alt={`Hole ${number} Map`} />
      </div>
    )

  }
}

export default HoleMap