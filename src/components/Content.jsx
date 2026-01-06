import styled from "styled-components";
import "./content.css";
import foods from "../data/foods.js";
import Foodcard from "./Foodcard.jsx";

const Content = ({ searchTerm, categorySelected }) => {
  const category = (categorySelected || "").toLowerCase();
  const foodcategory = foods.filter((food) => {
    const foodcat = (food.category || "").toLowerCase();
    if (!category || category === `allfoods`) return true;
    return foodcat.includes(category);
  });

  const term = (searchTerm || "").toLowerCase();

  const filteredfoods = foodcategory.filter((food) => {
    const name = (food.name || "").toLowerCase();
    if (!term) return true; // show all when input is empty
    return name.includes(term);
  });
  return (
    <>
      <Main>
        <GridWrapper>
          {filteredfoods.map((curr) => {
            return <Foodcard key={curr.id} food={curr} />;
          })}
        </GridWrapper>
      </Main>
    </>
  );
};

export default Content;

const Main = styled.main`
  padding: 24px 16px 0 16px;
  margin: 0 auto;
  max-width: 1200px;
  background-color: #f9fafb;
  /* background-color: #0b61b8; */
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 16px;
`;
