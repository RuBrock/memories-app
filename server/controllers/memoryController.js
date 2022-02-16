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

export const createMemory = async (request, response) => {
  const memory = request.body;

  const newMemory = new MemoryMessage(memory);

  try {
    await newMemory.save();

    response.status(201).json(newMemory);
  } catch(error) {
    response.status(400).json({ message: error.message });
  }
}

export const updateMemory = async (request, response) => {
  const { id: _id } = request.params;
  const memory = request.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) 
    return response.status(404).send('No Memory with that ID.');

  const updatedMemory = await MemoryMessage.findByIdAndUpdate(
    _id, { ...memory, _id }, { new: true }
  );

  response.json(updatedMemory)
}

export const deleteMemory = async (request, response) => {
  const { id } = request.params;

  if(!mongoose.Types.ObjectId.isValid(id)) 
    return response.status(404).send('No Memory with that ID.');

  await MemoryMessage.findByIdAndRemove(id);

  response.json({ message: 'Memory deleted successfully.' })
}

export const likeMemory = async (request, response) => {
  const { id } = request.params;
  
  if(!mongoose.Types.ObjectId.isValid(id)) 
    return response.status(404).send('No Memory with that ID.');

  const memory = await MemoryMessage.findById(id);
  const updatedMemory = await MemoryMessage.findByIdAndUpdate(
    id, { likeCount: memory.likeCount + 1}, { new: true }
  )

  response.json(updatedMemory);
}