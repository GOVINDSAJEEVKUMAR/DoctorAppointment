import jwt from "jsonwebtoken";
import Doctor from "../Models/DoctorSchema.js";
import User from "../Models/UserSchema.js";

// Authentication Middleware
export const authenticate = async (req, res, next) => {
  // Get token from headers
  const authToken = req.headers.authorization;

  // Check if token exists and starts with 'Bearer'
  if (!authToken || !authToken.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: "No token, authorization denied",
    });
  }

  try {
    // Extract the token from the header
    const token = authToken.split(" ")[1];
    
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    // Attach the user ID and role to the request object
    req.userId = decoded.userId;
    req.role = decoded.role;
    
    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired',
      });
    }
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

// Role-based Access Control Middleware
export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  try {
    // Find user by ID in both collections (User and Doctor)
    const user = await User.findById(userId) || await Doctor.findById(userId);

    // Check if user exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if user's role is allowed
    if (!roles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized",
      });
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
