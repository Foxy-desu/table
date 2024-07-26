import SearchBarModel from "../../features/search_bar/model/searchBarModel";
import TableModel from "../../entities/table/model/tableModel";
import PaginationModel from "../../features/pagination/model/paginationModel";
import cl from './mainPage.module.scss';

const MainPage=({fetch, popup})=> {
  const {users, totalItems, limit, setOffset, fetchDataOnSearch}=fetch;
  const {modal, openModal, closeModal}=popup;

  return (
    <>
      {
        modal.isOpen && <ModalModel closeModal={closeModal} user={modal.data}/>
      }
      <div className={cl.controlls}>
        <div className={cl.searchWrap}>
          <SearchBarModel fetchData={fetchDataOnSearch}/>
        </div>
      </div>
      <div className={cl.table}>
        <TableModel users={users} openModal={openModal}/>
      </div>
      <div>
        <PaginationModel setOffset={setOffset} totalItemsCount={totalItems} limit={limit}/>
      </div>
    </>
  )
};

export default MainPage;