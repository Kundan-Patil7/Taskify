const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://23kundanrajendra:MnRXP5fopDxt4p4j@urbannest.pf1zp.mongodb.net/todo1');
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

module.exports = connectDb;
