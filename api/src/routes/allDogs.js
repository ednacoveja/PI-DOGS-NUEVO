const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
const { API_KEY } = process.env;



const getAllAPI = async () => {
  try {
    const API = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );

    const API_INFO = await API.data.map((dog) => {
      let temperament_array = [];
      if (dog.temperament) {
        temperament_array = dog.temperament.split(", ");
      }
      let altura_array = [];
      if (dog.height) {
        altura_array = dog.height.metric.split(" - ");
      }
      let peso_array = [];
      if (dog.weight) {
        peso_array = dog.weight.metric.split(" - ");
      }
      return {
        id: dog.id,
        name: dog.name,
        height: altura_array,
        weight: peso_array,
        image: dog.image.url,
        life_span: dog.life_span,
        temperament: temperament_array,
      };
    });
    return API_INFO;
  } catch (error) {
    throw "El perro no existe";
  }
};



const getAllDB = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
};




const getAllDogs = async () => {
  const apiInfo = await getAllAPI(); //guardamos en una constante el array de todos los characteres que esten en la API
  const dbInfo = await getAllDB(); //guardamos en una constante un array de todos los characters que esten en la base de datos (los que crea el usuario)
  const infoTotal = apiInfo.concat(dbInfo); //concatenamos ambos arrays en uno solo
  return infoTotal; // retornamos dicho array
};


module.exports = {getAllDogs};
  