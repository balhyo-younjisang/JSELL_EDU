import React from "react"; // 리액트를 구현할 수 있는 플러그인을 연결
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// JS파일에 외부 파일을 불러오는 것이기 때문에 "import" 키워드를 사용한다. 
// 같은 JS파일은 확장자를 사용하지 않는다. 


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
