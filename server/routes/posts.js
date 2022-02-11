import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  response.send(`IT'S WORKING!`);
});

export default router;
