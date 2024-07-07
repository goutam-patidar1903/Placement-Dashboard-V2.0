const express=require('express')
const {getCompaniesCount} = require('../controllers/CompanyController')

const router = express.Router()

//to get companies name and there count
router.get('/',getCompaniesCount)

module.exports = router;