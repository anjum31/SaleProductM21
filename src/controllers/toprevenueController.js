const Sale = require('../models/saleModel'); 

exports.toprevenue= async (req, res) => {
    try {
      const topProducts = await Sale.aggregate([
        {
          $group: {
            _id: '$product',
            totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
          },
        },
        {
          $sort: { totalRevenue: -1 },
        },
        {
          $limit: 5,
        },
      ]);
  
      res.json(topProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
    }
  };