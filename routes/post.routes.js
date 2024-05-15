import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import {
    commentOnPost,
    createPost,
    deletePost,
    getAllPosts,
    getFollowingPosts,
    getLikedPosts,
    getUserPosts,
    likeUnlike
} from "../controllers/post.controller.js";
const router = express.Router();

router.post('/createpost', protectRoute, createPost)
router.post('/all', protectRoute, getAllPosts)
router.post('/following', protectRoute, getFollowingPosts)
router.post('/user/:username', protectRoute, getUserPosts)
router.post('/create', protectRoute, createPost)
router.post('/like:/:id', protectRoute, likeUnlike)
router.post('/comment/:id', protectRoute, commentOnPost)
router.post('/:id', protectRoute, deletePost)


export default router