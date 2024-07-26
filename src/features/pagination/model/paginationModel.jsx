import { useState, useMemo, useEffect } from "react";
import Pagination from "../ui/pagination";

const PaginationModel =({setOffset, totalItemsCount, limit})=> {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesAmount = useMemo(()=> {
    return getPagesAmount(totalItemsCount, limit)
  }, [totalItemsCount, limit]);
  function getPagesAmount(itemsCount, limit) {
    return Math.ceil(itemsCount / limit);
  }
  function getCurrentPageOffset(currPage, ItemsOnPage) {
    //while viewing first page no users should be skipped (first page shows users from the very geginning) 
    //As we move on to the next pages, we should substract that first page to preserve right order
    return (currPage -1) * ItemsOnPage
  }
  function handleCurrentPageChange(page){
    setOffset(getCurrentPageOffset(page, limit));
    setCurrentPage(page);
  }

  useEffect(()=> {
    if(currentPage > pagesAmount) {
      setCurrentPage(pagesAmount);
      setOffset(getCurrentPageOffset(pagesAmount, limit));
    }
  }, [pagesAmount])

  return (
    <>
      <Pagination pagesCount={pagesAmount} currentPage={currentPage} setPage={handleCurrentPageChange}/>
    </>
  )
};

export default PaginationModel;