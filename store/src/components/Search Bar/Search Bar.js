import React, { useState } from "react";
import "./Search Bar Style.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, setData, pristineData }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = pristineData.filter((product) => {
      return product.Name.toLowerCase().includes(searchWord);
    });

    if (searchWord === "") {
      setFilteredData([]);
      setData(pristineData)
    } else {
      setFilteredData(newFilter);
      setData(newFilter)
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setData(pristineData)
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;