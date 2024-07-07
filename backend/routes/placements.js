const express = require('express')
const {getPlacements , createPlacement , deletePlacement , updatePlacement} = require('../controllers/PlacementController')

const router=express.Router()

//GET all record
router.get('/',getPlacements);

//CREATE record
router.post('/',createPlacement);

//DELETE record
router.delete('/:id',deletePlacement);

//UPDATE record
router.patch('/:id',updatePlacement);

module.exports = router;