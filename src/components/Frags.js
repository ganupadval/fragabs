import { useState, useEffect } from "react";
import "../App.css";
import Loading from "./Loading";
import SetupDoubleClick from "../pages/DoubleClick";
import Dictionary from "./Dictionary";

function Frags() {
  // DICTIONARY DATA

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  // const lookup = "view";
  const [lookup, setLookup] = useState("");
  const [data, setData] = useState(null);
  const [loadingDict, setLoadingDict] = useState(true);
  const [error, setError] = useState(null);

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

  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState("");
  const [frag, setFrag] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setFrag(null);

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
    <>
      <div className="main">
        <SetupDoubleClick set={set} />
        <div className="left">
          <div className="box">
            <h1>FragAbs</h1>
            <p>
              Tired of read large abstracts, we are here to shorten, just paste
              abstract.
            </p>

            <form action="">
              <label for="text">Enter Abstract</label>

              <textarea
                name="text"
                id="abstract"
                cols="60"
                rows="7"
                placeholder="Paste your abstract here"
                value={inputData}
                onChange={(event) => {
                  setInputData(event.target.value);
                }}
              ></textarea>

              <input type="submit" value="Extract" onClick={handleSubmit} />
            </form>
          </div>
          <Dictionary
            lookup={lookup}
            data={data}
            loading={loadingDict}
            error={error}
          />
        </div>

        <div className="right">
          <div className="bg-image">
            <h1>Extract</h1>
            <hr />

            {frag ? (
              <>
                {frag[0].BACKGROUND ? (
                  <>
                    <h3>Background</h3>
                    <ul id="background">
                      {frag[0].BACKGROUND.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}

                {frag[0].METHODS ? (
                  <>
                    <h3>Methods</h3>
                    <ul id="methods">
                      {frag[0].METHODS.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}

                {frag[0].RESULTS ? (
                  <>
                    <h3>Results</h3>
                    <ul id="results">
                      {frag[0].RESULTS.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}

                {frag[0].CONCLUSIONS ? (
                  <>
                    <h3>Conclusions</h3>
                    <ul id="conclusions">
                      {frag[0].CONCLUSIONS.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}
              </>
            ) : loading ? (
              <Loading />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Frags;
