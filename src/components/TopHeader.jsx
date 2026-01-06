import React from "react";
import styled from "styled-components";
import "./top.css";

const TopHeader = ({ searchTerm, setSearchTerm, setCategorySelected }) => {
  let category = [`Allfoods`,`Lunch`, `Dinner`, `Breakfast`, `Dessert`];
  return (
    <>
      <Header>
        <h1 className="title">Food Zone</h1>
        <ul className="categorylist">
            {category.map((categoryname, index) => {
              return (
                <li onClick={() => setCategorySelected(categoryname)} key={index}>
                  {categoryname}
                </li>
              );
          })}
        </ul>
        <div>
          <input
            className="searchinput"
            type="text"
            placeholder="Search for foods"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </Header>
    </>
  );
};

export default TopHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 16px 24px;
  background-color: #ffffff;
  color: #1f2933;
  border-bottom: 1px solid #e5e7eb;
`;
