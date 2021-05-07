import React from "react";
import UserCard from "./UserCard";
import ResultCard from "./UserCard";

const Result = ({ userState }) => {
  const { status, data } = userState;
  switch (status) {
    case "pending":
      return <div style={{ color: "white", fontSize: "24px" }}>Loading...</div>;
    case "resolved":
      return <UserCard userData={data} />;
    case "rejected":
      return (
        <div style={{ color: "white", fontSize: "24px" }}>User Not Found</div>
      );
    case "idle":
    default:
      return <div></div>;
  }
};

export default Result;