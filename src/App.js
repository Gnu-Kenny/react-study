import { useState } from "react";
import "./App.css";

function App() {
  let [logo, setLogo] = useState("ReactBlog"); // <- 로고글자도 state로 넣으면 좋아? 쓸데없음, state는 변동사항이 필요할때를 위한 문법

  let [postTitles, setPostTitles] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  let postTitleList = postTitles.map((postTitle) => (
    <div className="list">
      <h4>{postTitle}</h4>
      <p>2월 17일 발행</p>
    </div>
  ));

  return (
    <div className="App">
      <div className="black-nav">
        {/* <h4 style={{ color: "white", fontSize: "16px" }}>{logo}</h4> */}
        <h4 style={{ color: "white", fontSize: "16px" }}>ReactBlog</h4>
      </div>
      <div>{postTitleList}</div>
    </div>
  );
}

export default App;
