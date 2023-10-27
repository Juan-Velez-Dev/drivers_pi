const { Drivers, Teams } = require('../../db');
const convertDB = require('../../helpers/convertDB')


const getDriverDB = async () => {
  try {
    const data = await Drivers.findAll({
      include: [
        {
          model: Teams,
          attribute: ['name']
        }
      ]
    })
    let result = data?.map((driver) => {
      return convertDB(driver)
    })
    return result
  } catch (error) {
    return null
  }
}

module.exports = getDriverDB