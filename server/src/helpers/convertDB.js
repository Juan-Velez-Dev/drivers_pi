const convertDB = (driver) => {
  const teams = driver.teams?.map(team => team.name)
  newObj = {
    id: driver.id,
    surname: driver.surname,
    forename: driver.forename,
    image: driver.image,
    dob: driver.dob,
    nationality: driver.nationality,
    teams: teams,
    description: driver.description
  }
  return newObj
}

module.exports = convertDB