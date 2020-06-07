const initState = {
  projects: [
    {id: '1', title: 'fuck everything', content: 'Its a React Redux'},
    {id: '2', title: 'collect all the stars', content: 'Its a React Redux'},
    {id: '3', title: 'no money is left', content: 'Its a React Redux'}
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;