function Parent() {
    // ############### 에러 케이스 ###############
    // return (
    // 	<div>Hello</div>
    // 	<div>GodDaeHee!</div>
    // );


    // ############# 정상 코드 #################
    // 01. <div></div> => 스타일 적용 시 코드를 div로 감쌌다는 부분 고려 필요
    // return ( 
    //     <div>
    //         <div>Hello</div>
    //         <div>GodDaeHee!</div>
    //     </div>
    // );

    // 02. <Fragment></Fragment> => div 태그보다 무거움
    // return (
    //     <Fragment>
    //         <div>Hello</div>
    //         <div>GodDaeHee!</div>
    //     </Fragment>
    // );

    // 03. <></>
    return (
        <>
            <div>Hello</div>
            <div>GodDaeHee!</div>
        </>
    );
}

export default Parent;
