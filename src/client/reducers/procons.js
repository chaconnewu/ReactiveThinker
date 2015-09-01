import * as _ from 'lodash';
import { ADD_PROCON } from '../constants/ActionTypes';

const initialState = [
  {
    pro : {
      claim : 'This is pro claim 1',
      supports : [
        'This is support 1 for pro claim 1',
        'This is support 2 for pro claim 1',
        'This is support 3 for pro claim 1'
      ]
    },
    con : {
      claim : 'This is con claim 1',
      supports : [
        'This is support 1 for con claim 1',
        'This is support 2 for con claim 1'
      ]
    }
  },
  {
    pro : {
      claim : 'This is pro claim 2',
      supports : [
        'This is support 1 for pro claim 2',
      ]
    },
    con : {
      claim : 'This is con claim 2',
      supports : [
        'This is support 1 for con claim 2',
        'This is support 2 for con claim 2'
      ]
    }
  }
];

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
  default:
    return state;
  }
}
