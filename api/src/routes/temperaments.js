const { Router} = require("express");
const {guardarTemperamentsDB} = require ('./controladores')

const router = Router()

router.get("/", guardarTemperamentsDB);

module.exports = router