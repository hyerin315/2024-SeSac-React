import './App.css'

//jsx : Java script XML
// 1. jsx에서는 Dom을 ""(쌍따옴표)로 묶지 않음 (직접 태그를 쓰거나 변수로 받아서 리턴해도 됨)
// 2. 단일 요소만 return해야함 

// 1.
// const elem = <h1>Hello, World</h1>
// function App() {
//   return elem;
// }

// export default App

// 2. 
// const elem = <> {/* 단일 요소 리턴을 위해 최상단에 <></> 빈태그 사용 */}
//   <h1>Hello, World</h1>
//   <h2>React 18</h2>
// </>
// function App() {

//   return elem;
// }

// export default App


// 3. js, jsx 확장자는 생략 가능
// 4. 모든 요소는 반드시 종료 태그를 갖고 있어야함
// 5. undefined, null, boolean 값은 화면에 표시되지 않음 (String으로 변환해야함)
import ChildComponent from './components/ChildComponent'
import FragmentComp from './FragmentComp'

const name = 'Jimin';
const age = 28;
const array = [10, 20];
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;
const makeDOM = () => { // 함수 (맨 첫글자 소문자)
  return (
    <div>
      <h3>MakeDom</h3>
      <div>Hello, World</div>
    </div>
  );
}
const MakeDOM = () => { //makeDom : 태그를 리턴하는 컴포넌트 (맨 첫글자 대문자)
  return (
    <div >
      <h3>MakeDom</h3>
      <div>Hello, World</div>
    </div>
  );
}

function App() { // App도 컴포넌트
  return ( // return 할 때 상위요소는 무조건 하나여야함
    <div>
      <h1>Hello, World 5</h1>
      <div>
        {/* 6. jsx에서 값을 표현식으로 표현하려면 {}를 사용하여야함 (${}로 쓰지 않음)*/}
        Name: {name} <br />
        Age: {age} <br />
        Array: {array[0]} / {array[1]} / {array[2]} <br /> {/* array[2] : 값이 없으므로 출력되지 않음 (null, undefined, true/false는 출력되지 않음) */}
        onAdd: {onAdd(4, 8)} <br />
        {makeDOM()} <br /> {/* makeDom() : 함수이기 때문에 컴포넌트처럼 사용하려면 컴포넌트, 문자열 처리해야함, 출력이 되는 이유는 단순히 JSX 요소로 반환한 것을 React가 렌더링 한 것 */}
        {MakeDOM()}
        <MakeDOM /> {/* 컴포넌트로 사용가능 */}
      </div>
      <hr />
      <ChildComponent />
      <FragmentComp></FragmentComp>
    </div>
  )
}
export default App