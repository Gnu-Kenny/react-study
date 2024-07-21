/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  // 글 제목 state
  let [postInfoList, setPostInfoList] = useState([
    { idx: 0, title: "남자 코트 추천", like: 0 },
    { idx: 1, title: "강남 우동맛집", like: 0 },
    { idx: 2, title: "파이썬독학", like: 0 },
  ]);

  // 글 태그
  let postList = postInfoList.map((props) => (
    <div className="list" key={props.idx}>
      <h4>
        {props.title}
        <span
          onClick={() => {
            setPostInfoList(
              postInfoList.map((post) =>
                post.idx === props.idx // 변경 대상 글
                  ? post.like === 0
                    ? { ...post, like: 1 } // 현재 좋아요가 0 => 1
                    : { ...post, like: 0 } // 현재 좋아요가 1 => 0
                  : post
              )
            );
          }}
        >
          {" "}
          👍🏻 {props.like}{" "}
        </span>
        <button
          onClick={() => {
            setPostInfoList(
              postInfoList.map((post) =>
                post.idx === props.idx
                  ? { ...post, title: "여자 코트 추천" }
                  : post
              )
            );
          }}
        >
          눌러보셈
        </button>
      </h4>
      <p>2월 17일 발행</p>
    </div>
  ));

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "16px" }}>ReactBlog</h4>
      </div>
      <div>{postList}</div>
    </div>
  );
}

export default App;
