import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
  border-radius: 14px;
  border: ${props => props.isBack ? '1px solid white' : 'none'};
  text-decoration: none;

  margin-top:130px;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${props => props.isBack && 'rotateY(180deg)' };
  }
`;
