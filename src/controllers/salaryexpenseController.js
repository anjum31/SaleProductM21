const Sale = require('../models/saleModel'); 

exports.salaryexpense= async (req, res) => {
    try {
      const departmentSalaryExpense = await Sale.aggregate([
        {
          $group: {
            _id: '$department',
            totalExpense: { $sum: { $multiply: ['$quantity', '$price'] } },
          },
        },
        {
          $project: {
            _id: 0,
            department: '$_id',
            totalExpense: 1,
          },
        },
      ]);
  
      res.json(departmentSalaryExpense);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error' });
    }
  };