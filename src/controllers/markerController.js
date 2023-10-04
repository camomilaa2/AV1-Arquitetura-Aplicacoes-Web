const Location = require('../models/Marker');

// Função para criar uma nova localização
exports.createLocation = async (req, res) => {
  try {
    const newLocation = new Location(req.body);
    const savedLocation = await newLocation.save();
    res.status(201).json(savedLocation);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a localização. ' + error });
  }
};

// Função para listar localização por id
exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ error: 'Localização não encontrada' });
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao encontrar a localização' });
  }
};

// Função para listar todas as localizações
exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as localizações' });
  }
};

// Função para atualizar uma localização
exports.updateLocationById = async (req, res) => {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedLocation) {
      return res.status(404).json({ error: 'Localização não encontrada' });
    }
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a localização' });
  }
};

// Função para excluir uma localização
exports.deleteLocationById = async (req, res) => {
  try {
    const deletedLocation = await Location.findByIdAndRemove(req.params.id);
    if (!deletedLocation) {
      return res.status(404).json({ error: 'Localização não encontrada' });
    }
    res.json({ message: 'Deletei aqui doido' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a localização' });
  }
};
