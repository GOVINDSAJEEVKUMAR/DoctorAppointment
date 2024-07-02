import express from 'express'
import { updateUser,deleteUser,getAllUsers,getSingleUser, getUserProfile, getMyAppointment } from "../Controller/userController.js";
import {authenticate,restrict} from "../Auth/verifyToken.js"

const router = express.Router()

router.get('/:id',authenticate,restrict(["patient"]),getSingleUser)
router.get('/',authenticate,restrict(["admin"]),getAllUsers)
router.put('/:id',authenticate,restrict(["patient"]),updateUser)
router.delete('/:id',authenticate,restrict(["patient"]),deleteUser)
router.get('/profile/me',authenticate,restrict(["patient"]),getUserProfile)
router.get('/appointment/my-appointment',authenticate,restrict(["patient"]),getMyAppointment)

export default router;

