import React from "react";

const Header = (props) => { // es6 화살표 함수
    return (
        <div>
            <header>
                <h1>안녕하세요 헤더라고 합니다.</h1>
            </header>
        </div>
    );
}

// function Header(props) {
//     return (
//         <div>
//             <header>
//                 <h1>헤더입니다.</h1>
//             </header>
//         </div>
//     );
// }

export default Header;  //다른 JS파일에서 불러올 수 있도록 내보내주기