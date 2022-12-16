import express from "express";

import { getPOST, createPOST } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPOST)

export default router;