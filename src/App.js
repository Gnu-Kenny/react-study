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

  // 좋아요 클릭시 상태가 0,1로 변경되는 토글 함수
  const toggleLike = (idx) => {
    setPostInfoList(
      postInfoList.map((post) => {
        if (post.idx === idx) return { ...post, like: post.like === 0 ? 1 : 0 };
        else return post;
      })
    );
  };

  // 제목 변경 함수
  const changeTitle = (idx, newTitle) => {
    setPostInfoList(
      postInfoList.map((post) => {
        if (post.idx === idx) return { ...post, title: newTitle };
        else return post;
      })
    );
  };

  // 글 태그
  let postList = postInfoList.map((props) => (
    <div className="list" key={props.idx}>
      <h4>
        {props.title}{" "}
        <span
          onClick={() => {
            toggleLike(props.idx);
          }}
        >
          👍🏻 {props.like}{" "}
        </span>
        <button
          onClick={() => {
            changeTitle(props.idx, "여자 코트 추천");
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

      <button
        onClick={() => {
          const copy = [...postInfoList];
          copy.sort((a, b) => (a.title < b.title ? -1 : 1));
          console.log(copy);
          setPostInfoList(copy);
        }}
      >
        가나다순정렬
      </button>
      <div>{postList}</div>
    </div>
  );
}

export default App;
