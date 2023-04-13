const HoleFlyover = ({ des_hole }) => {
  if (des_hole) {
    const { highlink, number } = des_hole
    return (
      <div>
        <h3>Hole Flyover</h3>
        <iframe className='vid-flyover' src={highlink} title={`Hole ${number} Flyover`}></iframe>
      </div>
    )
  }
}

export default HoleFlyover