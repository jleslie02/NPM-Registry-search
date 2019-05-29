import {
  dataFetchReducer
} from './index';

describe('dataFetchReducer reducer', () => {
  let result;
  let expectedResult;
  let initialState
  let action;

  beforeEach(() => {
    initialState = {
      isLoading: false,
      data: null
    };
  });

  describe('when the action type is FETCH_INIT', () => {
    beforeEach(() => {
      action = {
        type: "FETCH_INIT"
      };

      result = dataFetchReducer(initialState, action);
      expectedResult = {data: null, isLoading: true};
    });

    it('should return the correct result', () => {
      expect(result).toEqual(expectedResult);
    });
  });

  describe('when the action type is FETCH_SUCCESS', () => {
    beforeEach(() => {
      action = {
        type: "FETCH_SUCCESS",
        payload: {}
      };

      result = dataFetchReducer(initialState, action);
      expectedResult = {data: {}, isLoading: false};
    });

    it('should return the correct result', () => {
      expect(result).toEqual(expectedResult);
    });
  });

  describe('when the action type is FETCH_FAILURE', () => {
    beforeEach(() => {
      action = {
        type: "FETCH_FAILURE"
      };

      result = dataFetchReducer(initialState, action);
      expectedResult = {data: null, isLoading: false};
    });

    it('should return the correct result', () => {
      expect(result).toEqual(expectedResult);
    });
  });
});