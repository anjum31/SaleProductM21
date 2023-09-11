const Sale = require('../models/saleModel'); 

exports.averagePriceCount=async (req, res) => {
    try {
      const averagePrice = await Sale.aggregate([
        {
          $group: {
            _id: null,
            averagePrice: { $avg: '$price' },
          },
        },
      ]);
  
      if (averagePrice.length > 0) {
        res.json({ averagePrice: averagePrice[0].averagePrice });
      } else {
        res.json({ averagePrice: 0 });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
    }
  };