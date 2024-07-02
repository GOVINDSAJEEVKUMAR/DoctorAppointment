import express from "express"
import {createReview, getAllReviews} from "../Controller/reviewController.js"
import {authenticate,restrict} from "./../Auth/verifyToken.js"


const router = express.Router({mergeParams:true});
//doctor

router.route('/').get(getAllReviews).post(authenticate,restrict(['patient']),createReview)

export default router