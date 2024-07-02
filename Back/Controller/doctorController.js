import Booking from "../Models/BookingSchema.js";
import Doctor from "../Models/DoctorSchema.js";

// Update Doctor
export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedDoctor
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Doctor",
            error: err.message
        });
    }
};

// Delete Doctor
export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        await doctor.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully deleted"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Doctor",
            error: err.message
        });
    }
};

// Get Single Doctor
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id).populate('review').select('-password');
        if (!Doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Doctor found",
            data: Doctor
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve Doctor",
            error: err.message
        });
    }
};

// Get All Doctors
export const getAllDoctors = async (req, res) => {


    try {
        const {query} = req.query
        let doctors;
        if(query){
            doctors = await Doctor({isApproved:'approved',
                $or:[
                    {name:{$regex:query ,$options:"i"}},
                    {specialization:{$regex:query, $options:"i"}}
                ]
            }).select("-password")
        }else{
             doctors = await Doctor.find({isApproved:'approved'}).select('-password');
        }
        
        
        res.status(200).json({
            success: true,
            message: "Doctors found",
            data: doctors
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve Doctors",
            error: err.message
        });
    }
};

export const getDoctorProfile = async(req,res)=>{
    const userId = req.userId
    try{
        const doctor = await Doctor.findById(doctorId)

        if(!user) {
            return res.status(404).json({
                success : false,
                message:"Doctor Not Found"
            })
            const { password,...rest} = doctor._doc
            const appointments =await Booking.fin({
                doctor:doctorId
            })

            res.status(200).json({
                success:true,
                message:"Profile info getting 👍👍",
                data:{...rest,appointments}
            })
        }

    }catch(err){
            res.status(500).json({
                success: false,
                message:"Something Wrong"
            })
    }
}
