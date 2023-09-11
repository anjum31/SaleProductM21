const Sale = require('../models/saleModel'); 

exports.highestQuantitySold=async (req, res) => {
    try {
      const highestQuantitySold = await Sale.aggregate([
        {
          $group: {
            _id: {
              date: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
              product: '$product',
            },
            totalQuantity: { $sum: '$quantity' },
          },
        },
        {
          $sort: { totalQuantity: -1 },
        },
        {
          $limit: 1,
        },
        {
          $project: {
            _id: 0,
            product: '$_id.product',
            totalQuantity: 1,
            date: '$_id.date',
          },
        },
      ]);
  
      res.json(highestQuantitySold);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
    }
  };