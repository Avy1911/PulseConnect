import express from 'express'
import { protectRoute } from '../middlewares/protectRoute.js'
import { followUnfollowUser, getSuggestedUsers, getUserProfile, updateProfile } from '../controllers/user.controller.js'
const router = express.Router()

router.get('/profile/:username', protectRoute, getUserProfile)
router.get('/follow/:id', protectRoute, followUnfollowUser)
router.get('/suggested', protectRoute, getSuggestedUsers)
router.put('/updateprofile', updateProfile)

export default router