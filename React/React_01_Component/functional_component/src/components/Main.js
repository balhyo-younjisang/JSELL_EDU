import React from "react";

const Main = (props) => { // es6 화살표 함수
    return (
        <div>
            <header>
                <h1>메인입니다.</h1>
            </header>
        </div>
    );
}

// function Main(props) {
//     return (
//         <div>
//             <header>
//                 <h1>메인입니다.</h1>
//             </header>
//         </div>
//     );
// }

export default Main;  //다른 JS파일에서 불러올 수 있도록 내보내주기