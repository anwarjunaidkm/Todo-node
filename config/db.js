const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    const conncet = await mongoose.connect(
      "mongodb+srv://mynode:mynode@cluster0.jf4vffa.mongodb.net/anwar?retryWrites=true&w=majority"
    );
    console.log("DB Connected..!");
  } catch (error) {
    console.log("db error..!", error);
    process.exit(1);
  }
};
module.exports = DBconnect;
