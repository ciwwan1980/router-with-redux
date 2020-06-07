const initState = {
  projects: [
    {id: '1', title: 'fuck everything', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'no money is left', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;