import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function SetupDoubleClick({ set }) {
  const ref = useRef(null);
  const [Lookup, setLookup] = useState("");
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  function getSelectedText() {
    if (window.getSelection) return window.getSelection().toString();
    else if (document.getSelection) return document.getSelection();
    else if (document.selection) return document.selection.createRange().text;
    return "";
  }

  useEffect(() => {
    console.log("useEffect");
    document.addEventListener("mouseup", (e) => {
      setLookup(
        getSelectedText()
          .replace(/[\.\*\?;!()\+,\[:\]<>^_`\[\]{}~\\\/\"\'=]/g, " ")
          .replace(/\s+/g, " ")
      );
    });
  }, []);

  //  console.log(Lookup)

  useEffect(() => {
    document.addEventListener("mouseup", (e) => {
      ref.current.style.left = e.pageX - 30 + "px";
      ref.current.style.top = e.pageY - 35 + "px";
      ref.current.style.position = "absolute";
      ref.current.style.zIndex = "1000";
      ref.current.style.background = "rgba(255,255,255,0.7)";
      ref.current.style.color = "#000";
      ref.current.style.padding = "5px 10px";
      ref.current.style.borderRadius = "50px";
    });
  }, [Lookup]);

  const handleMouseUp = (e) => {
    e.stopPropagation();
    set(Lookup);
  };

  return Lookup.length !== 0 ? (
    <>
      <div ref={ref} id="definition_layer" onMouseUp={handleMouseUp}>
        {/* <img  alt="defination" src="/assets/definition-layer.jpg"  /> */}
        <a href="#">Defintion</a>
      </div>
    </>
  ) : null;
}

export default SetupDoubleClick;
