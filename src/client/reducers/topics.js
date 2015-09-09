const initialState = [
  {
    id: 0,
    topicName: 'Future of work'
  },
  {
    id: 1,
    topicName: 'Community'
  },
  {
    id: 2,
    topicName: 'Big Data'
  },
  {
    id: 3,
    topicName: 'Shallows'
  }
];


export default function topics(state=initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
