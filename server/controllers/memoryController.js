import MemoryMessage from '../models/memoryMessage.js';

export const getMemories = async (request, response) => {
  try {
    const memoryMessages = await MemoryMessage.find();

    response.json(memoryMessages);
  } catch(error) {
    response.status(404).json({ message: error.message });
  }
}

export const createMemories = async (request, response) => {
  const memory = request.body;

  const newMemory = new MemoryMessage(memory);

  try {
    await newMemory.save();

    response.status(201).json(newMemory);
  } catch(error) {
    response.status(400).json({ message: error.message });
  }
}