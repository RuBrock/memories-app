import express from 'express';

import { 
  getMemories, 
  createMemorie, 
  updateMemorie
  // deleteMemorie 
} from '../controllers/memoryController.js';

const router = express.Router();

//Memories routes
router.get('/', getMemories);
router.post('/', createMemorie);
router.patch('/:id', updateMemorie);
// router.delete('/:id', deleteMemorie);

export default router;
