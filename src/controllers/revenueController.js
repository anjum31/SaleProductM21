const saleModel = require("../models/saleModel");



exports.revenue=async (req, res) => {
  try {
    const totalRevenue = await Sale.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: { $multiply: ['$quantity', '$price'] } },
        },
      },
    ]);

    if (totalRevenue.length > 0) {
      res.json({ totalRevenue: totalRevenue[0].total });
    } else {
      res.json({ totalRevenue: 0 });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error' });
  }
};


