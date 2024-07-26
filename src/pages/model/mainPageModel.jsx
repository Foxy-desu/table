import { useFetch } from "../../app/utils/useFetch";
import { useModal } from "../../app/utils/useModal";
import MainPage from "../ui/mainPage";

const MainPageModel =()=> {
  const {users, totalItems, limit, setOffset, fetchDataOnSearch} = useFetch({limit:30});
  const {modal, openModal, closeModal} = useModal();

  return (
    <>
      <MainPage
        fetch={{
          users,
          totalItems,
          limit,
          setOffset,
          fetchDataOnSearch
        }} 
        popup={{
          modal,
          openModal,
          closeModal
        }}/>
    </>
  )
};

export default MainPageModel;