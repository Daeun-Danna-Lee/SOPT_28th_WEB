import React from 'react';

const NewCardWrap = Styled.div `
  .card {
    box-sizing: border-box;
    width: 220px;
    height: 257px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__text {
      font-size: 20px;
      color: #CEA0E3;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

const NewCard = () => {
    return <div > NewCard Page </div>;
};


export default NewCard;