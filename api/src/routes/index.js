const { Router } = require("express");
const dogsRoutes=require("./dogs")
const tempRoutes=require("./temperaments")
const router = Router()

router.use("/dogs",dogsRoutes)
router.use("/temperaments",tempRoutes)

module.exports = router;
