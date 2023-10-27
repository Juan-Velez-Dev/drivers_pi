const convertAPI = (driver) => {
  newObj = {
    id: driver.id,
    surname: driver.name.surname,
    forename: driver.name.forename,
    image: driver.image.url,
    dob: driver.dob,
    nationality: driver.nationality,
    teams: driver.teams ? driver.teams.split(',') : [],
    description: driver.description
  }
  return newObj
}

module.exports = convertAPI