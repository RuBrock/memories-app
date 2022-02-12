import axios from 'axios';

const url = 'http://localhost:5000/memories';

export const fetchMemories = () => axios.get(url);
export const createMemory = (newPost) => axios.post(url, newPost);
