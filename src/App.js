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

  let [like, setLike] = useState([0, 0, 0]);

  let [cursor, setCursor] = useState([false, false, false]);

  let [modal, setModal] = useState(false);

  // 좋아요 클릭시 개수가 1씩 증가
  const sortPost = () => {
    const copy = [...title];
    copy.sort((a, b) => (a < b ? -1 : 1));
    setTitle(copy);
  };

  // 좋아요 클릭시 개수가 1씩 증가
  const countLike = (i) => {
    let copy = [...like];
    copy[i] += 1;
    setLike(copy);
  };

  const findModalIndex = () => {
    let id = 0;

    cursor.map((c, i) => {
      c == true ? (id = i) : null;
    });

    return id;
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "16px" }}>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          sortPost();
        }}
      >
        가나다순정렬
      </button>

      {title.map((t, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={(e) => {
                setModal(!modal);

                let copy = [...cursor];
                if (!modal == true) {
                  // 상세 페이지 열었을때
                  copy = copy.map((c, i) =>
                    i == e.target.id ? (c = true) : (c = false)
                  );
                } else {
                  copy.map(() => {
                    return false;
                  });
                }
                setCursor(copy);
              }}
              id={i}
            >
              {t}
              <span onClick={() => countLike(i)}> 👍🏻 {like[i]} </span>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal == true ? (
        <Modal title={title} setTitle={setTitle} idx={findModalIndex()} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.idx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.title];
          copy[props.idx] = "여자 코트 추천";
          props.setTitle(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
