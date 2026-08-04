const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./src/models/user");

async function seedUser() {
  try {
    const connString = process.env.MONGODB_CONNECTION_STRING;
    if (!connString) {
      console.error("MONGODB_CONNECTION_STRING is missing from .env");
      process.exit(1);
    }

    await mongoose.connect(connString);
    
    const hashedPassword = await bcrypt.hash("YourSecurePassword123!", 10);
    
    // Target test@user.com
    let user = await User.findOne({ email: "test@user.com" });
    if (user) {
      user.password = hashedPassword;
      user.role = "admin";
      await user.save();
      console.log("Updated test@user.com password successfully!");
    } else {
      user = new User({
        email: "test@user.com",
        password: hashedPassword,
        firstName: "Test",
        lastName: "Admin",
        role: "admin"
      });
      await user.save();
      console.log("Created test@user.com successfully!");
    }
  } catch (error) {
    console.error("Error seeding user:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedUser();
