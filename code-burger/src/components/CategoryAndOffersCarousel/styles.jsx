import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 200px;

  .swiper-slide img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: white;
  }

  .swiper-pagination-bullet {
    background-color: white;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper {
    padding: 40px;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 75px;
  color: #ffffff;
  margin: 50px;

  @media (max-width: 800px) {
    font-size: 30px;
    margin: 30px;
  }
`;

export const BoxOfCategory = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  p {
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 120%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 10px;
  }

  button {
    margin-top: 20px;
    width: 300px;
    height: 66px;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    color: #10121dff;
  }
`;
