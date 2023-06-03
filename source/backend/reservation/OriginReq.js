const db = require('../DbConfig');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
  try {
    let countriesProvinces = await getCountries();
    countriesProvinces.push(await getProvinces());
    res.json(countriesProvinces);
  } catch (error) {
    console.log('Error al obtener paises o provincias: ', error);
  }
})

async function getCountries () {
  try {
    const result = await db.executeQuery(
      "SELECT * FROM PAIS"
    )
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
};

async function getProvinces () {
  try {
    const result = await db.executeQuery(
      "SELECT * FROM ProvinciaCRC"
    )
    return result.recordsets[0];
  } catch (error) {
    throw error;
  }
};

module.exports = { router };
