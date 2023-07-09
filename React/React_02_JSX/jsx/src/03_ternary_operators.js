const Ternary = () => {

    // 방법 01. 외부에서 사용
    // let desc = '';
    // const name = "Yun Jisang";
    // if (name === 'Yun Jisang') {
    //     desc = <div>윤지상입니다.</div>;
    // } else {
    //     desc = <div>비회원 입니다.</div>;
    // }
    // return (
    //     <>
    //         {desc}
    //     </>
    // );

    // 방법 02. 내부에서 사용
    // const name = "Yun Jisang";
    // return (
    //     <>
    //         <div>
    //             {name === 'Yun Jisang' ? (
    //                 <div>윤지상입니다.</div>
    //             ) : (
    //                 <div>비회원 입니다.</div>
    //             )}
    //         </div>
    //     </>
    // );

    // 방법 03. AND 연산자 (&&) 사용 
    // const loginYn = 'Y';
    // return (
    //     <>
    //         <div>
    //             {/* 조건이 만족하지 않을 경우 아무것도 렌더되지 않는다. */}
    //             {loginYn === 'Y' && <div>윤지상입니다.</div>}
    //         </div>
    //     </>
    // );

    // 방법 04. 즉시실행함수 사용
    // const loginYn = 'Y';
    // return (
    //     <>
    //         {
    //             (() => {
    //                 if (loginYn === "Y") {
    //                     return (<div>윤지상입니다.</div>);
    //                 } else {
    //                     return (<div>비회원 입니다.</div>);
    //                 }
    //             })()
    //         }
    //     </>
    // );

}

export default Ternary;