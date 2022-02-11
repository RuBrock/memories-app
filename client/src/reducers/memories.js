const memoriesReducer = (memories = [], action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return action.payload;

    case 'CREATE':
      return memories;

    default:
      return memories;
  }
}

export default memoriesReducer;