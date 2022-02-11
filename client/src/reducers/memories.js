export default (memories = [], action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return memories;

    case 'CREATE':
      return memories;

    default:
      return memories;
  }
}
