// import { useState } from "react";
// import axios from "axios";

export const SearchBar = () => {
  //   const [search, setSearch] = useState("");
  //   const handleinputChange = (event) => {
  //     const { value } = event.target.value;
  //     console.log(event);
  //     setSearch(value);
  //   };

  //   const onSearch = (id) => {
  //     axios.get(`http://localhost:3001/videogames/${id}`).then((res) => {
  //       const data = res.data;

  //       console.log(data);
  //     });
  //   };
  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Search Name"
          //   onChange={handleinputChange}
        />
      </div>
      {/* <button
        onClick={() => {
          onSearch(search);
        }}
      >
        Search
      </button> */}
    </div>
  );
};
