//add course model

const mongoose = require("mongoose");

const admin = new mongoose.model("admin", {
  image: String,
  coursename: String,
  discription: String,
  nextbatch: String,
  duration: String,
  coursefeesonline: Number,
  coursefeesoffline: Number,
});

const clients = new mongoose.model("clients", {
  username: String,
  phonenumber: Number,
  email: String,
  cityname: String,
  enquiry: String,
});

const adminregistration = new mongoose.model("adminregistration", {
  username: String,
  password: String,
  email: String,
  role: String,
  admissiondetail: [],
});

module.exports = { admin, clients, adminregistration };
