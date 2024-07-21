import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  // document.querySelector('h4').innerHTML = post;
  // => html 상 h4를 태그를 찾아 innerHTML를 post로 변경한다.
  return (
    // js div 생성방법: React.createElement('div', null, 'Hello World')
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "16px" }}>블로그임</h4>
      </div>
      <h4 id={post}>{post}</h4>
    </div>
  );
}

export default App;
