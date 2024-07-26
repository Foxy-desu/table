import { useState } from "react";
import TableModel from "../entities/table/model/tableModel";
import "./App.css";
import { useEffect } from "react";
import SearchBarModel from "../features/search_bar/model/searchBarModel.jsx";

function App() {
  const [users, setUsers] = useState({});
  const URL = "https://dummyjson.com/users";
  // const JSONPH = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  function fetchDataOnSearch(queryString, keyOption) {
    const params = `key=${encodeURIComponent(keyOption)}&value=${encodeURIComponent(queryString)}`;
    fetch(URL + "/filter?" + params)
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }

  return (
    <div>
      <div className="controlls">
        <div className="controlls__search-bar">
          <SearchBarModel fetchData={fetchDataOnSearch} />
        </div>
      </div>
      <div className="table-wrap">
        <TableModel users={users} source={"Dummy"} />
      </div>
    </div>
  );
}

export default App;
