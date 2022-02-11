import * as api from '../api';

// Action Creators
export const getMemories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: 'FETCH_ALL', data: data });
  } catch(error) {
    console.log(error.message);
  }
}