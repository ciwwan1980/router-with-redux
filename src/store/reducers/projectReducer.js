const initState = {
  projects: [
    {id: '1', title: 'Keep calm and caryy on', content: 'Its a React Redux'},
    {id: '2', title: 'collect all the stars', content: 'Its a React Redux'},
    {id: '3', title: 'Keep calm and eat Ice cream', content: 'Its a React Redux'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
  }
  return state;
};
export default projectReducer;



