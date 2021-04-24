import React from 'react';

const UserCard = ({ userData }) => {

    //데이터가 async await이니까, 데이터가 있어야 리턴이 돼야 하는 경우

    return (
        // userData가 있으면 && 이후 부분을 리턴해라
        userData && (
            <>
                {/* 데이터가 있어야 유저 카드를 리턴 */}
                <img src={userData.avatar_url} alt=""></img>
                <p>이름: {userData.name}</p>
                <p>아이디: {userData.login}</p>
                <p>설명: {userData.bio}</p>
                <p>학교: {userData.company}</p>
                <p>블로그: {userData.blog}</p>
            </>
        )
    );
};

export default UserCard;