import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
  background-color: #efece5e0;

  .loader {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: flex;
    margin: 15px auto;
    position: relative;
    color: ${(props) => props.theme.color.primary};
    box-sizing: border-box;
    animation: animloader 0.7s linear infinite alternate;
  }

  @keyframes animloader {
    0% {
      box-shadow: -38px -12px, -14px 0, 14px 0, 38px 0;
    }
    33% {
      box-shadow: -38px 0px, -14px -12px, 14px 0, 38px 0;
    }
    66% {
      box-shadow: -38px 0px, -14px 0, 14px -12px, 38px 0;
    }
    100% {
      box-shadow: -38px 0, -14px 0, 14px 0, 38px -12px;
    }
  }
`;

export default LoaderStyled;
