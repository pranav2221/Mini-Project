const mongoose = require("mongoose");

const connectdb = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        // console.log("MongoDB connected successfully!");
    } catch (error) {
        // console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = {connectdb};