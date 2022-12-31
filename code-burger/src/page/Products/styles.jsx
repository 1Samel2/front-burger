import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 80px;
`;

export const ProductsImg = styled.img`
  width: 100%;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    gap: 20px;
    padding: 1px;
  }
`;

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && "2px solid #B06D46"};
  color: ${(props) => (props.isActiveCategory ? "#B06D46" : "#ffffff")};
  font-size: 17px;
  line-height: 20px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 800px) {
    display: flex;
    padding: 20px;
    flex-direction: column;
    grid-template-columns: repeat(1fr);
  }
`;
