import React from "react";
import "./foodcard.css";
import styled from "styled-components";
const Foodcard = ({ food }) => {
  return (
    <>
      <Card>
        <Imagediv>
          <img className="foodimage" src={food.image} alt={food.name} />
        </Imagediv>
        <Name>{food.name}</Name>
        <Description>{food.description}</Description>
        <Ctasection>
          <Price>${food.price}</Price>
          <OrderCTA>Order Now</OrderCTA>
        </Ctasection>
      </Card>
    </>
  );
};

export default Foodcard;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 14px 14px 12px 14px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  width: 250px;
  margin: 10px;
  position: relative;
  overflow: hidden;
  /* animation */
  transform: translateY(0) scale(1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.18);
  }
`;

const Imagediv = styled.div`
  overflow: hidden;
  height: 180px;
  width: 100%;
  border-radius: 16px 16px 0 0;

  .foodimage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.4s ease;
  }

  ${Card}:hover & .foodimage {
    transform: scale(1.08);
  }
`;

const Name = styled.div`
  color: #1f2933;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  letter-spacing: 0.01em;
  transition: color 0.25s ease;

  ${Card}:hover & {
    color: #ff7043;
  }
`;

const Description = styled.div`
  width: 100%;
  color: #6b7280;
  line-height: 1.5;
  font-size: 14px;
  margin-top: 4px;
  transition: color 0.25s ease;

  ${Card}:hover & {
    color: #4b5563;
  }
`;

const Ctasection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0 5px 0;
`;

const Price = styled.div`
  margin: 5px 0;
  font-weight: 600;
  color: #1f2933;
  font-size: 18px;
  letter-spacing: 0.02em;
`;

const OrderCTA = styled.button`
  margin: 5px 0;
  padding: 10px 20px;
  background: #ff7043;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 13px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transform: translateY(0);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-shadow: 0 6px 18px rgba(255, 112, 67, 0.4);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 26px rgba(255, 112, 67, 0.55);
    background: #ff814f;
  }

  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 3px 10px rgba(255, 112, 67, 0.35);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 0 0, #ffe1d4 0, transparent 55%);
    opacity: 0;
    transform: translateX(-40%);
    transition: opacity 0.35s ease, transform 0.35s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
    transform: translateX(0);
  }
`;
