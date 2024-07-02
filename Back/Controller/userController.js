import User from "../Models/UserSchema.js";
import Booking from "../Models/BookingSchema.js";
import Doctor from "../Models/DoctorSchema.js";
import mongoose from 'mongoose';

// Update User
export const updateUser = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user ID format"
        });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true }).select('-password');
        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update user",
            error: err.message
        });
    }
};

// Delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user ID format"
        });
    }

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Successfully deleted"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete user",
            error: err.message
        });
    }
};

// Get Single User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user ID format"
        });
    }

    try {
        const user = await User.findById(id).select('-password');
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User found",
            data: user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve user",
            error: err.message
        });
    }
};

// Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');

        res.status(200).json({
            success: true,
            message: "Users found",
            data: users
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve users",
            error: err.message
        });
    }
};

// Get User Profile
export const getUserProfile = async (req, res) => {
    const userId = req.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user ID format"
        });
    }

    try {
        const user = await User.findById(userId).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Profile info retrieved successfully",
            data: user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve profile info",
            error: err.message
        });
    }
};

// Get My Appointments
export const getMyAppointment = async (req, res) => {
    const userId = req.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user ID format"
        });
    }

    try {
        const bookings = await Booking.find({ user: userId });

        if (!bookings.length) {
            return res.status(404).json({
                success: false,
                message: "No appointments found"
            });
        }

        const doctorIds = bookings.map(el => el.doctor);

        const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');

        res.status(200).json({
            success: true,
            message: "Appointments retrieved successfully",
            data: doctors
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve appointments",
            error: err.message
        });
    }
};
