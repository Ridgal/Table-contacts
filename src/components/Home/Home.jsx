import React from "react";
import Search from "./Search/Search";
import Table from "./Table/Table";

import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <Search />
        <Table  />
      </div>
    </div>
  )
};

export default Home;