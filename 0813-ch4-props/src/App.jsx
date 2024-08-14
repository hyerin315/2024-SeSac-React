//import Button from "./components/Button"
import Header from "./components/Header"
import Article from "./components/Article"
import Nav from "./components/Nav"
import MyComponent from "./components/MyComponent"
import YourComponent from "./components/YourComponent"

// function App() { //부모 
//   return (
//     <>
//       {/* title : 이름 / Red : 값 */}
//       <Button title={'Red'} color={'red'} />
//       <Button title={'Green'} color={'green'} />
//       <Button title={'Blue'} color={'blue'} />
//       <Button title={'Black'} />
//     </>
//   )
// }


// function App() { //부모 
//   const buttonProps = {
//     title: 'Red',
//     color: 'red'
//   }
//   return (
//     <>
//       {/* Spread Operator */}
//       <Button {...buttonProps} />
//       <Button title={'Green'} color={'green'} />
//       <Button title={'Blue'} color={'blue'} />
//       <Button title={'Black'}>
//         <div>자식 요소</div>
//       </Button>
//     </>
//   )
//}


// function App() { //부모 
//   // 배열 렌더링 X -> String, Num만 가능
//   // 그러므로 모두 펼쳐야함 
//   const topics = [
//     { id: 1, title: 'html5', body: 'html5 is ...' },
//     { id: 2, title: 'css3', body: 'css3 is ...' },
//     { id: 3, title: 'javascript', body: 'javascript is ...' }
//   ];
//   return (
//     <>
//       <Header title="React" />
//       <Nav topics={topics} />
//       <Article title="Welcome" body="Hello, Web" />
//     </>
//   )
// }


// function App() {
//   const array = [1, 2, 3]; // 부모가 자식에게 배열도 보낼 수 있음
//   const node = <h1>Node</h1>
//   const func = () => { console.log('메세지') }
//   const student = { // json 객체 : stringify, Parse
//     name: "Jimin",
//     age: 28
//   }

//   return (
//     <>
//       <MyComponent stringValue={'Hyerin'} booleanValue={1 == 1}
//         numberValue={28} arrayValue={array} nodeValue={node}
//         functionValue={func} objectValue={student} />
//     </>
//   )
// }


//필수 컴포넌트
function App() {
  const employee = { age: '30살' };
  return (
    <>
      <YourComponent objValue={employee} requiredStringValue='문자' />
    </>
  )
}


export default App


