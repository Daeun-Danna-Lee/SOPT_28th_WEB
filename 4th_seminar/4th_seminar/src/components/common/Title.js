import React from 'react';
import Styled from "styled-components";

const TitleWrap = Styled.div `
  .title {
    width: 1200px;
    height: 92px;
    font-size: 36px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Title = () => {
    return <div> Title Page </div>;
};

export default Title;