
import { GET_PROFILE ,PROFILE_ERROR,CLEAR_PROFILE} from '../actions/types';


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
    case CLEAR_PROFILE:
      return {
        ...state,
        error: payload,
        profile:null,
        repos:[],
        loading:false
      };
    default:
      return state;
  }
};
 