const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.ATLAS_URL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas");
    })
  }
  catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB