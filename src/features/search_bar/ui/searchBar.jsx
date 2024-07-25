
const SearchBar =({inputValue, changeInputValue, changeSelectValue, currentOption, makeQuery, options})=> {
  function handleBtnClick(e) {
    e.preventDefault();
    makeQuery();
  };

  return (
    <form className="search-bar">
        <label className='visually-hidden' htmlFor='search'>
          Поиск
        </label>
        <select className="search-bar__select" value={currentOption} onChange={changeSelectValue}>
          {options}
        </select>
        <input
          className="search-bar__input"
          type="text" placeholder="Поиск..."
          id="search" value={inputValue}
          onChange={changeInputValue}/>
        <button className="search-bar__btn" onClick={handleBtnClick} disabled={inputValue? false:true}>
          <span className="mask"></span>
          <span className='visually-hidden'>
            Поиск
          </span>
        </button>
      </form>
  )
};

export default SearchBar;