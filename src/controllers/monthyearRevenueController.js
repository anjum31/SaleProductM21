const Sale = require('../models/saleModel'); 


exports.monthyearRevenue= async (req, res) => {
  try {
    const revenueByMonth = await Sale.aggregate([
      {
        $project: {
          month: { $month: '$date' },
          year: { $year: '$date' },
          revenue: { $multiply: ['$quantity', '$price'] },
        },
      },
      {
        $group: {
          _id: { month: '$month', year: '$year' },
          totalRevenue: { $sum: '$revenue' },
        },
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 },
      },
    ]);

    res.json(revenueByMonth);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error' });
  }
};
