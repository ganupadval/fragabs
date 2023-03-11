import React from "react";
import styled from "styled-components";
import Content from "./Content";
import { useState } from "react";

const MainContent = () => {
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState("");
  const [frag, setFrag] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setFrag(null)
    setLoading(true);

    // http://127.0.0.1:8000/
    return fetch("https://fragabs-goxfx5qnca-uc.a.run.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentence: inputData }),
    })
      .then((res) => res.json())
      .then((data) => setFrag(data));
  }

  return (
    <ContentContainer>
      <div className="content">
        {frag ? (
          <>
            {frag[0].BACKGROUND ? (
              <Content
                icon={true}
                title="Background"
                desc={frag[0].BACKGROUND}
              />
            ) : null}

            {frag[0].METHODS ? (
              <Content icon={true} title="Methods" desc={frag[0].METHODS} />
            ) : null}

            {frag[0].RESULTS ? (
              <Content icon={true} title="Results" desc={frag[0].RESULTS} />
            ) : null}

            {frag[0].CONCLUSIONS ? (
              <Content
                icon={true}
                title="Conclusions"
                desc={frag[0].CONCLUSIONS}
              />
            ) : null}
          </>
        ) : loading ? (
          <>
            <Loading></Loading>
          </>
        ) : null}
      </div>
      <form>
        <input
          type="text"
          placeholder="Paste your Abstract Here"
          value={inputData}
          onChange={(event) => {
            setInputData(event.target.value);
          }}
        />
        <input
          type="submit"
          value={
            // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            //   <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            // </svg>
            ">"
          }
          onClick={handleSubmit}
        />
      </form>
    </ContentContainer>
  );
};

export default MainContent;

const ContentContainer = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.2);
  /* background-image: linear-gradient(
    43deg,
    #4159d04b 0%,
    #c850c058 46%,
    #ffcd7045 100%
  ); */
  width: 70%;
  margin: 20px;
  margin-left: 0;
  padding: 20px 50px;
  border-radius: 10px;

  .content {
    height: 90%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  form {
    height: 10%;
    margin: 10px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    overflow: hidden;

    input[type="text"],
    input[type="submit"] {
      height: 90%;
      margin: 0 20px;
      outline: none;
      border: none;
      font-size: large;
      color: #fff;
    }

    input[type="text"] {
      width: 90%;
      background: transparent;
      cursor: text;

      ::placeholder {
        font-size: large;
        color: #ffffff29;
      }
    }
    input[type="submit"] {
      width: 45px;
      height: 45px;
      background-image: linear-gradient(135deg, #ff6fd8 10%, #3813c2 100%);
      border-radius: 15px;
      cursor: pointer;
    }
  }
`;

const Loading = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: #fff;
  height: 30px;
  width: 20px;
  animation: blink 0.7s infinite ease-in-out;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;
