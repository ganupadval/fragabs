import React from "react";
import styled from "styled-components";

const Content = (props) => {
  return (
    <ContentCont>
      <div className="icon">
        {props.icon ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        )}
      </div>
      <div className="heading">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </ContentCont>
  );
};

export default Content;

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
`;
