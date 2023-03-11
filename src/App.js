import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Titles from "./components/Titles";
import Dictionary from "./components/Dictionary/Dictionary";
import SetupDoubleClick from "./components/Dictionary/DoubleClick";
import PreLoader from "./components/PreLoader";

function App() {
  // DICTIONARY DATA

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  // const lookup = "view";
  const [lookup, setLookup] = useState("");
  const [data, setData] = useState(null);
  const [loadingDict, setLoadingDict] = useState(true);
  const [error, setError] = useState(null);
  const [preLoading, setPreLoading] = useState(true);

  function set(a) {
    setLookup(a);
    console.log(a);
  }

  useEffect(() => {
    fetch(url + lookup)
      .then((response) => response.json())
      .then((actualData) => {
        if (actualData.title) {
          setError({ ...actualData });
        } else {
          setData(actualData);
          console.log(actualData);
          setError(null);
        }
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoadingDict(false);
      });
  }, [lookup]);

  // MY DATA
  setTimeout(() => {
    setPreLoading(false);
  }, 6000);

  // MAIN CONTENT DATA
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState("");
  const [frag, setFrag] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setFrag(null);
    setLoading(true);

    const gcp = "https://fragabs-goxfx5qnca-uc.a.run.app";
    const ngrok = "http://df8a-35-224-170-105.ngrok.io";

    // http://127.0.0.1:8000/
    return fetch(gcp, {
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
    <>
      <Main>
        {preLoading ? <PreLoader /> : null}
        <SetupDoubleClick set={set} />
        <Navbar />
        <Section>
          <Dictionary
            lookup={lookup}
            data={data}
            loading={loadingDict}
            error={error}
          />
          {/* <Titles/> */}
          {/* <MainContent /> */}
          <ContentContainer className="user_abs">
            <div className="content">
              {inputData ? (
                <ContentCont>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
                    </svg>
                  </div>
                  <div className="heading">
                    <h2>Your Abstract</h2>
                    <p>{inputData}</p>
                  </div>
                </ContentCont>
              ) : null}
              {frag ? (
                <>
                  {frag[0].BACKGROUND ? (
                    <ContentCont>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
                        </svg>
                      </div>
                      <div className="heading">
                        <h2>Background</h2>
                        <p>{frag[0].BACKGROUND}</p>
                      </div>
                    </ContentCont>
                  ) : null}

                  {frag[0].METHODS ? (
                    <ContentCont>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
                        </svg>
                      </div>
                      <div className="heading">
                        <h2>Methods</h2>
                        <p>{frag[0].METHODS}</p>
                      </div>
                    </ContentCont>
                  ) : null}

                  {frag[0].RESULTS ? (
                    <ContentCont>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
                        </svg>
                      </div>
                      <div className="heading">
                        <h2>Results</h2>
                        <p>{frag[0].RESULTS}</p>
                      </div>
                    </ContentCont>
                  ) : null}

                  {frag[0].CONCLUSIONS ? (
                    <ContentCont>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
                        </svg>
                      </div>
                      <div className="heading">
                        <h2>Conclusions</h2>
                        <p>{frag[0].CONCLUSIONS}</p>
                      </div>
                    </ContentCont>
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
        </Section>
      </Main>
    </>
  );
}

export default App;

const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  margin: 0 50px;
`;

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  backdrop-filter: blur(60px) saturate(180%) contrast(150%);
`;

// Main CONTENT

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

// Content Cont
const ContentCont = styled.div`
  display: flex;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.075);
  color: #fff;
  padding: 30px 20px;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;

  .icon {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    width: 40px;
    height: 40px;
    margin: 0 15px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heading {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      margin-bottom: 10px;
    }
  }

  svg {
    width: 50%;
  }

  p {
    width: 90%;
    font-size: large;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.5px;
    line-height: 20px;
  }

  :nth-child(1) {
    background-image: linear-gradient(135deg, #ff6fd84d 10%, #3813c24d 100%);
  }
`;
