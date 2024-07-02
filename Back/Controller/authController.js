import User from '../Models/UserSchema.js';
import Doctor from '../Models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = user =>{
    return jwt.sign({id:user._id, role:user.role},process.env.JWT_SECRET_KEY,
        {expiresIn:'15d'}
    )
}

export const register = async (req, res) => {
    const {
        email,
        name,
        password,
        role,
        photo,
        gender
    } = req.body;

    try {
        let user = null;

        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        // Check if user exists
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create new user based on role
        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        } else if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        }

        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            'your_jwt_secret', // Replace with your actual secret
            { expiresIn: '1h' }
        );

        res.status(201).json({
            success: true,
            message: 'User created successfully 🤩🤩',
            
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Server error 😡😡'
        });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetch user from User and Doctor collections in parallel
        const [patient, doctor] = await Promise.all([
            User.findOne({ email }),
            Doctor.findOne({ email })
        ]);

        // Determine the user type
        const user = patient || doctor;

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the password matches
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: "Invalid credentials" });
        }

        // Generate token
        const token = generateToken(user);

        // Destructure user object to exclude sensitive information
        const { password: pwd, ...userData } = user._doc;

        // Send response
        res.status(200).json({
            status: true,
            message: "Login successful",
            token,
            
            data: userData,
            role: user.role
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: err.message
        });
    }
};