const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  tourPackage: { type: String, required: true },
  travelDate: { type: Date },
  travelers: { type: Number },
  message: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', enquirySchema);
