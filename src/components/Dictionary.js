import React from "react";
import "../style.css";

export default function Dictionary({ lookup, data, error, loading }) {
  return (
    <div className="dictionary">
      <h3 style={{ padding: "10px" }}>Dictionary</h3>
      <div className="container">
        <div className="result" id="result">
          {/* {loading && <div>A moment please...</div>}
          {error && (
            <div>
              <h3 className="error">Couldn't Find The Word</h3>
            </div>
          )} */}
          {data ? (
            Object.keys(Object.keys(data)[0]).map((item, index) => (
              <>
                <div key={index}>
                  <div className="word">
                    <h3>{lookup}</h3>
                  </div>
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
              </>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
