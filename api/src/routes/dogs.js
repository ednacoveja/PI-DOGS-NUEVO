const { Router} = require("express");
const {
  buscarDogID,
  buscarDogNombre,
  crearDog
} = require ('./controladores')

const router = Router()

router.get("/",buscarDogNombre);

router.get("/:idRaza",buscarDogID);

router.post("/",crearDog );

module.exports = router