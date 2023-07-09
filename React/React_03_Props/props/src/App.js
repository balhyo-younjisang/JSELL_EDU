import PropTypes from 'prop-types'  // 프로퍼티 타입을 지정해주기 위해 사용 한다.

function ParentComponent() {
  return <ChildComponent name='Yun jisang' age={17} />
} // 프로퍼티 타입을 지정해주기 위해 사용 한다.

function ChildComponent({ name, age }) {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <h2>I'm {age} years old.</h2>
    </>
  )
}

// 프로퍼티 타입 설정
ChildComponent.prototype = {
  name: PropTypes.string, // 문자열 이외의 프로퍼티 전달 시 경고 
  age: PropTypes.number.isRequired // iaRequired를 사용해 필수 프로퍼티로 설정
}

// 프로퍼티 기본값 설정
ChildComponent.defaultProps = {
  name: 'Yun sangji' // name 프로퍼티가 없는 경우 'Yun sangji' 라는 값을 사용하게 처리
}

export default ParentComponent;
