/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  // 글 제목 state
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  let [titleIdx, setTitleIdx] = useState(0);

  let [like, setLike] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  let [inputText, setInputText] = useState("");

  // 좋아요 클릭시 개수가 1씩 증가
  const countLike = (i) => {
    let copy = [...like];
    copy[i] += 1;
    setLike(copy);
  };

  // 게시글 추가
  const addPost = () => {
    let copyTitle = [...title];
    let copyLike = [...like];

    copyTitle.push(inputText);
    copyLike.push(0);

    setTitle(copyTitle);
    setLike(copyLike);
  };

  // 게시글 삭제
  const deletePost = (idx) => {
    let copyTitle = [...title];
    let copyLike = [...like];

    copyTitle = copyTitle.filter((v, i) => i != idx);
    copyLike = copyLike.filter((v, i) => i != idx);

    setTitle(copyTitle);
    setLike(copyLike);

    // 상세페이지 닫기
    if (titleIdx == idx && modal == true) setModal(false);
    if (copyTitle.length == 0) setModal(false);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "16px" }}>ReactBlog</h4>
      </div>

      {title.map((t, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal); // Modal 토글
                setTitleIdx(i);
              }}
            >
              {t}
              <span
                onClick={(e) => {
                  e.stopPropagation(); // 이벤트 버블링 방지
                  countLike(i);
                }}
              >
                {" "}
                👍🏻 {like[i]}{" "}
              </span>

              <button
                style={{ background: "white" }}
                onClick={(e) => {
                  e.stopPropagation(); // 이벤트 버블링 방지
                  deletePost(i);
                }}
              >
                {" "}
                ❌{" "}
              </button>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></input>
      <button onClick={() => addPost()}> 글 추가 </button>

      {modal == true ? (
        <Modal title={title} setTitle={setTitle} titleIdx={titleIdx} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.titleIdx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.title];
          copy[props.titleIdx] = "여자 코트 추천";
          props.setTitle(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
