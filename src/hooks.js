/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, {
  useState,
  useEffect,
  useReducer
} from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { dataFetchReducer } from './reducers';

// A promise that throttle the api request for 8 seconds
const timeoutPromise = () =>
  new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject({
        error:
          'It is taking too long to fetch the data. Please try again later.'
      });
    }, 8000);
  });

export const useDataApi = (
  initialSearch,
  initialData,
  initialHistory
) => {
  // Set search query, error and chaos mode state < from user input
  const [search, setSearch] = useState(initialSearch);
  // Search query for the current page
  const [actualSearch, setActualSearch] = useState(
    initialSearch
  );
  const [{ isError, message }, setError] = useState({
    isError: false,
    message: null
  });
  const [chaosMode, setChaos] = useState(null);
  const [history, setHistory] = useState(initialHistory);

  // connect reducers
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    errorMessage: null,
    data: initialData
  });

  // fetch data if search is updated
  useEffect(() => {
    let didCancel = false;
    const isArray = obj => {
      const objectConstructor = [].constructor;
      return obj.constructor === objectConstructor;
    };

    const fetchData = async () => {
      if (chaosMode === 'internet' || !navigator.onLine) {
        setError({
          isError: true,
          message:
            'There is no internet connection. Please reconnect then reload the app.'
        });
        // eslint-disable-next-line no-else-return
      } else if (chaosMode !== 'internet') {
        dispatch({ type: 'FETCH_INIT' });
        try {
          let result = null;

          if (chaosMode === 'clock') {
            result = await Promise.all([
              timeoutPromise(),
              axios(
                `https://api.npms.io/v2/search/suggestions?${queryString.stringify(
                  search
                )}`
              )
            ]);
          } else {
            result = await axios(
              `https://api.npms.io/v2/search/suggestions?${queryString.stringify(
                search
              )}`
            );
          }

          if (!didCancel) {
            history.push(
              `/search?${queryString.stringify(search)}`
            );
            if (
              !isArray(result.data) ||
              chaosMode === 'json'
            ) {
              dispatch({ type: 'FETCH_FAILURE' });
              setError({
                isError: true,
                message:
                  'The type of the data fetched is invalid. Please try again later.'
              });
            } else {
              // set the actual search to the current user search only if the call is successfull
              setActualSearch(search);
              dispatch({
                type: 'FETCH_SUCCESS',
                payload: result.data
              });
              setError({ isError: false, message: null });
              // here push the history
            }
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: 'FETCH_FAILURE' });
            setError({
              isError: true,
              message:
                error.error || 'We are unable to fetch data'
            });
            // here push the history
          }
        }
      }
    };

    if (search) fetchData();

    return () => {
      didCancel = true;
    };
  }, [search]);

  return [
    {
      ...state,
      isError,
      message,
      chaosMode,
      search,
      actualSearch
    },
    setSearch,
    setActualSearch,
    setChaos,
    setError
  ];
};

export const useFiltersApi = () => {
  const [toggleFilter, setToggleFilter] = useState(null);
  const [sortFilter, setSortFilter] = useState(null);

  return [
    toggleFilter,
    sortFilter,
    setToggleFilter,
    setSortFilter
  ];
};
