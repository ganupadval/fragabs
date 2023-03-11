import React from "react";
import styled from "styled-components";

export default function Dictionary({ lookup, data, error, loading }) {
  return (
    <Dict>
      <div className="dictionary">
        <h3 style={{ padding: "10px" }}>Dictionary</h3>
        <div className="container">
          <div className="result" id="result" style={{ color: "white" }}>
            {/* {loading && <div>A moment please...</div>}
            {error && (
              <div>
                <h3 className="error">Couldn't Find The Word</h3>
              </div>
            )} */}
            {data ? (
              Object.keys(Object.keys(data)[0]).map((item, index) => (
                <div>
                  <div key={index} className="wordMeaning">
                    <div className="word">
                      <h2>{lookup}</h2>
                    </div>
                    <hr />
                    <div className="details">
                      <p>{data[item].meanings[0].partOfSpeech}</p>
                      <p>/{data[item].phonetic}/</p>
                    </div>
                    <p className="word-meaning">
                      {data[item].meanings[0].definitions[0].definition}
                    </p>
                    <p className="word-example">
                      {data[item].meanings[0].definitions[0].example || ""}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Dict>
  );
}

const Dict = styled.div`
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
  height: auto;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  .top {
    height: 60%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: 10px;
  }

  .dict {
    /* overflow-y: scroll; */
    overflow-x: hidden;
    /* height: 40%; */
    backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0);
    border-radius: 10px;
    padding: 10px;
  }

  h3 {
    backdrop-filter: blur(10px) saturate(180%);
    /* -webkit-backdrop-filter: blur(16px) saturate(180%); */
    // color: #ffffff97;
    font-weight: 200;
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

  .wordMeaning {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 16px;
    border-radius: 10px;
    width: 100%;
    height: 100%;

    .word {
      text-transform: uppercase;
    }

    hr {
      margin: 5px 0;
    }

    .details {
      /* background-color: red; */
      margin: 5px 0;
    }

    .word-meaning {
      /* background-color: red; */
      margin: 15px 0;
    }
  }
`;
