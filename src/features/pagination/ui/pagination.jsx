
const Pagination =({pagesCount, currentPage, setPage})=> {
  function getPagesArray(pagesCount) {
    return [...Array.from({length: pagesCount}, (value, key) => key + 1)]
  }

  function renderPages(pages, setPage) {
    const pagesArr = getPagesArray(pages)
    if(pagesArr.length > 0) {
      return pagesArr.map((page) => (
        <li key={page}>
          <button
            className={`pagination__btn ${page === currentPage? 'pagination__btn--active' : ''}`}
            onClick={() => setPage(page)}
            disabled={page === currentPage? true:false}>{page}</button>
        </li>
      ))
    }
    return <li>-//-</li>
  }

  return (
    <ul className="pagination">
      {renderPages(pagesCount, setPage)}
    </ul>
  )
}

export default Pagination;