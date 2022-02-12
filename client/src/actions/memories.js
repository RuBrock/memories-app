import * as api from '../api';

// Action Creators
export const getMemories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMemories();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch(error) {
    console.log(error.message);
  }
}

export const createMemory = (post) => async (dispatch) => {
  try {
    const { data } = await api.createMemory(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch(error) {
    console.log(error.message);
  }
}