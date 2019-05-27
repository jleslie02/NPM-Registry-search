/* eslint-disable import/prefer-default-export */
export const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT': {
      return {
        ...state,
        isLoading: true
      };
    }
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
