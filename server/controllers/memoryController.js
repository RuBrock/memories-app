import mongoose from 'mongoose';

import MemoryMessage from '../models/memoryMessage.js';

export const getMemories = async (request, response) => {
  try {
    const memoryMessages = await MemoryMessage.find();

    response.json(memoryMessages);
  } catch(error) {
    response.status(404).json({ message: error.message });
  }
}

export const createMemorie = async (request, response) => {
  const memory = request.body;

  const newMemory = new MemoryMessage(memory);

  try {
    await newMemory.save();

    response.status(201).json(newMemory);
  } catch(error) {
    response.status(400).json({ message: error.message });
  }
}

export const updateMemorie = async (request, response) => {
  const { id: _id } = request.params;
  const memory = request.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) 
    return response.status(404).send('No Memory with that ID.');

  const updatedMemorie = await MemoryMessage.findByIdAndUpdate(
    _id, { ...memory, _id }, { new: true }
  );

  response.json(updatedMemorie)
}