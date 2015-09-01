import * as types from '../constants/ActionTypes';

export function addProCon() {
  return { type: types.ADD_PROCON };
}

export function deleteProCon(idx) {
  return { type: types.DELETE_PROCON, idx };
}

export function addSupport(proconIdx, side) {
  return { type: types.ADD_SUPPORT, proconIdx, side };
}

export function deleteSupport(proconIdx, side) {
  return { type: types.DELETE_SUPPORT, proconIdx, side };
}

export function updateSupport(proconIdx, side, text) {
  return { type: types.UPDATE_SUPPORT, proconIdx, side, text };
}
