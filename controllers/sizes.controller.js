const Size = require('../models/size.model');
const NODE_ENV = process.env.NODE_ENV;

exports.getAllSizes = async (req, res) => {
  try {
    const result = await Size
      .find()
    if(!result) res.status(404).json({ products: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.getSizeById = async (req, res) => {
  try {
    const result = await Size .findById(req.params.id);
    if(!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

