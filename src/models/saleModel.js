const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  product: String,
  quantity: Number,
  price: Number,
  date: Date
},{ timestamps: true, versionKey: false }
);

const saleModel = mongoose.model('sales', DataSchema);

module.exports = saleModel;


