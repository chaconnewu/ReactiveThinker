import * as _ from 'lodash';
import { ADD_PROCON, ADD_SUPPORT, SWITCH_TOPIC, UPDATE_SUPPORT } from '../constants/ActionTypes';

const initialState = {
  currTopicIdx: 0,
  topics: ['Future of work', 'Community', 'Big Data', 'Shallows'],
  procons: {
    0: [],
    1: [],
    2: [],
    3: []
  }
};

export default function procons(state=initialState, action) {
  switch (action.type) {
  case ADD_PROCON:
    var stateCopy = _.cloneDeep(state);
    var originProCon = stateCopy.procons[stateCopy.currTopicIdx];
    stateCopy.procons[stateCopy.currTopicIdx] = [
      {
        id: originProCon.reduce((maxId, procon) => Math.max(procon.id, maxId), -1) + 1,
        pro: {
          claim: '',
          supports: []
        },
        con: {
          claim: '',
          supports: []
        }
      }, ...originProCon];
    return stateCopy;

  case ADD_SUPPORT:
    var stateCopy = _.cloneDeep(state);
    var origin = stateCopy.procons[stateCopy.currTopicIdx][action.proconIdx][action.side].supports;
    stateCopy.procons[stateCopy.currTopicIdx][action.proconIdx][action.side].supports = ['', ...origin];
    return stateCopy;

  case SWITCH_TOPIC:
    return Object.assign({}, state, {
      currTopicIdx: action.index
    });

  case UPDATE_SUPPORT:
    var stateCopy = _.cloneDeep(state);
    if (action.supportIdx === null) {
      stateCopy.procons[stateCopy.currTopicIdx][action.proconIdx][action.side].claim = action.text;
    } else {
      stateCopy.procons[stateCopy.currTopicIdx][action.proconIdx][action.side].supports[action.supportIdx] = action.text;
    }
    return stateCopy;

  default:
    return state;
  }
}
