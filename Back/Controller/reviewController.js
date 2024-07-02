import Review from "../Models/ReviewSchema.js";
import Doctor from "../Models/DoctorSchema.js"; // Use 'Doctor' instead of 'DoctorSchema' for clarity

// Get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({
            success: true,
            message: "Success",
            data: reviews
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not Found"
        });
    }
};

// Create review
export const createReview = async (req, res) => {
    if (!req.body.doctor) req.body.doctor = req.params.doctorId;
    if (!req.body.user) req.body.user = req.params.userId;

    const newReview = new Review(req.body); // Changed variable name from 'savedReview' to 'newReview'

    try {
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview.id }
        });

        res.status(200).json({
            success: true,
            message: 'Review Submitted',
            data: savedReview
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
