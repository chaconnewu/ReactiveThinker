import { combineReducers } from 'redux';
import procons from './procons.js';
import topics from './topics';

const rootReducer = combineReducers({
  procons,
  topics
});

export default rootReducer;
