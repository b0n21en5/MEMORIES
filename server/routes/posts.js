import express from "express";

import { createPost, getPosts, updatePost, deletePost, likePost } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.patch('/:id/likePost', likePost)
router.delete('/:id', deletePost)


export default router;