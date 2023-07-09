export const camelCaseStyle = () => {
    const style = { // 스타일 적용할 때도 객체 형태로
        backgroundColor: 'green', // background-color => backgroundColor 
        fontSize: '12px' // font-size => fontSize
    }
    return (
        <div style={style}>Hello World!</div>
    );
}

export const camelCaseClass = () => {
    return (
        <div className="hello">Hello World!</div> // class 대신 className 사용
    )
}