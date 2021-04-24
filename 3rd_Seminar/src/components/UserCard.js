import React from 'react';

const UserCard = ({userData}) => {

    //데이터가 async await이니까, 데이터가 있어야 리턴이 돼야 하는 경우

    return (
        userData && (
        <>
            <h1>User Card</h1>
        </>
    )
    );
};

export default UserCard;