import { useState } from "react";
import TableModel from "../entities/table/model/tableModel";
import "./App.css";
import { useEffect } from "react";
import SearchBarModel from "../features/search_bar/model/searchBarModel.jsx";
import { useFetch } from "./utils/useFetch.js";
import PaginationModel from "../features/pagination/model/paginationModel.jsx";
import ModalModel from "../entities/modal/model/modalModel.jsx";
import { useModal } from "./utils/useModal.js";

function App() {
  const {users, totalItems, limit, setOffset, fetchDataOnSearch} = useFetch({limit:30});
  const {modal, openModal, closeModal} = useModal();

  return (
    <div>
      {
        modal.isOpen && <ModalModel closeModal={closeModal} user={modal.data}/>
      }
      <div className="controlls">
        <div className="controlls__search-bar">
          <SearchBarModel fetchData={fetchDataOnSearch}/>
        </div>
      </div>
      <div className="table-wrap">
        <TableModel users={users} openModal={openModal}/>
      </div>
      <div>
        <PaginationModel setOffset={setOffset} totalItemsCount={totalItems} limit={limit}/>
      </div>
    </div>
  );
}

export default App;
