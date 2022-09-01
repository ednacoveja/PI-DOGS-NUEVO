const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
const {getAllDogs} = require ("./allDogs")



const guardarTemperamentsDB=async (req, res) => {
  const infoGET = await axios.get(`http://localhost:3001/dogs`);
  const array_temperaments = infoGET.data.map((dog) => dog.temperament);
  const temps = array_temperaments.toString().split(",");
  temps.forEach((temp) => {
    Temperament.findOrCreate({
      //findOrCreate busca si esta entidad ya esta creada en el modelo si si no hace nada de lo contrario la crea
      where: { name: temp }, // cada occupation sera el elemento que se itera en el array
    });
  });
  const allTemperaments = await Temperament.findAll();
  res.send(allTemperaments);
}



const buscarDogID =  async (req, res) => {
  const { idRaza } = req.params;
  const allDogs = await getAllDogs();
  if (idRaza) {
    let buscar = await allDogs.filter((dog) => dog.id == idRaza);
    buscar.length
      ? res.status(200).json(buscar)
      : res.status(404).send("no se encontro");
  }
}

const buscarDogNombre =  async (req, res) => {
  const { name } = req.query;
  let dogsTotal = await getAllDogs();
  if (name) {
    let dogName = await dogsTotal.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    dogName.length
      ? res.status(200).send(dogName)
      : res.status(404).send("Dog not found.Sorry!");
  } else {
    res.status(200).send(dogsTotal);
  }
}

const crearDog= async (req, res) => {
  const {
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    image,
    life_span,
    temperament,
  } = req.body;

  const fixedHeight = [];
  fixedHeight.push(height_min, height_max);
  const fixedWeight = [];
  fixedWeight.push(weight_min, weight_max);

  let createDog = await Dog.create({
    name,
    height:fixedHeight,
    weight:fixedWeight,
    image,
    life_span,
  });

  const buscarTemps_db=await Temperament.findAll({
    where:{name:temperament}
  })
  createDog.addTemperament(buscarTemps_db)
  res.send("Perro creado con exito")
}


module.exports = {
  buscarDogID,
  buscarDogNombre,
  crearDog,
  guardarTemperamentsDB
};
