import express from 'express';

import { getMemories, createMemories } from '../controllers/memoryController.js';

const router = express.Router();

//Memories routes
router.get('/', getMemories);
router.post('/', createMemories);

export default router;
