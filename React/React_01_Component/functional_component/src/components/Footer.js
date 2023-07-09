import React from "react";

const Footer = (props) => { // es6 화살표 함수
    return (
        <div>
            <header>
                <h1>푸터입니다.</h1>
            </header>
        </div>
    );
}

// function Footer(props) {
//     return (
//         <div>
//             <header>
//                 <h1>푸터입니다.</h1>
//             </header>
//         </div>
//     );
// }

export default Footer;  //다른 JS파일에서 불러올 수 있도록 내보내주기