import actions from "./actions";

const initialState = {
  people: {
    list: [],
    page: 1,
    pageSize: 20
  },
  get: {
    loaded: false,
    loading: false,
    error: false
  },
  post: {
    loaded: false,
    loading: false,
    error: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PEOPLE_REQUEST:
      return Object.assign({}, state, {
        get: { ...initialState.get, loading: true }
      });
    case actions.GET_PEOPLE_SUCCESS:
      return Object.assign({}, state, {
        get: { ...initialState.get, loaded: true },
        people: action.people
      });
    case actions.GET_PEOPLE_ERROR:
      return Object.assign({}, state, {
        get: { ...initialState.get, loaded: true, error: action.error },
      });
    case actions.ADD_PERSON_REQUEST:
      return Object.assign({}, state, {
        post: { ...initialState.post, loading: true },
      });
    case actions.ADD_PERSON_SUCCESS:
      return Object.assign({}, state, {
        post: { ...initialState.post, loaded: true },
      });
    case actions.ADD_PERSON_ERROR:
      return Object.assign({}, state, {
        post: { ...initialState.post, loaded: true, error: action.error },
      });
    default:
      return state;
  }
};
