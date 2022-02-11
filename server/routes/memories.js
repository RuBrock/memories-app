import express from 'express';

import { getMemories } from '../controllers/memoryController.js';

const router = express.Router();

router.get('/', getMemories);

export default router;
