function Card ({ driver }) {
  // image name teams
  return (
    <div>
      <h1>{driver.name.forename}</h1>
      <img src={driver.image} alt={driver.name.forename} />
      <p>{driver.teams}</p>
    </div>
  )
}

export default Card
