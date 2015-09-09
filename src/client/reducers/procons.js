import * as _ from 'lodash';
import { ADD_PROCON, ADD_SUPPORT, UPDATE_SUPPORT } from '../constants/ActionTypes';

const initialState = [{
  id: 0,
  pro: {
    claim: '',
    supports: []
  },
  con: {
    claim: '',
    supports: []
  }
}];

export default function procons(state=initialState, action) {
  switch (action.type) {
  case ADD_PROCON:
    return [
      {
        id: state.reduce((maxId, procon) => Math.max(procon.id, maxId), -1) + 1,
        pro: {
          claim: '',
          supports: []
        },
        con: {
          claim: '',
          supports: []
        }
      }, ...state];

  case ADD_SUPPORT:
    var stateCopy = _.cloneDeep(state);
    var origin = stateCopy[action.proconIdx][action.side].supports;
    stateCopy[action.proconIdx][action.side].supports = ['', ...origin];
    return stateCopy;

  case UPDATE_SUPPORT:
    var stateCopy = _.cloneDeep(state);
    if (action.supportIdx === null) {
      stateCopy[action.proconIdx][action.side].claim = action.text;
    } else {
      stateCopy[action.proconIdx][action.side].supports[action.supportIdx] = action.text;
    }
    return stateCopy;

  default:
    return state;
  }
}
