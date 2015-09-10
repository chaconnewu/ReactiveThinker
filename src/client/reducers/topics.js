import * as _ from 'lodash';
import { SWITCH_TOPIC } from '../constants/ActionTypes';

const initialState = {
  activeIndex: 0,
  topics: [
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
  ]
};



export default function topics(state=initialState, action) {
  switch (action.type) {
  case SWITCH_TOPIC:
    let stateCopy = _.cloneDeep(state);
    stateCopy.activeIndex = action.index;
    return stateCopy;

  default:
    return state;
  }
}
