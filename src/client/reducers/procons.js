import * as _ from 'lodash';
import { ADD_PROCON, ADD_SUPPORT } from '../constants/ActionTypes';

const initialState = [];

export default function procons(state=initialState, action) {
  switch (action.type) {
  case ADD_PROCON:
    return [{
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
  default:
    return state;
  }
}
