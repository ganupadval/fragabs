import React from "react";
import styled from "styled-components";

const Titles = (props) => {
  return (
    <TitlesContainer>
      <div className="top">
        <h3>1 - Title Genrated By Machine Learning</h3>
        <h3>2 - Title Genrated By Machine Learning</h3>
        <h3>3 - Title Genrated By Machine Learning</h3>
      </div>
      <div className="dict">{props.dict}</div>
    </TitlesContainer>
  );
};

export default Titles;

const TitlesContainer = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.2);
  /* background-image: linear-gradient(
    43deg,
    #4159d04b 0%,
    #c850c058 46%,
    #ffcd7045 100%
  ); */
  /* border: 1px solid rgba(255, 255, 255, 0.125); */
  width: 20%;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .top {
    height: 60%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: 10px;
  }

  .dict {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 40%;
    backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0);
    border-radius: 10px;
    padding: 10px;
  }

  h3 {
    backdrop-filter: blur(10px) saturate(180%);
    /* -webkit-backdrop-filter: blur(16px) saturate(180%); */
    color: #ffffff97;
    font-weight: 400;
    font-size: large;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.3);
      font-weight: bold;
    }
  }
`;
