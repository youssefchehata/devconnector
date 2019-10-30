
import { GET_PROFILE } from '../actions/types';
import { PROFILE_ERROR } from './../actions/types';

const INITIAL_STATE = {
  profile: null,
  profiles: [],   
  repos: [],
  loading: true,
  error: {}
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = INITIAL_STATE, action) => {
  const {type,payload}=action
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading:false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading:false
      };
    default:
      return state;
  }
};
 