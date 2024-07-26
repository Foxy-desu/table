import { useEffect, useState } from "react";

export const useFetch =({limit})=> {
  const URL = "https://dummyjson.com/users";
  const [users, setUsers] = useState({});
  const [offset, setOffset] = useState(0);
  const [totalItems, setTotalItems] = useState(0);


  // Functions to construct URL based on purpose and params
  function getFullURL({url, purpose, params}) {
    switch (purpose) {
      case 'search': {
        return url += "/filter?" + params;
      };
      case 'fetch': {
        return url += "?" + params
      };
    }
  }
  function fetchData(url, purpose, params) {
    const fullURL = getFullURL({purpose, params, url});
    fetch(fullURL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users)
        setTotalItems(data.total)
      });
  }

  // Fetch data on component mount and offsetChange
  useEffect(() => {
    const params = `limit=${limit}&skip=${offset}`
    fetchData(URL, 'fetch', params);
  }, [offset]);

  // Fetch data when search button is clicked along with chosen option for data search
  function fetchDataOnSearch(queryString, keyOption) {
    const params = `key=${encodeURIComponent(keyOption)}&value=${encodeURIComponent(queryString)}`;
    fetchData(URL, 'search', params);
  }

  return {
    users,
    totalItems,
    limit,
    setOffset,
    offset,
    fetchDataOnSearch,
  }
}