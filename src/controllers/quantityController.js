const Sale = require('../models/saleModel'); 


exports.quantity=async (req, res) => {
    try {
      const quantityByProduct = await Sale.aggregate([
        {
          $group: {
            _id: '$product',
            totalQuantity: { $sum: '$quantity' },
          },
        },
      ]);
  
      res.json(quantityByProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
    }
  };