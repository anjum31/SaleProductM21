
const express = require('express');

const averagePriceController = require('../controllers/averagePriceController');
const highestQuantitySoldController = require("../controllers/highestQuantitySoldController");
const monthyearRevenueController = require("../controllers/monthyearRevenueController");
const quantityController = require("../controllers/quantityController");
const revenueController = require("../controllers/revenueController");
const salaryexpenseController = require("../controllers/salaryexpenseController");
const toprevenueController = require("../controllers/toprevenueController");

const router = express.Router();

router.get('/averagePriceCount',averagePriceController.averagePriceCount)
router.get('/highestQuantitySold',highestQuantitySoldController.highestQuantitySold)
router.get('/monthyearRevenue', monthyearRevenueController.monthyearRevenue)
router.get('/quantityController',quantityController.quantity)
router.get('/revenue',revenueController.revenue)
router.get('/salaryexpense',salaryexpenseController.salaryexpense)
router.get('/toprevenue',toprevenueController.toprevenue)


module.exports=router;