import SearchBar from "../ui/searchBar";
import { useState } from "react";

const SearchBarModel =({fetchData})=> {
  const options = [
    {value:"", content:'Искать по'},
    {value:"firstName", content:'имени'},
    {value:"lastName", content:'фамилии'},
    {value:"age", content:'возрасту'},
    {value:"gender", content:'полу'},
    {value:"phone", content:'телефону'},
    {value:"address.city", content:'городу'},
    {value:"address.address", content:'улице'},
  ]
  const [searchQuery, setSearchQuery] = useState('');
  const [option, setOption] = useState('');
  
  function requestData(){
    if(option && searchQuery) {
      const trimmed = searchQuery.trim();
      fetchData(trimmed, option);
    }
  };
  function changeQuery(e){
    setSearchQuery(e.target.value);
  };
  function changeOption(e){
    setOption(e.target.value);
  };
  function renderOptions(options){
    return options.map((item) => (
      <option
        key={item.value}
        value={item.value}
        disabled={item.value===''? true:false}
      >
        {item.content}
      </option>
    ));
  };

  return (
    <>
      <SearchBar
        inputValue={searchQuery}
        changeInputValue={changeQuery}
        changeSelectValue={changeOption}
        currentOption={option}
        options={renderOptions(options)}
        makeQuery={requestData}/>
    </>
  )
};

export default SearchBarModel;