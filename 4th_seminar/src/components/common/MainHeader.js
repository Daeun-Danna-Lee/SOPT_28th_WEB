import React from 'react';
import Styled from "styled-components";

const MainHeaderWrap = Styled.div `
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 91px;

    &__title {
      font-size: 36px;
      font-weight: bold;
      font-style: italic;
      color: #CEA0E3;
      &:hover {
        cursor: pointer;
      }
    }

    &__profile {
      margin-right: 10px;
    }

    &__hr {
      width: 1200px;
      height: 13px;
      background: linear-gradient(90deg, white, #CEA0E3);
    }
  }
`;

const MainHeader = () => {
    return <div> MainHeader Page </div>;
};

export default MainHeader;