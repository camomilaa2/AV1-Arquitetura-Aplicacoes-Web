const express = require('express');
const router = express.Router();
const markerController = require('../controllers/markerController');

// Rotas para consultar todas as localizações e inserir uma nova localização
router.get('/location', markerController.getAllLocations);
router.post('/newlocation', markerController.createLocation);
router.get('/location/:id', markerController.getLocationById);
router.put('/updatelocation/:id', markerController.updateLocationById);
router.delete('/deletelocation/:id', markerController.deleteLocationById);

module.exports = router;
