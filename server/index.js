const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const UserModal = require("./Modals/UserModal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDB();

// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Helper function to generate a referral code
const generateReferralCode = (name) => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const cleanedName = name.replace(/\s+/g, "");
  return `${cleanedName}${randomNum}`.toLowerCase(); // Generate referral code
};

//Signup Route

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  let referralCode;
  let isUnique = false;

  // Try generating unique referral code
  while (!isUnique) {
    referralCode = generateReferralCode(name);
    const existingUser = await UserModal.findOne({ referralCode });
    if (!existingUser) {
      isUnique = true;
    }
  }

  try {
    let user = await UserModal.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    user = new UserModal({
      name,
      email,
      password: hashedPassword,
      referralCode,
    });

    await user.save();

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite:"lax",
      maxAge: 30 * 60 * 1000,
    });

    res.status(200).json({ msg: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
});

//login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModal.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Email does not exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite:"lax",
      maxAge: 3 * 60 * 1000,
    });

    return res.status(200).json({
      msg: "Login successfull",
      userName: user.name,
      referralCode: user.referralCode,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Server error");
  }
});

//authMiddleware

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

app.get("/auth", authMiddleware, async (req, res) => {
  try {
    const user = await UserModal.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ name:user.name, referralCode: user.referralCode });
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

//Logout

app.post("/logout", (req, res) => {
  res.clearCookie("token"); 
  res.status(200).json({ msg: "Logged out successfully" });
});
