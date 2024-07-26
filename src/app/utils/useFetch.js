import { useEffect, useState } from "react";

export const useFetch =({limit})=> {
  const BASE_URL = "https://dummyjson.com/users";
  const [users, setUsers] = useState({});
  const [offset, setOffset] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [filter, setFilter]=useState({key:'', value: ''});

  // Functions to construct URL based on purpose and params
  function getFullURL({url, offset, limit, filter}) {
    const paginationParams = `limit=${limit}&skip=${offset}`;
    const filterParams = `key=${encodeURIComponent(filter.key)}&value=${encodeURIComponent(filter.value)}`;
    if(filter.value) {
      return `${url}/filter?${filterParams}&${paginationParams}`;
    } else { 
      return `${url}?${paginationParams}`;
    }
  }
  function fetchData(url, offset, limit, filter) {
    const fullURL = getFullURL({url, offset, limit, filter});
    fetch(fullURL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users)
        setTotalItems(data.total)
      });
  }
  // Fetch data on component mount and offsetChange
  useEffect(() => {
    fetchData(BASE_URL, offset, limit, filter)
  }, [offset, filter]);
  // Fetch data when search button is clicked along with chosen option for data search
  function fetchDataOnSearch({key, value}) {
    setFilter({key, value});
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