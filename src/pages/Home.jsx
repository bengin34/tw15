import React from "react";
import Main from "../components/Main";
import requests from "../Request";
import Row from "../components/Row";

const Home = () => {
  return (
    <>
      <Main />

      {requests.map((r) => (
        <Row title={r.title} fetchURL={r.url} />
      ))}
    </>
  );
};

export default Home;
